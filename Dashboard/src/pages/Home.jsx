import React, { useContext } from "react";
import Hero from "../Frontend_components/Hero";
import Biography from "../Frontend_components/Biography";
import MessageForm from "../Frontend_components/MessageForm";
import Departments from "../Frontend_components/Department";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Rahat Medical Clinic"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;