import React from 'react';
import user from '../images/user.webp'

const CardContact = (props) => {
    //destructure
    const {id, name, email } = props.contact;

    return(
        //Contact name and email Style
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i
            className="trash alternate icon"
            style={{color: 'red', marginTop: '7px'}}
            //adding function to delete icon
            onClick={() => props.clickHandler(id)}
            ></i>
            </div>
    );
};

export default CardContact;