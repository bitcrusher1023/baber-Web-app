import styled, { css } from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  svg {
    color: ${props => props.theme.color6};
    transition: all 0.3s;

    &::hover {
      color: ${props => props.theme.color5};
    }

    &::active {
      transform: translateY(-0.5rem);
    }
  }

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 0.9rem;
        height: 0.9rem;
        background: ${props => props.theme.color8};
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 26rem;
  left: calc(50% - 13rem);
  top: calc(100% + 2rem);
  background: ${props => props.theme.color4};
  border-radius: 0.4rem;
  padding: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 2rem);
    top: -2rem;
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-bottom: 2rem solid ${props => props.theme.color4};
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 26rem;
  padding: 1rem;
`;

export const Notification = styled.div`
  color: ${props => props.theme.color1};
  font-weight: bold;

  & + div {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme.color3};
  }

  p {
    font-size: 1.3rem;
    line-height: 1.8rem;
  }

  time {
    font-size: 1.2rem;
    opacity: 0.6;
    font-style: italic;
  }

  button {
    font-size: 1.2rem;
    border: 0;
    background: none;
    color: ${props => props.theme.color8};
    padding: 0 0.5rem;
    margin: 0 0.5rem;
    border-left: 1px solid ${props => props.theme.color3};
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: "";
        display: inline-block;
        margin-left: 0.5rem;
        width: 0.8rem;
        height: 0.8rem;
        background: ${props => props.theme.color8};
        border-radius: 50%;
      }
    `}
`;
