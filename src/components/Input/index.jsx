import { Container, InputContainer } from "./styles";

function Input({ label, icon: Icon, onClick, register, name, error, ...rest }) {
  return (
    <Container isErrored={!!error}>
      <h3>
        {label} {!!error && <span> - {error}</span>}
      </h3>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest} />
        {Icon && <Icon onClick={onClick} />}
      </InputContainer>
    </Container>
  );
}

export default Input;
