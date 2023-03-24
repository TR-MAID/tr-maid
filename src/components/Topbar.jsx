import styled from 'styled-components';
import { FONTS } from '../config/constants';

const TopbarContainer = styled.div`
  height: 50px;
  width: 100%;
`;

const Title = styled.h1`
  width: 500px;
  height: 100%;
  font-size: 30px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-family: ${FONTS.TITLE};
  cursor: pointer;
`;

function Topbar() {
  return (
    <>
      <TopbarContainer>
        <Title>TalesRunner Maid Collaboration</Title>
      </TopbarContainer>
    </>
  );
}

export default Topbar;
