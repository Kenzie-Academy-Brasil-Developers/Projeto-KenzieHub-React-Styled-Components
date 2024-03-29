import {
  BackgroundModal,
  Container,
  ContainerTitle,
  Form,
  Button,
} from "./styles";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectNewTechnology from "../SelectNewTechnology";
import api from "../../services/api";

function ModalNewTechnology({ clickOpenTechModal, getUserTech }) {
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

    const getToken = localStorage.getItem("@KenzieHub:token");

    const token = JSON.parse(getToken);

    api
      .post("/users/techs", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getUserTech();
        // clickOpenTechModal()
      })
      .catch((err) => console.log(err));

    reset();
  };

  return (
    <BackgroundModal>
      <Container>
        <ContainerTitle>
          <h5>Cadastrar Tecnologia</h5>
          <button onClick={clickOpenTechModal}>&times;</button>
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
    </BackgroundModal>
  );
}

export default ModalNewTechnology;

/* 
Criar modal Tecnologia detalhes, implementar no clique da div de tecnologia
Fazer map criando os ContainerTech a partir da Api e atribuir ID a cada div, para facilitar a edição, selecionando a partir do ID da tecnologia
Checar se as tecnolgias possuem ID, caso sim, enviar o PUT pra tecnolgia cujo id seja o mesmo id da div clicada, o mesmo para o DELETE
*/
