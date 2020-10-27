import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  background: url(${({ src }) =>
    src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"}) top left / cover no-repeat;
`;

export const Logo = styled.img`
  height: 60px;
  width: 200px;
  margin-right: 40px;
`;

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 1.5rem;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background: #f40612;
  }
`;
