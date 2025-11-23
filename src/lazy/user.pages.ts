import { lazy } from "react";

const UserDashboard = lazy(() => import("../pages/user/User"));

const UserDashboardPage = lazy(
  () => import("../pages/user/pages/dashboard/Userdashboard")
);
const UserAppointmentPage = lazy(
  () => import("../pages/user/pages/appointments/AppointmentsPage")
);

export { UserDashboard, UserDashboardPage, UserAppointmentPage };
