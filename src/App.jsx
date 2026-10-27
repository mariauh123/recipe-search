import { useState, useEffect } from 'react';
import './App.css';
import RecipeGrid from './components/RecipeGrid';

function App() {
  
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=> {
    async function fetchRecipes(){
      if (query.trim() === ''){
        return;
      }
      setLoading(true);
      setError(null); 
      try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        if (!response.ok){
          throw new Error(`Response failed with status: ${response.status}`);
        }
        const data = await response.json();
        const meals = data.meals;
        if (meals === null){
          setRecipes([]);
        }else{
          const mappedRecipes = meals.map(meal => ({
            id: meal.idMeal,
            name: meal.strMeal,
            ingredients: [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3], 
            preview: (meal.strInstructions.length > 200 ? meal.strInstructions.slice(0, 200) + '...' : meal.strInstructions),
            img: meal.strMealThumb,
            recipe: meal.strYoutube 
          }))
          setRecipes(mappedRecipes);
        }
      }catch(e){
        setError(e);
      }finally{
        setLoading(false);
      }
    };
    fetchRecipes();
  },[query]);

  function handleSubmit(e){
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <>
      <h1 id='page-title'>Recipe Finder</h1>
      <form id='search-form' onSubmit={handleSubmit}>
        {/*<label htmlFor='search-box'>Find</label>*/}
        <input id='search-box' type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button type='submit' >Search</button>
      </form>
      {loading && <p className='display-msg' >Grabbing Your Recipes...</p>}
      {error!==null &&<p className='display-msg'>Error: {error.message}</p>}
      {recipes!==null && (
        recipes.length > 0 ? 
        <RecipeGrid recipes={recipes} /> :
        <p className='display-msg' >No recipes found :/</p>
      )}
    </>
  )
}

export default App

