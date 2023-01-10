const handleInterviewDate = (dateString) =>
  `${dateString.split("/")[0]}/${dateString.split("/")[2]}`;

const convertMentalHealth = (mentalHealthString) => {
  switch (mentalHealthString) {
    case "Excellent":
      return 1;
    case "Very Good":
      return 2;
    case "Good":
      return 3;
    case "Fair":
      return 4;
    case "Poor":
      return 5;
    case "N/A":
      return -1;
    case "Refused":
      return -7;
    default:
      return -9;
  }
};

const convertHousing = (housingString) => {
  switch (housingString.trim().toUpperCase()) {
    case "PRIVATE RESIDENCE":
    case "OWN OR RENT":
    case "LIVE WITH SOMEONE ELSE":
    case "FRIENDS HOUSE AND VARIOUS PLACES.":
    case "OTHER (PLEASE SPECIFY) FRIENDS":
      return 1;
    case "GROUP HOME":
    case "FOSTER HOME":
      return 2;
    case "RESIDENTAL TREATMENT":
    case "RESIDENTIAL TREATMENT":
    case "RESIDENTIAL CARE":
      return 3;
    case "CRISIS RESIDENCE":
      return 4;
    case "SOBER LIVING HOUSE":
    case "RESIDENTIAL TREATMENT CENTER":
      return 5;
    case "INSTITUTIONAL SETTING":
      return 6;
    case "CORRECTIONAL FACILITY":
    case "JAIL/CORRECTIONAL FACILITY":
      return 7;
    case "HOMELESS":
    case "SHELTER":
    case "HOMELESS/SHELTER":
      return 8;
    case "OTHER":
      return 9;
    case "N/A":
      return -1;
    case "REFUSED":
      return -7;
    case "DON'T KNOW":
      return -8;
    default:
      return 9;
  }
};
const convertOtherHousing = (otherHousingString) => {
  switch (otherHousingString) {
    case "OTHER":
      return -1;
    default:
      return otherHousingString;
  }
};

const convertEducation = (educationString) => {
  switch (educationString.trim().toUpperCase()) {
    case "LESS THAN 12TH GRADE":
      return 11;
    case "HIGH SCHOOL DIPLOMA / GED (GENERAL EDUCATION DIPLOMA)":
      return 12;
    case "VOCTIONAL / TECHNICAL DIPLOMA":
      return 13;
    case "SOME COLLEGE":
      return 14;
    case "BACHELOR'S DEGREE":
      return 15;
    case "GRADUATE DEGREE":
      return 16;
    case "N/A":
      return -1;
    case "REFUSED":
      return -7;
    case "DON'T KNOW":
      return -8;
    default:
      return -9;
  }
};

const convertEmployment = (employmentString) => {
  switch (employmentString.trim().toUpperCase()) {
    case "FULL TIME":
      return 1;
    case "PART TIME":
      return 2;
    case "UNEMPLOYED":
    case "SEARCHING":
      return 3;
    case "NOT LOOKING FOR WORK":
      return 7;
    case "DISABLED":
      return 4;
    case "RETIRED":
      return 6;
    case "N/A":
      return -1;
    case "REFUSED":
      return -7;
    case "DON'T KNOW":
      return -8;
    default:
      return 8;
  }
};

const convertOtherEmployment = (otherEmploymentString) => {
  switch (otherEmploymentString) {
    case "EMPLOYED: SELF EMPLOYED":
    case "OTHER (SELF EMPLOYED )":
      return "SELF EMPLOYED";
    case "OTHER (PLEASE SPECIFY)ABOUT TO EMPLOYED":
      return "BEGINNING EMPLOYMENT";
    case "OTHER (SSI/PAYEE)":
      return "SSI/PAYEE";
    case "OTHER":
      return -1;
    default:
      return otherEmploymentString;
  }
};

