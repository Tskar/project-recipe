import './recipe.css';
import Modal from '../modal/Modal';
import React,{useState} from 'react';


function Recipie ({title, calories, image, ingredients}) {

    const[triggered, setTriggered] =useState(false);

    return(
        <div>
            <div className="recipie-container" onClick={() => setTriggered(true)}>
                <img src={image} />
                <label className="recipie-title" >{title}</label>
            </div>
            <div className="Modal-box">
                <Modal 
                    trigger={triggered} 
                    handleClose={()=>setTriggered(false)}
                    title={title} 
                    calories={calories} 
                    image={image}
                    ingredients={ingredients} />
            </div>
            
        </div>
    );
};

export default Recipie;