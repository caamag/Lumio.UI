import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding-top: 120px;
`;

export const HomeSection = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 50%;
  }
`;

export const Content = styled.div`
  width: 50%;
  min-width: 400px;
`;

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1;
  font-weight: 500;

  span {
    color: #bebebe;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: gray;
  margin-top: 20px;
  font-weight: bold;
  line-height: 25px;
  margin-bottom: 10px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 15px;
`;
