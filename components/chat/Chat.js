import React, { useState } from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import "./chat.css";
import Userchat from "../Userchat/Userchat";

const Chat = () => {
const [selectedOption1, setSelectedOption1] = useState("");
const [selectedOption2, setSelectedOption2] = useState("");
const [name, setName] = useState("");
const [age, setAge] = useState("");
const [ZodiacSign, setZodiacSign] = useState("");
const [dob, setDob] = useState("");
const [ques, setQues] = useState("");


const handleSubmit = (event) => {
event.preventDefault();
// do something with the form data here, like sending it to a server
console.log({ selectedOption1, selectedOption2, name, age, ZodiacSign, dob });
};

return (
<>
<section className="recent padding">
<div className="container">
<Heading/>
<div className="box2">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </label>
            
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                value={dob}
                onChange={(event) => setDob(event.target.value)}
                required
              />
            </label>
            <label>
              Question:
              <input
                type="text"
                value={ques}
                onChange={(event) => setQues(event.target.value)}
                required
              />
            </label>
            <label>
              ZodiacSigns:
              <select
                value={setZodiacSign}
                onChange={(event) => setZodiacSign(event.target.value)}
                required
              >
                <option value="">Select a sign</option>
                <option value="Aries">Aries</option>
                <option value="Taurus">Taurus</option>
                <option value="Gemini">Gemini</option>
                    <option value="Cancer">Cancer</option>
                    <option value="Leo">Leo</option>
                    <option value="Virgo">Virgo</option>
                    <option value="Libra">Libra</option>
                    <option value="Scorpio">Scorpio</option>
                    <option value="Sagittarius">Sagittarius</option>
                    <option value="Capricorn">Capricorn</option>
                    <option value="Aquarius">Aquarius</option>
                    <option value="Pisces">Pisces</option>
                   
                  </select>
                </label>

              <br></br>
              <button class="btn btn-primary text-wrap text-center" ><Link to="/Userchat">Submit</Link></button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};
export default Chat