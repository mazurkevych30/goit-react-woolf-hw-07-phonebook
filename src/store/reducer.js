import { contactReducer } from './contactSlice/contactSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const reducer = {
  contact: contactReducer,
  filter: filterReducer,
};
