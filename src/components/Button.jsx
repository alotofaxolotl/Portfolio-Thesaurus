import styled from "styled-components";

const Button = styled.button`
  border: 1px solid black;
  border-radius: 12px;
  padding: 1rem;
  font: inherit;
  font-size: large;
  background-color: transparent;
  cursor: pointer;

  &:active,
  &:hover {
    background-color: #eeeeee;
  }
`;

export default Button;