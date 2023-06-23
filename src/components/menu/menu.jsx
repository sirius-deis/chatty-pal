import { Link } from 'react-router-dom';
import { FaUserAlt, FaBookmark, FaMoon } from 'react-icons/fa';
import { BsMegaphoneFill } from 'react-icons/bs';
import { MdGroups2, MdCall, MdSettings } from 'react-icons/md';
import { StyledMenu, StyledUserInfo, StyledInfo, StyledStatus, StyledMenuItem, StyledIconWrapper } from './menu.styles';

import Row from '../row/row';
import List from '../list/list';

const settingOptions = [
  [<MdGroups2 />, 'New Group'],
  [<BsMegaphoneFill />, 'New Channel'],
  [<FaUserAlt />, 'Contacts'],
  [<MdCall />, 'Calls'],
  [<FaBookmark />, 'Saved Messages'],
  [<MdSettings />, 'Settings'],
  [<FaMoon />, 'Night Mode'],
];

const Menu = ({ style }) => {
  return (
    <StyledMenu style={style}>
      <StyledUserInfo>
        <Row>
          <StyledInfo>
            <img src='https://source.unsplash.com/random/300×300/?face' alt='avatar' />
            <h5>Name</h5>
          </StyledInfo>
        </Row>
        <Row>
          <StyledStatus>Some status</StyledStatus>
        </Row>
      </StyledUserInfo>

      <hr />
      <List>
        {settingOptions.map((option) => (
          <StyledMenuItem>
            <StyledIconWrapper>{option[0]}</StyledIconWrapper>
            <Link>{option[1]}</Link>
          </StyledMenuItem>
        ))}
      </List>
    </StyledMenu>
  );
};

export default Menu;
