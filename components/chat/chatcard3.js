import React from "react";
import { featured } from "../Data";
import { Link } from "react-router-dom";


const Chatcard3 = () => {
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
          <a href="https://t.me/Krishna">https://t.me/Krishna</a>
        </p>
        <p><br></br>
          Google Meet link:{" "}
          <a href="https://meet.google.com/your-meeting-id">https://meet.google.com/your-meeting-id</a>
        </p>
      </div>
    </>
  );
};

export default Chatcard3;
