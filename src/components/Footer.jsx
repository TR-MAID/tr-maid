import React from 'react';
import styled from 'styled-components';
import {
  COLORS,
  CSS_MIDDLE,
  FONTS,
  NOTION_URL,
  TWITTER_URL,
} from '../config/constants';

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
`;

const Footer = () => {
  const openPage = (e, url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };
  return (
    <FooterFrame>
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
