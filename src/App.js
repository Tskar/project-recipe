import './App.css';
import Recipie from './recipies/Recipie';
import Modal from './modal/Modal';

function App() {

  return (
    <div className="App">
      <section className="title-bar">
        <a href="#">find.recipe</a>
      </section>

      <section className="header-body">
        <h1 className="header-info">
          <span>The Hub To Find</span>
          That Recipe
        </h1>

        <div className="search-container">
          <div className="search-bar">
            <input className="search-box" 
                  type="text" 
                  placeholder="dish,ingridient,keywords..." />
            <p>Example:"Milkshake","Banana","Coffee"...</p>
          </div>

          <button className="search-button">Search Recipe</button>
        </div>

      </section>
      <div className="recipie-box">
        <Recipie />
        <Recipie />
        <Recipie />
        <Recipie />
      </div>
      <div className="Modal-box">
        <Modal />
        <Modal />
      </div>

    </div>
  );
}

export default App;