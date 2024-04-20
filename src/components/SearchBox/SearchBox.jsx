import { useId } from "react";
import { useDispatch } from "react-redux";

import { filterContacts } from "../../redux/filterSlice";

import css from "./SearchBox.module.scss";

function SearchBox({ search }) {
  const dispatch = useDispatch();
  const searchID = useId();

  const handleChange = (evt) => {
    dispatch(filterContacts(evt.target.value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <label htmlFor={searchID}>Find contacts by name</label>
      <input type="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default SearchBox;
