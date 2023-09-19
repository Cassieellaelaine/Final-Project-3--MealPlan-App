import React, { useState, useEffect } from 'react';
import CardGenerator from './CardGenerator';
import axios from 'axios';

function Cards() {
  const [recipeData, setRecipeData] = useState();

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: {
        tags: 'vegetarian,dessert',
        number: '1',
      },
      headers: {
        'X-RapidAPI-Key': '464f4e24d8msh0f17a2a749ab23ep126989jsnad9e27712e09',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };

    async function fetchData() {
      try {
        const response = await axios.request(options);
        setRecipeData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function to make the API request
  }, []);

  return (
    <div>
      {recipeData && (
        <CardGenerator
          title={recipeData.recipes[0].title} // Display the recipe title
          image={recipeData.recipes[0].image} // Display the recipe image
          // Add other data you want to display from the response
        />
      )}
    </div>
  );
}

export default Cards;