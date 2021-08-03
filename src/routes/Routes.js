import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../components/LoginPage/LoginPage";
import DashboardRoutes from "./DashboardRoutes";

/* Lazy Loading Routes */
const NotFoundPage = lazy(() =>
  import("../components/NotFoundPage/NotFoundPage")
);

const routes = (
  <BrowserRouter>
    <Suspense fallback={<div>Loading ....</div>}>
      <Switch>
        {DashboardRoutes}
        <Route path="/" component={LoginPage} exact />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default routes;
