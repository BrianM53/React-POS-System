import LogoutButton from '../utility/logoutButton';
import './Cashier.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cashier() {
  return (
    <div className="Cashier">
      <header className="Cashier-header">
        <p>
          This is the Cashier page.
        </p>
        <LogoutButton />
      </header>
    </div>
  );
}

export default Cashier;
