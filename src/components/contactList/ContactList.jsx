import Contact from "../contact/Contact"
import { useSelector } from "react-redux";
import css from "./ContactList.module.css"
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
   const items = useSelector(selectFilteredContacts);

     return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Contact item={item} />
          </li>
        );
      })}
    </ul>
  );
}