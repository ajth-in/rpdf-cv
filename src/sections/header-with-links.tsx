import { Text } from "@react-pdf/renderer";
import { Header } from "./header";
import { Row } from "../elements/row";
import { A } from "../elements/a";
import { Bullet } from "../elements/bullet";

const HeaderWithLinks = () => {
  return (
    <Header fullName="Ajith Kumar P M">
      <Row>
        <Text>
          <A src="https://www.linkedin.com/in/ajith-kumar-p-m">
            linkedin.com/in/ajith-kumar-p-m
          </A>
        </Text>
        <Bullet />

        <Text>ajithpmuralidharan01@gmail.com</Text>
      </Row>
      <Row justifyContent="center">
        <Text>
          <A src="https://github.com/ajth-in">github.com/ajth-in</A>
        </Text>
        <Bullet />
        <Text>Kerala, IN </Text>
        <Bullet />
        <Text>+91 7306476235</Text>
      </Row>
    </Header>
  );
};

export default HeaderWithLinks;
