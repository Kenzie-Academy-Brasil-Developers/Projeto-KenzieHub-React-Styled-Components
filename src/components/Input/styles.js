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

    @media (min-width: 1024px) {
      font-size: 12.18px;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: var(--grey-2);
  border-radius: 3px;
  border: 1px solid
    ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-2)"};
  color: var(--grey-0);
  width: 100%;
  height: 38px;

  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    height: 48px;
  }

  input {
    background-color: transparent;
    font-size: 13px;
    color: ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-0)"};
    padding-left: 13px;
    width: 90%;
    border: none;

    @media (min-width: 1024px) {
      font-size: 16.24px;
    }

    ::placeholder {
      font-size: 13px;
      color: var(--grey-1);

      @media (min-width: 1024px) {
        font-size: 16.24px;
      }
    }
  }

  svg {
    color: ${(props) =>
      props.isErrored ? "var(--negative-toastify)" : "var(--grey-1)"};

    @media (min-width: 1024px) {
      font-size: 18px;
    }

    :hover {
      cursor: pointer;
    }
  }
`;
