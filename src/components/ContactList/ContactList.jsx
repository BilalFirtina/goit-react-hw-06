import style from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deletePerson }) => {
  return (
    <>
      <div className={style.container}>
        {contacts.map((contact) => {
          return (
            <div className={style.list} key={contact.id}>
              <Contact person={contact} deletePerson={deletePerson} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
