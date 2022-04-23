import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 90%;

  h3 {
    font-size: 9.77px;
    font-weight: 400;
    color: ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-0)"};
    span {
      color: var(--negative-toastify);
    }
    padding: 18px 0px 18px 0px;
  }
`;

export const InputContainer = styled.div`
  background-color: var(--grey-2);
  border-radius: 3px;
  border: 1px solid
    ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-0)"};
  color: var(--grey-0);
  width: 100%;
  height: 38px;

  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    font-size: 13px;
    color: ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-0)"};
    padding-left: 13px;
    width: 90%;
    border: none;
  }

  input::placeholder {
    font-size: 13px;
    color: var(--grey-1);
  }

  svg {
    color: ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-1)"};
  }
`;
