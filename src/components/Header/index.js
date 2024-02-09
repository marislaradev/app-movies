import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import rapflix from "./images/rapflix.png";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={rapflix} className={styles.logo} alt="logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Pesquisar</Link>
      </nav>
    </header>
  );
}

export default Header;
