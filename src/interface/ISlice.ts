import { IGuestInfo, IParticipant, IProgram, IUser } from "./IModel";

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
