import { useDispatch, useSelector } from "react-redux";
import List from "../list/list";
import Modal from "../modal/modal";
import { useEffect } from "react";
import { fetchContacts } from "../../store/contacts/contacts.actions";

const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchContacts())
  }, [dispatch]);

  return <Modal
    withCloseBtn
  >
    <List>
      {contacts.map(contact => <div key={contact._id}>{contact.name}</div>)}
    </List>
  </Modal>
}

export default Contacts;