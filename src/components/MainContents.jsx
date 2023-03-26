import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import MainTitle from './MainTitle';
import MainPage from './MainPage';

const MainContainer = styled.div`
  width: 1440px;
  margin-top: 100px;
`;

const MainContents = () => {
  return (
    <MainContainer>
      <AnimatePresence>
        <Routes>
          <Route path={'/'} element={<MainTitle />} />
          <Route path={'/main'} element={<MainPage />} />
        </Routes>
      </AnimatePresence>
    </MainContainer>
  );
};

export default MainContents;
