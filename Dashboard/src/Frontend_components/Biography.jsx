import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="about Img" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <p>
           At Rahat Medical Clinic, we believe that health is the foundation of a happy and fulfilling life. Good health not only protects us from illness but also empowers us to live with energy, confidence, and peace of mind. Taking care of your health today ensures a brighter tomorrow, where you can focus on your goals, your family, and the moments that matter most. 
          </p>
  
          <p>
            Our clinic is committed to providing trusted medical care, preventive guidance, and compassionate support to help you maintain and improve your well-being at every stage of life.
          </p>
          <p>"Every small step you take toward your goals builds the strength to achieve something greater—stay consistent, stay focused, and success will follow."</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;