import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ReactComponent as Frame } from '../assets/title-frame2.svg';
import { ReactComponent as Title } from '../assets/title2.svg';
import { FONTS, LOCALSTORAGE_INDEX } from '../config/constants';
import useScrollToTop from '../hooks/useScrollToTop';

const MainTitleContainer = styled.div`
  height: 735.47px;
  position: relative;
  margin: 0;
  > * {
    position: absolute;
  }
`;

const FrameContainer = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const blink = keyframes`
    0% {opacity: 1;}
    50%{opacity: 0.3;}
  100% {opacity: 1;}
`;

const TitleFrame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  &:hover {
    -webkit-animation: ${blink} 2s ease-in-out infinite alternate;
    -moz-animation: ${blink} 2s ease-in-out infinite alternate;
    animation: ${blink} 2s ease-in-out infinite alternate;
  }
`;

const TitleText = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: ${FONTS.TITLE};
  font-style: normal;
  font-weight: 400;
  font-size: 65px;
`;

const MainTitle = () => {
  const navigate = useNavigate();
  useScrollToTop();

  const movePage = () => {
    navigate('/main');
    localStorage.setItem(LOCALSTORAGE_INDEX, 0);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <MainTitleContainer>
          <FrameContainer>
            <Frame width="1400px" styled={{ left: 0 }} />
          </FrameContainer>
          <TitleFrame onClick={movePage}>
            <Title />
            <TitleText>
              TalesRunner
              <br /> Maid&nbsp;Collaboration
            </TitleText>
          </TitleFrame>
        </MainTitleContainer>
      </motion.div>
    </>
  );
};

export default MainTitle;
