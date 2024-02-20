import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useEffect, useState } from "react";
import Loader from "../Loader";

// Função para remover acentos
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Filtrando vídeos por categoria ou título
function filterVideos(videos, searchText) {
  const searchTextNormalized = removeAccents(searchText.toLowerCase());
  return videos.filter(
    (video) =>
      removeAccents(video.category.toLowerCase()).includes(
        searchTextNormalized
      ) ||
      removeAccents(video.title.toLowerCase()).includes(searchTextNormalized)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("");
  const foundVideos = filterVideos(videos, searchText);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar vídeos..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      {loading ? (
        <Loader />
      ) : (
        <VideoList
          videos={foundVideos}
          emptyHeading={`Sem vídeos sobre '${searchText}'`}
        />
      )}
    </section>
  );
}

export default SearchVideoList;