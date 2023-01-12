import inquirer from "inquirer";
import { generateAggIntakes } from "./generateAggIntakes.js";
import { generateAggFollowups } from "./generateAggFollowups.js";
import { generateAggDischarges } from "./generateAggDischarges.js";

const findFileName = (answerArr, fileName) =>
  answerArr.find((file) => file.trim().toUpperCase() == fileName);

async function main() {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "files_needed",
        choices: ["Intakes", "Followups", "Discharges"],
        message: "Which interview files would you like to generate?",
      },
    ])
    .then(({ files_needed }) => {
      if (
        findFileName(files_needed, "INTAKES") &&
        findFileName(files_needed, "FOLLOWUPS") &&
        findFileName(files_needed, "DISCHARGES")
      ) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "intake_name",
              message:
                "What would you like to name your \u001b[32mINTAKES \u001b[37mCSV file (exclude the .csv)?",
            },
            {
              type: "input",
              name: "followup_name",
              message:
                "What would you like to name your \u001b[35mFOLLOWUPS \u001b[37mCSV file (exclude the .csv)?",
            },
            {
              type: "input",
              name: "discharge_name",
              message:
                "What would you like to name your \u001b[36mDISCHARGES \u001b[37mCSV file (exclude the .csv)?",
            },
          ])
          .then(async ({ intake_name, followup_name, discharge_name }) => {
            generateAggIntakes(intake_name);
            generateAggFollowups(followup_name);
            generateAggDischarges(discharge_name);
          });
      } else if (
        findFileName(files_needed, "INTAKES") &&
        findFileName(files_needed, "DISCHARGES")
      ) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "intake_name",
              message:
                "What would you like to name your \u001b[32mINTAKES \u001b[37mCSV file (exclude the .csv)?",
            },
            {
              type: "input",
              name: "discharge_name",
              message:
                "What would you like to name your \u001b[36mDISCHARGES \u001b[37mCSV file (exclude the .csv)?",
            },
          ])
          .then(async ({ intake_name, discharge_name }) => {
            generateAggIntakes(intake_name);
            generateAggDischarges(discharge_name);
          });
      } else if (
        findFileName(files_needed, "INTAKES") &&
        findFileName(files_needed, "FOLLOWUPS")
      ) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "intake_name",
              message:
                "What would you like to name your \u001b[32mINTAKES \u001b[37mCSV file (exclude the .csv)?",
            },
            {
              type: "input",
              name: "followup_name",
              message:
                "What would you like to name your \u001b[35mFOLLOWUPS \u001b[37mCSV file (exclude the .csv)?",
            },
          ])
          .then(async ({ intake_name, followup_name }) => {
            generateAggIntakes(intake_name);
            generateAggFollowups(followup_name);
          });
      } else if (
        findFileName(files_needed, "DISCHARGES") &&
        findFileName(files_needed, "FOLLOWUPS")
      ) {
        inquirer
          .prompt([
            {
              type: "input",
              name: "followup_name",
              message:
                "What would you like to name your \u001b[35mFOLLOWUPS \u001b[37mCSV file (exclude the .csv)?",
            },
            {
              type: "input",
              name: "discharge_name",
              message:
                "What would you like to name your \u001b[36mDISCHARGES \u001b[37mCSV file (exclude the .csv)?",
            },
          ])
          .then(async ({ followup_name, discharge_name }) => {
            generateAggFollowups(followup_name);
            generateAggDischarges(discharge_name);
          });
      } else {
        const interview_type = files_needed[0].trim().toUpperCase();
        inquirer
          .prompt([
            {
              type: "input",
              name: "file_name",
              message: `What would you like to name your \u001b[33m${interview_type} \u001b[37mCSV file (exclude the .csv)?`,
            },
          ])
          .then(({ file_name }) => {
            switch (interview_type) {
              case "INTAKES":
                generateAggIntakes(file_name);
                break;
              case "FOLLOWUPS":
                generateAggFollowups(file_name);
                break;
              case "DISCHARGES":
                generateAggDischarges(file_name);
                break;
              default:
                console.log("\u001b[31mNot a Valid Interview Type Selection");
            }
          });
      }
    })
    .catch((error) => console.error(error));
}

main();
