import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts;

export const selectFilter = state => state.filter.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
