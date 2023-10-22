import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  // use this to navigate between pages
  const navigate = useNavigate();
  
  const goToLoginPage = () => {
    navigate('/login');
  };

  const goToMenuPage = () => {
    navigate('/menu');
  };
  
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="Sweet Paris logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={goToLoginPage}>Go to Login Page</button>
        <button onClick={goToMenuPage}>Go to Menu Page (temporary)</button>

      </header>
    </div>
  );
}

export default App;
