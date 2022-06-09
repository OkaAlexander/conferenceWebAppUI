import { IConferencePackage } from "./IConferencePackage";
import {
  IGuestInfo,
  IParticipant,
  IPrintValues,
  IProgram,
  IUser,
} from "./IModel";

export interface IResponseSlice {
  loading: boolean;
  error: any;
  message: any;
}

export interface IProgramsSlice {
  conferences: IProgram[];
}
export interface IParticipantsSlice {
  participants: IParticipant[];
}
export interface IMemberSlice {
  info: IParticipant | null;
}

export interface IUserSlice {
  user: IUser | null;
}
export interface IUsersSlice {
  users: IUser[];
}

export interface IGuestSlice {
  guest: IGuestInfo[];
}

export interface IPrintSlice {
  values: IPrintValues;
}

export interface IConferencePackageSlice {
  conference_packages: IConferencePackage[];
}
