import React, { useState } from 'react';
import axios from 'axios';
//import './css/Compatability.css';
function Love() {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/compatibility`, {
        params: { sign1, sign2 },
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="comp">
       
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="sign1">Sign 1:</label>
        <select id="sign1" value={sign1} onChange={(e) => setSign1(e.target.value)}>
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

        <label htmlFor="sign2">Sign 2:</label>
        <select id="sign2" value={sign2} onChange={(e) => setSign2(e.target.value)}>
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

        <button type="submit">Get Compatibility</button>
      </form>

      {result.length > 0 && (
        <div>
          {result.map((data, index) => (
            <div key={index}>
              <h2>{data.header}</h2>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Love;