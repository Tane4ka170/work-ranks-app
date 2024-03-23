import SelectRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SelectRounded />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchInput;
