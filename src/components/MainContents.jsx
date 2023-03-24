import React from 'react';
import styled from 'styled-components';
import MainTitle from './MainTitle';

const MainContainer = styled.div`
  width: 1000px;
  padding: 0;
  border: solid 1px white;
`;

const MainContents = () => {
  return (
    <MainContainer>
      <MainTitle />
    </MainContainer>
  );
};

export default MainContents;
