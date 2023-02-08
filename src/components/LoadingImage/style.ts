import styled from "styled-components";

type Props = {
  width: number;
};

export const Container = styled.main`
  width: 300px;

  @media (max-width: 340px) {
    width: 90vw;
  }
`;

export const NavBar = styled.div<Props>`
  margin-top: 10px;
  width: 100%;
  height: 5px;
  border-radius: 4px;
  background-color: #f2f2f2;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    transition: width 0.2s ease-in-out;

    height: 100%;
    border-radius: 4px;
    background-color: #2f80ed;

    width: ${(props) => props.width}%;
  }
`;
