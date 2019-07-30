import Project from "../../../classes/Project";

import CodeChallenge from "../../../classes/CodeChallenge";
import { getTechnologyById } from "../../../classes/Technology";

const codeChallengesProject: Project = {
  id: "codeChallenges",
  name: "Code Challenges",
  imageSrc: "/images/laboratory.jpg",
  heroTint: "#17004a",
  bootstrapVariant: "info",
  specification: [
    "These are generally tests handed out by interviewers to test coding prowess and vary widely."
  ],
  short: true,
  data: [],
  backend: [],
  frontend: []
};

export const codeChallenges: CodeChallenge[] = [
  {
    name: "Automated Minesweeper",
    link: "https://github.com/dkershner6/AutomatedMinesweeper",
    technology: getTechnologyById("aspNetCore"),
    background:
      "There are bunch of mines in a mine field, and you are tasked with exploding as many of them as you can. The only caveat is you can only explode one manually. The mine you manually explode will set off a chain reaction. For any mine that explodes, all mines within the blast radius of that mine will be triggered to explode in one second. The mine you manually explode blows up at time 0.",
    task:
      "Write a program which will read in a mines array and output the maximum number of mines you can explode. Also output which mine you need to manually set off to explode this maximum number. Since there may be multiple mines that blow up a maximal number of mines you should output all the mines that do that."
  },
  {
    name: "Command Line Database",
    link: "https://github.com/dkershner6/CommandLineDatabase",
    technology: getTechnologyById("aspNetCore"),
    background:
      "Implement an in-memory database that has the following functions. We’ll be looking for your code to meet our functionality & performance requirements, be clear & easy to understand and be resilient to edge cases. Use libraries at will (but not database-like ones or actual databases). Use Google/Stack Overflow/online references at will as well. The database should be a command line program that reads values from STDIN line by line and executes the functions as they happen. Please also include a README explaining how to run your program. The name and value will be strings with no spaces in them.",
    task: `SET [name] [value] - 

      Sets the name in the database to the given value - 
      
      GET [name] - 
      
      Prints the value for the given name. If the value is not in the database, prints NULL - 
      
      DELETE [name] - 
      
      Deletes the value from the database - 
      
      COUNT [value] - 
      
      Returns the number of names that have the given value assigned to them. If that value is not assigned anywhere, prints 0 - 
      
      END - 
      
      Exits the database - 
      
      The database must also support transactions: - 
      BEGIN - 
      
      Begins a new transaction - 
      
      ROLLBACK - 
      
      Rolls back the most recent transaction. If there is no transaction to rollback, prints TRANSACTION NOT FOUND - 
      
      COMMIT - 
      
      Commits all of the open transactions - 
      
      Performance Requirements: - 
      GET , SET , DELETE , and COUNT should all have a runtime of less than O(log n) , if not better (where n is the number of items in the database). The memory usage of the database shouldn't be doubled for every transaction.`
  }
];

export default codeChallengesProject;
