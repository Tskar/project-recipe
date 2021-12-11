import './App.css';
import Recipe from './recipes/Recipe';
import {useState, useEffect } from 'react';

function App() {


  const [recipes, setRecipes] =useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] =useState('');  

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async() => {
    const fetchedData = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_ID}&app_key=${process.env.REACT_APP_EDAMAM_KEY}`);    
    const data = await fetchedData.json();
    setRecipes(data.hits);
  }

  //update the search to new value
  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  //load the form with new query when submitted
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <section className="title-bar">
        <a href="#">find.recipe</a>
      </section>

      <form className="header-body" onSubmit={getSearch} >
        <h1 className="header-info">
          <span>The Hub To Find</span>
          That Recipe
        </h1>

        <div className="search-container">
          <div className="search-bar">
            <input className="search-box" 
                  type="text" 
                  placeholder="dish,ingridient,keywords..."
                  onChange={updateSearch} />
            <p>Example:"Milkshake","Banana","Coffee"...</p>
          </div>

          <button className="search-button">Search Recipe</button>
        </div>

      </form>
      <div className="recipie-box">
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories} />
        ))}
      </div>
    </div>
  );
}

export default App;