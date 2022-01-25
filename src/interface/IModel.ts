export interface IParticipant {
  id: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  position: string;
  hotel: string;
  room: string;
  special_need: string;
  remark: string;
  picture: string;
  gender: string;
  conference_id: string;
}

export interface IProgram {
  title: string;
  date: string;
  venue: string;
  id: string;
  description: string;
  status: number;
  time: string;
}

export interface IAuth {
  username: string;
  password: string;
}

export interface IUser {
  role: number;
  status: number;
  username: string;
  password: string;
  id: string;
  name: string;
}
