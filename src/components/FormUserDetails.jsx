import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Navbar title="COVID-19 Test" />
          <Container maxWidth="sm" style={styles}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <TextField
                hintText="Enter your First Name"
                floatingLabelText="First Name"
                onChange={handleChange("firstName")}
                defaultValue={values.firstName}
              />
              <br />
              <TextField
                hintText="Enter your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange("lastName")}
                defaultValue={values.lastName}
              />
              <br />
              <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={handleChange("email")}
                defaultValue={values.email}
              />
              <br />
              <RaisedButton
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
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
