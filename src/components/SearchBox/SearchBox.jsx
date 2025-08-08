import style from "./SearchBox.module.css";
const SearchBox = ({ onChange }) => {
  return (
    <>
      <p className={style.p}>Find contacts by name</p>
      <input
        onChange={onChange}
        className={style.input}
        type="text"
        placeholder="Arama Yapabilirsiniz."
      />
    </>
  );
};

export default SearchBox;
