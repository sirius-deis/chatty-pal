import Form from "../form/form";
import Input from "../input/input";
import Button from "../button/button";
import Loader from "../loader/loader";
import Row from "../row/row";
import { useSelector } from "react-redux";
import Image from "../../assets/images";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Form>
      <Row>
        <h2>Profile</h2>
        <Button>Cancel</Button>
      </Row>
      <img src={user.photos[0] ? user.photos[0] : Image} alt="avatar" />
      <h2>Change profile picture</h2>
      <Input type="text" name="name" placeholder="Name" value={user.name} />
      <Input type="email" name="email" placeholder="Email" value={user.email} />
      <Input type="text" name="bio" placeholder="Bio" value={user.bio} />

      <Button>Save changes</Button>
    </Form>
  );
};

export default Profile;
