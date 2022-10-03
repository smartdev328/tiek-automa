---
layout: ../../../docs/layouts/MainLayout.astro
title: Environments
description: Environments
i18nReady: true
---

Environments is all about reuse, DRY and accomplished by a collection of variables known as environment and templates.  Imagine for a collection of 10 APIs. the same authentication token is used for access.  Now if the token ever changes (and, it does), then all monitors need editing.  However, by having a single TOKEN variable, there's only one place to change it.  Its a win for all!

### Env enabled Fields 
These are fields where variables are taken into consideration.

* Url
* Headers
* Query Parameters
* Auth
* Body

### Templating

Templating is a way to change text by creating slots that are **later** filled by input object (variables).

Let's consider the following URL text 

```html
https://www.example.com/api/dog-breeds
```

We can introduce more flexibilty by making this a template.

```
{{baseUrl}}/api/dog-breeds
```

The **double curly braces** denote the slots (ex. ```{{BASE_URL}}```) and are filled in by the templating engine [Handlebars](https://handlebarsjs.com/).  To fill the slots, Handlebars is provided with a list of variables known as environment variables and a collection of which is named as Environment.  Please refer to Handlebars documentation for further reference of the template capabilities.  

### Global Environment
Typically, start using the global environment.  Variables declared here are available to all monitors without further configuration.


### Named Environment
Multiple named environments are supported.  If a variable is declared in multiple environments, the priority is given to the later declated environment. Local defined variables have the highest priority.


### Monitor - Env Variables Tab
Variables declared here has the highest priority.  This helps customize a particular monitor over other available env variables from global or other environments.

For example, if a TOKEN variable is declared at global level and but for that special monitor, you would like to override with another token, this is the place to do so.













