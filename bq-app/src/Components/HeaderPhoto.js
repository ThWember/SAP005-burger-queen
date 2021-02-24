import './Components.css';

const HeaderPhoto = ({Image}) => {
    return (<div className="Header-container">
    <div className="Header"> Burger Queen </div>
    <img className="img-burguer" src={Image} alt="hambuguer and salse"/>
    </div>
)};

export default HeaderPhoto;
 