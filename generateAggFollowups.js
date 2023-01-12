import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";
import { handleClientDemographics } from "./clientMethods.js";
import { handleFollowup } from "./interviewMethods.js";
import { writeToPath } from "@fast-csv/format";
const { MONGODB_URI, DB_NAME } = process.env;
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);

const followups = db.collection("followup");
export const generateAggFollowups = async (file_name) => {
  await client.connect();
  const all_followups = await followups
    .aggregate([
      {
        $lookup: {
          from: "client",
          localField: "client_id",
          foreignField: "_id",
          as: "client",
          pipeline: [
            {
              $project: {
                contact_info: 0,
                _id: 0,
              },
            },
          ],
        },
      },
      {
        $project: {
          client: {
            $arrayElemAt: ["$client", 0],
          },
          interview_info: 1,
          _id: 0,
          education_employment: 1,
          family_living_conditions: 1,
          housing_stability: 1,
          services_received: 1,
          social_connectedness: 1,
          crime_info: 1,
          feelings: 1,
          functioning: 1,
          military: 1,
          care_perception: 1,
        },
      },
    ])
    .toArray();
  const formatted_followups = all_followups
    .map((followup) => {
      followup.ClientID = followup.client?.PID;
      followup.DOB = followup.client?.demographics.DoB;
      followup.ClientType = followup.client?.demographics.adult;
      followup.Gender = followup.client?.demographics.gender;
      followup.SexualIdentity = followup.client?.demographics.orientation;
      followup.demographics = followup.client?.demographics;
      delete followup.client;
      let formatted_client = handleClientDemographics(followup);
      const formatted_interview = handleFollowup(formatted_client);
      return formatted_interview;
    })
    .filter((record) => record != null);
  writeToPath(file_name + ".csv", formatted_followups, { headers: true })
    .on("error", (err) => console.error(err))
    .on("finish", () => {
      console.log(
        "\u001b[35mFollowups File Successfully Generated \nRecords can be found in " +
          file_name +
          ".csv"
      );
      client.close();
    });
};
