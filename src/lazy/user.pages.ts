import { lazy } from "react";

const UserDashboard = lazy(() => import("../pages/user/User"));

const UserDashboardPage = lazy(
  () => import("../pages/user/pages/dashboard/Userdashboard")
);

export { UserDashboard, UserDashboardPage };
