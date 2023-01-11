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

const handleNonIntakeKeys = (record) => {
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
  record.LastServiceDate = "01/1869";
  record.Svc_Screening = -2;
  record.Svc_Assessment = -2;
  record.Svc_TreatmentPlanning = -2;
  record.Psychopharmacological = -2;
  record.Svc_MentalHealth = -2;
  record.Svc_CoOccuring = -2;
  record.Svc_CaseManagement = -2;
  record.Svc_TraumaSpecific = -2;
  record.Svc_ReferredCare = -2;
  record.Svc_MedicalCare = -2;
  record.Svc_Employment = -2;
  record.Svc_Family = -2;
  record.Svc_ChildCare = -2;
  record.Svc_Transportation = -2;
  record.Svc_Education = -2;
  record.Svc_Housing = -2;
  record.Svc_SocialRecreational = -2;
  record.Svc_ConsumerOperated = -2;
  record.Svc_HIVTesting = -2;
  record.Svc_ReferredSupport = -2;
  record.DischargeStatus = -1;
  record.DischargeDate = "01/1869";
  record.OtherDischargeStatus = "N/A";
  return record;
};

const handleDischargeCarePerception = (record) => {
  const {
    belief_in_growth,
    free_to_complain,
    information_rights,
    life_responsibility,
    warned_of_side_effects,
    respected_privacy,
    culturaly_sensitive,
    obtained_information,
    encouraged_support_groups,
    comfortable_with_questions,
    decided_treatment_goals,
    enjoyed_services,
    satisfied_with_treatment,
    would_recommend,
  } = record.discharge.care_perception;
  record.record.Recover = belief_in_growth;
  record.Complain = free_to_complain;
  record.Rights = information_rights;
  record.Responsibility = life_responsibility;
  record.SideEffects = warned_of_side_effects;
  record.SharingTreatmentInformation = respected_privacy;
  record.SensitiveToCulture = culturaly_sensitive;
  record.InformationNeeded = obtained_information;
  record.ConsumerRunPrograms = encouraged_support_groups;
  record.ComfortableAskingQuestions = comfortable_with_questions;
  record.TreatmentGoals = decided_treatment_goals;
  record.LikeServices = enjoyed_services;
  record.Choices = satisfied_with_treatment;
  record.RecommendAgency = would_recommend;
  return record;
};

const handleDischargeServices = (record) => {
  const { core, support } = record.discharge.services_received;
  const {
    screening,
    assessment,
    treatment_planning,
    psychopharmacology,
    mental_health,
    cooccurring_conditions,
    case_management,
    trauma_specific,
    provider_referral: core_referral,
  } = core;
  const {
    medical_care,
    employment,
    family_support,
    child_care,
    transportation,
    education,
    housing,
    social_activites,
    consumer_services,
    HIV_testing,
    provider_referral: support_referral,
  } = support;
  record.Svc_Screening = screening;
  record.Svc_Assessment = assessment;
  record.Svc_TreatmentPlanning = treatment_planning;
  record.Psychopharmacological = psychopharmacology;
  record.Svc_MentalHealth = mental_health;
  record.Svc_CoOccuring = cooccurring_conditions;
  record.Svc_CaseManagement = case_management;
  record.Svc_TraumaSpecific = trauma_specific;
  record.Svc_ReferredCare = core_referral;
  record.Svc_MedicalCare = medical_care;
  record.Svc_Employment = employment;
  record.Svc_Family = family_support;
  record.Svc_ChildCare = child_care;
  record.Svc_Transportation = transportation;
  record.Svc_Education = education;
  record.Svc_Housing = housing;
  record.Svc_SocialRecreational = social_activites;
  record.Svc_ConsumerOperated = consumer_services;
  record.Svc_HIVTesting = HIV_testing;
  record.Svc_ReferredSupport = support_referral;
  return record;
};

const convertDischargeStatus = (statusString) => {
  switch (statusString.trim().toUpperCase()) {
    case "MUTUALLY AGREED CESSATION OF TREATMENT":
      return 1;
    case "NO CONTACT WITHIN 90 DAYS":
      return 3;
    case "CLINICALLY REFERRED OUT":
      return 4;
    case "DEATH":
      return 2;
    default:
      return 5;
  }
};

