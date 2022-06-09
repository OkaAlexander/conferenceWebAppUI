import { IConferencePackage } from "../../interface/IConferencePackage";

export function validateConferencePackageInfo(info: IConferencePackage) {
  if (isNaN(info.registrationFee)) {
    throw "invalid registration fee";
  }
  if (info.title.length <= 0) {
    throw "package title required";
  }
  if (isNaN(info.costOfAccomodation)) {
    throw "invalid cost of accomodation";
  }
  if (isNaN(info.costOfFeeding)) {
    throw "invalid cost of feeding";
  }
  if (isNaN(info.materialCost)) {
    throw "Invalid cost of materials";
  }
  if (isNaN(info.conferenceDuration) || info.conferenceDuration == 0) {
    throw "invalid conference duration";
  }
}

export function calculatePackageCost(info: IConferencePackage) {
  let total =
    info.costOfAccomodation +
    info.costOfFeeding +
    info.materialCost +
    info.registrationFee;
  return total * info.conferenceDuration;
}
