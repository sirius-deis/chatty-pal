import { useContext, useState } from "react";
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
import { signOut } from "../../store/user/user.actions";

import Row from "../row/row";
import List from "../list/list";
import Toggle from "../toggle/toggle";
import { ThemeContext } from "../../store/themeContext";
import Profile from "../profile/profile";
import CreateChat from "../createChat/createChat";

const Menu = ({ style }) => {
  const { user, token } = useSelector((state) => state.user);
  const { theme, changeTheme } = useContext(ThemeContext);
  const [iSSettingsOpen, setIsSettingOpen] = useState(false);
  const [isGroupCreatorOpen, setIsGroupCreatorOpen] = useState(false);
  const [isChannelCreatorOpen, setIsChannelCreatorOpen] = useState(false);
  const dispatch = useDispatch();

  const settingOptions = [
    [<MdGroups2 />, "New Group", () => setIsGroupCreatorOpen(true)],
    [<BsMegaphoneFill />, "New Channel", () => setIsChannelCreatorOpen(true)],
    [<FaUserAlt />, "Contacts", () => {}],
    [<MdCall />, "Calls", () => {}],
    [<FaBookmark />, "Saved Messages", () => {}],
    [<MdSettings />, "Settings", () => setIsSettingOpen(true)],
    [<FaMoon />, "Night Mode"],
  ];

  const themeChangeHandler = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  const logout = () => {
    dispatch(signOut(token));
  };

  return (
    <StyledMenu style={style}>
      <StyledUserInfo>
        <Row>
          <StyledInfo>
            <img src={user?.photos[0] ? user.photos[0] : Image} alt="avatar" />
            <div className="name">{user?.userName}</div>
          </StyledInfo>
        </Row>
        <Row>
          <StyledStatus>{user?.bio || "Add bio"}</StyledStatus>
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
            <StyledMenuItem key={i} onClick={option[2]}>
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
          <Profile
            clickHandler={() =>
              setIsSettingOpen((currentState) => !currentState)
            }
          />
        </AnimateWrapper>
      )}
      {isGroupCreatorOpen && (
        <AnimateWrapper
          isMounted={true}
          mountedStyle={{ animation: "fadeOut 0.2s linear 1" }}
          unmountedStyle={{ animation: "fadeIn 0.2s linear 1" }}
          delay={200}
        >
          <CreateChat
            clickHandler={() =>
              setIsGroupCreatorOpen((currentState) => !currentState)
            }
            title="group chat"
          />
        </AnimateWrapper>
      )}
      {isChannelCreatorOpen && (
        <AnimateWrapper
          isMounted={true}
          mountedStyle={{ animation: "fadeOut 0.2s linear 1" }}
          unmountedStyle={{ animation: "fadeIn 0.2s linear 1" }}
          delay={200}
        >
          <CreateChat
            clickHandler={() =>
              isChannelCreatorOpen((currentState) => !currentState)
            }
            title="channel"
          />
        </AnimateWrapper>
      )}
    </StyledMenu>
  );
};

export default Menu;
