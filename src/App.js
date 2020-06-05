import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import Particles from "react-particles-js";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import { UserForm } from "./components/UserForm";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

const history = createHistory({
  basename: process.env.PUBLIC_URL,
});
function App() {
  const theme = createMuiTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 16,
    },
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#FF7075",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#0066ff",
        main: "#0044ff",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Particles
            params={{
              particles: {
                number: {
                  value: 75,
                },
                size: {
                  value: 5,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Router>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Footer>
                  <Route exact path={'/test'} component={UserForm} />
                  <Route component={() => (<div>404 Not found </div>)} />
                </Footer>
              </Switch>
            </Router>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
