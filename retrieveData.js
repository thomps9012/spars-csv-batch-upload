import * as dotenv from "dotenv";
dotenv.config();
import { MongoClient } from "mongodb";

const { MONGODB_URI, DB_NAME } = process.env;
const client = new MongoClient(MONGODB_URI);
const db = client.db(DB_NAME);

const clients_collection = db.collection("client");

async function main() {
  await client.connect();
  const all_clients = await clients_collection
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
        $lookup: {
          from: "followup",
          localField: "_id",
          foreignField: "client_id",
          as: "followup_interviews",
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
          PID: 1,
          demographics: 1,
          intake: {
            $arrayElemAt: ["$intake_interview", 0],
          },
          followups: "$followup_interviews",
          discharge: {
            $arrayElemAt: ["$discharge_interview", 0],
          },
        },
      },
    ])
    .toArray();
  console.info("Test Client => ", all_clients[0]);

  //   console.info("All Clients => ", all_clients);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
