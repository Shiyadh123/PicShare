import React, { useEffect, useReducer, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import memories from "./images/x.png";
import Form from "./components/form/form.js";
import Posts from "./components/posts/posts.js";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, currentId]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          PicShare
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={classes.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
