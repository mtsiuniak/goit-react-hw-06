import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import "../../index.css";

export default function App() {
 
  return (
    <div>
      <ContactForm/>
      <h1>Phonebook</h1>
      <SearchBox/>
      <ContactList/>
    </div>
  );
}



