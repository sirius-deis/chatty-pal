import styled from "styled-components";
import Panel from "../panel/panel";
import Input from "../input/input";
import Button from "../button/button";
import Row from "../row/row";
import { useDispatch, useSelector } from "react-redux";
import Image from "../../assets/images/no-camera.png";
import { useState } from "react";
import { updateUserInfo } from "../../store/user/user.actions";

export const StyledProfile = styled.div``;

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [photo, setPhoto] = useState(user.photo && user.photo[0]);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo({ name, email, bio, profilePicture: photo }));
  };

  const onChange = (fn, val) => {
    fn(val);
  };

  return (
    <Panel>
      <form onSubmit={onSubmit}>
        <Row>
          <h2>Profile</h2>
        </Row>
        <img src={photo ? photo : Image} alt="avatar" />
        <h2>Change profile picture</h2>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => onChange(setName, e.target.Value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(setEmail, e.target.Value)}
        />
        <Input
          type="text"
          name="bio"
          placeholder="Bio"
          value={bio}
          onChange={(e) => onChange(setBio, e.target.Value)}
        />

        <Button>Save changes</Button>
      </form>
    </Panel>
  );
};

export default Profile;
