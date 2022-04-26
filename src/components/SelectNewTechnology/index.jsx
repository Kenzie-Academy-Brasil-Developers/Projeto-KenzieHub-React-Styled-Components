import { Container, SelectStyled } from "./styles";

function SelectNewTechnology({ label, register, name }) {
  return (
    <Container>
      <h3>{label}</h3>
      <SelectStyled {...register(name)}>
        <option>Iniciante</option>
        <option>Intermediário</option>
        <option>Avançado</option>
      </SelectStyled>
    </Container>
  );
}

export default SelectNewTechnology;
