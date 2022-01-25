import {
  IUserSlice,
  IProgramsSlice,
  IUsersSlice,
  IParticipantsSlice,
  IResponseSlice,
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
