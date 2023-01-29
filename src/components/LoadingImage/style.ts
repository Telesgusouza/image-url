import styled from "styled-components";

type Props = {
    width: number
}

export const Container = styled.main`
  width: 300px;
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

    transition: width .2s ease-in-out;

    height: 100%;
    border-radius: 4px;
    background-color: #2F80ED;

    width: ${props=>props.width}%;
  }
`;
