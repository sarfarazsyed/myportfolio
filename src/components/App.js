import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './portfolio/Portfolio';
import { about } from './../constants/About';
import { skills } from './../constants/Skills';
import { projects } from './../constants/Projects';
import ParticleComponent from 'react-particles-js';
export default class App extends Component {
    state = {
        selectedSection: "",
        selectedHeading: "",
        selectedQuote: "",
        about: null,
        skills: null,
        projects: null,
    };

    componentWillMount() {
        this.setState({
            about,
            skills,
            projects,
            selectedHeading: about.heading,
            selectedQuote: about.quote,
            selectedSection: "about"
        });
    }

    handleSectionClick = (section) => {
        this.setState({
            selectedSection: section,
            selectedHeading: this.state[section].heading,
            selectedQuote: this.state[section].quote
        })
    }

    render() {
        return ( 
            <>
                <ParticleComponent 
                    style= {{position: "absolute"}}
                    params = {{
                        fpsLimit: 120,
                        particles: {
                            number: {
                                value: 70
                            },
                            size: {
                                value: 2
                            },
                            shape: {
                                type : "triangle"
                            },
                            lineLinked: {
                                enable: false
                            },
                            color : {
                                value: "rgba(120,219,120)"
                            }
                        },
                        interactivity : {
                            events: {
                                onHover : {
                                    enable :true,
                                    mode: "bubble",
                                    parallax: { 
                                        enable: false, 
                                        force: 2, 
                                        smooth: 10 
                                    }
                                },
                                onClick : {
                                    enable : true,
                                    mode: "push"
                                }
                            },
                            modes: {
                                bubble: { 
                                    distance: 50,
                                    duration: 2,
                                    opacity: 1,
                                    size: 3,
                                    speed: 3 
                                },  emitters:{
                                    quantity: 2
                                }
                            }
                        },
                        detectRetina:true
                    }}
                />
                <div className="App"><Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
          skills={this.state.skills}
          projects={this.state.projects} /></div>
                
            </>
        );
        }
    }