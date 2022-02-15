import {
  IUserSlice,
  IProgramsSlice,
  IUsersSlice,
  IParticipantsSlice,
  IResponseSlice,
  IGuestSlice,
  IMemberSlice,
} from "./../interface/ISlice";

export const userState: IUserSlice = {
  user: null,
};

export const conferencesState: IProgramsSlice = {
  conferences: [],
};
export const usersState: IUsersSlice = {
  users: [],
};

export const responseState: IResponseSlice = {
  loading: false,
  error: null,
  message: null,
};

export const participantState: IParticipantsSlice = {
  participants: [],
};

export const guetsState: IGuestSlice = {
  guest: [],
};

export const memberState: IMemberSlice = {
  info: null,
};
