// import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, changeFilter } from './actions';

const initialContacts = [];
const initialFilter = '';

export const contactsReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case addContact.type:
      console.log(state);
      return [...state, action.payload];

    case removeContact.type:
      return state.filter(element => element.id !== action.payload);

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
