import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import Typography from "@material-ui/core/Typography";
// import { Alert, AlertTitle } from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    // Proccess Form to API
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, fever },
    } = this.props;

    const styles = {
      height: "100vh",
      padding: "2rem",
      root: {
        minWidth: 275,
      },
      bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    };
    const bull = <span className={styles.bullet}>•</span>;
    return (
      <MuiThemeProvider>
        <>
          <Navbar title="Results" />
          <Container maxWidth="sm" style={styles}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item md={12}>
                <Typography variant="h6" gutterBottom>
                  Thank You For Your Submition {firstName}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  You will get an email in {email} with further information
                </Typography>
              </Grid>
              <Grid
                container
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item md={12}>
                  <Typography variant="h3" gutterBottom>
                    You tested {fever >= 4 ? "Positive" : "Negative"}
                  </Typography>
                  {fever >= 4 ? (
                    <Card className={styles.root}>
                      <CardContent>
                        <Typography
                          className={styles.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          For more information for what's next visit{" "}
                          <a href="https://coronavirus.gob.mx/">
                            coronavirus.gob.mx
                          </a>
                        </Typography>
                        <Typography variant="h5" component="h2">
                          Contact 800 00 44 800 
                          <br/>
                          for specialed help.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href="https://coronavirus.gob.mx/">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  ) : (
                    <Card className={styles.root}>
                      <CardContent>
                        <Typography
                          className={styles.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          See further indications in{" "}
                          <a href="https://coronavirus.gob.mx/">
                            coronavirus.gob.mx
                          </a>
                        </Typography>
                        <Typography variant="h5" component="h2">
                          Keep extreme precautions
                          <br />
                          and stay at ~home.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" href="https://coronavirus.gob.mx/">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  )}
                </Grid>
              </Grid>
              <Grid
                container
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <Typography variant="overline" display="block" gutterBottom>
                    Be aware this is not decisive data.
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    This preview version tests postive for FEVER >= 4.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
