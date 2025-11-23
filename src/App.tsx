import React, { Suspense } from "react";
import LoadingScreen from "./components/loading-screen/LoadingScreen";
import { Routes, Route } from "react-router-dom";

import { Login } from "./lazy/global.pages";

import { AdminDashboard, Dashboard, AdminSlot } from "./lazy/admin.pages";

import {
  UserDashboard,
  UserDashboardPage,
  UserAppointmentPage,
} from "./lazy/user.pages";

const App: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="" element={<Dashboard />}></Route>
          <Route path="slots" element={<AdminSlot />}></Route>
        </Route>

        <Route path="/user" element={<UserDashboard />}>
          <Route path="" element={<UserDashboardPage />}></Route>
          <Route
            path="available-appointments"
            element={<UserAppointmentPage />}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
