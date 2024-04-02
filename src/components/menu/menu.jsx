import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserAlt, FaBookmark, FaMoon } from "react-icons/fa";
import { BsMegaphoneFill } from "react-icons/bs";
import { MdGroups2, MdCall, MdSettings } from "react-icons/md";
import Image from "../../assets/images/no-camera.png";
import {
  StyledMenu,
  StyledUserInfo,
  StyledInfo,
  StyledStatus,
  StyledMenuItem,
  StyledIconWrapper,
} from "./menu.styles";

import Row from "../row/row";
import List from "../list/list";
import Toggle from "../toggle/toggle";
import { ThemeContext } from "../../store/themeContext";

const settingOptions = [
  [<MdGroups2 />, "New Group"],
  [<BsMegaphoneFill />, "New Channel"],
  [<FaUserAlt />, "Contacts"],
  [<MdCall />, "Calls"],
  [<FaBookmark />, "Saved Messages"],
  [<MdSettings />, "Settings"],
  [<FaMoon />, "Night Mode"],
];

const Menu = ({ style }) => {
  const user = useSelector((state) => state.user.user);
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <StyledMenu style={style}>
      <StyledUserInfo>
        <Row>
          <StyledInfo>
            <img src={user.photos[0] ? user.photos[0] : Image} alt="avatar" />
            <h5>{user.userName}</h5>
          </StyledInfo>
        </Row>
        <Row>
          <StyledStatus>{user.bio || "Add bio"}</StyledStatus>
        </Row>
      </StyledUserInfo>

      <hr />
      <List>
        {settingOptions.map((option, i) => {
          if (i === settingOptions.length - 1) {
            return (
              <StyledMenuItem key={i}>
                <StyledIconWrapper>{option[0]}</StyledIconWrapper>
                <Link>{option[1]}</Link>
                <Toggle theme={theme} changeTheme={changeTheme} />
              </StyledMenuItem>
            );
          }
          return (
            <StyledMenuItem key={i}>
              <StyledIconWrapper>{option[0]}</StyledIconWrapper>
              <Link>{option[1]}</Link>
            </StyledMenuItem>
          );
        })}
      </List>
    </StyledMenu>
  );
};

export default Menu;
