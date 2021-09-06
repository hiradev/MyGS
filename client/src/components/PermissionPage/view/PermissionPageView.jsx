import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const PermissionPageView = (props) => {
  const { allowedUserType, children } = props;

  const userType = useSelector((state) => state.authReducer.userType);

  if (allowedUserType.includes(userType)) {
    return <>{children}</>;
  } else {
    return (
      <>
        <div>
          <Typography align="center" variant="h3" style={{ color: 'white'}}>
            Permission is not granted.
          </Typography>
          <Typography align="center" variant="subtitle2" style={{ color: 'white'}}>
            Only some users are allowed to use this module
          </Typography>
        </div>
      </>
    );
  }
};

export default PermissionPageView;
