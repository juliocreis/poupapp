import styles from "./search-input.module.css";
import { IconSearch } from "../Icons";

export function SearchInput(props) {
  return (
    <>
      <div className={styles.search__input}>
        <IconSearch/>
        <input className={styles.input} {...props} />
      </div>
    </>
  );
}
