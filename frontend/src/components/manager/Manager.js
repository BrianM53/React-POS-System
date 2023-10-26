import './Manager.css';
import LogoutButton from '../utility/logoutButton';

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
