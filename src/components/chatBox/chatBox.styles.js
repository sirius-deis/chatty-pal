import styled from "styled-components";

export const StyleChatBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 7rem;
  padding: 0 1.4rem 0 0.7rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    background-color: var(--warning-200);
  }
  &.selected {
    background-color: var(--warning-300);
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 50%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    font-size: 2rem;
    font-weight: 500;
    background-color: var(--text);
  }
`;

export const StyledStatus = styled.span`
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  top: 0.1rem;
  right: 0.1rem;
  background-color: var(--success);
  border: 2px solid var(--text-lighter);
  border-radius: 50%;
`;

export const StyledWrapper = styled.div`
  width: calc(100% - 6rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledMessage = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.3rem;
  color: var(--text);
  font-weight: ${(props) => (props.unread ? 800 : 400)};
`;

export const StyledName = styled.h6`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--text);
`;

export const StyledTime = styled.div`
  font-size: 1rem;
  color: var(--text);
`;

export const StyledAmount = styled.span`
  position: absolute;
  top: -10px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.1rem 0.4rem;
  min-width: 2.6rem;
  min-height: 2.6rem;
  border-radius: 50px;
  background-color: var(--success);
  border: 3px solid var(--text-lighter);
  color: var(--text-lighter);
`;
