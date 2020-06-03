import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import {List, ListItem} from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
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
    // const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;

    return (
      <MuiThemeProvider>
        <>
          <Navbar title="Confirm your answers" />
          <h1>Thank You For Your Submition</h1>
          <p>You will get an email with further information</p>
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
