import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        _id: 1,
        name: "Jill Gill",
        email: "jillG@gmail.com",
        phone: "111-111-1111",
        type: "personal"
      },
      {
        _id: 2,
        name: "Hary Smirk",
        email: "harryMS@gmail.com",
        phone: "222-333-4444",
        type: "personal"
      },
      {
        _id: 3,
        name: "Sara Watson",
        email: "saraW@gmail.com",
        phone: "222-333-5555",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact 

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact 

  // Filter Contacts

  // Clear Filter

  return (
      <ContactContext.Provider
      value={{
          contacts: state.contacts
      }}>
          {props.children}
      </ContactContext.Provider>
  )
};

export default ContactState;