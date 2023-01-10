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
          ClientID: "$PID",
          DOB: "$demographics.DoB",
          ClientType: "$demographics.adult",
          Gender: "$demographics.gender",
          SexualIdentity: "$demographics.orientation",
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
  const test_client = all_clients[0];

  // demographic conversions
  const convertDOB = (DoB) => `${DoB.split("-")[1]}/${DoB.split("-")[0]}`;
  const convertAdult = (adultBool) => (adultBool ? 1 : 2);
  const convertRespondentType = (adultBool) => (adultBool ? -1 : 1);
  const convertGender = (genderString) => {
    switch (genderString) {
      case "Male":
        return 1;
      case "Female":
        return 2;
      case "Transgender":
        return 5;
      case "Non-Conforming":
        return 7;
      case "Refused":
        return -7;
      default:
        return genderString;
    }
  };
  const handleOtherGender = (genderInt) => (genderInt == "" ? genderInt : -1);
  const convertSexualIdentity = (orientationString) => {
    switch (orientationString) {
      case "Asexual":
        return 8;
      case "Bisexual":
        return 3;
      case "Gay or Lesbian (Homosexual)":
        return 2;
      case "Pansexual":
        return 6;
      case "Questioning (Queer)":
        return 5;
      case "Straight (Heterosexual)":
        return 1;
      case "N/A":
        return -1;
      case "Refused":
        return -7;
      default:
        return orientationString;
    }
  };
  const handleOtherSexualIdentity = (orientationInt) =>
    orientationInt == "" ? orientationInt : -1;
  const convertBilingual = (bilingualString) => {
    switch (bilingualString) {
      case "No":
        return 0;
      case "Yes":
        return 1;
      default:
        return bilingualString;
    }
  };
  const convertRace = (raceString) => {
    switch (raceString) {
      case "Central American":
        return 1;
      case "Cuban":
        return 2;
      case "Dominican":
        return 3;
      case "Puerto Rican":
        return 4;
      case "South American":
        return 5;
      case "American Indian":
        return 6;
      case "Alaska Native":
        return 7;
      case "Chinese":
        return 8;
      case "Filipino":
        return 9;
      case "Guamanian or Chamorro":
        return 10;
      case "Black or African American":
        return 11;
      case "Korean":
        return 12;
      case "Native Hawaiian":
        return 13;
      case "Other Asian":
        return 14;
      case "Other Pacific Islander":
        return 15;
      case "Samoan":
        return 16;
      case "South Asian":
        return 17;
      case "Vietnamese":
        return 18;
      case "White":
        return 19;
      case "Japanese":
        return 20;
      case "Mexican":
        return 21;
      case "Refused":
        return -7;
      default:
        return raceString;
    }
  };
  //   demographics update
  // gender and orientation
  test_client.Gender = convertGender(test_client.Gender);
  test_client.DOB = convertDOB(test_client.DOB);
  test_client.RespondentType = convertRespondentType(test_client.ClientType);
  test_client.ClientType = convertAdult(test_client.ClientType);
  test_client.GenderOtherSpec = handleOtherGender(test_client.Gender);
  test_client.SexualIdentity = convertSexualIdentity(
    test_client.SexualIdentity
  );
  test_client.SexualIdentityOtherSpec = handleOtherSexualIdentity(
    test_client.SexualIdentity
  );
  // race
  const latinX = test_client.demographics.latinX;
  const clientRace = test_client.demographics.race;
  test_client.RaceInt = convertRace(clientRace);
  test_client.EthnicCentralAmerican =
    latinX && test_client.RaceInt === 1 ? 1 : 0;
  test_client.EthnicCuban = latinX && test_client.RaceInt === 2 ? 1 : 0;
  test_client.EthnicDominican = latinX && test_client.RaceInt === 3 ? 1 : 0;
  test_client.EthnicMexican = latinX && test_client.RaceInt === 21 ? 1 : 0;
  test_client.EthnicPuertoRican = latinX && test_client.RaceInt === 4 ? 1 : 0;
  test_client.EthnicSouthAmerican = latinX && test_client.RaceInt === 5 ? 1 : 0;
  test_client.EthnicOther = latinX && test_client.RaceInt == "" ? 1 : 0;
  test_client.EthnicOtheSpec =
    latinX && test_client.RaceInt == "" ? test_client.RaceInt : -1;
  test_client.RaceBlack = test_client.RaceInt === 11 ? 1 : 0;
  test_client.RaceWhite = test_client.RaceInt === 19 ? 1 : 0;
  test_client.RaceAmericanIndian = test_client.RaceInt === 6 ? 1 : 0;
  test_client.RaceAlaskaNative = test_client.RaceInt === 7 ? 1 : 0;
  test_client.RaceSouthAsian = test_client.RaceInt === 17 ? 1 : 0;
  test_client.RaceChinese = test_client.RaceInt === 8 ? 1 : 0;
  test_client.RaceFilipino = test_client.RaceInt === 9 ? 1 : 0;
  test_client.RaceJapanese = test_client.RaceInt === 20 ? 1 : 0;
  test_client.RaceKorean = test_client.RaceInt === 12 ? 1 : 0;
  test_client.RaceVietnamese = test_client.RaceInt === 18 ? 1 : 0;
  test_client.RaceOtherAsian = test_client.RaceInt === 14 ? 1 : 0;
  test_client.RaceNativeHawaiian = test_client.RaceInt === 13 ? 1 : 0;
  test_client.RaceGuamanianChamorro = test_client.RaceInt === 10 ? 1 : 0;
  test_client.RaceSamoan = test_client.RaceInt === 16 ? 1 : 0;
  test_client.RaceOtherPacificIslander = test_client.RaceInt === 15 ? 1 : 0;
  test_client.RaceOther = test_client.RaceInt == "" ? 1 : 0;
  test_client.RaceOtherSpec =
    test_client.RaceInt == "" ? test_client.RaceInt : -1;
  // bilingual
  const client_bilingual = test_client.demographics.bilingual
    ? test_client.demographics.bilingual
    : -9;
  test_client.SpeakOtherLanguage_EN = convertBilingual(client_bilingual);
  test_client.SpeakWhatLanguage_EN =
    test_client.SpeakOtherLanguage_EN === 1 ? client_bilingual : -1;
  test_client.SpeakOtherLanguage_ES = convertBilingual(client_bilingual);
  test_client.SpeakWhatLanguage_ES =
    test_client.SpeakOtherLanguage_EN === 1 ? client_bilingual : -1;

  delete test_client.demographics;

  // intake update
  // followup update
  console.info("Test Client => ", test_client);
  //   console.info("All Clients => ", all_clients);
  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
