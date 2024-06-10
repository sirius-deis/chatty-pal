import styled from "styled-components";
import Panel from "../panel/panel";
import Input from "../input/input";
import Button from "../button/button";
import Row from "../row/row";
import Image from "../../assets/images/no-camera.png";
import { useState } from "react";

export const StyledProfile = styled.div``;

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [photo, setPhoto] = useState(user.photo && user.photo[0]);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [bio, setBio] = useState(user.bio);

  const onChange = (fn, val) => {
    fn(val);
  };

  return (
    <Panel>
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
    </Panel>
  );
};

export default Profile;
