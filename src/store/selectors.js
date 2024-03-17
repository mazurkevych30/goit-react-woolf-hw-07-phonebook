import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts;
export const selectFilter = state => state.filter.filter;
export const selectIsLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }
);
