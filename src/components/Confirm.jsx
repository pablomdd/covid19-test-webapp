import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    // Proccess Form to API
    // this.props.handleSymptomsChange(selectedSypmtoms);
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        occupation,
        city,
        country,
        chestPain,
        breathingDifficulty,
        dryCough,
        fever,
        tiredness,
        blueLips,
        recentoss,
        muscleAches,
        soreThroat,
        noseCongestion,
        headache,
        chills,
        rash,
        vomiting,
        diarrehea,
        symptoms
      },
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Navbar title="Confirm your answers" />
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2>Personal Info</h2>
              </Grid>
              <Grid item xs={12}>
                <List>
                  <ListItem
                    primaryText="First Name"
                    secondaryText={firstName}
                  />
                  <ListItem primaryText="Last Name" secondaryText={lastName} />
                  <ListItem primaryText="Email" secondaryText={email} />
                  <ListItem
                    primaryText="Occupation"
                    secondaryText={occupation}
                  />
                  <ListItem primaryText="City" secondaryText={city} />
                  <ListItem primaryText="Country" secondaryText={country} />
                </List>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h2>Symptoms you selected</h2>
              </Grid>
              <Grid item md={6}>
                <List>
                  <ListItem
                    primaryText="Chest Pain"
                    secondaryText={chestPain}
                  />
                  <ListItem
                    primaryText="Shortness of breath or difficulty breathing"
                    secondaryText={breathingDifficulty}
                  />
                  <ListItem primaryText="Fever" secondaryText={fever} />
                  <ListItem primaryText="Dry Cough" secondaryText={dryCough} />
                  <ListItem primaryText="Tiredness" secondaryText={tiredness} />
                  <ListItem
                    primaryText="Blue lips or face"
                    secondaryText={blueLips}
                  />
                  <ListItem
                    primaryText="Receptoss of taste or smell"
                    secondaryText={recentoss}
                  />
                </List>
              </Grid>
              <Grid item md={6}>
                <ListItem
                  primaryText="Muscle aches"
                  secondaryText={muscleAches}
                />
                <ListItem primaryText="Sore troat" secondaryText={soreThroat} />
                <ListItem
                  primaryText="Coggestion or running nose"
                  secondaryText={noseCongestion}
                />
                <ListItem primaryText="Head Ache" secondaryText={headache} />
                <ListItem primaryText="Chills" secondaryText={chills} />
                <ListItem primaryText="Rash" secondaryText={rash} />
                <ListItem
                  primaryText="Nausea or Vomitting"
                  secondaryText={vomiting}
                />
                <ListItem primaryText="Diarrehea" secondaryText={diarrehea} />
              </Grid>
            </Grid>
            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label="Confirm & Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
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
