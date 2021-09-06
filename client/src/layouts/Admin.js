import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";

// views
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
// import Finance from "views/admin/Finance.js";
import Notice from "views/admin/Notice.js";
import Forum from "views/admin/Forum.js"
import {NAVIGATION_ROUTES} from "../navigation/constant/NavigationRoutes";
import {People} from "../views/admin/People";

export default function Admin() {
  return (
    <>
      <Sidebar />     
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path={NAVIGATION_ROUTES.dashboard} exact component={Dashboard} />
            <Route path={NAVIGATION_ROUTES.maps} exact component={Maps} />
            <Route path={NAVIGATION_ROUTES.settings} exact component={Settings} />
            <Route path={NAVIGATION_ROUTES.tables} exact component={Tables} />
            {/* <Route path="/admin/Finance" exact component={Finance} /> */}
            <Route path={NAVIGATION_ROUTES.notice} exact component={Notice} />
            <Route path={NAVIGATION_ROUTES.forum} exact component={Forum} />
            {/* <Route path="/Finance/ViewPettycash" exact component={PettyCash} /> */}
            <Route path={NAVIGATION_ROUTES.peopleManagement} exact component={People} />

            <Redirect from="/admin" to={NAVIGATION_ROUTES.dashboard} />
          </Switch>
          {/* <FooterAdmin/> */}
        </div>  
      </div>
      
    </>
  );
}
