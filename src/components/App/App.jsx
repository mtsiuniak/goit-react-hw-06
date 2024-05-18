import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import "../../index.css";
import { useSelector } from "react-redux";

export default function App() {
  const allContacts = useSelector((state) => state.items.items);
  console.dir("app", allContacts);
  return (
    <div>
      <ContactForm/>
      <h1>Phonebook</h1>
      <SearchBox/>
      <ContactList/>
    </div>
  );
}



