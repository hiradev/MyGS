import React from "react";
import { permissionPageStyle } from "../style/PermissionPageStyle";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const PermissionPageView = (props) => {
  const { allowedUserType, children } = props;

  const classes = permissionPageStyle();

  const userType = useSelector((state) => state.authReducer.state.userType);

  if (allowedUserType.includes(userType)) {
    return <>{children}</>;
  } else {
    return (
      <>
        <div className={classes.root}>
          <Typography align="center" variant="h3">
            Permission is not granted.
          </Typography>
          <Typography align="center" variant="subtitle2">
            Only some users are allowed to use this module
          </Typography>
          {/*<div className={classes.imageContainer}>*/}
          {/*  <img alt="Not Found" className={classes.image} src={Image} />*/}
          {/*</div>*/}
        </div>
      </>
    );
  }
};

export default PermissionPageView;
