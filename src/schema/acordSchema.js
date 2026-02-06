import { z } from "zod";

const emailOptional = z.string().email("Invalid email").optional().or(z.literal(""));
const phoneOptional = z.string().optional();

const phoneType = z.enum(["HOME", "BUS", "CELL"]).optional();

export const acordSchema = z.object({
  header: z.object({
    formDate: z.string().min(1, "Form date is required"),
    insuredLocationCode: z.string().optional(),
    dateOfLoss: z.string().min(1, "Date of loss is required"),
    timeAmPm: z.enum(["AM", "PM"]),
    carrier: z.string().optional(),
    naicCode: z.string().optional(),
    policyNumber: z.string().min(1, "Policy number is required"),
    lineOfBusiness: z.string().optional(),
  }),

  agency: z.object({
    name: z.string().min(1, "Agency name required"),
    contact: z.string().optional(),
    phone: phoneOptional,
    phoneType: phoneType,
    fax: z.string().optional(),
    email: emailOptional,
    address: z.string().optional(),
    code: z.string().optional(),
    subcode: z.string().optional(),
    agencyCustomerId: z.string().optional(),
  }),

  insured: z.object({
    name: z.string().min(1, "Insured name required"),
    mailingAddress: z.string().optional(),
    dateOfBirth: z.string().optional(),
    fein: z.string().optional(),
    maritalOrCivilUnion: z.string().optional(),

    primaryPhone: phoneOptional,
    primaryPhoneType: phoneType,
    secondaryPhone: phoneOptional,
    secondaryPhoneType: phoneType,

    primaryEmail: emailOptional,
    secondaryEmail: emailOptional,
  }),

  contact: z.object({
    name: z.string().optional(),
    mailingAddress: z.string().optional(),
    whenToContact: z.string().optional(),
    contactInsured: z.boolean().optional(),

    primaryPhone: phoneOptional,
    primaryPhoneType: phoneType,
    secondaryPhone: phoneOptional,
    secondaryPhoneType: phoneType,

    primaryEmail: emailOptional,
    secondaryEmail: emailOptional,
  }),

  loss: z.object({
    locationStreet: z.string().optional(),
    locationCityStateZip: z.string().optional(),
    locationCountry: z.string().optional(),
    describeLocationIfNoStreet: z.string().optional(),
    policeOrFireContacted: z.string().optional(),
    reportNumber: z.string().optional(),
    descriptionOfAccident: z.string().min(1, "Accident description required"),
  }),

  insuredVehicle: z.object({
    vehNo: z.string().optional(),
    year: z.string().optional(),
    make: z.string().optional(),
    model: z.string().optional(),
    bodyType: z.string().optional(),
    type: z.string().optional(),
    vin: z.string().optional(),
    plateNumber: z.string().optional(),
    plateState: z.string().optional(),

    ownerSameAsInsured: z.boolean().optional(),
    ownerNameAddress: z.string().optional(),
    ownerPrimaryPhone: phoneOptional,
    ownerPrimaryPhoneType: phoneType,
    ownerSecondaryPhone: phoneOptional,
    ownerSecondaryPhoneType: phoneType,
    ownerPrimaryEmail: emailOptional,
    ownerSecondaryEmail: emailOptional,

    driverSameAsOwner: z.boolean().optional(),
    driverNameAddress: z.string().optional(),
    driverPrimaryPhone: phoneOptional,
    driverPrimaryPhoneType: phoneType,
    driverSecondaryPhone: phoneOptional,
    driverSecondaryPhoneType: phoneType,
    driverPrimaryEmail: emailOptional,
    driverSecondaryEmail: emailOptional,

    relationToInsured: z.string().optional(),
    driverDob: z.string().optional(),
    driverLicenseNo: z.string().optional(),
    driverLicenseState: z.string().optional(),
    purposeOfUse: z.string().optional(),
    usedWithPermission: z.string().optional(),

    describeDamage: z.string().optional(),
    estimateAmount: z.string().optional(),
    whereCanVehicleBeSeen: z.string().optional(),
    whenCanVehicleBeSeen: z.string().optional(),
    otherInsuranceCarrier: z.string().optional(),
    otherInsurancePolicyNumber: z.string().optional(),

    childSeatInstalled: z.enum(["Y", "N"]).optional(),
    childSeatInUse: z.enum(["Y", "N"]).optional(),
    childSeatSustainedLoss: z.enum(["Y", "N"]).optional(),
  }),

  otherVehicle: z.object({
    nonVehicle: z.boolean().optional(),
    vehNo: z.string().optional(),
    year: z.string().optional(),
    make: z.string().optional(),
    model: z.string().optional(),
    bodyType: z.string().optional(),
    type: z.string().optional(),
    vin: z.string().optional(),
    plateNumber: z.string().optional(),
    plateState: z.string().optional(),

    describeProperty: z.string().optional(),
    otherVehPropIns: z.enum(["Y", "N"]).optional(),
    carrierOrAgencyName: z.string().optional(),
    otherNaicCode: z.string().optional(),
    otherPolicyNumber: z.string().optional(),

    ownerNameAddress: z.string().optional(),
    ownerPrimaryPhone: phoneOptional,
    ownerPrimaryPhoneType: phoneType,
    ownerSecondaryPhone: phoneOptional,
    ownerSecondaryPhoneType: phoneType,
    ownerPrimaryEmail: emailOptional,
    ownerSecondaryEmail: emailOptional,

    driverSameAsOwner: z.boolean().optional(),
    driverNameAddress: z.string().optional(),
    driverPrimaryPhone: phoneOptional,
    driverPrimaryPhoneType: phoneType,
    driverSecondaryPhone: phoneOptional,
    driverSecondaryPhoneType: phoneType,
    driverPrimaryEmail: emailOptional,
    driverSecondaryEmail: emailOptional,

    describeDamage: z.string().optional(),
    estimateAmount: z.string().optional(),
    whereCanDamageBeSeen: z.string().optional(),
  }),

  injured: z.array(
    z.object({
      nameAddress: z.string().optional(),
      phone: z.string().optional(),
      ins: z.boolean().optional(),
      oth: z.boolean().optional(),
      veh: z.boolean().optional(),
      ped: z.boolean().optional(),
      age: z.string().optional(),
      extentOfInjury: z.string().optional(),
    })
  ).default([]),

  witnesses: z.array(
    z.object({
      nameAddress: z.string().optional(),
      phone: z.string().optional(),
      ins: z.boolean().optional(),
      oth: z.boolean().optional(),
      veh: z.boolean().optional(),
      otherSpecify: z.string().optional(),
    })
  ).default([]),

  reportedBy: z.string().optional(),
  reportedTo: z.string().optional(),
  remarks: z.string().optional(),
});

export const defaultValues = {
  header: {
    formDate: "",
    insuredLocationCode: "",
    dateOfLoss: "",
    timeAmPm: "AM",
    carrier: "",
    naicCode: "",
    policyNumber: "",
    lineOfBusiness: "",
  },
  agency: { phoneType: "BUS" },
  insured: { primaryPhoneType: "HOME", secondaryPhoneType: "CELL" },
  contact: { contactInsured: false, primaryPhoneType: "HOME", secondaryPhoneType: "CELL" },
  loss: {},
  insuredVehicle: {
    ownerPrimaryPhoneType: "HOME",
    ownerSecondaryPhoneType: "CELL",
    driverPrimaryPhoneType: "HOME",
    driverSecondaryPhoneType: "CELL",
  },
  otherVehicle: {
    nonVehicle: false,
    ownerPrimaryPhoneType: "HOME",
    ownerSecondaryPhoneType: "CELL",
    driverPrimaryPhoneType: "HOME",
    driverSecondaryPhoneType: "CELL",
  },
  injured: [{}, {}, {}],
  witnesses: [{}, {}, {}],
  reportedBy: "",
  reportedTo: "",
  remarks: "",
};
