---
templateKey: blog-post
title: 'React JAMStack: Gatsby & Netlify CMS vs React-Snap & CRA'
date: 2019-08-20T16:46:07.871Z
description: >-
  A comparison based on the experience of building the same site in both
  frameworks
featuredpost: false
featuredimage: /img/products-grid2.jpg
tags:
  - react
---
# Why?

I had an idea for a potential client that would involve a static site with lots of various types of content.  The main sticking point would be that the platform would need to be polished and reliable enough on its own for the client to make changes with no developer present.  Since this site is essentially a very simple example/prototype of that, I decided to rebuild it using Gatsby & Netlify CMS.  It was already built using React-Snap & Create-React-App.

# Initial Setup

While Gatsby and Netlify CMS provide one-click templates that are at easy to setup as something as complicated as a Gatsby site could be, there is nothing simpler than Create-React-App.  In addition, React-Snap lives up to its Zero-Configuration promise, and worked right out of the box.

Now, there is something to be said for what you receive once you have Gatsby set up, as the result is far greater in terms of functionality.  You receive things like lazy image loading, automatic markdown parsing, and with Netlify CMS, an admin panel to administer and change content.  In addition, there are many plugins to easily setup items like sitemap generation and Google Analytics integration.  I would suggest that some to all of these features are desired on all but the simplest of sites, so unless you are designing a one page brochure, they are likely worth the additional configuration needs.

**Verdict: Gatsby**

# Routing

I believe that both solutions use react router under the hood, but the way you will interact with them could not be more different.

For React-Snap, you essentially just are having a Javascript-V8 capable crawler roll over your site and follow every internal link it finds until it has built every page.  Personally, I found this approach to be pretty ingenious.  It does, however, mean that you need to link to every page, or else it will not be generated.  This is unlikely to be a huge impediment, but it is worth knowing.

For Gatsby, your routing is much more declarative and also intensive.  You have essentially two choices:

1. Create a folder/file in the 'pages' folder that correctly references the data you want to display.
2. Alter your gatsby-node.js file to 'createPage' based on some sort of dataset (usually markdown files, but lots of possiblities).

That second one is the approach of choice for a data set of any size at all, of course.  **It is worth noting that this particular file is used by Node.JS, and so therefore comes with the limitations/abilities of Node as well.**  This means that you cannot do things like 'import' (require instead, _at time of writing_), but also means that any files you require can also not use 'import' (ES6 modules instead of CommonJS).  This may seem like a small quibble, but if you are attempting to use any dataset in any files that are written in modern javascript, you will run into this problem.  I was able to get around this issue using [the solution found on Gatsby's GitHub](https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-449741977).

You can also query in information and generate pages that way, so long as it is able to be done in GraphQL.  This is a bit limiting, but you could always set up an API in front of a REST API to handle this.

**Verdict: React-Snap**

# Typescript

This section obviously may or may not apply to you, but I like to write larger projects in Typescript, so I figured I would weigh in here.

React-Snap integrates TypeScript the same way any React project does.  It is very easy and saves you time.

Gatsby has the ability to use TypeScript as well, and has a plugin to handle the compilation to JS.  I did not run into many issues, but wanted to list the ones I did encounter here:

* The TypeScript plugin will not actually stop a build for a type error.  You can see this as a good or a bad thing.  You can also create part of the build process that does, but it is not automatic.
* The actual GraphQL query results use PropTypes by default.  It may or may not be possible to convert them, I did not try. _(Update 2: PropTypes were surprisingly easy to replace with interfaces.)_
  * Unit testing in Gatsby is fairly difficult as is due to the need to mock GraphQL queries for pretty much any component.  Typescript makes this significantly more difficult due to PropTypes being used.  I was unable to get a GraphQL involved unit test to correctly run after several hours. _(Update: I was able to mock GraphQL more directly, kind of like_ [_this post_](https://medium.com/@sgpropguide/setting-up-unit-test-with-gatsbyjs-c56ada703417)_.)_

I am a very firm believer in TypeScript, but at the end of this process, I am not sure it is worth trying to integrate into Gatsby, and likely cost me more time than it saved (first project of any size I can say that about).

**Verdict: React-Snap**

# Content Creation

For React-Snap, you can either manually create content, which is what I was doing, or integrate some outside service manually.

For Gatsby, Netlify CMS can be integrated out of the box.  This is a massive boon for content creation, and the configuration process for Netlify CMS with GitHub was very painless.  They have obviously thought through the developer experience.

For the editorial process inside Netlify CMS, I found the overall experience to be very well designed.  The UI is pleasant and fairly easy to work with.  **However, I did not find the experience to live up to my hopes of being able to hand off the tool to a company with no developers on staff.**  This was mostly due to small quibbles:

* If you create a piece of content that contains a boolean, and you want that boolean to be false, you must click the boolean to be true, then back to false, otherwise it throws an error.
* There is no way to sort the list of content in a given section.  _This one is likely a limitation of using Git to hold content, but worth knowing, and does limit the amount of content one could have._

All in all though, the experience was quite lovely and intuitive, including the editorial workflow (which you should definitely turn on).

**Verdict: Gatsby (NetlifyCMS)**

# Overall

I believe that for projects of any real size, that the heft of Gatsby is likely worth the additional effort that is required, but conversely, it struggles with TypeScript integration and unit testing, two common requirements of larger projects.  That being said, React-Snap was truly seamless and gave me a much clearer and simple experience, and I wouldn't hesitate to use it in a small project.

NetlifyCMS, which could theoretically be used with either but is much easier to integrate into Gatsby, is a great experience.  With a few additional capabilities, like sorting the pieces of content, could be a full replacement for something like WordPress.
