import React from "react";
import { service2 } from "../Data";

const ServiceCard2 = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const renderTable = (month) => {
    const dataForMonth = service2.filter(data => {
      const dataMonth = new Date(data.date).getMonth();
      return dataMonth === month;
    });

    return (
      <div key={month} className="table-container">
        <h2>{months[month]}</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Word</th>
            </tr>
          </thead>
          <tbody>
            {dataForMonth.slice(0, 3).map(data => (
              <tr key={data.id}>
                <td>{data.date}</td>
                <td>{data.word}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="service-card-2">
      {months.map((month, index) => renderTable(index))}
    </div>
  );
};

export default ServiceCard2;
