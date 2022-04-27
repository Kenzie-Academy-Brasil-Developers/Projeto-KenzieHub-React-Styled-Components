import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: var(--pink-primary);

    @media (min-width: 1024px) {
      font-size: 26px;
    }
  }
`;

export const ContainerTitle = styled.div`
  width: 100vw;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px 0px 15px;

  @media (min-width: 1024px) {
    padding: 0px 200px 0px 200px;
  }

  @media (min-width: 1500px) {
    padding: 0px 400px 0px 400px;
  }
`;

export const ContainerInfo = styled.div`
  width: 100vw;
  height: 131px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 200px 0px 200px;
  }

  @media (min-width: 1500px) {
    padding: 0px 400px 0px 400px;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
  }

  p {
    color: var(--grey-1);
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ContainerMain = styled.div`
  width: 100vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  padding: 0px 15px 0px 15px;

  @media (min-width: 1024px) {
    padding: 0px 200px 0px 200px;
  }

  @media (min-width: 1500px) {
    padding: 0px 400px 0px 400px;
  }
`;

export const ContainerMainTitle = styled.div`
  height: 75px;
  display: flex;
  align-items: center;

  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 16px;
  }

  button {
    height: 32px;
    width: 32px;
    background-color: var(--grey-3);
    border-radius: 4px;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 13px;
      color: var(--grey-0);
    }

    :hover {
      background-color: var(--grey-2);
    }
  }
`;

export const ContainerTableTechs = styled.div`
  width: 100%;
  padding: 20px 15px 5px 15px;
  border-radius: 4px;
  background-color: var(--grey-3);
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTech = styled.div`
  width: 95%;
  height: 48px;
  background-color: var(--grey-4);
  border-radius: 4px;
  margin-bottom: 15px;

  :hover {
    background-color: var(--grey-2);
    cursor: pointer;
  }

  display: flex;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
  align-items: center;

  h4 {
    font-size: 14px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--grey-1);
  }
`;

export const ButtonVoltar = styled.button`
  width: 55.49px;
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border-radius: 4px;
  border: none;

  :hover {
    background-color: var(--grey-2);
  }
`;
