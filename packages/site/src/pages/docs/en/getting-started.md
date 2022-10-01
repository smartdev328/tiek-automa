---
layout: ../../../docs/layouts/MainLayout.astro
title: Getting Started
description: Monitor creation
i18nReady: true
---
API Monitoring and testing 🚀  Global Locations   🚀  Round the clock

:::tip
Want to know eaxatly what API monitoring is? Follow the [API monioring guide](/docs/en/guides/api-monitoring/)!
:::

## Create your first monitor

We've made it as easy as possible to get started with Monitoring!

Firs things first, to monitor an API, a Url and the HTTP method (by default GET) is all needed to ge started!

In the monitors tab, click on "New monitor" button.

<div>
  <img src='/webapp/new-monitor-url.png'>
</div>

That takes you to the new monitor editing page.

**Circle 1** is a dropdown to choose the HTTP command.  All HTTP commands (GET, POST, PUT, DELETE, HEAD, OPTIONS) are supported.

**Circle 2** is an input box to enter the API URL.

**Circle 3** is where advanced custoization is available

Once the Url is chosen, the **Run now** button is enabled.

## Run now

  **Run now** is a wonderful feature enabling real time feedback during the monitor creation and later.  It essential runs the check immediately and presents the results.  And, this is very useful when first creating a monitor to make sure its configured correctly and debug as needed.

  Later, it is useful to know if the service is available right now and functioning correctly.

  The output is shown in a separate pane to allow for continuous iteration.

## Advanced customizations

### Body
Operations such as POST and PUT typically require a body field.  Many REST APIs typically use JSON formatted messages.  The body field has a syntax highlighter and editor to make this process smooth.

### Headers

HTTP headers are essential part of the HTTP message. This tab allows to add header fields to send along the request.  Cookies are headers too.  When adding a cookie, make sure the header is named as "set-cookie".


### Auth

Many APIs require users to authenticate themselves.  Auth tab allows for two standard ways of authentication a) Basic and b) Bearer.

**Basic** auth needs two inputs a) username and b) password

**Bearer** auth requires a single Token input.

###  Setup Script

Setup script is a place to provide JavaScript code that runs before making a monitoring request.

Please see [Setup Script Guide](/docs/en/setup-script-guide) for comprehensive documentation.

### Query Params
This tab allows to provide HTTP [query parameters](https://en.wikipedia.org/wiki/Query_string).

### Env Variables
In this tab. add environment variables.  The variables specified here have the highest priority and overrides other similarly named variables in associated Environments.


