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
  switch (orientationString.trim().toUpperCase()) {
    case "ASEXUAL":
      return 8;
    case "BISEXUAL":
      return 3;
    case "GAY OR LESBIAN":
    case "LESBIAN_GAY":
    case "LESBIAN / GAY":
    case "HOMOSEXUAL":
    case "GAY OR LESBIAN (HOMOSEXUAL)":
      return 2;
    case "PANSEXUAL":
      return 6;
    case "QUEER":
    case "QUESTIONING":
    case "QUESTIONING (QUEER) (Queer)":
    case "DON-T_KNOW":
      return 5;
    case "STRAIGHT":
    case "HETEROSEXUAL":
    case "STRAIGHT (HETEROSEXUAL)":
      return 1;
    case "N/A":
      return -1;
    case "ORIENTATION":
    case "REFUSED":
      return -7;
    default:
      return orientationString.trim().toUpperCase();
  }
};
const handleOtherSexualIdentity = (orientationInt) =>
  orientationInt == "" ? orientationInt : -1;
const convertBilingual = (bilingualString) => {
  switch (bilingualString.trim().toUpperCase()) {
    case "NO":
      return 0;
    case "YES":
      return 1;
    default:
      return bilingualString;
  }
};
const convertRace = (raceString) => {
  switch (raceString.trim().toUpperCase()) {
    case "CENTRAL AMERICAN":
      return 1;
    case "CUBAN":
      return 2;
    case "DOMINICAN":
      return 3;
    case "PUERTO-RICAN":
    case "PUERTO RICAN":
      return 4;
    case "SOUTH AMERICAN":
      return 5;
    case "AMERICAN-INDIAN":
    case "AMERICAN INDIAN":
      return 6;
    case "ALASKA-NATIVE":
    case "ALASKA NATIVE":
      return 7;
    case "CHINESE":
      return 8;
    case "FILIPINO":
      return 9;
    case "GUAMANIAN OR CHAMORRO":
      return 10;
    case "BLACK OR AFRICAN AMERICAN":
      return 11;
    case "KOREAN":
      return 12;
    case "NATIVE HAWAIIAN":
      return 13;
    case "ASIAN":
    case "OTHER ASIAN":
      return 14;
    case "OTHER PACIFIC ISLANDER":
      return 15;
    case "SAMOAN":
      return 16;
    case "SOUTH ASIAN":
      return 17;
    case "VIETNAMESE":
      return 18;
    case "WHITE/EUROPEAN":
    case "WHITE":
      return 19;
    case "JAPANESE":
      return 20;
    case "MEXICAN":
      return 21;
    case "REFUSED":
    case "N/A":
      return -7;
    case "DON-T_KNOW":
      return -9;
    case "OTHER (ARABIC)":
      return "ARABIC";
    case "OTHER (SPECIFY)HISPANICS":
      return "HISPANIC";
    default:
      return raceString.trim().toUpperCase();
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
  client.SpeakOtherLanguage_EN =
    client_bilingual != -9
      ? convertBilingual(client_bilingual)
      : client_bilingual;
  client.SpeakWhatLanguage_EN =
    client.SpeakOtherLanguage_EN === 1
      ? client_bilingual === "Yes"
        ? "SPANISH"
        : -1
      : -1;
  client.SpeakOtherLanguage_ES =
    client_bilingual != -9
      ? convertBilingual(client_bilingual)
      : client_bilingual;
  client.SpeakWhatLanguage_ES =
    client.SpeakOtherLanguage_EN === 1
      ? client_bilingual === "Yes"
        ? "SPANISH"
        : -1
      : -1;

  delete client.demographics;
  return client;
};
