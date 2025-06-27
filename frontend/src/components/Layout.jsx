import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: repeat(12, [col-start] 1fr);
  @media (max-width: 450px) {
    grid-column-gap: 8px;
  }
`;

const StyledContainer = styled.div`
  ${({ start, span }) => `
    grid-column: col-start ${start} / span ${span};
  `}
  background-color:rgb(190, 223, 235);

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
