import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, CSS_MIDDLE, FONTS } from '../config/constants';

const TopbarContainer = styled.div`
  ${CSS_MIDDLE}
  height: 50px;
  min-width: 1440px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9;
  background-color: ${COLORS.BACKGROUND_BLACK};
  margin: 0 auto;
`;

const Title = styled.h1`
  ${CSS_MIDDLE}
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
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/');
  };
  return (
    <>
      <TopbarContainer>
        <Title onClick={movePage}>TalesRunner Maid Collaboration</Title>
      </TopbarContainer>
    </>
  );
}

export default Topbar;
