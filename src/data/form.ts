import { IGender } from "../interface/IForm";
import { IParticipant } from "../interface/IModel";

export const GenderData: IGender[] = [
  { title: "Male", value: "male" },
  { title: "Female", value: "female" },
];

export const DisabilityData: { title: string; value: number }[] = [
  { title: "Yes", value: 1 },
  { title: "No", value: 0 },
];

export const initialParticipantInfo: IParticipant = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  diet: "",
  location: "",
  organization: "",
  position: "",
  disabled: 0,
  disability: "",
  conference_id: "",
  id: "",
  picture: "",
  accomodation: 0,
  package_id: "",
};
