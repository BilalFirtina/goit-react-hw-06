import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import "../components/App.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact } from "../redux/contactsSlice";
import { setFilter } from "../redux/filtersSlice";
import { nanoid } from "nanoid";
function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();
  const handleSubmit = (newperson) => {
    const newContactWithId = {
      ...newperson,
      id: nanoid(), // modern tarayıcılar destekliyor
    };
    dispatch(addContact(newContactWithId));
  };

  const handleDelete = (id) => {
    dispatch(removeContact(id));
  };
  const filteredContacts = contacts.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox onChange={(e) => dispatch(setFilter(e.target.value))} />
      <ContactList contacts={filteredContacts} deletePerson={handleDelete} />
    </div>
  );
}

export default App;
