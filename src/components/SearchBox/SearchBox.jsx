import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilters } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));
  };

  return (
    <>
      <p className={style.p}>Find contacts by name</p>
      <input
        value={filter}
        onChange={handleChange}
        className={style.input}
        type="text"
        placeholder="Arama Yapabilirsiniz."
      />
    </>
  );
};

export default SearchBox;
