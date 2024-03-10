---
layout: ../../../docs/layouts/MainLayout.astro
title: Intoduction to Monitoring
description: Introduction to monitoring and testing
i18nReady: true
---

**"Let us save you some time so you can use it for far better things"**

## Monitoring and Testing

Modern Internet is one of two things - a website or web service. Web Services are APIs that facilitate information exchange using well-structured message formats such as JSON, XML etc. APIs are the essential part of the new IT infrastructure that makes software, e-commerce, finance, and services possible.

It’s not uncommon to see software products build upon many APIs both internally for business logic and from different vendors for payments, authentication, services, analytics, adverts, etc. IT engineering teams or operations teams have the inherent need to monitor and know the status and health of their APIs and sites.

### Developers and Ops Teams

Today, engineering teams and DevOps teams are responsible for a myriad of APIs for both internal and external consumption and they need a simple, quick way to build and manage them.

This is where AutomaWorld comes in and provides a quick setup and monitoring service that runs 24x7 from multiple data centers around the globe.

A simple monitor with a URL can be set up in a few seconds. And, a complex setup using authentication, custom headers, and test criteria would take a few minutes.

Once set up, AutomaWorld monitors the APIs from different locations and collects detailed statistics about the uptime, latencies, etc.

Additionally, SSL certificates are validated for errors and expiration.

### Developer/Ops Tooling

AutomaWorld provides easy-to-use tools to monitor websites and APIs. Our simple to use web application helps users configure and explore APIs quickly. Configured monitors run at a chosen frequency in global data centers at locations such as Frankfurt, Singapore, and N. Virginia.

### Monitor Setup

A monitor can be set up with a set of test criteria. When a test fails, notifications are sent out to your favorite channel. Out of the box, Email, Slack, Discord, and WebHooks are supported.

Monitor results can be further analyzed using an intuitive analytics dashboard. Uptime and Connection timing breakdown along with total time and latency is captured along with aggregate statistics. TLS certification information is also available in order to proactively fix any issues with expiring certificates.

By choosing AutomaWorld, your teams are empowered with API exploration during development and continuous monitoring and behavior analysis during operations.

## API exploration

An intuitive and simple to use UI is provided to explore an API interactively. Simply fill in the URL and other fields and hit the “Run Now” button to see the results. Add test criteria to denote conditions for success.

### Monitor Creation

Once you are satisfied with the “Run Now” results, select a frequency to run the monitor. Select to run as frequently as one minute and up. Then, select Locations to run the monitors from. There are many data centers around the globe and choose ones closer to your customers. Finally, choose the Notification settings regarding channels such as Email, Slack, Webhooks, etc to inform you of the monitor status.

### Dashboard

The dashboard provides a bird's eye view of all the monitors and their status. There is a lot of info packed into a card format. From here, the last few results are directly accessible. High-level analytics show quickly the uptime and latency over the last 24 hours. Selecting one will take you to a detailed summary page with access to all the result history.

### Monitor Detail View

Provides a high-level overview of the monitor uptime and latencies for various time periods. All the results are shown in tabular form and filterable by Location and Status. Select each result to see the detailed result.

### Environments

Environments are a way of sharing variables across related APIs as part of a collection. The monitor setup fields could specify a variable instead of hard-coding the value. Variables are exposed using Handlebars syntax. A token is TOKEN as a variable and uses it as `{{TOKEN}}` in any of the input fields and here as part of Auth headers.

### Status Pages

Status pages expose the status of APIs as a public page. Since they are public, they are easy to share with your team and customers. The status information page is customized to only show publicly sharable monitors.
