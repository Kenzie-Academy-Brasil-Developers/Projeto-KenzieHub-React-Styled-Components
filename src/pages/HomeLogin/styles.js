import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: var(--pink-primary);
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 700;
    font-size: 14px;
  }
`;

export const Message = styled.p`
  color: var(--grey-1);
  font-size: 10px;
  font-weight: 600;
  padding: 25px 0px 0px 0px;
`;

export const ContainerMain = styled.div`
  height: max-content;
  width: 90%;
  border-radius: 3px;
  background-color: var(--grey-3);
  padding: 0px 0px 35px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: max-content;

  h2 {
    padding: 35px 0px 3px 0px;
  }
`;

export const Button = styled.button`
  width: 90%;
  height: 38px;
  border: 1px solid
    ${(props) => (props.formButton ? "var(--pink-primary)" : "var(--grey-1)")};
  border-radius: 4px;
  background-color: ${(props) =>
    props.formButton ? "var(--pink-primary)" : "var(--grey-1)"};
  color: var(--grey-0);
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0px 0px 0px;

  :hover {
    border: 1px solid
      ${(props) => (props.formButton ? "var(--pink-focus)" : "var(--grey-2)")};
    background-color: ${(props) =>
      props.formButton ? "var(--pink-focus)" : "var(--grey-2)"};
  }
`;
