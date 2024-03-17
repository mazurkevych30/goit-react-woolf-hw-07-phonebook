export function handlePeding(state) {
  state.isLoading = true;
  state.error = null;
}

export function handleRejected(state, { error }) {
  state.isLoading = false;
  state.error = error.message;
}

export function handleFulfilledGet(state, { payload }) {
  state.contacts = payload;
  state.isLoading = false;
}

export function handleFulfilledAdd(state, { payload }) {
  state.contacts.push(payload);
  state.isLoading = false;
}

export function handleFulfilledDelete(state, { payload }) {
  const index = state.contacts.findIndex(contact => contact.id === payload.id);
  state.contacts.splice(index, 1);
  state.isLoading = false;
}
