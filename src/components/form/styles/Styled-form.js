import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Frame = styled.div`
  max-width: 815px;
  margin: auto;
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  color: white;
  background: #e50914;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  max-width: none;
  padding-bottom: 20px;
  font-size: 1.2rem;
  color: white;
`;
