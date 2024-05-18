import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector((state) => state.items);
  const search = useSelector((state) => state.filters.name);

  console.dir("list", contacts);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      {contacts.length !== 0 ? (
        <ul>
          {filterContacts.map(contact => (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts yet</p>
      )}

      {!filterContacts.length && contacts.length !== 0 && (
        <p>No contacts found</p>
      )}
    </>
  );
}
