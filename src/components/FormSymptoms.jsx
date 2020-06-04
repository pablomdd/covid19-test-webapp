import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar, { AppBar } from "material-ui/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
    //   console.log(val);
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
                  onChange={sliderChange("chestPain")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Shortness of breath or difficulty breathing:{" "}
                  {values.breathingDifficulty}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.breathingDifficulty}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("breathingDifficulty")}
                />
                {/* <div className={classes.root}>
                </div> */}
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
                  onChange={sliderChange("fever")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Dry Cough: {values.dryCough}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.dryCough}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("dryCough")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Tiredness: {values.tiredness}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.tiredness}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("tiredness")}
                />
                {/* <div className={classes.root}>
                </div> */}
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Blue lips or face: {values.blueLips}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.blueLips}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("blueLips")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Receptoss of taste or smell: {values.recentoss}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.recentoss}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("recentoss")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Muscle aches: {values.muscleAches}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.muscleAches}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("muscleAches")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Sore troat: {values.soreThroat}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.soreThroat}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("soreThroat")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Coggestion or running nose: {values.noseCongestion}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.noseCongestion}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("noseCongestion")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Head Ache: {values.headache}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.headache}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("headache")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Chills: {values.chills}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.chills}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("chills")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Rash: {values.rash}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.rash}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("rash")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Nausea or Vomitting: {values.vomiting}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.vomiting}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("vomiting")}
                />
              </Grid>
              <Grid item spacing={2} xs={12}>
                <Typography id="discrete-slider" gutterBottom>
                  Diarrehea: {values.diarrehea}
                </Typography>
                <Slider
                  color="primary"
                  // style={sliderStyle}
                  defaultValue={values.diarrehea}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={5}
                  onChange={sliderChange("diarrehea")}
                />
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
