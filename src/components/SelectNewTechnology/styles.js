import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 90%;
  background-color: transparent;

  h3 {
    font-size: 9.77px;
    font-weight: 400;
    color: var(--grey-0);
    span {
      color: var(--negative-toastify);
    }
    padding: 18px 0px 18px 0px;

    @media (min-width: 1024px) {
      font-size: 12.18px;
    }
  }
`;

export const SelectStyled = styled.select`
  width: 100%;
  border: 1px solid var(--grey-2);
  color: var(--grey-1);
  height: 38px;
  border-radius: 3px;
  font-size: 13px;
  padding-left: 13px;
  background-color: var(--grey-2);

  @media (min-width: 1024px) {
    height: 48px;
    font-size: 16.24px;
  }

  :focus {
    color: var(--grey-0);
  }

  ::placeholder {
    font-size: 13px;
    color: var(--grey-1);

    @media (min-width: 1024px) {
      font-size: 16.24px;
    }
  }

  option {
    font-size: 13px;
    width: 100%;
    height: 38px;
    border: 1px solid var(--grey-2);
    color: var(--grey-1);

    ::placeholder {
      font-size: 13px;
      color: var(--grey-1);

      @media (min-width: 1024px) {
        font-size: 16.24px;
      }
    }

    @media (min-width: 1024px) {
      font-size: 16.24px;
      height: 48px;
    }
  }
`;
