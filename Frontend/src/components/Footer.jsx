
import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "6:00 PM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "6:00 PM - 10:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "6:00 PM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "6:00 PM - 10:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "6:00 PM - 10:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "5:00 pM - 9:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "10:00 AM - 2:00 PM",
    },
  ];

  return (
    <>
      <footer className={"container"}>
        <hr />
        <div className="content">
          <div>
            <img src="/logo.png" alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About</Link>
            </ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul>
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <div>
              <FaPhone />
              <span>914-849-5208</span>
            </div>
            <div>
              <MdEmail />
              <span>rahatclinic27@gmail.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Karnataka, Ballari-583102</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
