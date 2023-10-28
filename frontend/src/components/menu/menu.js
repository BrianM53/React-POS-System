import './Menu.css';

function Menu() {
  return (
    <div className="menu-body">
      <header class="menu-header">Sweet Paris: Crepes and Cafe</header>
      <nav className="menu-nav">
        <div className="menu-nav-title">Welcome to the Sweet Paris Cafe!</div>
        <div className="menu-nav-container"> 
          <button className="menu-nav-container-button" id="menu-nav-container-button-home">Home</button>
          <button className="menu-nav-container-button" id="menu-nav-container-button-menu">Menu</button>
          <button className="menu-nav-container-button" id="menu-nav-container-button-aboutus">About Us</button>
          <button className="menu-nav-container-button" id="menu-nav-container-button-contactus">Contact Us</button>
        </div>
        <button className="menu-nav-signin">Click to Sign In!</button>
      </nav>
      <main className="menu-main">
        <section className="menu-main-section-1">
          <h1 className="menu-main-section-1-h1">
            Let Them Eat Crepes!
          </h1>
          <p className="menu-main-section-1-p">
            Sweet Paris was first opened in Rice Village in 2012. Within 10 years, Sweet Paris has turned into one of the best fast casual hotspots in various parts of Hosuton, Austin, San Antonio, College Station, Miami, Woodbury and international resort destinations.
            <br></br>
            <br></br>
            Every day - and every bite - is an opportunity to savor all that's good in the world. Although crepes are known for being French, we have introduced hints of other cultures into this versatile dish that can be enjoyed any time of the day!
          </p>
        </section>
        <aside className="menu-main-aside">
          <img src="/sweetParisLocation.jpeg" alt="Sweet Crepes Logo" class="menu-main-aside-images"></img>
        </aside>
      </main>
      <section className="menu-section-2">
        <div className="menu-section-2-left">
          <h3 className="menu-section-2-h3">Sign in to submit your order!</h3>
          <p className="menu-section-2-p">Once you sign in, you will have the ability to order any of the mouthwatering dishes! Click that button to the right or the sign-in button in the navigation bar above to build and submit your order!</p>
        </div>
        <div className="menu-section-2-right">
          <button className="menu-nav-signin">Click to Sign In!</button>
        </div>
      </section>
      <footer className="menu-footer">
        <div className="menu-footer-message">
          Get in touch with us! Follow us on:
        </div>
        <div className="menu-footer-container">
          <a className="menu-footer-smlink" href="www.espn.com">
            <img src="/logo-and-leaves.jpg" alt="Sweet Crepes Logo" class="menu-footer-smlink-icon"></img>
          </a>
          <a className="menu-footer-smlink" href="www.espn.com">
              <img src="/logo-and-leaves.jpg" alt="Sweet Crepes Logo" class="menu-footer-smlink-icon"></img>
          </a>
          <a className="menu-footer-smlink" href="www.espn.com">
              <img src="/logo-and-leaves.jpg" alt="Sweet Crepes Logo" class="menu-footer-smlink-icon"></img>
          </a>
          <a className="menu-footer-smlink" href="www.espn.com">
              <img src="/logo-and-leaves.jpg" alt="Sweet Crepes Logo" class="menu-footer-smlink-icon"></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Menu;