const handleUnknownKeys = (record) => {
  record.PrimaryDiagnosis = "UNKNOWN";
  record.SecondaryDiagnosis = "UNKNOWN";
  record.TertiaryDiagnosis = "UNKNOWN";
  record.ClientCrisisMentalHealthSvc = "UNKNOWN";
  record.ClientScreeningSvc = "UNKNOWN";
  record.ClientPatientSvc = "UNKNOWN";
  record.ClientOutpatientMentalHealthSvc = "UNKNOWN";
  record.ClientPhysicalHealthScreening = "UNKNOWN";
  record.ClientTargetedCaseMgmt = "UNKNOWN";
  record.ClientPsychiatricRehabSvc = "UNKNOWN";
  record.ClientPeerSupportSvc = "UNKNOWN";
  record.ClientFamilyPsychoeducationSvc = "UNKNOWN";
  record.ClientVeteransMilitarySvc = "UNKNOWN";
  record.bpressure_s_G8 = "UNKNOWN";
  record.bpressure_d_G8 = "UNKNOWN";
  record.Weight_G8 = "UNKNOWN";
  record.Height_G8 = "UNKNOWN";
  return record;
};

const handleNonCCBHCKeys = (record) => {
  record.bpressure_s_G3 = -1;
  record.bpressure_d_G3 = -1;
  record.Weight_G3 = -1;
  record.Height_G3 = -1;
  record.MedicationAsPrescribed = -1;
  record.TreatmentCompliant = -1;
  record.ClientRefMentalHealthSvc_G2 = -1;
  record.ClientRecdMentalHealthSvc_G2 = -1;
  record.ClientRefSUDSvc_G2 = -1;
  record.ClientRecdSUDSvc_G2 = -1;
  record.SvcHelpedAvoidJusticeSystem = -1;
  record.BeenToEmergencyPHC = -1;
  record.BeenHospitalizedOvernightPHC = -1;
  record.BreathCO = -1;
  record.DateBloodDrawn = "01/01/1869";
  record.Plasma_gluc = -1;
  record.HgbA1c = -1;
  record.Lipid_TotChol = -1;
  record.Lipid_LDL = -1;
  record.HIVTest = -1;
  record.HIVTestResult = -1;
  record.HIVTestTreatmentServices = -1;
  record.HBVTest = -1;
  record.HBVTestResult = -1;
  record.HBVTestTreatmentServices = -1;
  record.HCVTest = -1;
  record.HCVTestResult = -1;
  record.HCVTestTreatmentServices = -1;
  record.HIVGranteeReferral = -1;
  record.HIVARTMedication = -1;
  record.HIVARTMedicationFreq = -1;
  record.ClientRefMentalHealthSvc_G5 = -1;
  record.ClientRecdMentalHealthSvc_G5 = -1;
  record.ClientRefSUDSvc_G5 = -1;
  record.ClientRecdSUDSvc_G5 = -1;
  record.OftennessOfTeamInteraction = -1;
  record.KnowWhoToCall = -1;
  record.ExpPsychosis = -1;
  record.DateExpInitialPsychosis = -1;
  record.ReferredToPsychosisSvc = -1;
  record.DateReceivedPsychosisSvc = -1;
  record.DateRecdPsychosisSvcNoResKey = -1;
  record.TraumaLossExpIdAddressed = -1;
  record.ProbBehaviorSymptDecreases = -1;
  return record;
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
    record.GrantID = "SM85150";
    record.SiteID = "NORA_DS";
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
    let firstStage = handleNonIntakeKeys(record);
    let secondStage = handleUnknownKeys(firstStage);
    let thirdStage = handleNonCCBHCKeys(secondStage);
    return thirdStage;
  }
  return null;
};

export const handleDischarge = (record) => {
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
    record.Assessment = "0699";
    record.FirstReceivedServicesDate = handleInterviewDate(interview_info.date);
    record.GrantID = "SM85150";
    record.SiteID = "NORA_DS";
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
    // discharge specific
    const { discharge_date, discharge_type, last_service } =
      record.discharge.discharge_info;
    record.LastServiceDate = `${last_service.split("-")[0]}/${
      last_service.split("-")[2]
    }`;
    record.DischargeDate = `${discharge_date.split("-")[0]}/${
      discharge_date.split("-")[2]
    }`;
    record.DischargeStatus = convertDischargeStatus(discharge_type);
    record.OtherDischargeStatus =
      discharge_type == 8 ? discharge_type.trim().toUpperCase() : "N/A";
    let firstStage = handleDischargeCarePerception(record);
    let secondStage = handleDischargeServices(firstStage);
    delete record._id;
    delete record.discharge;
    let thirdStage = handleUnknownKeys(secondStage);
    let fourthStage = handleNonCCBHCKeys(thirdStage);
    return fourthStage;
  }
  return null;
};
