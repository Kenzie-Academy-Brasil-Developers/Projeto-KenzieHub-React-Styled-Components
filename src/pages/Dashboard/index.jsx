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

function Dashboard({ authenticated, setAuthenticated }) {
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

  return (
    <Container>
      <ModalNewTechnology />
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
          <button>
            <FaPlus />
          </button>
        </ContainerMainTitle>
        <ContainerTableTechs>
          {/* Fazer map no array de techs da requisição do usuário pra criar cada container com a tech */}
          <ContainerTech>
            <h4>React JS</h4>
            <p>Avançado</p>
          </ContainerTech>
          <ContainerTech>
            <h4>Javascript</h4>
            <p>Avançado</p>
          </ContainerTech>
          <ContainerTech>
            <h4>Python</h4>
            <p>Avançado</p>
          </ContainerTech>
        </ContainerTableTechs>
      </ContainerMain>
    </Container>
  );
}

export default Dashboard;
