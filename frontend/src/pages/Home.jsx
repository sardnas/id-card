import { Container, Grid } from "../components/Layout";
import styled from "styled-components";
import color from "../assets/colors";
import Status from "../components/Status";
import Info from "../components/Info";
import Action from "../components/Action";
import Header from "../components/Header";
import Profile from "../components/Profile";

const InteractBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  height: 100%;
  border-radius: 8px;
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
        <Container start={3} span={3}>
          <Profile />
          <Status status="online" />
          <Info />
        </Container>
        <Container start={6} span={5}>
          <InteractBlock>
            <Action />
          </InteractBlock>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
