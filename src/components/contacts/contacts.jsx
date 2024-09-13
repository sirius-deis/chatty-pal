import { useDispatch, useSelector } from "react-redux";
import { BsSend } from "react-icons/bs";
import List from "../list/list";
import Modal from "../modal/modal";
import { useEffect } from "react";
import { fetchContacts } from "../../store/contacts/contacts.actions";
import {StyledContactContainer, StyledContactInfo, StyledContactPhoto} from './contacts.styles';
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
      dispatch(fetchContacts())
  }, [dispatch]);

  return <Modal
    withCloseBtn
  >
    <List>
      {contacts.map(contact => <div key={contact._id}>
        <StyledContactContainer>
          <StyledContactPhoto src={contact.photo} alt="contact"/>
          <StyledContactInfo>
          {contact.name}
          </StyledContactInfo>
          <Button
            type="empty"
            backgroundColor="transparent"
            style={{ padding: "1.2rem" }}
            onClick={() => navigate(`/chat/${contact._id}`)}
          >
            <BsSend />
          </Button>
        </StyledContactContainer>
      </div>)}
    </List>
  </Modal>
}

export default Contacts;