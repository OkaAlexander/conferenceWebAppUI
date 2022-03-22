import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  GuestPage,
  HomePage,
  MeetingsPage,
  ParticipantsPage,
  PrintCardsPage,
  ProfilePage,
  RegisterParticipantPage,
  UsersPage,
} from "../pages/admin";
import { LandingPage, LoginPage, MemberRegistration } from "../pages/frontend";
import { ParticipantHomePage, ParticipantLogin } from "../pages/participant";
import DashboardPage from "../pages/participant/DashboardPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/uenr-conference/participant/register"
        element={<MemberRegistration />}
      />
      <Route path="/home" element={<HomePage />}>
        <Route path="guest" element={<GuestPage />} />
        <Route path="participants" element={<ParticipantsPage />} />
        <Route path="conference" element={<MeetingsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route
          path="participant/register"
          element={<RegisterParticipantPage />}
        />
        <Route path="tags" element={<PrintCardsPage />} />
      </Route>
      <Route path="uenr-conference/member" element={<ParticipantHomePage />}>
        <Route path="info" element={<DashboardPage />} />
      </Route>
      <Route
        path="uenr-conference/member/login"
        element={<ParticipantLogin />}
      />
    </Routes>
  );
}
