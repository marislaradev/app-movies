import styles from "./Header.module.css";
import rapflix from "./images/rapflix.png"

function Header() {
    return(
        <header className={styles.header}>
            <span>
                <img src={rapflix} className={styles.logo} />
            </span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
            </nav>
        </header>
    );
}

export default Header;