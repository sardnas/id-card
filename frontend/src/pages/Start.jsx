import { Container, Grid } from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import Text from "../components/Text";
import color from "../assets/colors";

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;

const Home = () => {
  return (
    <>
      <Header />
      <Grid>
        <Container start={4} span={6}>
          <RegisterBlock>
            <Text>Test</Text>
          </RegisterBlock>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
