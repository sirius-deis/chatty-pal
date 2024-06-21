import { useContext, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { FaUserAlt, FaBookmark, FaMoon, FaSignOutAlt } from "react-icons/fa";
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
  StyledExit,
} from "./menu.styles";
import AnimateWrapper from "../../components/animateWrapper/animateWrapper";
import Modal from "../modal/modal";
import { signOut } from "../../store/user/user.actions";

import Row from "../row/row";
import List from "../list/list";
import Toggle from "../toggle/toggle";
import { ThemeContext } from "../../store/themeContext";
import Profile from "../profile/profile";

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
  const [iSSettingsOpen, setIsSettingOpen] = useState(false);
  const dispatch = useDispatch();

  const themeChangeHandler = (e) => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  const logout = () => {
    dispatch(signOut());
  };

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
                <div>{option[1]}</div>
                <Toggle
                  checked={theme === "dark"}
                  onChange={themeChangeHandler}
                />
              </StyledMenuItem>
            );
          }
          return (
            <StyledMenuItem key={i}>
              <StyledIconWrapper>{option[0]}</StyledIconWrapper>
              <div>{option[1]}</div>
            </StyledMenuItem>
          );
        })}
        <StyledExit>
          <StyledMenuItem onClick={logout}>
            <StyledIconWrapper>
              <FaSignOutAlt />
            </StyledIconWrapper>
            <div>Logout</div>
          </StyledMenuItem>
        </StyledExit>
      </List>

      {iSSettingsOpen && (
        <AnimateWrapper
          isMounted={true}
          mountedStyle={{ animation: "fadeOut 0.2s linear 1" }}
          unmountedStyle={{ animation: "fadeIn 0.2s linear 1" }}
          delay={200}
        >
          <Modal
            withCloseBtn
            closeBtnTitle="Cancel"
            closeModal={() => setIsSettingOpen((currentState) => !currentState)}
          >
            <Profile />
          </Modal>
        </AnimateWrapper>
      )}
    </StyledMenu>
  );
};

export default Menu;
