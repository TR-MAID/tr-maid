import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import test from '../assets/테런_고바_시호하루미호.png';
import test2 from '../assets/테런_늍_시오넬.png';
import test3 from '../assets/베라6.png';
import useScrollToTop from '../hooks/useScrollToTop';

const T = styled.div`
  width: 1000px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

const MainPage = () => {
  useScrollToTop();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <T>
          <img src={test} width="800px" />
          <img src={test2} width="700px" />
          <img src={test3} width="700px" />
        </T>
      </motion.div>
    </>
  );
};

export default MainPage;
