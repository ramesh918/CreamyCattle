// src/Sheds.tsx
// src/Sheds.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';


import ShedsList from './ShedList';
import { useSelector } from "react-redux";


const Sheds: React.FC = () => {
  const [sheds, setSheds] = useState([]);
  const authToken = useSelector(
    (state: any) => state.auth.token
  );


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define your API endpoint
        const apiUrl = 'http://localhost:4000/api/v1/cattle-sheds'; // Replace with your actual API endpoint


        // Define your authorization token (replace 'YOUR_TOKEN' with your actual token)


        // Create a request config with the authorization header
        const config = {
          headers: {
            auth:authToken ,
          },
        };


        // Fetch data from the API
        const response = await axios.get(apiUrl, config);


        // Update the state with the fetched data
        setSheds(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);


  return (
    <div>
      <h1>Sheds Page</h1>
      <ShedsList sheds={sheds} />
    </div>
  );
};


export default Sheds;





