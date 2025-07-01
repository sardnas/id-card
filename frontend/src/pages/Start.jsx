import { useState } from "react";
import { Container, Grid } from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import Text from "../components/Text";
import color from "../assets/colors";
import Input from "../components/Input";
import Button from "../components/Button";

const RegisterBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.white.default};
  width: 100%;
  border-radius: 8px;
  padding: 32px;
  gap: 16px;
  @media (max-width: 450px) {
    border-radius: 0;
    margin-left: 0;
  }
`;

const Start = () => {
  return (
    <>
      <Header />
      <Grid>
        <Container start={5} span={4}>
          <RegisterBlock>
            <Text size="24px" weight="bold" color={color.blue.default}>
              REGISTER
            </Text>
            <div>
              <label>
                <Text>Personal identification number</Text>
              </label>
              <Input placeholder="19871224-1234"></Input>
            </div>
            <div>
              <label>
                <Text>Personal pincode</Text>
              </label>
              <Input placeholder="1234"></Input>
            </div>
            <Button label="Continue" />
          </RegisterBlock>
        </Container>
      </Grid>
    </>
  );
};

export default Start;
