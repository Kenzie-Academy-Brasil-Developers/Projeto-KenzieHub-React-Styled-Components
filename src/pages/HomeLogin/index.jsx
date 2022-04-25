import Input from "../../components/Input";
import { Container, Form, Button, ContainerMain, Message } from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function HomeLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const clickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/sessions", user)
      .then((response) => console.log(response.data))
      .catch((_) =>
        toast.error("Usuário não cadastrado", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
    reset();
  };

  const onClickRegister = () => history.push("/register");

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <ContainerMain>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <Input
            label="Email"
            placeholder="Digite seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            icon={showPassword ? AiFillEyeInvisible : AiFillEye}
            onClick={clickShowPassword}
            type={showPassword ? "text" : "password"}
            placeholder="Digite sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Button formButton type="submit">
            Entrar
          </Button>
        </Form>
        <Message>Ainda não possui uma conta?</Message>
        <Button onClick={onClickRegister}>Cadastrar</Button>
      </ContainerMain>
    </Container>
  );
}

export default HomeLogin;
