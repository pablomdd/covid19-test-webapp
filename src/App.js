import React from "react";
import Particles from "react-particles-js";
import { UserForm } from "./components/UserForm";
import "./App.css";

function App() {
  return (
    <div className="App">
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
          <UserForm />
        </div>
      </div>
    </div>
  );
}

export default App;
