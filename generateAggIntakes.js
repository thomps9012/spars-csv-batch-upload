import * as dotenv from "dotenv";

dotenv.config();
import { MongoClient } from "mongodb";
import { handleClientDemographics } from "./clientMethods.js";
import { handleIntake } from "./interviewMethods.js";
import { writeToPath } from "@fast-csv/format";
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
  const formatted_intakes = all_intakes
    .map((intake) => {
      let formatted_client = handleClientDemographics(intake);
      const formatted_interview = handleIntake(formatted_client);
      return formatted_interview;
    })
    .filter((record) => record != null);
  writeToPath("test_intakes.csv", formatted_intakes, { headers: true })
    .on("error", (err) => console.error(err))
    .on("finish", () => console.log("done"));
}

main()
  .catch(console.error)
  .finally(() => client.close());
