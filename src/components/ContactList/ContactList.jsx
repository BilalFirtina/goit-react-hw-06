import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deletePerson }) => {
  return (
    <>
      <ul className={style.container}>
        {contacts.map((contact) => {
          return (
            <li className={style.list} key={contact.id}>
              <Contact person={contact} deletePerson={deletePerson} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
