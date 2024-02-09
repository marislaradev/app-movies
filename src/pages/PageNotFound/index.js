import styles from "./PageNotFound.module.css";
import error404 from "./pageNotFound.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import warningError from "./warningPageNotFound.png";

function PageNotFound() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <img className={styles.title_img} src={warningError} alt="Página não localizada" />
        <img className={styles.error_img} src={error404} alt="logo de página não localizada" />
      </section>
      <Footer />
    </>
  );
}

export default PageNotFound;
