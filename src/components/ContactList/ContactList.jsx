import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <div className={style.listContainer}>
        {filteredContacts.length > 0
          ? filteredContacts.map((contact) => {
              return (
                <div className={style.list} key={contact.id}>
                  <Contact person={contact} />
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

export default ContactList;
