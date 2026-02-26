import * as _ from "./styles";
import { Button } from "../../../src";
import Notebook from "../../../assets/notebook.png";

const Home = () => {
  return (
    <_.HomeContainer>
      <_.HomeSection>
        <_.Content>
          <_.Title>
            Ilumine sua interface <br /> com Lumio<span>.UI</span>
          </_.Title>
          <_.Description>
            Um Design System robusto, construído em React, focado em <br />
            acessibilidade, performance e uma experiência de desenvolvimento
            fluida.
          </_.Description>
          <_.BtnContainer>
            <Button variant="isPrimary">Comece agora</Button>
            <Button variant="isEmpty">Ver Storybook</Button>
          </_.BtnContainer>
        </_.Content>

        <img src={Notebook} alt="" />
      </_.HomeSection>
    </_.HomeContainer>
  );
};

export default Home;
