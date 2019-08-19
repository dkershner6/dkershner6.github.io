---
templateKey: blog-post
title: 'Azure Functions: Serilog Gotchas'
date: 2019-07-01T23:59:00.000Z
description: >-
  Serilog appears easy to use in Azure Functions, but apperances can be
  deceiving
featuredpost: false
featuredimage: /img/logs.jpg
tags:
  - azure
  - azureFunctions
---
### Some Background

Azure Functions have great struggles when it comes to clients not being created statically. They note this in their docs very well, but on occasion you can do this in unknown fashion. The result, when it occurs, is very high connection or thread counts, which can lead to shutdowns as you approach [the limits](/blog/azure-functions-limits-how-to-overcome).

### Enter Serilog

Serilog is very convenient, and one of the easiest ways to implement custom logging in Azure Functions. The recommended approaches to instantiate Serilog are typically:

- A global static variable - If you do this, you cannot use Azure Function's ILogger, and if you instantiate one per function, you will also hit limits.
- A (using) wrapper - If you do this, you will hit limits eventually (it takes a lot of concurrency).

[Evan Dontje encountered the the first bullet point](https://evandontje.com/2018/10/09/high-thread-count-in-azure-functions/), and you can read about his experience there. I thought I was being savvy by doing it in a using clause, but after weeks of talks with Azure Support, I found out that I was just as bad off as he was.

### Solution

In order to solve this issue, I used a combination of the two strategies, with a null check.

Above the function:

```csharp
private static Logger Log = null;
```

Inside the function:

```csharp
if (Log == null)
{
  Log = CreateYourLoggerHere.Create();
}
```

Simple, a little hacky, but it works. Don't spend the same time with Azure Support like I did.
