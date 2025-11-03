import React from "react";
import Hero from "../Frontend_components/Hero";
import Biography from "../Frontend_components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Rahat Medical Clinic"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;