import React from "react";
import { featured } from "../Data";
import { Link } from "react-router-dom";
import Usertalk from "../Usertalk/Usertalk";

const Talkcard1 = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="contact-box">
        <p>Phone number: +9032960838</p><br></br>
        <p>WhatsApp number: +9032950838</p><br></br>
        <p>
          Telegram link:{" "}
          <a href="https://t.me/Jagannath Guruji">https://t.me/Jagannath Guruji</a>
        </p>
        
      </div>
    </>
  );
};

export default Talkcard1;
