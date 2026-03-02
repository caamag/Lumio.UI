import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  background-color: white;
  padding: 40px 0px 60px 0px;
  border-top: 1px solid #e0e0e0;
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #333;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      color: #5b4dac;
    }
  }
`;

export const Icon = styled.img`
  height: 30px !important;
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;

  img {
    height: 40px;
  }
`;
