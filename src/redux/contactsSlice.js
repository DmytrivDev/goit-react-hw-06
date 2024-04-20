import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const {addContact, removeContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

//Selectors
export const getContacts = state => state.contacts;