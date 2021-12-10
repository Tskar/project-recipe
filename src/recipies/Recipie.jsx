import './recipie.css';
import Img from "../images/img_1.jpg";


function Recipie () {
    return(
        <div className="recipie-container">
            <img src={Img} />
            <label className="recipie-title">Recipe Title</label>
        </div>
    );
};

export default Recipie;