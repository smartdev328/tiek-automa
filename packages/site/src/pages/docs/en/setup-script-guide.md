---
layout: ../../../docs/layouts/MainLayout.astro
title: Advanced Scripting 
description: Scripting for advanced configuration
i18nReady: true
---
API Monitoring and testing 🚀  Global Locations   🚀  Round the clock

## Introduction

A monitor can be setup in seconds with our easy to use editor. All that's really needed is a Url to get started!  However, there are complex situations where the input needed to setup a monitor is simply not available.  

Here are few scenarios.

* An auth token is needed, but, its only obtained by calling another API.
* A random header is needed to distinguish calls on the backend
* A query parameter changes based on the location of the check

While these are atypical scenarios, a complex API do run into these. Setup Script enables this!

Monitor editor provides for providing a script in Advanced / Setup Script tab.

## Script

Script is a JavaScript program that uses and changes the given context object is some fashion. While this is as any JS program, its run in a sanboxed environment for security.  

Script is run in a sandboxed NodeJS environment and has limited access to the modules available for loading.  Any script has only 10seconds for finishing its work.  Scripts allow top level ***async/await*** keywords and are essential for asynchronous code.

Here are allowed NodeJS modules.

* axios, uuid, crypto, url, buffer, assert, tls, zlib, util, path, fs 


Every script by default is given a Context object as **ctx** global.

Each ctx has a **request** to represent the incoming monitor and **env** object for all applicable environment variables.

## Conext and Request objects

Request object contains information about the current monitor request such as url, headers and query parameters.  And, the script is allowed to transfor these as needed.  Here is request types.

```js
interface Request {
  url: string
  headers: Record<string, string>
  queryParams: Record<string, string>
}

interface Context {
  request: Request
  env: Record<string, string>
}
```

## Example snippets to get you started

### Call extenral API to get data

```js
const axios = require('axios');

const { data } = await axios.get('https://httpbin.org/uuid');
ctx.request.headers['Authorization'] = `Bearer ${data.uuid}`
```

### Set headers
```js
ctx.request.headers['x-my-header'] = 'my-headers'
ctx.request.headers['x-timestamp'] = new Date()
```

### Set a header to a random string
```js
const crypto = require("crypto");
ctx.request.headers['C'] = crypto.randomBytes(20).toString('hex');
```

### Set environment variables
```js
ctx.env['CURRENT_TIME'] = new Date()
ctx.request.headers['x-timestamp'] = 'TS - {{CURRENT_TIME}}'

```

### Set query/search parameter
```js
const uuid = require('uuid');
ctx.request.headers['x-uuid'] = uuid.v4()
```

### Set Url
```js
const uuid = require('uuid');
ctx.request.url = ctx.request.url + '/' + uuid.v4()
```