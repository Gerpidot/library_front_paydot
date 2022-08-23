import {DivVar, HButton} from "../styles/styled.home.module";

const IndexNav=({setCurrent} :any)=>{

    return(
        <DivVar>
        <HButton
          onClick={() => {
            setCurrent(1);
          }}
        >
          Iniciar Sesion
        </HButton>
        <HButton
          onClick={() => {
            setCurrent(0);
          }}
        >
          Registrarse
        </HButton>
        <HButton>Contacto</HButton>
        <HButton
       
        >Proyecto</HButton>
      </DivVar>
    )
}

export default IndexNav;