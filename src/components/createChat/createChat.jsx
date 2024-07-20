import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import FilePicker from "../filePicker/filePicker";
import Input from "../input/input";
import Modal from "../modal/modal";
import Row from "../row/row";
import Header from "../header/header";

const CreateChat = ({ children, title, clickHandler }) => {
  const [chatTitle, setChatTitle] = useState();
  const [file, setFile] = useState(null);
  const onSubmitHandler = async () => {
    const formData = new FormData();
    formData.append("file", file);
    await fetchData("chats/", { body: formData });
  };

  const onFileUpload = async (files) => setFile(files[0]);

  return (
    <Modal withCloseBtn closeBtnTitle="Cancel" clickHandler={clickHandler}>
      <form onSubmit={onSubmitHandler}>
        <Row>
          <FilePicker singleFile onChange={onFileUpload} value={file}>
            <FaPlus />
          </FilePicker>
          <Header>Create a {title}</Header>
        </Row>
        <Input
          type="text"
          placeholder="Enter a chat name"
          value={chatTitle}
          onChange={(e) => setChatTitle(e.target.value)}
        />
        <div>{children}</div>
        <Button primary>Create</Button>
      </form>
    </Modal>
  );
};

CreateChat.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default CreateChat;
