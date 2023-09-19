import React, { useState } from 'react';
import { ListItemButton, Typography } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Grid } from '@mui/material';
import axios from 'axios';

function Mealplan() {
  // Step 1: Create a state variable to store the API data
  const [apiData, setApiData] = useState(null);

  // Step 2: Create a function to fetch data from the API
  const fetchDataFromAPI = async () => {
    // Define the options for the API request
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: {
        tags: 'vegetarian',
        number: '1'
      },
      headers: {
        'X-RapidAPI-Key': '464f4e24d8msh0f17a2a749ab23ep126989jsnad9e27712e09',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    try {
      // Make the API request using Axios
      const response = await axios.request(options);
      // Set the API response data in the state
      setApiData(response.data);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} sx={{ sm: '122px', xs: '40px', width: 300, alignItems: 'center' }}>
        <Typography>Here are your Menu Items:</Typography>
        {/* Step 3: Trigger the API call on button click */}
        <ListItemButton component="a" href="#simple-list" onClick={fetchDataFromAPI}>
          <ListItemText primary="Fetch Recipe" />
        </ListItemButton>
      </Grid>
      <Grid item xs={8}>
        {apiData && (
          <div>
            {/* Render the API data here */}
            <Typography>Title: {apiData.recipes[0].title}</Typography>
            <Typography>Instructions: {apiData.recipes[0].instructions}</Typography>
            {/* Add other data you want to display from the response */}
          </div>
        )}
      </Grid>
    </Grid>
  );
}

export default Mealplan;