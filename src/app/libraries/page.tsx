"use client";

import React, { useEffect, useState } from "react";

const Libraries: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [island, setIsland] = useState<string>("all");
  const [library, setLibrary] = useState<string>("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams({
          island: island !== "all" ? island : "",
          library: library !== "all" ? library : "",
        }).toString();

        const response = await fetch(`/api/libraries?${queryParams}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data1 = await response.json();
        console.log('Fetched data:', data1); // Add logging here
        setData(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [island, library]);

  const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setter(event.target.value);
  };

  return (
    <div>
      <h1>Adult Schools</h1>
      <form>
        <div>
          <label>
            Community:
            <select value={island} onChange={handleSelectChange(setIsland)}>
              <option value="all">All</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Kauai">Kauai</option>
              <option value="Lanai">Lanai</option>
              <option value="Maui">Maui</option>
              <option value="Oahu">Oahu</option>
              <option value="Molokai">Molokai</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            School:
            <select value={library} onChange={handleSelectChange(setLibrary)}>
              <option value="all">All</option>
              <option value="WCSA-Hilo Campus">WCSA-Hilo Campus</option>
              <option value="WCSA-Kona Campus">WCSA-Kona Campus</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Island</th>
            <th>Library</th>
            <th>Phone</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Island}</td>
              <td>{item.Library}</td>
              <td>{item.Phone}</td>
              <td>{item.ID}</td>
              <td><a href={item.URL} target="_blank" rel="noopener noreferrer">{item.URL}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Libraries;