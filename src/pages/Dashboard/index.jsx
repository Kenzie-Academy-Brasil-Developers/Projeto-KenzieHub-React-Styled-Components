import { Redirect } from "react-router-dom";
import {
  Container,
  ContainerInfo,
  ButtonVoltar,
  ContainerTitle,
  ContainerMain,
  ContainerTableTechs,
  ContainerTech,
  ContainerMainTitle,
} from "./styles";
import { FaPlus } from "react-icons/fa";
import ModalNewTechnology from "../../components/ModalNewTechnology";
import { useEffect, useState } from "react";
import ModalDetailsTechnology from "../../components/ModalDetailsTechnology";
import api from "../../services/api";
import { toast } from "react-toastify";

function Dashboard({ authenticated, setAuthenticated }) {
  const [openNewTechModal, setOpenNewTechModal] = useState(false);
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [myTechs, setMyTechs] = useState([]);

  const getUserTech = () => {
    const getUserId = localStorage.getItem("@KenzieHub:userid");

    const id = JSON.parse(getUserId);

    api.get(`users/${id}`).then((response) => {
      if (myTechs.length > 0) {
        const filter = response.data.techs.filter((tech, index) => {
          return JSON.stringify(tech) !== JSON.stringify(myTechs[index]);
        });
        setMyTechs([...myTechs, ...filter]);
      } else {
        setMyTechs([...response.data.techs]);
      }
    });
  };

  useEffect(() => {
    getUserTech();
  }, []);

  useEffect(() => {
    console.log(myTechs);
  }, [myTechs]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const getName = () => {
    const get = localStorage.getItem("@KenzieHub:name");
    return JSON.parse(get);
  };

  const getModule = () => {
    const get = localStorage.getItem("@KenzieHub:module");
    return JSON.parse(get);
  };

  const goLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  const clickOpenTechModal = () => {
    setOpenNewTechModal(!openNewTechModal);
  };

  const clickOpenDetailModal = () => {
    setOpenDetailModal(!openDetailModal);
  };

  const deleteTech = (id) => {
    const getToken = localStorage.getItem("@KenzieHub:token");

    const token = JSON.parse(getToken);

    const filter = myTechs.filter((tech) => tech.id !== id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMyTechs(filter);
        toast.success("Tecnologia excluída com sucesso");
      });
  };

  return (
    <Container>
      {openNewTechModal && (
        <ModalNewTechnology
          clickOpenTechModal={clickOpenTechModal}
          getUserTech={getUserTech}
        />
      )}
      {openDetailModal && (
        <ModalDetailsTechnology clickOpenDetailModal={clickOpenDetailModal} />
      )}
      <ContainerTitle>
        <h1>Kenzie Hub</h1>
        <ButtonVoltar onClick={goLogout}>Sair</ButtonVoltar>
      </ContainerTitle>
      <ContainerInfo>
        <h2>Olá, {getName()}</h2>
        <p>{getModule()}</p>
      </ContainerInfo>
      <ContainerMain>
        <ContainerMainTitle>
          <h3>Tecnologias</h3>
          <button onClick={clickOpenTechModal}>
            <FaPlus />
          </button>
        </ContainerMainTitle>
        <ContainerTableTechs>
          {myTechs.length === 0 && (
            <ContainerTech>
              <h4>Insira uma tecnologia &#128522; </h4>
              <p>É grátis &#128527;</p>
            </ContainerTech>
          )}
          {myTechs.length > 0 &&
            myTechs.map((tech) => {
              return (
                <ContainerTech
                  onClick={clickOpenDetailModal}
                  key={tech.id}
                  deleteTech={deleteTech(tech.id)}
                >
                  <h4>{tech.title}</h4>
                  <p>{tech.status}</p>
                </ContainerTech>
              );
            })}
        </ContainerTableTechs>
      </ContainerMain>
    </Container>
  );
}

export default Dashboard;

//useEffect com sintaxe de montagem, sem parametro no array pra montar a lista na hora que o componente carrega
//função pra fazer get nas techs do usuario e alimentar um useState iniciado como array
//ternário pra exibir uma tech enquanto o useState estiver vazio e sumir quando o length for maior que 0
