import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import { handleClientDemographics } from "./clientMethods.js";
import { handleIntake, handleNonIntakeKeys } from "./interviewMethods.js";
const { MONGODB_URI, DB_NAME } = process.env;
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);

const clients_collection = db.collection("client");

async function main() {
  await client.connect();
  const all_intakes = await clients_collection
    .aggregate([
      {
        $lookup: {
          from: "intake",
          localField: "_id",
          foreignField: "client_id",
          as: "intake_interview",
          pipeline: [
            {
              $project: {
                spars_entry: 0,
                client_id: 0,
                _id: 0,
              },
            },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          ClientID: "$PID",
          DOB: "$demographics.DoB",
          ClientType: "$demographics.adult",
          Gender: "$demographics.gender",
          SexualIdentity: "$demographics.orientation",
          demographics: 1,
          intake: {
            $arrayElemAt: ["$intake_interview", 0],
          },
        },
      },
    ])
    .toArray();
  const test_client = all_intakes[0];
  let formatted_client = handleClientDemographics(test_client);
  let formatted_interview = handleIntake(formatted_client);
  formatted_interview = handleNonIntakeKeys(formatted_interview);
  console.info("Test Intake => ", formatted_interview);
  //   console.info("All Clients => ", all_clients);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
