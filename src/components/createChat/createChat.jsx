import { useState } from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa6";
import FilePicker from "../filePicker/filePicker";
import Input from "../input/input";
import Modal from "../modal/modal";
import Row from "../row/row";
import Header from "../header/header";
import Button from "../button/button";
import fetchData from "../../utils/fetchData";

const CreateChat = ({ children, title, clickHandler }) => {
  const [chatTitle, setChatTitle] = useState("");
  const [file, setFile] = useState(undefined);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", chatTitle);
    await fetchData("chats", { body: formData });
  };

  const onFileUpload = async (files) => setFile(files[0]);

  return (
    <Modal withCloseBtn closeBtnTitle="Cancel" clickHandler={clickHandler}>
      <form onSubmit={onSubmitHandler}>
        <Row>
          <FilePicker singleFile onChange={onFileUpload} value={file}>
            <FaPlus data-testid="file_picker" />
          </FilePicker>
          <Header>Create a {title}</Header>
        </Row>
        <Input
          type="text"
          placeholder="Enter a chat name"
          value={chatTitle}
          onChange={(e) => setChatTitle(e)}
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
