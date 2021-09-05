import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbarlogin from "components/Navbars/Navbarlogin.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import {NAVIGATION_ROUTES} from "../navigation/constant/NavigationRoutes";

export default function Auth() {
  return (
    <>
      <Navbarlogin transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
               style={{ backgroundImage: "url(" + require("assets/img/register_bg_2.png").default + ")",}}
          />
          <Switch>
            <Route path={NAVIGATION_ROUTES.login} exact component={Login} />
            <Route path={NAVIGATION_ROUTES.register} exact component={Register} />
            <Redirect from="/auth" to={NAVIGATION_ROUTES.login} />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
