import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact }])
  }


  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //Retrive contacts from local storage
  useEffect(()=> {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

//Something wrong with retriveContacts that I can't seem to identify, notify me 
// on my email (kevinmushan@gmail.com), will be glad to hear it

  //Persist with contacts added, not to lose them;
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  return (
    <div className="ui container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/add" element={<AddContact/>}/>
          <Route exact path="/" element={<ContactList/>}/>
        </Routes>
      </BrowserRouter>
      <Header />
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
