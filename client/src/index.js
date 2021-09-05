import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import {SnackbarProvider} from "notistack";
import store from "./store/config/store";
import {Provider} from "react-redux";
import Routes from "./navigation/Routes";

ReactDOM.render(
    <Provider store={store}>
        <SnackbarProvider>
            <Routes />
        </SnackbarProvider>
    </Provider>,
  document.getElementById("root")
);
