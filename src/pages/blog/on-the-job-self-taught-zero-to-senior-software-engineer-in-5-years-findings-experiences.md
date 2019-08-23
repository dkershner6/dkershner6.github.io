---
templateKey: blog-post
title: >-
  On-the-job, Self-taught, Zero to Senior Software Engineer in 5 Years:
  Experiences & Findings
date: 2019-08-23T19:30:15.648Z
description: What I learned and was surrounded by at each stage of the process
featuredpost: true
featuredimage: /img/products-grid1.jpg
tags:
  - career
---
# Preface

I definitely don't know everything (in fact, each stage of the process continually assures me I know almost nothing), but I will present what I learn at each stage of the process as accurately as possible, even if I later learn that what I previously had "learned" to be incorrect.  I also didn't even know I was setting out on this journey and definitely did not take the most direct path.  My beginning scenario is as follows:

* Working as a Data Analyst / CFO for a startup incubation / consulting company with several partners.
* The 2 'CTO' partners quit.
* The 2 replacement 'CIO/CTO' partners also quit.
* Off we go.

# Year 1 (2014)

Outside consultants doing the programming, me project managing

* Our initial project is a large, complicated one that will serve as the backbone to the business.
* Outside consultants choose .Net as our back-end framework, C# as the language, and Azure as our cloud. I have no arguments to these choices as the previous "CTO" partners chose the same path.  They explain to me what .Net Core is and that it is coming soon, but I don't really understand.
  * Priority for learning: 
    * Azure Deployment Environments -  Need to know where our actual apps and databases live.
    * Business Intelligence Connectors - Need to get the data out so I can do my actual job.
* Placing a ton of trust in consultants is worrisome, but what they build seems to work, and the data itself seems relatively well-structured and clean (I can write SQL as a data analyst).
* Anything that needs to be accomplished in Azure is learning in a minimal, one-off manner, just to get the job done.
* Later in the year, I learn what version control is, and insist that it be used and adhered to (GitHub).

# Year 2 (2015)

Outside consultants doing the programming, me project managing

* The "Cloud Architect" style learning about Azure starts to bleed over into basic application design knowledge.  "Serverless" (Azure Functions) is the rage in terms of deployment.
  * I realize at this point we are using continuously running Console applications for our app, and in a single monolith, and on a VM.
  * I push for a transition to functions, and progress is slow for two reasons:
    * It was written as a monolith, to be a monolith.
    * Functions are in their infancy, and things like Pre-Compiled functions are new and in beta.
  * I start to look into the code itself to see if I can speed up the transition.
