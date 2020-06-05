import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Open Sourced on "}
      <Link
        color="inherit"
        href="https://github.com/pablomdd/covid19-test-webapp"
      >
        GitHub
      </Link>{" "}
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          COVID-19 test
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Quick test for diagnose COVID-19 powered by AI. "}
          {"Get reliable results right away."}
        </Typography>
        <Link color="inherit" href="/test">
          <Button variant="outlined" color="primary" href="/test">
            Go to test
          </Button>
        </Link>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Built with 💖 in IPN UPIITA.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
};

export default Home;
