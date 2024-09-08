import { useDispatch, useSelector } from "react-redux";
import List from "../list/list";
import Modal from "../modal/modal";
import { useEffect } from "react";

const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
      // dispatch()
  }, [dispatch]);

  return <Modal
    withCloseBtn
  >
    <List>

    </List>
  </Modal>
}

export default Contacts;