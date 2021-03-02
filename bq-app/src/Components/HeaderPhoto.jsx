import '../Pages/App.css';

const HeaderPhoto = ({Logo, Logo2}) => {
    return (<div className="Header-container">
    <div className="Header"> TARTÁRIA BURGER </div>
    <img className="burger-logo" src={Logo2} alt="burger-logo"/>
    </div>
)};

export default HeaderPhoto;
 