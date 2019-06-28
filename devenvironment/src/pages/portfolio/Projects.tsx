import Project from "../../classes/Project";

const projects: Array<Project> = [
  {
    id: "enterpriseMarketplace",
    name: "Enterprise Marketplace",
    imageSrc: "/images/supermarket.jpg",
    heroTint: "#001100",
    bootstrapVariant: "success",
    specification: [
      "Warehouse management system with multiple location ability and a 3rd Party Logistics distribution billing/reporting portal.",
      "Several options of integration for Drop Ship Partners, with product and inventory updating for each option.",
      "Marketplace style products, with multiple variants per product, and multiple sellers per variant, including the warehouses and/or drop ship partners in competition with one another.",
      "Outward Channel integrations to front end frameworks and 3rd Party Marketplaces."
    ],
    data: [
      {
        id: "persistence",
        name: "Persistence",
        attributes: [
          {
            name: "Technology",
            value: "Azure SQL",
            link: "https://azure.microsoft.com/en-us/services/sql-database/"
          },
          {
            name: "Function",
            value: "House all of the data for the app"
          }
        ],
        reasons: [
          "Data model is complicated, but well structured and consistent.",
          "There are several many-to-many relationships. These are typically difficult to update in NoSQL due to data flattening/duplication.",
          "SQL Server chosen as the RDBMS due to optimal integration with Entity Framework.",
          "An argument could be made to handle the data model in more than one database. This was rejected due to additional management and cost associated with doing so (minimum compute costs)."
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
            name: "Cache",
            value: "Redis",
            link: "https://redis.io/"
          },
          ,
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
          {
            name: "Technology",
            value: "ASP.Net Core / Entity Framework Core",
            link: "https://dotnet.microsoft.com/apps/aspnet"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Function",
            value:
              "Provide data to the front-end, allowing access and modification based on many access scopes"
          }
        ],
        reasons: [
          "ASP.Net Core can be deployed anywhere, provides lots of boilerplate in terms of API creation, and is generally a very productive way to code by using dependency injection where possible.",
          "Entity Framework Core provides a very powerful engine for designing a complicated data model, and then simplifies the process of accessing and updating the data.",
          "An argument could be made to split the API into sections based on the matching module of the app, in true microservices fashion. This was rejected due to the benefits being outweighed by having to replicate all of the top-level management features, such as authentication."
        ]
      },
      {
        id: "logistics",
        name: "Logistics",
        attributes: [
          {
            name: "Technology",
            value: "Azure Functions",
            link: "https://azure.microsoft.com/en-us/services/functions/"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Function",
            value:
              "CRON service to do several data and maintenance tasks such as aggregation of Logistics Partner billing data"
          }
        ],
        reasons: [
          "Azure Functions provides an easy to use code base for scheduled jobs (especially) and has nearly unlimited flexibility in terms of deployment and even language choice (this is like Lambdas for the AWS folks in the crowd, but can be deployed in containers)."
        ]
      },
      {
        id: "sellers",
        name: "Sellers",
        attributes: [
          {
            name: "Technology",
            value: "Azure Functions",
            link: "https://azure.microsoft.com/en-us/services/functions/"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Function",
            value:
              "Handle all of the inward product and inventory data integrations from drop shippers"
          }
        ],
        reasons: [
          "With the full power of .Net Core C#, things like FTP, Email, and custom API integrations are easy to manage",
          "Azure Functions provides an easy to use code base for scheduled jobs (especially) and has nearly unlimited flexibility in terms of deployment and even language choice (this is like Lambdas for the AWS folks in the crowd, but can be deployed in containers)."
        ]
      },
      {
        id: "sellersEdi",
        name: "Sellers EDI",
        attributes: [
          {
            name: "Technology",
            value: "Azure Logic Apps",
            link: "https://azure.microsoft.com/en-us/services/logic-apps/"
          },
          {
            name: "Deployment",
            value: "Serverless (Consumption)",
            link: "https://azure.microsoft.com/en-us/services/logic-apps/"
          },
          {
            name: "Function",
            value: "Handle all EDI communication to/from Sellers"
          }
        ],
        reasons: [
          "This part of the Seller integrations was split into its own service due to the relative ease of EDI communication and manipulation inside Logic Apps (similar to BizTalk) when compared to writing code manually. The time savings are very high."
        ]
      },
      {
        id: "marketplace",
        name: "Marketplace",
        attributes: [
          {
            name: "Technology",
            value: "Azure Functions",
            link: "https://azure.microsoft.com/en-us/services/functions/"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Function",
            value:
              "Handle changes from the seller module, creating things like new products and variants when necessary"
          }
        ],
        reasons: [
          "Azure Functions provides an easy to use code base for scheduled jobs (especially) and has nearly unlimited flexibility in terms of deployment and even language choice (this is like Lambdas for the AWS folks in the crowd, but can be deployed in containers)."
        ]
      },
      {
        id: "marketplaceChannels",
        name: "Marketplace Channels",
        attributes: [
          {
            name: "Technology",
            value: "Azure Functions",
            link: "https://azure.microsoft.com/en-us/services/functions/"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Note",
            value:
              "This is actually several deployments, but all are handled similarly"
          },
          {
            name: "Open Source",
            value: "Contributions made to SDKs like ShopifySharp",
            link: "https://github.com/nozzlegear/ShopifySharp"
          },
          {
            name: "Function",
            value:
              "Handle all of the outward communication to the various sales channels (Shopify, Amazon, etc) for the marketplace products"
          }
        ],
        reasons: [
          "This is almost always API communication with a 3rd Party API. C# SDKs make this job significantly easier and are used in all cases (and contributions to the open source of the SDK's are made when helpful).",
          "Azure Functions provides an easy to use code base for scheduled jobs (especially) and has nearly unlimited flexibility in terms of deployment and even language choice (this is like Lambdas for the AWS folks in the crowd, but can be deployed in containers)."
        ]
      }
    ],
    frontend: [
      {
        id: "ui",
        name: "Admin UI",
        attributes: [
          {
            name: "Technology",
            value: "React",
            link: "https://reactjs.org/"
          },
          {
            name: "Sub-Technology",
            value: "TypeScript",
            link: "https://www.typescriptlang.org/"
          },
          {
            name: "Deployment",
            value: "Docker/Kubernetes",
            link: "https://kubernetes.io"
          },
          {
            name: "Authorization",
            value: "Google Firebase",
            link: "https://firebase.google.com/"
          },
          {
            name: "Function",
            value:
              "Provide an Authenticated portal for several different types of parties to log in and receive an experience custom to their user"
          }
        ],
        reasons: [
          "React is well-known as a premier framework for portal functionality, and in addition, is very productive and easy to work with due to its component-based model and using state rather than DOM manipulation.",
          "TypeScript provides type safety for decreasing bugs in Javascript and generally makes the code more organized and easier to understand. This is great for other developers (and therefore scaling).",
          "Google Firebase was chosen for authorization due to the integration into React being very simple and the cost being optimal (free).",
          "An argument could be made that this portal could be split into multiple services. This may be done in the future of the app, but was not done so initally due to increased difficulty managing authentication. In addition, the JS bundle size of the app does not justify splitting."
        ]
      }
    ]
  }
];

export default projects;
