import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../config/constants';

const FooterFrame = styled.footer`
  width: 100%;
  height: 200px;
  margin-top: 100px;
  background-color: ${COLORS.BACKGROUND_BLACK};
`;

const Footer = () => {
  return <FooterFrame></FooterFrame>;
};

export default Footer;
