import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/numbers/e"; 


const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data from:", API_URL); // Debugging
    axios.get(API_URL)
      .then(response => {
        console.log("API Response:", response.data); // Debugging
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);
  

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Average Calculator</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h3>Previous Window State:</h3>
          <pre>{JSON.stringify(data.windowPrevState, null, 2)}</pre>
          <h3>Current Window State:</h3>
          <pre>{JSON.stringify(data.windowCurrState, null, 2)}</pre>
          <h3>Numbers:</h3>
          <pre>{JSON.stringify(data.numbers, null, 2)}</pre>
          <h3>Average:</h3>
          <p>{data.ave}</p>
        </div>
      )}
    </div>
  );
};

export default App;
