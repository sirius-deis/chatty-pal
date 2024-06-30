import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../panel/panel";
import Input from "../input/input";
import Button from "../button/button";
import Row from "../row/row";
import Header from "../header/header";
import Image from "../../assets/images/no-camera.png";
import { updateUserInfo } from "../../store/user/user.actions";
import FilePicker from "../filePicker/filePicker";
import fetchData from "../../utils/fetchData";

//TODO: add an input component for choosing a picture
const Profile = () => {
  const { user, token } = useSelector((state) => state.user);
  const [photo, setPhoto] = useState(user.photo && user.photo[0]);
  const [name, setName] = useState(user.userName || "");
  const [email, setEmail] = useState(user.email || "");
  const [bio, setBio] = useState(user.bio || "");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserInfo({ name, email, bio, profilePicture: photo }, token)
    );
  };

  const onChange = (fn, val) => {
    fn(val);
  };

  const onFileUpload = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    fetchData("add-photo", { body: formData });
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "40rem" }}>
      <Panel>
        <Row>
          <Header>
            <h2>Profile</h2>
          </Header>
        </Row>
        <Row>
          <FilePicker singleFile onChange={onFileUpload}>
            <img
              src={photo ? photo : Image}
              alt="avatar"
              title="Change a profile picture"
            />
          </FilePicker>
        </Row>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => onChange(setName, e.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(setEmail, e.target.value)}
        />
        <Input
          type="text"
          name="bio"
          placeholder="Bio"
          value={bio}
          onChange={(e) => onChange(setBio, e.target.value)}
        />
        <Button size="sm">Save changes</Button>
      </Panel>
    </form>
  );
};

export default Profile;
