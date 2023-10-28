import logo from './images/logo.png';
import { Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Sweet Paris logo" />
        <p>
          This is the landing (App) page. <br /> <strong>Please read:</strong>
          <br />
          - <strong>Working environment</strong>: See pinned Google Drive link in Discord for recommended working environment.
          <br />
          - <strong>Frontend file naming conventions</strong>: Capitalize MainComponents, helper components shouldBeInCamelCase  
          <br />
          - <strong>Code organization</strong>: Follow frontend&backend structure for adding new features!!!
          <br /> 
          - <strong>CSS organization</strong>: See App.css for css file organizing.
          <br />
          - <strong>Component organization</strong>: See components/login.js code and imports
          <br /> 
          - <strong>Backend communication</strong>: See "backend/connection.js" and "backend/routes/index.js" for creating and releasing connections.
          <br />
          - <strong>React-bootstrap example</strong>: See localhost:3000/login and "src/components/login/Login.js"
        </p>
        <Link to='/login'>Go to Login Interface</Link>
        <Link to='/manager'>Go to Manager Interface</Link>
        <Link to='/cashier'>Go to Cashier Interface</Link>
        <Link to='/customer'>Go to Customer Interface</Link>
      </header>
    </div>
  );
}

export default App;
