import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import FilePicker from "../filePicker/filePicker";
import Input from "../input/input";
import Modal from "../modal/modal";
import Row from "../row/row";
import Header from "../header/header";

const CreateChat = ({ children, title }) => {
  return (
    <Modal withCloseBtn closeBtnTitle="Cancel">
      <Row>
        <FilePicker singleFile>
          <FaPlus />
        </FilePicker>
        <Header>Create {title}</Header>
      </Row>
      <Input type="text" placeholder="Enter a chat name" />
      <div>{children}</div>
      <Button primary>Create</Button>
    </Modal>
  );
};

CreateChat.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default CreateChat;
