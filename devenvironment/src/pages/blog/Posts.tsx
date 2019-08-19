import Post from "../../classes/Post";

const whenServicePlanContent = require("./posts/when-to-use-app-service-plan.md"); // eslint-disable-line @typescript-eslint/no-var-requires
const howToOvercomeContent = require("./posts/azure-functions-limits-how-to-overcome.md"); // eslint-disable-line @typescript-eslint/no-var-requires
const consumptionVsAppPlanContent = require("./posts/azure-functions-consumption-vs-app-service-vs-kubernetes.md"); // eslint-disable-line @typescript-eslint/no-var-requires
const serilogGotchasContent = require("./posts/serilog-gotchas.md"); // eslint-disable-line @typescript-eslint/no-var-requires

const posts: Post[] = [
  {
    title: "Azure Functions: Serilog Gotchas",
    subtitle:
      "Serilog appears easy to use in Azure Functions, but apperances can be deceiving",
    handle: "serilog-gotchas",
    date: "2019-07-01",
    author: "Derek Kershner",
    image: "logs.jpg",
    technologyIds: ["azure", "azureFunctions"],
    content: serilogGotchasContent
  },
  {
    title: "Azure Functions Limits: How to Overcome",
    subtitle:
      "Azure Functions do actually have limits, and here is how to overcome the ones you are most likely to hit",
    handle: "azure-functions-limits-how-to-overcome",
    date: "2019-02-27",
    author: "Derek Kershner",
    image: "gate.jpg",
    technologyIds: ["azure", "azureFunctions"],
    content: howToOvercomeContent
  },
  {
    title: "Azure Functions: Consumption vs App Service Plan vs Kubernetes",
    subtitle: "When to choose which for optimal cost",
    handle: "azure-functions-consumption-vs-app-service-vs-kubernetes",
    date: "2019-02-26",
    author: "Derek Kershner",
    image: "servers.jpg",
    technologyIds: ["azure", "azureFunctions", "kubernetes"],
    content: consumptionVsAppPlanContent
  },
  {
    title: "Azure Functions: When to use App Service Plan",
    subtitle:
      "When does the transition make the most sense (for Azure functions v1)",
    handle: "when-to-use-app-service-plan",
    date: "2018-08-24",
    author: "Derek Kershner",
    image: "leaves.jpg",
    technologyIds: ["azure", "azureFunctions"],
    content: whenServicePlanContent
  }
];

export default posts;
