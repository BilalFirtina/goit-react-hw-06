import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ person }) => {
  const dispatch = useDispatch();
  const deletePerson = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={style.card}>
      <div className={style.personInfo}>
        <span>
          <IoPerson className={style.personSpan} />
          {person.name}
        </span>
        <span>
          <FaPhone className={style.personSpan} />
          {person.number}
        </span>
      </div>
      <button className={style.button} onClick={() => deletePerson(person.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
