import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(12, [col-start] 1fr);
  margin-top: 48px;
  @media (max-width: 450px) {
    grid-column-gap: 8px;
    padding-top: 0;
    margin-top: 0;
  }
`;

const StyledContainer = styled.div`
  ${({ start, span }) => `
    grid-column: col-start ${start} / span ${span};
  `}
  @media (max-width: 450px) {
    grid-column: span 12;
  }
`;

export const Container = ({ children, start, span }) => {
  return (
    <StyledContainer start={start} span={span}>
      {children}
    </StyledContainer>
  );
};

export const Grid = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};
