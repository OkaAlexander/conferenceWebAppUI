import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  MeetingsPage,
  ParticipantsPage,
  ProfilePage,
  RegisterParticipantPage,
  UsersPage,
} from "../pages/admin";
import { LandingPage, LoginPage } from "../pages/frontend";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />}>
        <Route path="participants" element={<ParticipantsPage />} />
        <Route path="conference" element={<MeetingsPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route
          path="participant/register"
          element={<RegisterParticipantPage />}
        />
      </Route>
    </Routes>
  );
}
