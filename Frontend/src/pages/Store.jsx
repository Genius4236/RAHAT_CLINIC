import React from "react";
import Hero from "../components/Hero";
import StoreComponents from "../components/StoreComponents";

const Store = () => {
  return (
    <>
      <Hero
        title={"Explore Our Store | Rahat Medical Store"}
        imageUrl={"/Store.png"}
      />
      <StoreComponents/>
    </>
  );
};

export default Store;
