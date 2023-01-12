import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import { handleClientDemographics } from "./clientMethods.js";
import { handleDischarge } from "./interviewMethods.js";
import { writeToPath } from "@fast-csv/format";
const { MONGODB_URI, DB_NAME } = process.env;
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);

const clients_collection = db.collection("client");
export const generateAggDischarges = async (file_name) => {
  await client.connect();
  const all_discharges = await clients_collection
    .aggregate([
      {
        $lookup: {
          from: "discharge",
          localField: "_id",
          foreignField: "client_id",
          as: "discharge_interview",
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
          discharge: {
            $arrayElemAt: ["$discharge_interview", 0],
          },
        },
      },
    ])
    .toArray();
  const formatted_discharges = all_discharges
    .map((intake) => {
      let formatted_client = handleClientDemographics(intake);
      const formatted_interview = handleDischarge(formatted_client);
      return formatted_interview;
    })
    .filter((record) => record != null);
  writeToPath(file_name + ".csv", formatted_discharges, { headers: true })
    .on("error", (err) => console.error(err))
    .on("finish", () => {
      console.log(
        "\u001b[36mDischarge File Successfully Generated \nRecords can be found in " +
          file_name +
          ".csv"
      );
      client.close();
    });
};
