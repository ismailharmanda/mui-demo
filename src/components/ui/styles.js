import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    icon: {
      margin: theme.spacing(0, 2.5, 0, 0),
    },
    buttons: { marginTop: theme.spacing(5) },
    cardGrid: {
      padding: "20px,0",
    },
    card: { height: "100%", display: "flex", flexDirection: "column" },
    cardMedia: {
      paddingTop: "56.25%", //16:9
    },
    cardContent: { flexGrow: 1 },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: "100px",
    },
  };
});
