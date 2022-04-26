import Input from "../../components/Input";
import {
  Container,
  Form,
  Button,
  ContainerMain,
  Message,
  ContainerTitle,
  ButtonGoBack,
} from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Select from "../../components/Select";
import { Redirect } from "react-router-dom";

function Register({ authenticated }) {
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Suas senhas não correspondem"),
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

  const onSubmit = ({ email, password, name, bio, contact, course_module }) => {
    const user = { email, password, name, bio, contact, course_module };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Usuário cadastrado com sucesso", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return history.push("/");
      })
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

  const onClickGoBack = () => {
    history.push("/");
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <ContainerTitle>
        <h1>Kenzie Hub</h1>
        <ButtonGoBack onClick={onClickGoBack}>Voltar</ButtonGoBack>
      </ContainerTitle>
      <ContainerMain>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2>Crie sua conta</h2>
          <Message>Rápido e grátis, vamos nessa</Message>
          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Bio"
            placeholder="Diga um pouco sobre você"
            register={register}
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            label="Contato"
            placeholder="Sua melhor rede social ou telefone"
            register={register}
            name="contact"
            error={errors.contact?.message}
          />
          <Input
            label="Senha"
            icon={showPassword ? AiFillEyeInvisible : AiFillEye}
            onClick={clickShowPassword}
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui sua senha"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            label="Confirmar Senha"
            icon={showPassword ? AiFillEyeInvisible : AiFillEye}
            onClick={clickShowPassword}
            type={showPassword ? "text" : "password"}
            placeholder="Digite novamente sua senha"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Select
            label="Selecionar módulo"
            name="course_module"
            register={register}
          ></Select>
          <Button formButton type="submit">
            Cadastrar
          </Button>
        </Form>
      </ContainerMain>
    </Container>
  );
}

export default Register;
