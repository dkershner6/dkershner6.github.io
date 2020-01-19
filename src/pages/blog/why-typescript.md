---
templateKey: blog-post
title: Why TypeScript?
date: 2020-01-19T20:31:45.757Z
description: An exploration into why someone would bother to use TypeScript over JavaScript
featuredpost: false
featuredimage: /img/classic-car-1209334_1280.jpg
tags:
  - node
  - react
---
# Downsides to Typescript

Being the Devil's advocate always seems like a good way to start.

## I have to write more code to achieve the same result (Lower Productivity)

This is probably the #1 reason people give for arguing against TypeScript, and the argument is not without legitimacy.  When compared to cleanly written JavaScript, TypeScript does require more code.   Some of the code can be generated, or is fairly easy to write, but the point holds true.  Instead of arguing, let's just look at some ways we can attack this issue.

### VSCode Extensions

You and I are unlikely to be the first developer to encounter something repetitive in programming, and, being the helpful bunch we are, chances are even good someone has designed a tool to help.  `Json2TS` is a great example of this.  Copy JSON from anywhere, paste into VSCode with a special key combination as TypeScript interfaces.

### VSCode itself (Intellisense)

Design yourself an interface, abstract class, and a class that inherits/extends both, then put your cursor on the class and voila, auto implemented fields and methods.

![Implement TypeScript Interface](/img/implement_interface.jpg "Implement TypeScript Interface")

VSCode has many such shortcuts (including code snippets, try typing `ctor` inside a class), and can provide more help due to TypeScript providing more context as to what is likely needing to occur.

Other editors obviously vary in their capabilities, and I do recognize that VSCode is the leader here.

### Types save future time

Lastly, I will just touch on the prevention vs triage situation: If you define things in advance, you are more likely to be able to leverage that work as you build things around it.  In short, every time you build and reference an object you have defined with a class or interface, you save having to remember exactly what it was named and what type of data you are dealing with.  Types, in my experience, in all but the simplest of projects, save more time than they consume.

## The code must compile

This downside is basically Node or Vanilla JS (does anyone still use JQuery?) only, as React and others also need to compile, but it is still worth touching on.  The main issues this causes:

* Tests take longer to run.
  * This is 100% true, and I have not found a solution that solves this.  The one upside is that with TypeScript I generally get less failing tests (and therefore less rounds of running tests).
* Additional configuration is necessary (tsconfig.json) / Larger package size for things like lambda, functions, or NPM.
  * This is also completely valid.  The configuration is fairly simple, especially when compared to something like webpack and/or babel, but is still present.
  * This is likely the #1 sticking point for most companies as it generally requires help from DevOps to overcome (besides NPM, where you can just use `files`).

## Additional probability of circular dependencies

This is actually not a common complaint, but one I encounter frequently enough to mention it here.  This also exists in JavaScript, but in TypeScript you tend to be importing and exporting more items due to interfaces, and this can crop up if you place too many items in a single file (I encounter this frequently when using the Factory pattern, as that requires building an object while relying on another object).

If you encounter this error, it will be the following, very clear, JavaScript TypeErrors:

```
TypeError: Class extends value undefined is not a constructor or null.
```

Or

```
TypeError: Object prototype may only be an Object or null: undefined
```

Clear as mud, eh?

Here is the simplest possible example I can create to demonstrate this (including not typing data! The Horror!).  It seems obvious with this simple of an example, but hopefully the implications in a larger application are apparent.

```
// venue.ts
import { VenueViews } from "./venue_views";
export class Venue {
  setDataHere;

  constructor(data) {
    this.setDataHere = data;
  }

  main() {
    var View = new VenueViews(this.setDataHere);
  }
}
```

```
// venue_views.ts
import { Venue } from "./venue";

export class VenueViews extends Venue {
  constructor(data) {
    super(data);
  }
}
```

# Upsides to TypeScript

Alright, enough with the issues, let's talk about how TypeScript's Pros **vastly** outweigh its Cons.

## Understandability

Yes, that's a real word, and it's also the single most important attribute of any code written for all but the most temporary.  I will let a few legendary authors help me convey this message better than I ever would.

> "Dynamic, highly parameterized software is harder to understand than more static software."
>
> _Gang of Four, Design Patterns: Elements of Reusable Object-Oriented Software_
>
> “Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...\[Therefore,] making it easy to read makes it easier to write.”
>
> _Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship_
>
> “Whenever I have to think to understand what the code is doing, I ask myself if I can refactor the code to make that understanding more immediately apparent.”
>
> _Martin Fowler, Refactoring: Improving the Design of Existing Code_

TypeScript allows you to communicate significantly more information to the next developer who reads your code (which might be a confused, future you).  This information will be used to spend less time reading and more time writing, increasing overall productivity.  This self-documentation attribute of TypeScript can also be used to more easily generate other documentation, which can increase the likelihood of it being updated.  That being said...

> “Truth can only be found in one place: the code.”
>
> _Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship_

## Refactoring simplicity

The benefit of TypeScript's additional type information is no more readily apparent than when refactoring.  TypeScript enables you to easily rename, move, or change data shapes without fear that you have missed one (or more) application(s) of the interface.  This is not a replacement for testing, but it does speed the process along significantly.

## Runtime errors can become compile time errors

> This is not a replacement for testing
>
> _Myself, 3 seconds ago_

Testing is still crucial, but they say an average of 15% of runtime errors would be caught by static typing.  That's an additional 15% of protection from your users becoming guinea pigs.

# Summary

Pros:

* Understandability AKA the most important aspect of programming.
* Refactoring speed.
* Potentially less runtime errors.

Cons:

* Compile step exists.
* Configuration exists.
* Circular dependencies may crop up.

All in all, I hope it is obvious that the pros vastly outweigh the cons in nearly every circumstance of Software Development.
