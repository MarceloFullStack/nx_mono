import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SotesteProps {}

const StyledSoteste = styled.div`
  color: pink;
`;

export function Soteste(props: SotesteProps) {
  return (
    <StyledSoteste>
      <h1>Welcome to Soteste!</h1>
    </StyledSoteste>
  );
}

export default Soteste;
