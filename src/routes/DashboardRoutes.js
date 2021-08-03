import { lazy } from "react";
import { Route } from "react-router-dom";

/* Lazy Loading Routes */
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));

const DashboardRoutes = <Route path="/dashboard" component={Dashboard} />;

export default DashboardRoutes;
