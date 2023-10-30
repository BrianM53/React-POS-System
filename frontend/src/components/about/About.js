import './About.css';

function About() {
    return (
        <><div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>Resize the browser window to see that this page is responsive by the way.</p>

        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src="/images/defaultProfile.png" alt="John" style={{ width: '100%' }} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Role</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/images/defaultProfile.png" alt="John" style={{ width: '100%' }} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Role</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src="/images/defaultProfile.png" alt="John" style={{ width: '100%' }} />
              <div className="container">
                <h2>John Doe</h2>
                <p className="title">Role</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>john@example.com</p>
                <p><button className="button">Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div><><main className="menu-main-aboutus">
        <div className="menu-main-aboutus-header">
          About Us
        </div>
        <div className="menu-main-aboutus-container">
          <div className="menu-main-aboutus-entry" id="menu-main-aboutus-entry-1">
            <p>
              Sweet Paris was first opened in Rice Village in 2012. Within 10 years, Sweet Paris has turned into one of the best fast casual hotspots in various parts of Houston, Austin, San Antonio, College Station, Miami, Woodbury, and international resort destinations.
            </p>
            <p>
              Every day - and every bite - is an opportunity to savor all that's good in the world. Although crepes are known for being French, we have introduced hints of other cultures into this versatile dish that can be enjoyed any time of the day!
            </p>
            <p>
              Now, after reading that last paragraph, you're probably pretty hungry. How can you get a taste of this celebrated cuisine? If you know what to order, click on either the Order Now! button on the home page, or click on the Order Now! button in the Menu after surveying the menu for a bit. Your choice!
            </p>
          </div>
        </div>
      </main><footer className="menu-footer">
            <div className="menu-footer-message">
              Get in touch with us! Follow us on:
            </div>
            <div className="menu-footer-container">
              <i className="fa-brands fa-square-instagram fa-2xl menu-footer-smlink" id="menu-footer-instagram"></i>
              <i className="fa-brands fa-twitter fa-2xl menu-footer-smlink" id="menu-footer-twitter"></i>
              <i className="fa-brands fa-facebook fa-2xl menu-footer-smlink" id="menu-footer-facebook"></i>
              <i className="fa-brands fa-tiktok fa-2xl menu-footer-smlink" id="menu-footer-tiktok"></i>
            </div>
          </footer></></>
    
  );
};

export default About;
