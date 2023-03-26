import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import test from '../assets/테런_고바_시호하루미호.png';
import test2 from '../assets/테런_늍_시오넬.png';
import test3 from '../assets/베라6.png';
import useScrollToTop from '../hooks/useScrollToTop';

const T = styled.div`
  margin: 0 auto;
  width: 1000px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const MainPage = () => {
  useScrollToTop();

  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const imgNodes = document.querySelectorAll('img');
    setImgs(imgNodes);
  }, []);

  useEffect(() => {
    if (imgs.length === 0) {
      return;
    }

    let index = 0;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
            index++;
            if (index < imgs.length) {
              observer.observe(imgs[index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(imgs[index]);
  }, [imgs]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <T>
          <img
            src={test}
            width="800px"
            style={{ opacity: 0, transition: 'all 1s' }}
          />
          <img
            src={test2}
            width="700px"
            style={{ opacity: 0, transition: 'all 0.5s' }}
          />
          <img
            src={test3}
            width="700px"
            style={{ opacity: 0, transition: 'all 0.5s' }}
          />
        </T>
      </motion.div>
    </>
  );
};

export default MainPage;
