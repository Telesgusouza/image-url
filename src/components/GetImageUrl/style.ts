import styled from "styled-components";

type Props = {
  copyToggle: boolean;
};

export const Container = styled.main`
  max-width: 350px;
  img {
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 380px) {
    width: 90vw;
  }
`;

export const ButtonComeBack = styled.button`
  border: none;
  background-color: #ff6961;
  color: white;
  padding: 3px 10px;
  font-size: 0.65rem;
  border-radius: 2px;
  margin-bottom: 10px;

  cursor: pointer;
`;

export const msgSucess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  h1 {
    text-align: center;
    font-size: 1.15rem;
    margin-bottom: 20px;
  }
`;

export const Image = styled.div`
  img {
    margin-bottom: 10px;
    border-radius: 12px;
    object-fit: cover;
  }
`;

export const Copy = styled.div<Props>`
  display: flex;
  background-color: #f6f8fb;
  border: 2px solid #e0e0e0;
  border-radius: 8px;

  p {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding: 8px 5px;
    font-size: 12px;
    font-size: 0.7rem;
  }

  button {
    border: none;
    background-color: ${(props) =>
      props.copyToggle ? "gray" : "#2F80ED"}; // #2F80ED;
    color: white;
    padding: 4px 20px;
    font-size: 0.65rem;
    border-radius: 8px;

    cursor: pointer;
  }
`;
