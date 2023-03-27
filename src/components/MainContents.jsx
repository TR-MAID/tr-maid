import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import MainTitle from './MainTitle';
import MainPage from './MainPage';
import DetailPage from './DetailPage';

const MainContainer = styled.div`
  width: 1440px;
  margin: 100px auto;
`;

const MainContents = () => {
  return (
    <MainContainer>
      <AnimatePresence>
        <Routes>
          <Route path={'/'} element={<MainTitle />} />
          <Route path={'/main'} element={<MainPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </AnimatePresence>
    </MainContainer>
  );
};

export default MainContents;
