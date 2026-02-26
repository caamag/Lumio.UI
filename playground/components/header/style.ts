import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 120px;
  max-width: 1600px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  img {
    height: 60px;
  }
`;

export const Icon = styled.img`
  height: 40px !important;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #333;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    &:hover {
      color: #5b4dac;
    }
  }
`;
