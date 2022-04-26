import { Container, ContainerTitle, Form, Button } from "./styles";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectNewTechnology from "../SelectNewTechnology";

function ModalNewTechnology() {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = ({ title, status }) => {
    const user = { title, status };

    console.log(user);

    reset();
  };

  return (
    <Container>
      <ContainerTitle>
        <h5>Cadastrar Tecnologia</h5>
        <button>&times;</button>
      </ContainerTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Nome"
          placeholder="Digite a nova tecnologia"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <SelectNewTechnology
          label="Selecionar status"
          name="status"
          register={register}
        />

        <Button type="submit">Cadastrar Tecnolgia</Button>
      </Form>
    </Container>
  );
}

export default ModalNewTechnology;

/* 
Criar modal Tecnologia detalhes, implementar no clique da div de tecnologia
Fazer map criando os ContainerTech a partir da Api e atribuir ID a cada div, para facilitar a edição, selecionando a partir do ID da tecnologia
Checar se as tecnolgias possuem ID, caso sim, enviar o PUT pra tecnolgia cujo id seja o mesmo id da div clicada, o mesmo para o DELETE
Criar background do model newTechnology e adiciona a logica JS que abre o model no clique do botão, usando useState(true/false)
para determinar quando renderizar o modal, fazer o mesmo para o outro modal de Tecnolgia Detalhes
*/
