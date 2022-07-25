---
layout: ../../../docs/layouts/MainLayout.astro
title: Environments
description: Environments
i18nReady: true
---

Environments is all about reuse and less typing and accomplished by a collection of variables known as environment and templates.

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

The double curly braces denote the slots and are filled in by the templating engine [Handlebars](https://handlebarsjs.com/).  To fill the slots, Handlebars is provided with a list of variables known as environment variables and a collection of which is named as Environment.  Please refer to Handlebars documentation for further reference of the template capabilities.  

In the example above, **baseUrl** is the environment variable. Envrionments now give the ability to have two different environments **Develop** and **Release**.  When selected individually, the Url is changed for all monitors at once.

Multiple named environments are supported.  If a variable is declared in multiple environments, the priority is given to the later declated environment. Local defined variables have the highest priority.











