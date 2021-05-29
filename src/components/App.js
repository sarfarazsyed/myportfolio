import React, { Component } from "react";
import { Portfolio } from "./portfolio/Portfolio";
import { about } from "../constants/About";
import ParticleComponent from "react-particles-js";
import styled from "styled-components";

export default class App extends Component {
  state = {
    selectedSection: about,
  };

  componentWillUnmount = () => {
    const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;

    if (typeof DEV_TOOLS === "object") {
      for (const [key, value] of Object.entries(DEV_TOOLS)) {
        DEV_TOOLS[key] = typeof value === "function" ? undefined : null;
      }
    }
  };

  handleSectionClick = (section) => {
    this.setState({
      selectedSection: section,
    });
  };

  render() {
    const AppContainer = styled.div`
      text-align: center;
      display: flex;
      min-height: 100vh;
      align-items: center;
      font-family: "Gill Sans MT", "Lucida Grande", "Lucida Sans", Arial,
        sans-serif;
    `;
    return (
      <>
        <ParticleComponent
          style={{ position: "absolute" }}
          params={{
            fpsLimit: 120,
            particles: {
              number: {
                value: 70,
              },
              size: {
                value: 2,
              },
              shape: {
                type: "triangle",
              },
              lineLinked: {
                enable: false,
              },
              color: {
                value: "rgba(120,219,120)",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                bubble: {
                  distance: 50,
                  duration: 2,
                  opacity: 1,
                  size: 3,
                  speed: 3,
                },
                emitters: {
                  quantity: 2,
                },
              },
            },
          }}
        />
        <AppContainer>
          <Portfolio
            handleSectionClick={this.handleSectionClick}
            selectedSection={this.state.selectedSection}
          />
        </AppContainer>
      </>
    );
  }
}
