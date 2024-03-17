import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectFilteredContacts } from 'store/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'store/contactSlice/thunks';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={css.item}>
            <p>
              <button
                onClick={() => dispatch(deleteContact(id))}
                className={css.button}
              >
                delete
              </button>
              {name}: {phone}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
