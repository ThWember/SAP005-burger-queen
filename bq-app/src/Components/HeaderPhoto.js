import '../Pages/App.css';

const HeaderPhoto = ({Image, Logo}) => {
    return (<div className="Header-container">
    <div className="Header"> <img className="logo" src={Image} alt="Tartária Burguer"/> </div>
    </div>
)};

export default HeaderPhoto;
 