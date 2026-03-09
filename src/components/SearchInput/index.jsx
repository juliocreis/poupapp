import styles from "./search-input.module.css";
import search from "../../assets/search.png"

export function SearchInput(props) {
  return (
    <>
      <div className={styles.search__input}>
        <img src={search} alt="Lupa" />
        <input className={styles.input} {...props} />
      </div>
    </>
  );
}
