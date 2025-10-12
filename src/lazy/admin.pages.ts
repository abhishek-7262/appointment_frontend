import { lazy } from "react";

const AdminDashboard = lazy(() => import("../pages/admin/Admin"))
const Dashboard = lazy(() => import("../pages/admin/pages/dashboard/Dashboard"))
const AdminSlot = lazy(() => import("../pages/admin/pages/slot/Slot"))

export { AdminDashboard, Dashboard, AdminSlot }