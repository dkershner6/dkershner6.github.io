---
templateKey: blog-post
title: 'Azure Functions Limits: How to Overcome'
date: 2019-02-28T01:02:00.000Z
description: >-
  Azure Functions do actually have limits, and here is how to overcome the ones
  you are most likely to hit
featuredpost: false
featuredimage: /img/gate.jpg
tags:
  - azure
  - azureFunctions
---
# Limits? In serverless?

If you travel to pages like the [scale and hosting](https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale#understanding-scaling-behaviors), you may, rightly, be under the impression that azure functions can scale pretty massively. (At time of writing) 200 instances? Multi-messages per instance? I can do 1000 things at once!

While this is technically true, you better be doing 1000 Hello World's, because Azure Functions running on the consumption model reside in the [Azure Sandbox](https://github.com/projectkudu/kudu/wiki/Azure-Web-App-sandbox#per-sandbox-per-appper-site-numerical-limits). You will note that the documentation here is much more hidden, but there are some [other bloggers](https://www.troyhunt.com/breaking-azure-functions-with-too-many-connections/) who have hit limits as well. The Azure Sandbox is where Free and Shared App Services run, and also consumption functions. Because of this grouping, the limits are smaller than you might think when reading Azure marketing jargon. This is not an Azure-specific issue, as AWS has similar limits (although a bit easier to find).

![Limits Table](/img/limitstable.jpg)

There are 5 limits, but really only 2 to worry about, as you are likely to hit them before others: Connections and Threads. The connections limit is in the process of being lifted to 600, and all of my apps appear to be operating with the higher limit, but you may still be experiencing the lower limit at time of writing. Before the connection limit change, I never hit the thread limit. After the change, I have never hit the connection limit, only threads.

# What Happens When a Limit is hit?

First off, the Azure functions host itself reserves some of the limit for itself. This makes sense so that the whole system doesn't go down, but you should realize that your actualy limit will be 250 connections or 400 threads.

![Thread Limit Hit](/img/threadslimit.jpg)

Ideally, the function host shuts down, it realizes what happened, and it boots back up in a few seconds. No harm done, and you probably didn't even notice unless you have a health monitor.

As you can see from my beatiful artwork, in practice, this happens some of the time, and the rest generates an outage that can last up to several hours, with no warning (unless you yourself create one). If you visit a function during this time, you will get the response "The function host is not running". If you visit the portal during this time, you will get the feared red box informing you Host Thresholds Exceeded: \[Threads]. Typically, you will need to restart to resolve this.

# How to Overcome

## Connection-Specific

There are some general design principles to follow when writing in C# that may not be altogether obvious from the way the interfaces are written. [Azure documentation itself](https://docs.microsoft.com/en-us/azure/azure-functions/manage-connections) actually has some great guidance here, and they go into lots of detail, but I will quickly touch on here:

* Static Clients: Create one static HttpClient (and Azure Storage Clients) on instance-load and use it for every call. This is not totally obvious, given the fact that HttpClient is disposable, so it is tempting to use it in a using statement. [DO NOT DO THIS](https://docs.microsoft.com/en-us/azure/architecture/antipatterns/improper-instantiation/).
* Pooled connections for Sql/Entity Framework: This is commonplace in the connection string, and is the default functionality, so it is much less common to run into issues.

## General Design Principles

Over the course of using consumption functions frequently over the past few years, here are some general design principles I follow to avoid problems, some more obvious than others:

* Fail your functions quickly: While it may be tempting to have a long timeout and allow the function to retry many times, I have generally found it better to just fail and have it retry the pattern later. This saves on cost, but also causes less resources to be in use at any given time.
* Where possible, use fast storage solutions: This is more of a general design principle, but I have solved the functions limits issues with a Redis cache or Blob storage as many times as I have with these other methods.
* CreateIfNotExists: This keyword should be familiar to anyone who has used the AzureStorage SDK. A lot of Azure's examples use this method very frequently as well as a failsafe, but be careful not to use it in a loop, especially an async one, as it creates another call to the storage account in each loop (it has no memory that it just called this a moment ago).
* Be careful of Queue functions: While convenient, and extremely powerful, nothing can bust through these limits like an Azure Storage or Service Bus Queue triggered function. The default behavior is to grab up to 32 messages at once for concurrent processing PER INSTANCE. This is great for getting a lot accomplished in a very short time, but not so great when you have 15 instances running and can only do 400 things at once (15 * 32 = 480). If you have something that controls how quickly the queue is loaded, you are probably fine with the default functionality. I do not recommend using the InitialVisibility to achieve this, however, as it tends to create more problems than it fixes (initial visibility of a week and such). More typically, you can [change the default behavior in the appropriate section of host.json](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-storage-queue#host-json) to something more manageable. In extreme cases, or in cases where you are up against an API request limit, use a timer function that runs frequently and pulls a set number of queue messages manually.
* Horizontally scale, in a different way: Do not be afraid to create a whole bunch of function apps. If they don't do anything, they are free, and setting them up is a fairly painless process using the resource explorer to set application settings using JSON. Do not be afraid to have a function app with only one function, separate the concerns down to a miniscule level, it is far better to have a nearly idle function app then to hit the limits. For queue or timer functions, make sure they are unique to a function app, as only one app will create a singleton lock on the queue or timer. For Http functions (API/Website), don't be afraid to split them up and use a traffic manager. Even with the additional cost, [you are still likely going to find it cheaper than using a different hosted option](/blog/azure-functions-consumption-vs-app-service-vs-kubernetes/).
* Segment Durable Functions into their own function app: These functions are particularly chatty with Azure Storage, and you want to keep them from clogging up your non-durable counterparts.

In general, Azure Functions are very scalable, once you have a few tools under your belt to help it actually have a smooth experience while scaling.

# Some Specific Examples

* [Serilog Gotchas](/blog/azure-functions-serilog-gotchas/)
