import { Container, Grid } from "../components/Layout";
import styled from "styled-components";
import color from "../assets/colors";

const StatusBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 100px;
  margin-bottom: 24px;
  border-radius: 8px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 400px;
  border-radius: 8px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;

const InteractBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 524px;
  border-radius: 8px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;

const Home = () => {
  return (
    <Grid>
      <Container start={3} span={3}>
        <StatusBlock></StatusBlock>
        <InfoBlock></InfoBlock>
      </Container>
      <Container start={6} span={5}>
        <InteractBlock></InteractBlock>
      </Container>
    </Grid>
  );
};

export default Home;
