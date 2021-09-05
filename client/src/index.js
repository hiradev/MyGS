import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import {SnackbarProvider} from "notistack";
import {Provider} from "react-redux";
import Routes from "./navigation/Routes";
import {persistedStore, reduxPersistStore} from "./store/persistStore";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={reduxPersistStore}>
        <PersistGate
            persistor={persistedStore}>
            <SnackbarProvider>
                <Routes />
            </SnackbarProvider>
        </PersistGate>
    </Provider>,
  document.getElementById("root")
);
