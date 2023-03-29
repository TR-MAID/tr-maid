import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONTS, NOTION_URL, TWITTER_URL } from '../config/constants';

const FooterFrame = styled.footer`
  width: 100%;
  height: 200px;
  margin-top: 100px;
  background-color: ${COLORS.BACKGROUND_BLACK};
  // border: 1px solid white;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: ${FONTS.CONTENT};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin: 30px;
  cursor: pointer;
  opacity: 0.5;
  :hover {
    opacity: 1;
  }
  transition: all 0.5s;
`;

const Footer = () => {
  const location = useLocation();
  const footerRef = useRef(null);
  useEffect(() => {
    if (/\/detail\/\d{1,2}/.test(location.pathname)) {
      footerRef.current.style.display = 'none';
    } else {
      footerRef.current.style.display = 'flex';
    }
  }, [location]);
  const openPage = (e, url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  return (
    <FooterFrame ref={footerRef}>
      <Button title="트위터" onClick={(e) => openPage(e, TWITTER_URL)}>
        Twitter
      </Button>
      <Button title="노션" onClick={(e) => openPage(e, NOTION_URL)}>
        Notion
      </Button>
    </FooterFrame>
  );
};

export default Footer;
