import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 296px;
  background-color: var(--grey-3);
  border-radius: 3.2px;

  @media (min-width: 1024px) {
    height: 342px;
    width: 369px;
  }
`;

export const ContainerTitle = styled.div`
  background-color: var(--grey-2);
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;

  h5 {
    font-size: 11.23px;
    font-weight: 700;
  }

  button {
    border: none;
    border-radius: 20px;
    font-size: 22px;
    color: var(--grey-1);
    background-color: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    height: 50px;
    padding: 0px 20px 0px 20px;

    h5 {
      font-size: 14px;
    }

    button {
      font-size: 25px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  height: max-content;
  max-height: 235px;
  padding: 0px 15px 0px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    max-height: 292px;
    padding: 0px 20px 0px 20px;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 38px;
  border: 1px solid var(--pink-primary);
  border-radius: 4px;
  background-color: var(--pink-primary);
  color: var(--grey-0);
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0px 0px 0px;

  @media (min-width: 1024px) {
    height: 48px;
    font-size: 16px;
  }

  :hover {
    border: 1px solid var(--pink-focus);
    background-color: var(--pink-focus);
  }
`;
