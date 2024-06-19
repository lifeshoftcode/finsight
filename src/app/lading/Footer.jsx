import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #666;
  text-align: center;
  padding: 2rem;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
`;

const FooterLinks = styled.p`
  margin: 0.5rem 0;

  a {
    color: #0070f3;
    text-decoration: none;
    margin: 0 0.5rem;
    transition: color 0.3s;

    &:hover {
      color: #005bb5;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Finance App</p>
      <FooterLinks>
        <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
      </FooterLinks>
    </FooterContainer>
  );
}

export default Footer;
