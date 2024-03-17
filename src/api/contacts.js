import axios from 'axios';

axios.defaults.baseURL = 'https://65f7487eb4f842e808856c47.mockapi.io';

export async function getContactsApi() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContactApi(name, phone) {
  const { data } = await axios.post('/contacts', { name, phone });
  console.log(data);
  return data;
}

export async function deleteContactApi(id) {
  console.log(id);
  const { data } = await axios.delete(`/contacts/${id}`);

  console.log(data);
  return data;
}
