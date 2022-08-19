import Image from "next/image";
import {
  DivContainer,
  DivLogo,
  DivVar,
  HButton,
} from "../styles/styled.header.module";
import logo from "../resources/logo.png";

const Header = ({ setCurrent }: any) => {
  return (
    <div>
      <DivContainer>
        <DivLogo>
          <Image src={logo} alt="logo" width={100} height={150} />
        </DivLogo>

        <div className="container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="70%">
                Biblioteca
              </text>
            </symbol>

            <g className="g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
        </div>
      </DivContainer>

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
        <HButton>Proyecto</HButton>
      </DivVar>
    </div>
  );
};

export default Header;
