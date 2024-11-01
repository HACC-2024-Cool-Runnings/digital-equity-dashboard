"use client";

import React, { useEffect, useState } from "react";

const AdultSchools: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [community, setCommunity] = useState<string>("all");
  const [school, setSchool] = useState<string>("all");
  const [address, setAddress] = useState<string>("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams({
          community: community !== "all" ? community : "",
          school: school !== "all" ? school : "",
          address: address !== "all" ? address : "",
        }).toString();

        const response = await fetch(`/api/adultschools?${queryParams}`);
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
  }, [community, school, address]);

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
            <select value={community} onChange={handleSelectChange(setCommunity)}>
              <option value="all">All</option>
              <option value="Mckinley">Mckinley</option>
              <option value="Waipahu">Waipahu</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            School:
            <select value={school} onChange={handleSelectChange(setSchool)}>
              <option value="all">All</option>
              <option value="WCSA-Hilo Campus">WCSA-Hilo Campus</option>
              <option value="WCSA-Kona Campus">WCSA-Kona Campus</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Address:
            <select value={address} onChange={handleSelectChange(setAddress)}>
              <option value="all">All</option>
              <option value="634 Pensacola Street Honolulu">634 Pensacola Street Honolulu</option>
              <option value="1564 N. King Street, Honolulu">1564 N. King Street, Honolulu</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Community</th>
            <th>School</th>
            <th>Address</th>
            <th>Phone</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Community}</td>
              <td>{item.School}</td>
              <td>{item.Address}</td>
              <td>{item.Phone}</td>
              <td><a href={item.URL} target="_blank" rel="noopener noreferrer">{item.URL}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdultSchools;