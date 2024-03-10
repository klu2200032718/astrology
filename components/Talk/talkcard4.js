import React from "react";
import { featured } from "../Data";
import { Link } from "react-router-dom";

const Talkcard4 = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className="contact-box">
        <p>Phone number: +9866195898</p><br></br>
        <p>WhatsApp number: +9614488661</p><br></br>
        <p>
          Telegram link:{" "}
          <a href="https://t.me/A.S. Kalra">https://t.me/A.S. Kalra</a>
        </p>
       
      </div>
    </>
  );
};

export default Talkcard4;
