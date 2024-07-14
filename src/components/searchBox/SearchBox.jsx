
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import css from './SearchBox.module.css'

export default function SearchBox() {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by name and number</p>
      <input
        className={css.input}
        type="text"
        name="filters"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
}