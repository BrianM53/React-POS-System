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
          This is the landing (App) page. <br /> <strong>Please read:</strong>
          <br />
          - See App.css for css file organizing.
          <br />
          - See file structure (components) for adding new features in an organized manner.
          <br /> 
          - See "backend/connection.js" and "backend/routes/index.js" for creating and releasing connections.
          <br /> 
          - See pinned Google Drive link in Discord for recommended working environment.
        </p>

        <button onClick={goToLoginPage}>Go to Login Page</button>
        <button onClick={goToMenuPage}>Go to Menu Page (temporary)</button>

      </header>
    </div>
  );
}

export default App;
