import styled from "styled-components";

export const StyleMain = styled.main`
  width: 100%;
  background-color: #eaeef6;
 background-color: ${({theme})=>theme.body};
`;
export const MainContainer = styled.div`
max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;