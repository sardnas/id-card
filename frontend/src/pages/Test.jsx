import { useState } from "react";
import { Container, Grid } from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import Text from "../components/Text";
import color from "../assets/colors";
import { Ping } from "../Api";

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;

const Test = () => {
  const [message, setMessage] = useState("");

  const handlePing = async () => {
    try {
      const response = await Ping();
      if (response.ok) {
        const data = await response.text();
        setMessage("Ping successful: " + data);
      } else {
        setMessage("Ping failed: " + response.status);
      }
    } catch (error) {
      setMessage("Ping error: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <Grid>
        <Container start={4} span={6}>
          <RegisterBlock>
            <button onClick={handlePing}>Ping</button>
            {message && <Text>{message}</Text>}
          </RegisterBlock>
        </Container>
      </Grid>
    </>
  );
};

export default Test;
