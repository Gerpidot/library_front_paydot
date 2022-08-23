import RegisterComponent from "../components/registerForm";
import { SetStateAction, useState } from "react";
import LoginForm from "../components/loginForm";
import ForgotForm from "../components/forgotForm";
import IndexNav from "../components/navBarIndex";
import { ContainerDiv, EmptyDivSeparator } from "../styles/styled.home.module";
const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(1);
  const [showCurrent, setShowCurrent] = useState(false);

  const toggleCurrent = () => {
    if (!showCurrent) {
      setShowCurrent(true);
      return;
    }
  };

  const setCurrent = (index: number) => {
    setCurrentIdx(index);
    toggleCurrent();
  };
  const tagArray = [
    <RegisterComponent setCurrent={setCurrent} />,
    <LoginForm setCurrent={setCurrent} />,
    <ForgotForm setCurrent={setCurrent} />,
  ];
  return (
    <ContainerDiv>
      <IndexNav setCurrent={setCurrent} />
      <div>{tagArray[currentIdx]}</div>
      <EmptyDivSeparator>
        <p>
          <label>16</label> Usuarios Registrados
        </p>
        <p>
          <label>16</label> Libros en la Biblioteca
        </p>
        <p>
          <label>16</label> Libros Prestados
        </p>
      </EmptyDivSeparator>
    </ContainerDiv>
  );
};

export default Home;
