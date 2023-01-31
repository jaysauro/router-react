import { Link, Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.App}>
        <ul className={styles.navbar}>
          <Link to="/users">Lista utenti</Link>
          <Link to="/users/1">Primo utente</Link>
          <Link to="/messages/1">Messaggi</Link>
        </ul>
        <h1>Hello!</h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;
