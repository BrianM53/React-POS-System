import LogoutButton from '../utility/logoutButton';
import './Cashier.css';

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
