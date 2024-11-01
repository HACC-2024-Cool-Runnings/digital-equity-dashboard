"use client";

import React, { useEffect, useState } from "react";


const Assets: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [Area_Served, setArea_Served] = useState<string>("all");
  const [Asset_Name, setAsset_Name] = useState<string>("all");
  const [Type_of_Entity, setType_of_Entity] = useState<string>("all");

  useEffect(() => {
    async function fetchData() {
      try {
        const queryParams = new URLSearchParams({
          Area_Served: Area_Served !== "all" ? Area_Served : "",
          Asset_Name: Asset_Name !== "all" ? Asset_Name : "",
          Type_of_Entity: Type_of_Entity !== "all" ? Type_of_Entity : "",
        }).toString();

        const response = await fetch(`/api/assets?${queryParams}`);
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
  }, [Area_Served, Asset_Name, Type_of_Entity]);

  const handleSelectChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    setter(event.target.value);
  };

  return (
    <div>
      <h1>Assets</h1>
      <form>
        <div>
          <label>
            Type:
            <select value={Area_Served} onChange={handleSelectChange(setArea_Served)}>
              <option value="all">All</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Maui">Maui</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Location:
            <select value={Asset_Name} onChange={handleSelectChange(setAsset_Name)}>
              <option value="all">All</option>
              <option value="Location1">Location1</option>
              <option value="Location2">Location2</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
        <div>
          <label>
            Status:
            <select value={Type_of_Entity} onChange={handleSelectChange(setType_of_Entity)}>
              <option value="all">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              {/* Add more options as needed */}
            </select>
          </label>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Area</th>
            <th>Asset Name</th>
            <th>Description</th>
            <th>Street Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Type_of_Entity}</td>
              <td>{item.Area_Served}</td>
              <td>{item.Asset_Name}</td>
              <td>{item.Description_of_Services}</td>
              <td>{item.Street_Address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assets;