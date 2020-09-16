import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, TextField, ListItem, List } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  getTVShowsBlock: {
    padding: theme.spacing(3, 2, 5),
    textAlign: "center",
    borderBottom: "5px dashed " + blueGrey[100],
  },
  getTVShowsInput: {
    maxWidth: theme.spacing(45),
    width: theme.spacing(45),
    "& input": {
      padding: theme.spacing(1, 1),
      fontSize: theme.spacing(3),
    },
  },
  getTVShowsList: {
    maxWidth: theme.spacing(60),
    margin: theme.spacing(2, "auto"),
    padding: theme.spacing(0.5),
    border: "3px solid " + blueGrey[500],
    maxHeight: theme.spacing(30),
    overflowY: "scroll",
    "& li": {
      margin: theme.spacing(1, 0),
      padding: theme.spacing(2, 1.5),
      fontSize: theme.spacing(2.5),
    },
  },
}));

const Layuot = ({ children, onChangeInput, TVShows, value, choiceTVShow }) => {
  const classes = useStyles();
  let TVShowsList = <h2>Nothin</h2>;
  if (TVShows.length) {
    TVShowsList = (
      <List className={classes.getTVShowsList}>
        {TVShows.map((elem) => (
          <ListItem
            key={elem.show.id}
            component="li"
            button
            onClick={() => choiceTVShow(elem.show.id)}
          >
            <b>{elem.show.name}</b>
          </ListItem>
        ))}
      </List>
    );
  }
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h4">TV Shows</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container>
          <div className={classes.getTVShowsBlock}>
            <TextField
              label="Search for TV Show: "
              onChange={onChangeInput}
              value={value}
              className={classes.getTVShowsInput}
            />
            {TVShowsList}
          </div>
          <div>{children}</div>
        </Container>
      </main>
    </div>
  );
};

export default Layuot;
