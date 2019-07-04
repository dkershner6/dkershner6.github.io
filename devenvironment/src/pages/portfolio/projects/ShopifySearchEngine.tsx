import Project from "../../../classes/Project";
import { createAttributeFromTechnology } from "../../../classes/ProjectAttribute";

const shopifySearchEngineProject: Project = {
  id: "shopifySearchEngine",
  name: "Shopify Search Engine",
  imageSrc: "/images/helicopter.jpg",
  heroTint: "#110000",
  bootstrapVariant: "danger",
  specification: [
    "Fast. Shopify's default search was not meeting performance expectations.",
    "Synonyms of searched words.",
    "Redirection of certain terms to various site pages.",
    "Custom fields used in searching and more page types returned than Shopify's default.",
    'Custom weighting of fields and "Boosting" of certain result sets based on criteria.'
  ],
  liveExampleService: { id: "appproxy", name: "Shopify Application Proxy" },
  data: [
    {
      id: "persistence",
      name: "Persistence",
      attributes: [
        createAttributeFromTechnology("azureStorage"),
        {
          name: "Function",
          value: "House the data to be indexed as well as other app data"
        }
      ],
      reasons: [
        "Data Model is fairly well-defined, but there are nested properties and arrays, and no relationships involved that make an RDBMS less ideal. The data model is also very simple (1 collection). Azure Blob Storage is an extremely simple form of storage, basically just files with some special consideration for text files. In this case, it was used with Serialized JSON, creating essentially the world's simplest document database with only one index/lookup.",
        "The data is VERY high touch, the indexing process is a very large amount of checking and re-checking. Azure Blob Storage is both very high performing (20,000 requests/second at time of writing) and very cheap ($0.023 per million requests at time of writing).",
        "Our initial choice was actually SQL Server, but the amount of compute needed to handle the request load was high. Blob Storage was about 1/20th the cost for the same request load."
      ]
    },
    {
      id: "searchEngine",
      name: "Search Engine",
      attributes: [
        createAttributeFromTechnology("azureSearch"),
        {
          name: "Function",
          value: "Properly index the site data for rapid searching"
        }
      ],
      reasons: [
        "Azure Search is a search as a service built on top of ElasticSearch, which is highly regarded in the search arena. Azure adds a few nice features from SOLR over the top of it to make it a very compelling offer.",
        "Azure Search comes at a fairly steep minimum level, but the vastly decreased development time deriving from not having to develop an indexer (it can automatically index blob storage) and not needing to code for synonyms (it has this feature) made it well worth it."
      ]
    },
    {
      id: "cache",
      name: "Cache",
      attributes: [
        createAttributeFromTechnology("redis"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Function",
          value:
            "A cache to house frequently requested data to improve performance"
        }
      ],
      reasons: [
        "A cache was critical to improving performance in the front end by returning frequently requested data in milliseconds.",
        "Redis is the industry standard, and .NET has a beautiful library from StackExchange for using it. These factors made the decision clear.",
        "I decided to host our own instances of Redis rather than use something like Azure Redis Cache. The cost increase was too great to justify a very small convenience gain."
      ]
    },
    {
      id: "non-persisted",
      name: "Non-Persisted",
      attributes: [
        {
          name: "Monitoring",
          value: "Azure Monitor, Log Analytics, Application Insights",
          link: "https://azure.microsoft.com/"
        },
        {
          name: "Queue Messaging",
          value: "Azure Storage Queues",
          link: "https://azure.microsoft.com/"
        }
      ],
      reasons: []
    }
  ],
  backend: [
    {
      id: "api",
      name: "API",
      attributes: [
        createAttributeFromTechnology("aspNetCore"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Function",
          value:
            "Provide data to the Shopify Admin UI, allowing modification for logged in store owners"
        }
      ],
      reasons: [
        "ASP.Net Core can be deployed anywhere, provides lots of boilerplate in terms of API creation, and is generally a very productive way to code by using dependency injection where possible.",
        "Entity Framework Core was not used in this case, as Azure Storage is not supported by it (nor should it be).",
        "This API also provides a wrapper for the Azure Search index API, allowing requests to be simpler from any front end, and can handle the caching behavior to speed things up.",
        "This also implements the page redirection for certain terms."
      ]
    },
    {
      id: "changedetector",
      name: "Change Detector",
      attributes: [
        createAttributeFromTechnology("azureFunctions"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Function",
          value:
            "Through a combination of webhooks and polling, detect changes in the front end and hand them off to a queue"
        }
      ],
      reasons: [
        "Azure Functions provides an easy to use code base for scheduled jobs (especially) and has nearly unlimited flexibility in terms of deployment and even language choice (this is like Lambdas for the AWS folks in the crowd, but can be deployed in containers).",
        "A queue (and separate service) was used to actually index the data to combat the need for 100% uptime."
      ]
    },
    {
      id: "indexer",
      name: "Indexer",
      attributes: [
        createAttributeFromTechnology("azureFunctions"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Function",
          value:
            "As a queue fills, make changes to the index according to the messages"
        }
      ],
      reasons: [
        "Azure Functions provides automatic integration with queues, enabling easy and quick development for this service."
      ]
    }
  ],
  frontend: [
    {
      id: "ui",
      name: "Shopify Admin UI",
      attributes: [
        createAttributeFromTechnology("react"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Function",
          value:
            "Provide an Admin UI to store owners to make changes to how the search engine works"
        }
      ],
      reasons: [
        "React is the only framework allowed by Shopify for the admin pages for its apps.",
        "TypeScript provides type safety for decreasing bugs in Javascript and generally makes the code more organized and easier to understand. This is great for other developers (and therefore scaling)."
      ]
    },
    {
      id: "appproxy",
      name: "Shopify Application Proxy",
      attributes: [
        createAttributeFromTechnology("react"),
        createAttributeFromTechnology("aspNetCore"),
        createAttributeFromTechnology("kubernetes"),
        {
          name: "Example",
          value: "Babyearth.com",
          link: "https://www.babyearth.com/apps/search/?query=test"
        },
        {
          name: "Example",
          value: "Babywise.life",
          link: "https://babywise.life/apps/search/?query=test"
        },
        {
          name: "Function",
          value:
            "Provide the actual app that customers use to search the website, served through a proxy"
        }
      ],
      reasons: [
        "It may seem odd to list ASP.NET Core as a front end technology, but in this case it was only used for its Razor frontend markup and to control some attributes of the response. Shopify has some specific requirements with how this response needs to look, and ASP.NET trivialized this task.",
        "What the customer actually sees and interacts with is React. We chose to go a javascript route (rather than pure Razor) in order to make the initial page render quicker (even if it is just a loader) and because it made tracking all of the search engine filters on the front end very simple.",
        "Since this is an actual public front end, you can use the example link above to see it."
      ]
    }
  ]
};

export default shopifySearchEngineProject;
