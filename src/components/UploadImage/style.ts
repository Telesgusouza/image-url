import styled from "styled-components";

export const Container = styled.main`
  text-align: center;

  h1 {
    font-size: 1.2rem;
  }

  p {
    color: #828282;
    font-size: 11px;
    margin: 15px 0;
  }

  @media (max-width: 340px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  div {
    width: 250px;
    padding: 20px;

    background-color: #f6f8fb;
    height: 200px;
    border: 2px dashed #97bef4;

    position: relative;

    border-radius: 12px;

    @media (max-width: 340px) {
      width: 100%;
    }
  }

  img {
    width: 60px;
    margin: 30px 0 0px 0;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    opacity: 0;
    cursor: pointer;
  }

  button {
    background-color: #2f80ed;
    border: none;
    padding: 6px 18px;
    color: white;
    border-radius: 8px;
    position: relative;

    cursor: pointer;
  }
`;
