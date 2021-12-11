import './modal.css';

function Modal ({trigger, handleClose, title, calories, image, ingredients}) { 
    if (!trigger) return null;

    return(
        <div className="modal-window">
            <div className="modal-container">
                <img className="modal-picture" src={image} alt="" />
                <div className="modal-title-bar">
                    <label className="modal-recipie-title">{title}</label>
                    <button className="modal-close-button" onClick={handleClose}>x</button>
                </div>
                <p><span>Calories:</span> {parseInt(calories)}</p>
                <ul className="ingredient-list"> <span>Ingredients:</span>
                    {ingredients.map(ingredient => (
                        <li> {ingredient.text} </li>
                    ))}
                </ul>
            </div>
        </div>
    ); 
};

export default Modal;