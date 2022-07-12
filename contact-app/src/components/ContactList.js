import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <CardContact contact={contact} 
            clickHandler={deleteContactHandler} 
            key={contact.id}
            />
        )
    })
    return(
        <div className="ui celled list">
            <h2>Contact List</h2>
            <p>Names did Render</p>
            {renderContactList}
        </div>
    )
}

export default ContactList;