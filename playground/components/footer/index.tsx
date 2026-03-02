import * as _ from "./style";
import Logo from "../../../assets/logo-lumio.png";
import LogoIcon from "../../../assets/logo.png";

const Footer = () => {
  return (
    <_.Footer>
      <_.FooterLinks>
        <_.LogoContainer>
          <_.Icon src={LogoIcon} alt="Lumio UI Icon" />
          <img src={Logo} alt="Lumio UI Logo" />
        </_.LogoContainer>

        <_.Nav>
          <a href="">Instalação</a>
          <a href="https://lumio-ui.vercel.app/?path=/docs/components-button--docs">
            Storybook
          </a>
          <a href="https://github.com/caamag/Lumio.UI" target="blank">
            Github
          </a>
          <a href="">npm</a>
        </_.Nav>
      </_.FooterLinks>
    </_.Footer>
  );
};

export default Footer;
