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
                hintText="Enter your Occupation "
                floatingLabelText="Occupation"
                onChange={handleChange("occupation")}
                defaultValue={values.occupation}
              />
              <br />
              <TextField
                hintText="Enter your City"
                floatingLabelText="City"
                onChange={handleChange("city")}
                defaultValue={values.city}
              />
              <br />
              <TextField
                hintText="Enter your Country"
                floatingLabelText="Country"
                onChange={handleChange("country")}
                defaultValue={values.country}
              />
              <Grid item>
                <RaisedButton
                  label="Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.back}
                />
                <RaisedButton
                  label="Continue"
                  primary={true}
                  style={styles.button}
                  onClick={this.continue}
                />
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
