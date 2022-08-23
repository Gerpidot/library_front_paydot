
import {
  DivHeaderContainer,
  DivLogo,
  MyDivTest,
} from "../styles/styled.header.module";
import logo from "../resources/BarjanLogo.png";

const Header = ({ setCurrent }: any) => {
  return (
    <DivHeaderContainer>
     

      
        <div className="container">
          <svg viewBox="-50 50 960 250">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="90%">
                BIBLIOTECA
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
        
    </DivHeaderContainer>
  );
};

export default Header;
