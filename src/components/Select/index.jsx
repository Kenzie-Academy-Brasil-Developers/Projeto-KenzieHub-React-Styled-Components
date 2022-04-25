import { Container, SelectStyled } from "./styles";

function Select({ label, register, name }) {
  return (
    <Container>
      <h3>{label}</h3>
      <SelectStyled {...register(name)}>
        <option>Primeiro módulo (Introdução ao Frontend)</option>
        <option>Segundo módulo (Frontend Avançado)</option>
        <option>Terceiro módulo (Introdução ao Backend)</option>
        <option>Quarto módulo (Backend Avançado)</option>
      </SelectStyled>
    </Container>
  );
}

export default Select;
