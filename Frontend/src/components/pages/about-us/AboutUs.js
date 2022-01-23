import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import AboutWrapper from "./AboutWrapper";
import GuideWrapper from "./GuideWrapper";


class AboutUs extends Component {
  render() {
    return (
       <>
            <BreadCrumb/>
            <AboutWrapper/>
           <GuideWrapper/>
           

       </>
    );
  }
}

export default AboutUs;
