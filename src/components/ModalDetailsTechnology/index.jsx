import {
  BackgroundModal,
  Container,
  ContainerTitle,
  Form,
  Button,
  ButtonDelete,
  ContainerButtons,
} from "./styles";
import Input from "../Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectNewTechnology from "../SelectNewTechnology";

function ModalDetailsTechnology({ clickOpenDetailModal, deleteTech }) {
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
    <BackgroundModal>
      <Container>
        <ContainerTitle>
          <h5>Tecnologia Detalhes</h5>
          <button onClick={clickOpenDetailModal}>&times;</button>
        </ContainerTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome do projeto"
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
          <ContainerButtons>
            <Button type="submit">Salvar alterações</Button>
            <ButtonDelete type="button" onClick={() => deleteTech}>
              Excluir
            </ButtonDelete>
          </ContainerButtons>
        </Form>
      </Container>
    </BackgroundModal>
  );
}

export default ModalDetailsTechnology;
