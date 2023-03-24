import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as Frame } from '../assets/title-frame.svg';
import { ReactComponent as Title } from '../assets/title.svg';
import { FONTS } from '../config/constants';

const MainTitleContainer = styled.div`
  margin-top: 50px;
  height: 635px;
  position: relative;
  > * {
    position: absolute;
  }
`;

const blink = keyframes`
    0% {opacity: 1;}
    50%{opacity: 0.5;}
  100% {opacity: 1;}
`;

const TitleFrame = styled.div`
  cursor: pointer;
  &:hover {
    -webkit-animation: ${blink} 2s ease-in-out infinite alternate;
    -moz-animation: ${blink} 2s ease-in-out infinite alternate;
    animation: ${blink} 2s ease-in-out infinite alternate;
  }
`;

const TitleText = styled.h2`
  position: absolute;
  font-family: ${FONTS.TITLE};
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
`;

const MainTitle = () => {
  return (
    <>
      <MainTitleContainer>
        <Frame />
        <TitleFrame>
          <Title />
          <TitleText>
            TalseRunner
            <br /> Maid Collaboration
          </TitleText>
        </TitleFrame>
      </MainTitleContainer>
    </>
  );
};

export default MainTitle;
