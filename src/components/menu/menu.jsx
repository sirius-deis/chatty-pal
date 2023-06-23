import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBookmark, FaMoon } from 'react-icons/fa';
import { BsMegaphoneFill } from 'react-icons/bs';
import { MdGroups2, MdCall, MdSettings } from 'react-icons/md';

import Row from '../row/row';
import List from '../list/list';

const StyledMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: calc(100% - 15%);
  background-color: var(--bg-color-lighter);
  z-index: 100;
`;

const StyledUserInfo = styled.div`
  padding: 1rem 2rem;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
  h5 {
    font-size: 2rem;
  }
`;

const StyledStatus = styled.div`
  color: var(--text-color);
  cursor: pointer;
`;

const StyledMenuItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: var(--bg-color);
  }
`;

const StyledIconWrapper = styled.div`
  display: flex;
  font-size: 1.7rem;
  padding: 0.7rem;
  color: var(--text-color-lighter);
  background-color: var(--bg-color-darker);
  border-radius: 5px;
`;

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
