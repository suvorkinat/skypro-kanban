import * as S from "./Main.styled.js";


export const Main = ({ children }) => {
  return (
    <S.StyleMain>
      <S.MainContainer>
        <S.MainBlock>
          <S.StyledMainContent>
           {children}
          </S.StyledMainContent>
        </S.MainBlock>
      </S.MainContainer>
    </S.StyleMain>
  );
};
