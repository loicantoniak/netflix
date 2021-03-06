import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 46px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(autofill, minmax(150px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  color: #757575;
  font-size: 16px;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const Title = styled.p`
  color: #757575;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #757575;
  font-size: 16px;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
