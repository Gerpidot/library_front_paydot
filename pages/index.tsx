import RegisterComponent from "../components/registerForm";
import Link from "next/link";
import { Title, Description } from "../styles/styled.home.module";
import { SetStateAction, useState } from "react";
import LoginForm from "../components/loginForm";
import { number } from "yup";
import ForgotForm from "../components/forgotForm";
import Header from "../components/header"
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
  const tagArray = [ <RegisterComponent setCurrent={setCurrent} />, <LoginForm setCurrent={setCurrent} />,<ForgotForm setCurrent={setCurrent}/>];
  return (
    
    <div>
      <Header setCurrent={setCurrent} />
      {/*<Title>Bienvenido a la biblioteca en linea</Title>
      <Description>
        Para utilizar el servicio deberá ser un usuario registrado, si aun no lo
        está por favor complete el formulario de registro.
      </Description>*/}
      
      <div>{tagArray[currentIdx]}</div>
    </div>
  );
};

export default Home;
