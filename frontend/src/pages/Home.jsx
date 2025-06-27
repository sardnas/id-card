import { Container, Grid } from "../components/Layout";

const Home = () => {
  return (
    <Grid>
      <Container start={3} span={3}>
        <h3>Content Container 1</h3>
      </Container>
      <Container start={6} span={5}>
        <h3>Content Container 2</h3>
      </Container>
    </Grid>
  );
};

export default Home;
