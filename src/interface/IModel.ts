export interface IParticipant {
  id: string;
  name: string;
  phone: string;
  email: string;
  organization: string;
  position: string;
  disabled: number;
  disability: string;
  diet: string;
  location: string;
  picture: string;
  gender: string;
  conference_id: string;
  accomodation: number;
}

export interface IProgram {
  title: string;
  end_date: string;
  venue: string;
  id: string;
  description: string;
  status: number;
  start_date: string;
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

export interface IGuestInfo {
  role: string;
  portfolio: string;
  name: string;
  id: string;
  picture: string;
}

export interface IPrintValues{
total:number;
count:number;
value:number;
start:number;
end:number;
}
