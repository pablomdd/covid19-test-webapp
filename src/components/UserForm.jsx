import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import FormSymptoms from "./FormSymptoms";
export class UserForm extends Component {
  state = {
    step: 5,
    firsName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    chestPain: 0,
    breathingDifficulty: 0,
    dryCough: 0,
    fever: 0,
    tiredness: 0,
    blueLips: 0,
    recentoss: 0,
    muscleAches: 0,
    soreThroat: 0,
    noseCongestion: 0,
    headache: 0,
    chills: 0,
    rash: 0,
    vomiting: 0,
    diarrehea: 0,
    symptoms: {},
    testResult: false,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleSliderChange = (input, e) => {
    console.log(`${input}: ${e}`);
    this.setState({ [input]: e });
  };

  handleSypmtomsChange = (sypmtoms) => {
    this.setState({sypmtoms});
  }

  render() {
    const { step } = this.state;
    const {
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
    } = this.state;

    const values = {
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
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormSymptoms
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleSliderChange={this.handleSliderChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleSymptomsChange={this.handleSypmtomsChange}
            values={values}
          />
        );
      case 5:
        return <Success values={values} />;
    }
  }
}

export default UserForm;
