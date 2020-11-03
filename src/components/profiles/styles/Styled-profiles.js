import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 3.5vw;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.img`
  height: 10vw;
  width: 10vw;
  max-height: 200px;
  max-width: 200px;
  min-height: 84px;
  min-width: 84px;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 24px;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(Link)`
  border: 1px solid grey;
  color: grey;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  margin: 2em 0 1em 0;
  font-size: 1.3vw;

  &:hover {
    border: 1px solid white;
    color: white;
  }
`;
