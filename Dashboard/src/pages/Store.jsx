import React from "react";
import Hero from "../Frontend_components/Hero";
import StoreComponents from "../Frontend_components/StoreComponents";

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
