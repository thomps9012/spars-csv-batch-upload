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

export const handleClientDemographics = (client) => {
  client.Gender = convertGender(client.Gender);
  client.DOB = convertDOB(client.DOB);
  client.RespondentType = convertRespondentType(client.ClientType);
  client.ClientType = convertAdult(client.ClientType);
  client.GenderOtherSpec = handleOtherGender(client.Gender);
  client.SexualIdentity = convertSexualIdentity(client.SexualIdentity);
  client.SexualIdentityOtherSpec = handleOtherSexualIdentity(
    client.SexualIdentity
  );
  // race
  const latinX = client.demographics.latinX;
  const clientRace = client.demographics.race;
  client.RaceInt = convertRace(clientRace);
  client.EthnicCentralAmerican = latinX && client.RaceInt === 1 ? 1 : 0;
  client.EthnicCuban = latinX && client.RaceInt === 2 ? 1 : 0;
  client.EthnicDominican = latinX && client.RaceInt === 3 ? 1 : 0;
  client.EthnicMexican = latinX && client.RaceInt === 21 ? 1 : 0;
  client.EthnicPuertoRican = latinX && client.RaceInt === 4 ? 1 : 0;
  client.EthnicSouthAmerican = latinX && client.RaceInt === 5 ? 1 : 0;
  client.EthnicOther = latinX && client.RaceInt == "" ? 1 : 0;
  client.EthnicOtheSpec = latinX && client.RaceInt == "" ? client.RaceInt : -1;
  client.RaceBlack = client.RaceInt === 11 ? 1 : 0;
  client.RaceWhite = client.RaceInt === 19 ? 1 : 0;
  client.RaceAmericanIndian = client.RaceInt === 6 ? 1 : 0;
  client.RaceAlaskaNative = client.RaceInt === 7 ? 1 : 0;
  client.RaceSouthAsian = client.RaceInt === 17 ? 1 : 0;
  client.RaceChinese = client.RaceInt === 8 ? 1 : 0;
  client.RaceFilipino = client.RaceInt === 9 ? 1 : 0;
  client.RaceJapanese = client.RaceInt === 20 ? 1 : 0;
  client.RaceKorean = client.RaceInt === 12 ? 1 : 0;
  client.RaceVietnamese = client.RaceInt === 18 ? 1 : 0;
  client.RaceOtherAsian = client.RaceInt === 14 ? 1 : 0;
  client.RaceNativeHawaiian = client.RaceInt === 13 ? 1 : 0;
  client.RaceGuamanianChamorro = client.RaceInt === 10 ? 1 : 0;
  client.RaceSamoan = client.RaceInt === 16 ? 1 : 0;
  client.RaceOtherPacificIslander = client.RaceInt === 15 ? 1 : 0;
  client.RaceOther = client.RaceInt == "" ? 1 : 0;
  client.RaceOtherSpec = client.RaceInt == "" ? client.RaceInt : -1;
  // bilingual
  const client_bilingual = client.demographics.bilingual
    ? client.demographics.bilingual
    : -9;
  client.SpeakOtherLanguage_EN = convertBilingual(client_bilingual);
  client.SpeakWhatLanguage_EN =
    client.SpeakOtherLanguage_EN === 1 ? client_bilingual : -1;
  client.SpeakOtherLanguage_ES = convertBilingual(client_bilingual);
  client.SpeakWhatLanguage_ES =
    client.SpeakOtherLanguage_EN === 1 ? client_bilingual : -1;

  delete client.demographics;
  return client;
};
