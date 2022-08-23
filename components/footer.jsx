import { DivFooterContainer } from "../styles/styled.footer.module";
import Image from "next/image";
import logo from "../resources/BarjanLogo.png";

const Footer = () => {
  return (
    <DivFooterContainer>
      <Image src={logo} height={120} width={300} />
    </DivFooterContainer>
  );
};

export default Footer;
