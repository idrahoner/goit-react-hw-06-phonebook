// import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, changeFilter } from './actions';

const initialContacts = { contactList: [] };
const initialFilter = '';

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        contactList: [...state.contactList, action.payload],
      };

    case removeContact.type:
      return {
        ...state,
        contactList: state.contactList.filter(
          element => element.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case changeFilter.type:
      return action.payload;

    default:
      return state;
  }
};
