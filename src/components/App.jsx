import { useSelector } from "react-redux";

import { getContacts } from "../redux/contactsSlice";
import { getFilter } from "../redux/filterSlice";

import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

import "./App.scss";

function App() {
  const contacts = useSelector(getContacts);
  const filterWord = useSelector(getFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <div className="container">
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox search={filterWord} />
        <ContactList
          visibleContacts={visibleContacts}
        />
      </div>
    </div>
  );
}

export default App;
