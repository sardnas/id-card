import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "../components/Layout";
import Header from "../components/Header";
import styled from "styled-components";
import Text from "../components/Text";
import color from "../assets/colors";
import Input from "../components/Input";
import Button from "../components/Button";
import ClipLoader from "react-spinners/ClipLoader"; // ✅ Spinner

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
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!pin) {
      alert("Please fill in both fields");
      return;
    }

    setLoading(true);
    localStorage.setItem("personalId", pin);
    console.log("Simulating loading and navigating...");

    setTimeout(() => {
      navigate("/home");
    }, 2000); // 2 seconds delay
  };

  return (
    <>
      <Header />
      <Grid>
        {loading ? (
          <Container start={7} span={1}>
            <ClipLoader color={color.blue.default} size={48} />
          </Container>
        ) : (
          <Container start={5} span={4}>
            <RegisterBlock>
              <Text size="24px" weight="bold" color={color.blue.default}>
                REGISTER
              </Text>
              <div>
                <label>
                  <Text>Personal identification number</Text>
                </label>
                <Input
                  placeholder="19871224-1234"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              <div>
                <label>
                  <Text>Personal code</Text>
                </label>
                <Input placeholder="1234" type="password" />
              </div>
              <Button label="Continue" onClick={handleContinue} />
            </RegisterBlock>
          </Container>
        )}
      </Grid>
    </>
  );
};

export default Start;
