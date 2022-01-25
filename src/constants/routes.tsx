import { IRoute } from "./../interface/IRoute";
import {
  FaNetworkWired,
  FaUserGraduate,
  FaUserPlus,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

export const AdminRoutes: IRoute[] = [
  {
    title: "Register Participant",
    route: "participant/register",
    icon: <FaUserPlus />,
  },
  {
    title: "Participants",
    route: "participants",
    icon: <FaUserGraduate />,
  },
  {
    title: "Conference",
    route: "conference",
    icon: <FaNetworkWired />,
  },
  { title: "Users", route: "users", icon: <FaUsers /> },
  { title: "Profile", route: "profile", icon: <FaUserTie /> },
];
