import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Store = () => {
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

export default Store;