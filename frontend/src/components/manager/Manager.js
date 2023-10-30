import './Manager.css';
import LogoutButton from '../utility/logoutButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Manager() {
  return (
    <div className="Manager">
      <header className="Manager-header">
        <p>
          This is the Manager page.
        </p>
        <LogoutButton />
      </header>
    </div>
  );
}

export default Manager;
