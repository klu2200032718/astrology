import React, { useState } from "react";
import { data } from "../Data";

const ServiceCard1 = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);

  const handleClick = (url) => {
    window.location.href = url;
  };

  const handleChatBotClick = () => {
    setShowChatBot(true);
  };

  const handleChatBotClose = () => {
    setShowChatBot(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const userInput = e.target.value;
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", message: userInput },
      ]);
      const response = callChatBotAPI(userInput);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", message: response },
      ]);
      e.target.value = "";
    }
  };

  const currentDate = new Date().toLocaleDateString(); // Get the current date

  return (
    <>
      <div className="container">
        <div className="content grid5 mtop">
          {data.map((items, index) => (
            <div
              className="box"
              key={index}
              onClick={() => handleClick(items.url)}
            >
              <img src={items.cover} alt='' />
              <h4>{items.heading}</h4>
              <label>{items.date}</label><br></br>
              <label>{items.paragraph}</label>
            </div>
          ))}
        </div>
        <button className="chatbot-button" onClick={handleChatBotClick}>
          Chat with Bot
        </button>
        {showChatBot && (
          <div className="chatbot-modal">
            <div className="chatbot-content">
              <div className="chatbox" id="chatbox">
                {chatMessages.map((message, index) => (
                  <p
                    key={index}
                    className={`chat-message ${
                      message.sender === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    <span className="sender">
                      {message.sender === "user" ? "You" : "Bot"}:
                    </span>{" "}
                    {message.message}
                  </p>
                ))}
              </div>
              <input
                type="text"
                placeholder="Type your message"
                onKeyDown={handleKeyDown}
              />
              <button className="chatbot-close" onClick={handleChatBotClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <p>Current Date: {currentDate}</p>
      </div>
    </>
  );
};

// Function to call your chat bot API
function callChatBotAPI(userInput) {
  // Replace this with your own code to call your chat bot API
  const response = "This is the chat bot's response to: " + userInput;
  return response;
}

export default ServiceCard1;
