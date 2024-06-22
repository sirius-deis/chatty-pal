import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Panel from "../panel/panel";
import Input from "../input/input";
import Button from "../button/button";
import Row from "../row/row";
import Heading from "../heading/heading";
import Image from "../../assets/images/no-camera.png";
import { updateUserInfo } from "../../store/user/user.actions";

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
    <form onSubmit={onSubmit} style={{ width: "40rem" }}>
      <Panel>
        <Row>
          <Heading size={2.5} weight={500}>
            Profile
          </Heading>
        </Row>
        <Row>
          <img src={photo ? photo : Image} alt="avatar" />
        </Row>
        <Heading mb={1}>Change profile picture</Heading>
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
        <Button size="sm">Save changes</Button>
      </Panel>
    </form>
  );
};

export default Profile;
