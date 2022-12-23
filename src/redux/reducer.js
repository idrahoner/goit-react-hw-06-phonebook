import { createReducer } from '@reduxjs/toolkit';

import { addContact, removeContact, changeFilter } from './actions';

const initialContacts = { contactList: [] };
const initialFilter = '';

export const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => {
    state.contactList.push(action.payload);
  },
  [removeContact]: (state, action) => {
    return {
      ...state,
      contactList: state.contactList.filter(
        element => element.id !== action.payload
      ),
    };
  },
});

export const filterReducer = createReducer(initialFilter, {
  [changeFilter]: (state, action) => action.payload,
});
