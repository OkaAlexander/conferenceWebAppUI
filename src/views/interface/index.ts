import { IConferencePackage } from "../../interface/IConferencePackage";

export interface INewConferenceInfo {
  title: string;
  description: string;
  start_date: string;
  venue: string;
  end_date: string;
  package: IConferencePackage[];
}
