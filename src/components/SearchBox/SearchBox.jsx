import { useEffect, useState } from "react";
import style from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value.trim().toLowerCase());
  };
  useEffect(() => {
    dispatch(changeFilter(text));
  }, [text, dispatch]);

  return (
    <>
      <p className={style.p}>Find contacts by name</p>
      <input
        onChange={handleChange}
        className={style.input}
        type="text"
        placeholder="Arama Yapabilirsiniz."
      />
    </>
  );
};

export default SearchBox;
