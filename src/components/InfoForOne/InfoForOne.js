import React from "react";
import { Container, Grid, makeStyles, Chip } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  topBlock: {
    padding: theme.spacing(2, 0),
    "&  img": {
      maxWidth: theme.spacing(50),
      height: "auto",
    },
  },
  countryName: {
    marginLeft: theme.spacing(1),
  },
  paramsBlock: {
    margin: theme.spacing(2, 0),
  },
}));
const InfoForOne = ({ TVShow }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container justify="space-between" className={classes.topBlock}>
          <Grid item xs={6}>
            <img
              src={
                TVShow.show.image
                  ? TVShow.show.image.original
                  : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png"
              }
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <h1>{TVShow.show.name}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: TVShow.show.summary || "" }}
            ></div>
            <div className={classes.paramsBlock}>
              Country:
              <Chip
                color={
                  TVShow.show.network?.country?.name ? "primary" : "secondary"
                }
                className={classes.countryName}
                label={TVShow.show.network?.country?.name || "None"}
              />
            </div>
            <div className={classes.paramsBlock}>
              Genres:
              {TVShow.show.genres.map((elem) => (
                <Chip
                  key={elem}
                  color="primary"
                  variant="outlined"
                  className={classes.countryName}
                  label={elem}
                />
              ))}
            </div>
            <div className={classes.paramsBlock}>
              language:
              <Chip
                color="primary"
                className={classes.countryName}
                label={TVShow.show.language}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default InfoForOne;
