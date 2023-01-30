import { Link } from "react-router-dom";
import styles from "./App.module.scss"; 

function App() {
  return (
    <div className={styles.App}>
      <h1>HOMEPAGE</h1>
      <Link to="/contacts">Vai a contatti</Link>
    </div>
  );
}

export default App;
