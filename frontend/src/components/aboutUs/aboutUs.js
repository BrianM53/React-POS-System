import NavOptions from '../utility/navOptions';
import './AboutUs.css';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="menu-body">
      <header className="menu-header">Welcome to the Sweet Paris Cafe!</header>
      <nav className="menu-nav">
        <Link to="/settings">
          <i className="fa-solid fa-gear fa-2xl" id="menu-nav-settings-icon"></i>
        </Link>
        <Link to="/app">
          <i className="fa-solid fa-home fa-2xl" id="menu-nav-home-icon"></i>
        </Link>
        <div className="menu-nav-title">Sweet Paris: Crepes and Cafe</div>
        <NavOptions />
      </nav>
    </div>
  );
}

export default AboutUs;