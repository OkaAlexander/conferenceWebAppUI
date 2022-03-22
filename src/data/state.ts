import {
  IUserSlice,
  IProgramsSlice,
  IUsersSlice,
  IParticipantsSlice,
  IResponseSlice,
  IGuestSlice,
  IMemberSlice,
  IPrintSlice
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

export const printReducerState:IPrintSlice={
values:{
  total:0,
  count:4,
  value:4,
  start_at:0
}
}