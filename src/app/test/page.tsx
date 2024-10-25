"use client";

import React, { useEffect, useState } from "react";

const TestDatabase: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data1 = await response.json();
        setData(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.cai_type} - {item.island} - {item.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestDatabase;