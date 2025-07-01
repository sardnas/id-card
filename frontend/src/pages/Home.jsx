import { Container, Grid } from "../components/Layout";
import Status from "../components/Status";
import Info from "../components/Info";
import Action from "../components/Action";
import Header from "../components/Header";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <Header />
      <Grid>
        <Container start={3} span={3}>
          <Profile />
          {/* <Info /> */}
        </Container>
        <Container start={6} span={5}>
          <Status />
          <Action />
        </Container>
      </Grid>
    </>
  );
};

export default Home;
