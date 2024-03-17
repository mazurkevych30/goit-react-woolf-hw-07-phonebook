import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './thunks';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePeding,
  handleRejected,
} from './handlers';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, handlePeding);
    builder.addCase(fetchContacts.fulfilled, handleFulfilledGet);
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContact.pending, handlePeding);
    builder.addCase(addContact.fulfilled, handleFulfilledAdd);
    builder.addCase(addContact.rejected, handleRejected);

    builder.addCase(deleteContact.pending, handlePeding);
    builder.addCase(deleteContact.fulfilled, handleFulfilledDelete);
    builder.addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
