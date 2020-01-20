---
templateKey: blog-post
title: 'Review: Clean Code by Robert Martin'
date: 2019-08-26T20:03:59.133Z
description: A Handbook of Agile Software Craftsmanship
featuredpost: false
featuredimage: /img/sky-space-milky-way-stars-110854.jpg
tags:
  - learning
---
![Clean Code by Robert Martin](/img/cleancode.jpg "Clean Code by Robert Martin")

This book is broken down into 3 very, very distinct parts (not just my opinion, this is laid out in the foreword).  The first part is a detailed description of each of the concepts and the reasons why you should use them.  The second part is a very deep dive into actual code and how you get from point A to point Clean.  The third part is a wrap up tying the two other parts together (much shorter).

Of note, all code in the book is written in Java.  While this is obviously more helpful to developers with Java experience, I will be writing as a developer with NO Java experience.

# Part 1: The Concepts

The purpose of this book is to encourage people to write code that is easily readable not only by machines, but humans as well.  The opinions of the the writer seem very well-founded, and many seem like common sense, but then when you go back and look at code you have written, you realize you are likely guilty anyway.  I won't comment on all of the concepts, but just the ones I have a stronger opinion on.

In general, one thing I really liked was Robert's ability to look at other very experienced programmers and comment on his opinion of how they code and what their principles are.  He is often very complimentary, but its a helpful way to look at tradeoffs.

## Biggest Agreement: Naming

This principles encourages developers to name variables and functions after what they are or do, instead of something unhelpful or arbitrary.  I mention this principle because I believe it is likely the most impactful in terms of readability.  I have read over other developer code that uses many abbreviations or single letters as names and it makes your head hurt (like looking at minified JavaScript).

## Biggest Disagreement: Polymorphism over Conditionals

(My definition): Using object inheritence to change or cast an object to one of a series of subobjects instead of using a property of the object in a conditional to choose course of action.  OK, that wasn't very helpful.

Instead of:

```
if (theObject.type === 'fluid) {  
  // do something fluid
} else {  
  // do something rigid
}
```

Do:

```
class FluidObject extends TheObject {  
  // Fluid method
}

class RigidObject extends TheObject {  
  // Rigid method
}
```

The reasons he gives are very sound: 

* He has a general hatred of conditionals and switch statements, as he finds them confusing to read, and the possibility of duplication of code is high since you will likely need to do the conditional multiple times.
* Object inheritance gives you a greater ability to decouple using interfaces (and then you can swap out the interface as needed).

My reasons for disagreeing:

* I don't find conditionals to be difficult to read (might just be the way my brain works), but "if this then that" seems all too logical (unlike morphing/casting objects).
* When you are using messages (extremely common in microservice/serverless designs, let's say using serialized JSON) it becomes significantly more difficult to convey the "type".  
  * If you have type as a property, it doesn't matter if you serialize that object to JSON, when you deserialize, it will be exactly the same as before.
  * If you have a sub-object or sub-class, you would need to somehow convey the type before serializing so that the piece of software on the other side would know to "cast" it back to the same sub-class.  You could have the subclass auto-assign itself a type, but then you are duplicating a different set of code and the conditional is back, it's just used for casting.

In the end, I see merit in both, but I'd rather my decoupling was built into the application design rather than the code as it provides true modularity.

# Part 2: Deep Dive into Code

As someone who is used to video learning, beautiful and efficient IDE syntax highlighting, and no Java coding experience, this section was an inefficient uphill battle.  There are giant, multi-page spans of code to look over, written in pure black and white.  The translation from Java to my well-known C# wasn't too terrible, but combined with a lack of all color and having to flip pages back and forth made the task very arduous.

I searched online for someone who had copied the code into a repository so I could at least look at it how I am accustomed, but have at this point been unable to find anything.  I will likely create this myself as I get further into this, as the act of writing it will likely help comprehend, but this will be very time-consuming.

More updates coming...
