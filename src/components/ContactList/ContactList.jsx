import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const allContacts = useSelector((state) => state.items.items);
  const search = useSelector((state) => state.filters.name);

  console.log("list", allContacts.length);

  const filterContacts = allContacts.filter(contact =>
    contact.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      {allContacts.length !== 0 ? (
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

      {!filterContacts.length && allContacts.length !== 0 && (
        <p>No contacts found</p>
      )}
    </>
  );
}
