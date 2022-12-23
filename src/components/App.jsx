// import { useState, useEffect } from 'react';
// import { useState } from 'react';

import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

// import { parseJson, hasInclude } from 'utils';

// const LOCAL_STORAGE_KEY = 'phonebookContacts';

export default function App() {
  // const [contacts, setContacts] = useState(
  // () => parseJson(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  //   []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = profile => {
  //   const isAlreadyHave = hasInclude(profile, contacts);

  //   if (isAlreadyHave) {
  //     return alert(isAlreadyHave + ' is already in contacts.');
  //   }

  //   setContacts(prevContacts => [...prevContacts, profile]);
  // };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(element => element.id !== id));
  // };

  // const handleChange = event => {
  //   setFilter(event.currentTarget.value);
  // };

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
