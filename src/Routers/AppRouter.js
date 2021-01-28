import React from "react";
import {BrowserRouter as Router,} from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
const AppRouter = () => {
  return (
    <Router>
      <DashboardRoutes/>
    </Router>
  );
};
export default AppRouter;
