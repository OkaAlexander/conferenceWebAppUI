import { IRoute } from "./../interface/IRoute";
import {
  FaIdCard,
  FaNetworkWired,
  FaUserAstronaut,
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
    title: "Event",
    route: "conference",
    icon: <FaNetworkWired />,
  },
  {
    title: "Guest",
    route: "guest",
    icon: <FaUserAstronaut />,
  },
  { title: "Users", route: "users", icon: <FaUsers /> },
  { title: "Profile", route: "profile", icon: <FaUserTie /> },
  { title: "Cards", route: "tags", icon: <FaIdCard /> },
];
