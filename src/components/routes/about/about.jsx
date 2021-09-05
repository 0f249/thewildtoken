import React from "react";
import HeaderComponent from "./header";
import Info from "./info";
import LeftSection from "./left-section";
import RightSection from "./right-section";

const About = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Info />
      <LeftSection
        title="Earthquake and Tsunami"
        description="Alaska 1964, Good friday damage"
        imageUrl="https://statics.thewildtoken.com/images/portfolio/alaska-high-600x400.jpg"
      />
      <RightSection
        title="Fires"
        description="Bushfires below Stacks Bluff, Tasmania, Australia"
        imageUrl="https://statics.thewildtoken.com/images/portfolio/fire-high-600x400.jpg"
      />
      <LeftSection
        title="Extinct animals"
        description="Steppe Mammoth at the Australian Museum"
        imageUrl="https://statics.thewildtoken.com/images/portfolio/mammoth-high-600x400.jpg"
      />
    </React.Fragment>
  );
};

export default About;
