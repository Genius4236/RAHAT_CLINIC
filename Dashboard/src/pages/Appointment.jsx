import React from "react";
import Hero from "../Frontend_components/Hero";
import AppointmentForm from "../Frontend_components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | Rahat Medical Clinic"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;