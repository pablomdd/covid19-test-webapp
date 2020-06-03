import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

function valuetext(value) {
  return `${value}°C`;
}

export class FormSymptoms extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleSliderChange } = this.props;

    const sliderStyle = {
      color: "white",
    };

    const sliderChange = (sypmtom) => (e) => {
      let val = e.target.ariaValueNow === null ? 0 : e.target.ariaValueNow;
      console.log(val);
      handleSliderChange(sypmtom, val);
    };

    return (
      <MuiThemeProvider>
        <>
          <Navbar title="COVID-19 Test" />
          <Container maxWidth="sm">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h1>Have you felt any of these symptoms in the last week?</h1>
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Fever: {values.fever}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.fever}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  // onChange={handleChange("fever")}
                  onChange={sliderChange("fever")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Chest Pain: {values.chestPain}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.chestPain}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  // onChange={handleChange("fever")}
                  onChange={sliderChange("chestPain")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
            </Grid>
            <Grid item spacing={2} xs={12}>
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

export default FormSymptoms;
