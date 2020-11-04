import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
`;

export const ButtonLink = styled(Link)`
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  margin: 2em 0 1em 0;
  font-size: 1.3vw;
  background: #fff;
  color: #000;
  border: 1px solid #fff;
  font-weight: 700;

  &:hover {
    color: white;
    background-color: #c00;
    border: 1px solid #c00;
  }
`;
