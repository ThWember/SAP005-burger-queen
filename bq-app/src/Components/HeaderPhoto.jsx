import '../Pages/App.css';

const HeaderPhoto = ({Logo}) => {
    return (<div className="Header-container">
    <div className="Header"> HAMBÚRGUER DA TARTÁRIA </div>
    <img className="burger-logo" src={Logo} alt="burger-logo"/>
    </div>
)};

export default HeaderPhoto;
 