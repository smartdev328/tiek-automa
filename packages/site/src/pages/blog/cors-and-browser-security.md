---
layout: "../../blog/layouts/BlogPost.astro"
title: "CORS and Browser Security"
description: "CORS and Browser Security"
publishDate: "11 Jul 2022"
heroImage:
  src: "https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  alt: "Origins"
  class: "w-[25vw]"
followMe:
  username: "proautomahq"
  href: "https://twitter.com/proautomahq"
halfTheMeaning: 21
setup: |
  import LikeButton from "../../blog/components/LikeButton"
  import FollowMe from "../../blog/components/FollowMe.astro"
---

Developers are surprised when a well-meaning browser JavaScript call to get a web resource fails.  This is often due to the browser's Same-Origin security policy restricting calls between different origins. **Cross-Origin Resource Sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing))** is developed as an escape hatch to loosen such restrictions for cooperating domains.

### Origin and [Same-Origin Policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

Origin is a combination of **domain, scheme, and port**. For example, https://www.example.com, http://www.example.com, and https://app.example.com, https://www.example.com:4443 are all different origins.  

Same-Origin policy disallows calls between different origins. The idea is to protect against a rogue domain accessing a target domain to steal data.  We could ask why this is so - since the same web resource can be accessed by an outside tool such as [Curl](https://curl.se/) without subjecting to this policy.  So, what are we protecting against? 

Main difference between a browser and Curl tools is the cookies and other headers a browser sends along with every call. This is useful behavior to enable friendly features such as opening the same logged-in website in a different tab as an example.  

However, the same behavior is dangerous when accessing a different origin. It allows a scrupulous website making calls and accessing a site user already logged in. We don't want a random site making calls into our bank site we signed on in another tab.  It's a big no-no.

### Restrictive at times

However, there are legitimate reasons to relax such criteria.  And, CORS allows for this with a probing (preflight) request to the web resource and watching for certain headers (Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers) that determine what the browser is allowed to do.  This way the target web resource instructs the browser to fine tune the Same-Origin policy.

Browsers additionally restrict sending credential cookies as an extra safety measure if Access-Control-Allow-Origin specifies a ‘*’ which means any origin.  

### Real-world implications for developers

Let’s say, during development, you have the backend running at http://localhost:8080 and the front-end at http://localhost:3000. As they are different origins, the frontend cannot make calls to the backend.

To fix this, the backend needs to implement CORS support for preflight and set appropriate Access-Control-* headers.  There are many [libraries](https://expressjs.com/en/resources/middleware/cors.html) that automate this process in a declarative way.  

In production, strive to put the frontend and backend on the same origin for speed (no need for preflight) and safety.

### Implications for Web Applications

SaaS web applications such as [ProAutoma](https://www.proautoma.com) allows one to explore APIs and websites to monitor and notify in case of failures. Ideally, the app could directly access 3rd party APIs and websites from the Browser using JS HTTP calls.  However, this fails to work if CORS is not setup.

### Takeaway

To circumvent browser restrictions, ProAutoma uses its own secure Proxy Server to execute API and Website monitoring calls on behalf of the user.  And, none of the browser cookies or headers are shared with the proxy server which makes it stateless and well-controlled. However, if your needs are between mutually trusting sites, definitely, consider to use one of Access-Control-* headers and CORS to grant access.
