import { makeStyles } from "@material-ui/styles";

export const permissionPageStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    paddingTop: "5vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  imageContainer: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    width: 560,
    maxHeight: 300,
    height: "auto",
  },
}));
