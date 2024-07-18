import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import FilePicker from "../filePicker/filePicker";
import Input from "../input/input";
import Modal from "../modal/modal";
import Row from "../row/row";
import Header from "../header/header";

const CreateChat = ({ children, title, clickHandler }) => {
  return (
    <Modal withCloseBtn closeBtnTitle="Cancel" clickHandler={clickHandler}>
      <Row>
        <FilePicker singleFile>
          <FaPlus />
        </FilePicker>
        <Header>Create a {title}</Header>
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
  clickHandler: PropTypes.func,
};

export default CreateChat;
