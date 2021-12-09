import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  ButtonGroup,
} from "@material-ui/core";
import { Menu as MenuIcon, PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

export const Ui = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PhotoCamera />
          </IconButton>
          <Typography variant="h6">Album Layout</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container style={{ background: "yellow" }} maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello everyone this is a photo album and I'm trying to make this
              sentence as long as possible. I'm learning material UI.{" "}
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
};
