import './modal.css';
import Img from "../images/img_2.jpg";


function Modal () { 
    return(
        <div className="modal-window">
            <div className="modal-container">
                <img className="modal-picture" src={Img} />
                <label className="recipie-title">Recipe Title</label>
                <p>Calories</p>
                <ul className="ingredient-list">
                    <li className="ingredient-item">ItemA</li>
                    <li className="ingredient-item">ItemA</li>
                    <li className="ingredient-item">ItemA</li>
                    <li className="ingredient-item">ItemA</li>
                </ul>
            </div>
        </div>
    );
};

export default Modal;