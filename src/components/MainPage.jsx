import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import history from '../common/history';
import useScrollToTop from '../hooks/useScrollToTop';
import { IMG_ARRAY, PARTICIPANTS } from '../config/constants';
import NameFrame from '../assets/name-frame.svg';
import { useNavigate } from 'react-router-dom';

const MainPageFrame = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  & > *:not(:first-of-type) {
    margin: 300px 0 70px 0;
  }
`;

const ImageContainer = styled.img`
  margin: 100px 0 70px 0;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 517.19px;
  height: 218.31px;
  margin: 0 auto;
`;

const TextTitle = styled.div`
  position: absolute;
  left: 37.12%;
  right: 36.97%;
  top: 39.39%;
  bottom: 44.57%;
  width: 134px;
  height: 35px;
  font-family: 'NanumMyeongjo';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
`;

const TextId = styled.div`
  position: absolute;
  left: 28.62%;
  right: 28.65%;
  top: 60.01%;
  bottom: 27.17%;
  width: 221px;
  height: 28px;
  font-family: 'NanumMyeongjo';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

let lastIndex = 0;

const MainPage = () => {
  const navigate = useNavigate();
  const [imgNodes, setImgNodes] = useState([]);
  const lastIndexRef = useRef(lastIndex);

  useScrollToTop();

  const movePage = (index) => {
    navigate(`/detail/${index}`);
  };

  useEffect(() => {
    const newImgNodes = document.querySelectorAll('img');
    setImgNodes(newImgNodes);
    lastIndexRef.current = 0;
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (imgNodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            observer.unobserve(entry.target);
            lastIndexRef.current += 2;
            lastIndex += 2;
            if (lastIndexRef.current < imgNodes.length) {
              observer.observe(imgNodes[lastIndexRef.current]);
              observer.observe(imgNodes[lastIndexRef.current + 1]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(imgNodes[lastIndexRef.current]);
    observer.observe(imgNodes[lastIndexRef.current + 1]);
  }, [imgNodes]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <MainPageFrame>
          {IMG_ARRAY.map((img, index) => (
            <div key={index}>
              <ImageContainer
                onClick={(e) => {
                  movePage(index);
                }}
                src={`${img}`}
                style={{ opacity: 0, transition: `all 0.5s` }}
                alt={`${PARTICIPANTS[index].NICKNAME}, ${PARTICIPANTS[index].ID}, ${PARTICIPANTS[index].CHARACTERS}`}
              />

              <TitleContainer>
                <img
                  src={`${NameFrame}`}
                  style={{ opacity: 0, transition: `all 0.5s` }}
                  alt={`닉네임(${PARTICIPANTS[index].NICKNAME}), 아이디(${PARTICIPANTS[index].ID})`}
                />
                <TextTitle>
                  {Array.from(PARTICIPANTS[index].NICKNAME).join(' ')}
                </TextTitle>
                <TextId>{PARTICIPANTS[index].ID}</TextId>
              </TitleContainer>
            </div>
          ))}
        </MainPageFrame>
      </motion.div>
    </>
  );
};

export default MainPage;
