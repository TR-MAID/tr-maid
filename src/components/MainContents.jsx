import React from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle';

const MainContainer = styled.div`
  width: 1440px;
`;

const MainContents = () => {
  return (
    <MainContainer>
      <MainTitle />
    </MainContainer>
  );
};

export default MainContents;