export const handleIntake = (record) => {
  const interview_data = record.intake;
  if (interview_data) {
    const {
      functioning,
      interview_info,
      feelings,
      crime_info,
      social_connectedness,
      housing_stability,
      education_employment,
    } = interview_data;
    record.Assessment = "0600";
    record.FirstReceivedServicesDate = handleInterviewDate(interview_info.date);
    record.GrantID = "";
    record.SiteID = "";
    record.ConductedInterview = 1;
    record.InterviewDate = interview_info.date;
    record.WhyNotConducted = -1;
    record.WhoAdministered = 7;
    record.WhoAdministeredSpec = -1;
    //   military;
    record.EverServed = interview_data.military.served_in_military
      ? interview_data.military.served_in_military
      : -9;
    record.ActiveDuty_Self = interview_data.military.active_duty
      ? interview_data.military.active_duty
      : -9;
    //   functioning
    const {
      does_well_in_school,
      gets_along_with_family,
      gets_along_with_others,
      handle_daily_life,
      handle_unexpected_events,
      is_social,
      overall_mental_health,
    } = functioning;
    record.OverallMentalHealth = convertMentalHealth(overall_mental_health);
    record.HandlingDailyLife = handle_daily_life;
    record.DealwithUnexpectedEvents = handle_unexpected_events;
    record.GetsAlongWithFriends = gets_along_with_others;
    record.GetsAlongWithFamily = gets_along_with_family;
    record.SocialSituations = is_social;
    record.SchoolOrWork = does_well_in_school;
    //   feelings
    record.SafePlaceToLive = -9;
    const {
      bothered_by_problems,
      depressed,
      hopeless,
      life_was_an_effort,
      nervous,
      restless,
      worthless,
    } = feelings;
    record.Nervous = nervous;
    record.Hopeless = hopeless;
    record.Restless = restless;
    record.Depressed = depressed;
    record.EverythingEffort = life_was_an_effort;
    record.Worthless = worthless;
    record.PsychologicalEmotionalProblems = bothered_by_problems;
    //   housing stability
    const {
      correctional_facility,
      detox,
      emergency_department,
      homeless,
      satisfied_with_housing,
      mental_health_care,
      living_situation,
    } = housing_stability;

    record.BeenHomeless = homeless;
    record.SpentTimeHospitalMHC = mental_health_care;
    record.SpentTimeDetox = detox;
    record.SpentTimeJail = correctional_facility;
    record.SpentTimeER = emergency_department;
    record.LivingConditionsSatisfaction = satisfied_with_housing;
    record.Housing = convertHousing(living_situation);
    record.OtherHousingSpec =
      record.Housing === 9
        ? convertOtherHousing(living_situation.trim().toUpperCase())
        : -1;
    //   education employment
    const {
      highest_lvl_education,
      currently_employed,
      enough_money,
      enrolled_in_education,
    } = education_employment;
    record.Enrolled = enrolled_in_education;
    record.Education = convertEducation(
      highest_lvl_education ? highest_lvl_education : ""
    );
    record.Employment = convertEmployment(currently_employed);
    record.OtherEmploymentSpec =
      record.Employment === 8
        ? convertOtherEmployment(currently_employed.trim().toUpperCase())
        : "";
    record.EnoughMoneyForNeeds = enough_money;
    //   social connectedness
    const {
      accomplish_goals,
      crisis_support,
      happy_friendships,
      recovery_support,
      social_networks,
    } = social_connectedness;
    record.Friendships = happy_friendships;
    record.EnjoyPeople = social_networks;
    record.BelongInCommunity = social_connectedness.belong_in_community
      ? social_connectedness.belong_in_community
      : -9;
    record.SupportFromFamily = crisis_support;
    record.SupportFamilyFriends = recovery_support;
    record.GenerallyAccomplishGoal = accomplish_goals;
    //   crime info
    const { arrested, jail_time } = crime_info;
    record.SpentTimeJailorProbation = jail_time;
    record.BeenArrested = arrested;
    delete record.intake;
    delete record._id;
    let newKeyedRecord = handleNonIntakeKeys(record);
    return newKeyedRecord;
  }
  return null;
};

export const handleNonIntakeKeys = (record) => {
  record.Recover = -1;
  record.Complain = -1;
  record.Rights = -1;
  record.Responsibility = -1;
  record.SideEffects = -1;
  record.SharingTreatmentInformation = -1;
  record.SensitiveToCulture = -1;
  record.InformationNeeded = -1;
  record.ConsumerRunPrograms = -1;
  record.ComfortableAskingQuestions = -1;
  record.TreatmentGoals = -1;
  record.LikeServices = -1;
  record.Choices = -1;
  record.RecommendAgency = -1;
  return record;
};
