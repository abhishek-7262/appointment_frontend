import { lazy } from "react";

const Login = lazy(() => import("../pages/login/Login"));

const CommonOutlet = lazy(() => import("../components/outlet/CommonOutlet"));

export { Login, CommonOutlet };
