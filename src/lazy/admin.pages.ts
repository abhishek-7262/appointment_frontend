import { lazy } from "react";

const AdminDashboard = lazy(() => import("../pages/admin/Admin"));
const Dashboard = lazy(
  () => import("../pages/admin/pages/dashboard/Dashboard")
);
const AdminSlot = lazy(() => import("../pages/admin/pages/slot/Slot"));
const NewSlotPage = lazy(
  () => import("../pages/admin/pages/slot/components/new-slot/NewSlot")
);

export { AdminDashboard, Dashboard, AdminSlot, NewSlotPage };
