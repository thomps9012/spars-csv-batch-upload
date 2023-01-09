const sample_cmhs_record = {
  // Text / String
  ClientID,
  // Text / String
  GrantID,
  // Text / String
  SiteID,
  //   Text / String
  //   0600 = Baseline
  //   0301 = 3 Month Reassessment
  //   0601 = 6 Month Reassessment
  //   0699 = Clinical Discharge
  Assessment,
  //   Text / String
  // MM/YYYY format
  FirstReceivedServicesDate,
  //   Text / String
  // MM/YYYY format
  DOB,
  //   Yes / No Integer
  // 0 = No
  // 1 = Yes
  ConductedInterview,
  //   Text / String
  // MM/DD/YYYY format
  InterviewDate,
  //   Integer
  // 1 = Not Able to obtain consent from proxy
  // 2 = Consumer was impaired or unable to provide consent
  //   3 = Client refused this interview
  // 4 = Client was not reached for interview
  // Client refused all interviews
  // -1 = N/A (Not Applicable)
  WhyNotConducted,
  //   Integer
  // 1 = Adult
  // 2 = Child
  ClientType,
  //   Integer
  // 1 = Child
  // 2 = Caregiver
  // -1 = N/A (Not Applicable)
  RespondentType,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  TraumaScreenedConducted,
  //   Integer
  //   1 = No time during interview
  // 2 = No training around trauma screening/disclosure
  // 3 = No instituional/organizational policy around screening
  // 4 = No referral network and/or infrastructure for trauma services currently available
  // 5 = Other
  // -1 = N/A (Not Applicable)
  TraumaNoScreenResponse,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  TraumaYesScreenResponse,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  SuicideScreen,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  SuicideSafetyPlanDeveloped,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  SuicideLethalAssessed,
  //   ICD10 Code
  DiagnosisOne,
  //   ICD10 Code
  DiagnosisTwo,
  //   ICD10 Code
  DiagnosisThree,
  //   Integer
  //   1 = no clinican assessment
  // 2 = High risk factors requiring intervention and not yet meeting criteria for a DSM/ICD diagnosis
  // 3 = Only met criteria for a "Z" code
  // 4 = Other (please specify)
  NoMentalHealthDiagReason,
  //   Text / String
  NoMentalHealthDiagReasonSpec,
  //   Integer
  //   1 = Male
  //   2 = Female
  //  5 = Transgender (male to female)
  //  6 = Transgender (female to male)
  //  7 = Gender non-conforming
  //  4 = Other (specify)
  //  -1 = N/A (Not Applicable)
  //  -7 = Refused
  //  -9 = Missing Data
  Gender,
  //   Text / String
  GenderOtherSpec,
  //   Integer
  // 1 = Straight or Heterosexual
  // 2 = Homosexual (Gay/Lesbian)
  // 3 = Bisexual
  // 4 = Something else? (please specify)
  // 5 = Queer
  // 6 = Pansexual
  // 7 = Questioning
  // 8 = Asexual
  //  -1 = N/A (Not Applicable)
  // -2 = Not Yet Asked
  //  -7 = Refused
  //  -9 = Missing Data
  SexualIdentity,
  //   Text / String
  SexualIdentityOtherSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  HispanicLatino,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicCentralAmerican,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicCuban,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicDominican,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicMexican,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicPuertoRican,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicSouthAmerican,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EthnicOther,
  //   Text / String
  EthnicOtherSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceBlack,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceWhite,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceAmericanIndian,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceAlaskaNative,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceSouthAsian,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceChinese,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceFilipino,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceJapanese,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceKorean,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceVietnamese,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceOtherAsian,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceNativeHawaiian,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceGuamanianChamorro,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceSamoan,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceOtherPacificIslander,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RaceOther,
  //   Text / String
  RaceOtherSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpeakOtherLanguage_EN,
  //   Text / String
  SpeakWhatLanguage_EN,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpeakOtherLanguage_ES,
  //   Text / String
  SpeakWhatLanguage_ES,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  EverServed,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  ActiveDuty_Self,
  //   Integer
  // 1 = Excellent
  //   2 = Very Good
  // 3 = Good
  // 4 = Fair
  // 5 = Poor
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  OverallMentalHealth,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  HandlingDailyLife,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  DealwithUnexpectedEvents,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  GetsAlongWithFriends,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  GetsAlongWithFamily,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  SocialSituations,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  SchoolOrWork,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  SafePlaceToLive,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  Nervous,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  Hopeless,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  Restless,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  Depressed,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  EverythingEffort,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  Worthless,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  PsychologicalEmotionalProblems,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  BeenHomeless,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpentTimeHospitalMHC,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpentTimeDetox,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpentTimeJail,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SpentTimeER,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  LivingConditionsSatisfaction,
  // Integer
  // 1 = Owned or Rented Housing
  // 2 = Someone else's housing
  // 3 = Homeless
  // 4 = Group Home
  // 5 = Adult Foster Care
  // 6 = Transitional Living Facility
  // 9 = Hospital (medical)
  // 10 = Hospital (psychiatric)
  // 19 = Detox / Inpatient
  // 11 = Correctional Facility
  // 12 = Nursing Home
  // 13 = VA Hospital
  // 14 = Veteran's Home
  // 15 = Military Base
  // 19 = Other (specify)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  Housing,
  // Text / String
  OtherHousingSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Enrolled,
  //   Integer
  //   11 = Less than 12th Grade
  // 12 = High School Diploma
  // 13 = Voc / Tech Diploma
  // 14 = Some College or University
  // 15 = Bachelor's Degree
  // 16 = Graduate Work / Degree
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  Education,
  //   Integer
  // 1 = Employed full-time
  // 2 = Employed part-time
  // 3 = Unemployed but looking for work
  // 7 = unemployed, not looking for work
  // 6 = retired, not working
  // 8 = Other (specify)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  Employment,
  // Text / String
  OtherEmploymentSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  EnoughMoneyForNeeds,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  BeenArrested,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -7 = Refused
  // -9 = Missing Data
  SpentTimeJailorProbation,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Recover,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Complain,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Rights,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Responsibility,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SideEffects,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SharingTreatmentInformation,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SensitiveToCulture,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  InformationNeeded,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ConsumerRunPrograms,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ComfortableAskingQuestions,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  TreatmentGoals,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  LikeServices,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Choices,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  RecommendAgency,
  // Integer
  //   1 = Administrative Staff
  // 2 = Care Coordinator
  // 3 = Case Manager
  // 4 = Clinician Providing Direct Services
  // 5 = Clinician Not Providing Direct Services
  // 6 = Consumer / Peer
  // 7 = Data Collector / Evaluator
  // 9 = Family Advocate
  // 12 = Other (specify)
  // -1 = N/A
  // -9 = Missing Data
  WhoAdministered,
  //   Text/String
  WhoAdministeredSpec,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Friendships,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  EnjoyPeople,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  BelongInCommunity,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SupportFromFamily,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SupoortFamilyFriends,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  GenerallyAccomplishGoal,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  MedicationAsPrescribed,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  TreatmentCompliant,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRefMentalHealthSvc_G2,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRecdMentalHealthSvc_G2,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRefSUDSvc_G2,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRecdSUDSvc_G2,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  SvcHelpedAvoidJusticeSystem,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  BeenToEmergencyPHC,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  BeenHospitalizedOvernightPHC,
  //   Integer
  // 11 - 320 (displayed in mmHg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  bpressure_s_G3,
  //   Integer
  // 11 - 200 (displayed in mmHg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  bpressure_d_G3,
  //   Integer
  // 11 - 455 (displayed in kg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Weight_G3,
  //   Integer
  // 110 - 250 (displayed in cm)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Height_G3,
  //   Integer
  // 0 - 300 (displayed in ppm)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  BreathCO,
  //   Date
  //   format MM/DD/YYYY
  // 01/01/1869 = N/A
  // 07/01/1869 = Refused
  // 00/01/1869 = Missing Data
  DateBloodDrawn,
  // Integer
  // 1 - 1500 (displayed in mg/dL)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Plasma_gluc,
  // Float
  // 0.1 - 25.0 (displayed in a %)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HgbA1c,
  // Integer
  // 1 - 500 (displayed in mg/dL)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Lipid_TotChol,
  // Integer
  // 1 - 300 (displayed in mg/dL)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Lipid_LDL,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HIVTest,
  // Integer
  // 1 = Positive
  // 2 = Negative
  // 3 = Indeterminate
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  HIVTestResult,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HIVTestTreatmentServices,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HBVTest,
  // Integer
  // 1 = Positive
  // 2 = Negative
  // 3 = Indeterminate
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  HBVTestResult,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HBVTestTreatmentServices,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HCVTest,
  // Integer
  // 1 = Positive
  // 2 = Negative
  // 3 = Indeterminate
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  HCVTestResult,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HCVTestTreatmentServices,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HIVGranteeReferral,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  HIVARTMedication,
  //   Integer
  //   1 = Always
  //   2 = Usually
  //   3 = Sometimes
  //   4 = Rarely
  //   5 = Never
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  HIVARTMedicationFreq,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRefMentalHealthSvc_G5,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRecdMentalHealthSvc_G5,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRefSUDSvc_G5,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ClientRecdSUDSvc_G5,
  // Integer
  //   1 = Daily
  //   2 = Weekly
  //   3 = Monthly
  //   4 = Never
  // -7 = Refused
  // -8 = Don't Know
  // -9 = Missing Data
  OftennessOfTeamInteraction,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  KnowWhoToCall,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ExpPsychosis,
  //   Date
  // Format MM/DD/YYYY hh:mm:ss
  // 12/31/1899 12:00:00 AM = N/A
  DateExpInitialPsychosis,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ReferredToPsychosisSvc,
  //   Date
  // Format MM/YYYY
  DateReceivedPsychosisSvc,
  //   Integer
  // -1 = N/A (Not Applicable)
  // -8 = Don't Know
  // -9 = Missing Data
  DateRecdPsychosisSvcNoResKey,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientCrisisMentalHealthSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientScreeningSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientPatientSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientOutpatientMentalHealthSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientPhysicalHealthScreening,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientTargetedCaseMgmt,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientPsychiatricRehabSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientPeerSupportSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientFamilyPsychoeducationSvc,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -9 = Missing Data
  ClientVeteransMilitarySvc,
  //   Integer
  // 11 - 320 (displayed in mmHg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  bpressure_s_G8,
  //   Integer
  // 11 - 200 (displayed in mmHg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  bpressure_d_G8,
  //   Integer
  // 11 - 455 (displayed in kg)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Weight_G8,
  //   Integer
  // 110 - 250 (displayed in cm)
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  Height_G8,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  TramuaLossExpIdAddressed,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -1 = N/A (Not Applicable)
  // -7 = Refused
  // -9 = Missing Data
  ProbBehaviorSymptDecreased,
  //   Date
  // Format MM/YYYY
  LastServiceDate,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Screening,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Assessment,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_TreatmentPlanning,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Psychopharmacological,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_MentalHealth,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_CoOccuring,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_CaseManagement,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_TraumaSpecific,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_ReferredCore,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_MedicalCare,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Employment,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Family,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_ChildCare,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Transportation,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Education,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_Housing,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_SocialRecreational,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_ConsumerOperated,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_HIVTesting,
  //   Integer
  // 0 = No
  // 1 = Yes
  // -2 = Unknown
  // -3 = Service Not Available
  Svc_ReferredSupport,
  //   Date
  // Format MM/YYYY
  DischargeDate,
  // Integer
  //   01 = Mutually agreed cessation of treatment
  // 06 = Withdrew from/refused treatment
  // 03 = No contact within 90 days of last encounter
  // 04 = Clinically referred out
  // 02 = Date
  // 05 = Other (specify)
  // -1 = N/A (Not Applicable)
  DischargeStatus,
  //   Text / String
  OtherDischargeStatus,
  //   Autopopulated
  BatchID,
  //   Autopopulated
  QAOnly,
};
