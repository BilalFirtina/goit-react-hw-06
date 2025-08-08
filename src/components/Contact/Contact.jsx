import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import style from "./Contact.module.css";

const Contact = ({ person, deletePerson }) => {
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
      <button onClick={() => deletePerson(person.id)}>Delete</button>
    </div>
  );
};

export default Contact;
