import LogoutButton from '../utility/logoutButton';
import './menu.css';

function Menu() {
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

export default Menu;
