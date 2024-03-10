import React, { useState } from "react";

import { Link } from "react-router-dom";



const Todayhoro = () => {
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthHour, setBirthHour] = useState("");
  const [birthMinute, setBirthMinute] = useState("");
  const [birthSecond, setBirthSecond] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [ques, setQues] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !gender || !birthDay || !birthMonth || !birthYear || !birthHour || !birthMinute || !birthSecond || !birthPlace) {
      // if any required field is not filled out, return without submitting
      return;
    }
    // generate horoscope here using the form data, and update the state of horoscope
    setHoroscope("Your horoscope will be displayed here");
  };

  return (
    <>
      <section className="recent padding">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Gender:
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">-- Select Gender --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Date of Birth:
            <input type="number" placeholder="DD" value={birthDay} onChange={(e) => setBirthDay(e.target.value)} min="1" max="31" required />
            <input type="number" placeholder="MM" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} min="1" max="12" required />
            <input type="number" placeholder="YYYY" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} min="1900" max="9999" required />
          </label>
          <label>
            Time of Birth:
            <input type="number" placeholder="HH" value={birthHour} onChange={(e) => setBirthHour(e.target.value)} min="0" max="23" required />
            <input type="number" placeholder="MM" value={birthMinute} onChange={(e) => setBirthMinute(e.target.value)} min="0" max="59" required />
            <input type="number" placeholder="SS" value={birthSecond} onChange={(e) => setBirthSecond(e.target.value)} min="0" max="59" required />
          </label>
          <label>
            Place of Birth:
            <input type="text" value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} required />
          </label>
          <button class="btn btn-primary text-wrap text-center">
                  <Link to="/service1">Generate Horoscope</Link>
                </button>
        </form>
      </section>
    </>
  );
};

export default Todayhoro;
