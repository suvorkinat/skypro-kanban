import { useState, useContext } from "react";
import * as S from "./Header.styled.js";
import { Link, useNavigate } from "react-router-dom";
import { routesPath } from "../../lib/routesPath.js";
import { UserContext } from "../../context/userContext.jsx";

export const Header = ({ setTheme, theme }) => {
  // Пункт_№1: Модальное окно
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate()
  const {user} = useContext(UserContext)

  const openModal = (e) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
  };

  const addCard = () => {
    navigate(routesPath.NEW_CARD)
}
  
  return (
    <S.Header>
            <S.HeaderContainer>
                <S.HeaderBlock>
                    <div>
                        <a href="" target="_self">
                            <S.HeaderLogoImg src="public/logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self">
                            <S.HeaderLogoImg src="public/logo_dark.png" alt="logo" />
                        </a>
                    </div>
                    <S.HeaderNav>
                        <S.HeaderBtnMainNew id="btnMainNew">
                            <S.HeaderBtnMainNewLink href="#popNewCard" onClick={addCard}>
                                Создать новую задачу
                            </S.HeaderBtnMainNewLink>
                        </S.HeaderBtnMainNew>
                        <S.HeaderUser onClick={openModal}>
                            {user.name}
                        </S.HeaderUser>
                        {isOpened && (
                            <S.HeaderUserSet id="user-set-target">
                                {/* <a href="">x</a> */}
                                <S.HeaderUserSetName>{user.name}</S.HeaderUserSetName>
                                <S.HeaderUserSetMail>{user.login}</S.HeaderUserSetMail>
                                <S.HeaderUserSetTheme>
                                   <p>Темная тема</p>
                                    <input onChange={()=>setTheme(!theme)} type="checkbox" className="checkbox" name="checkbox" />
                                </S.HeaderUserSetTheme>
                                    <S.HeaderExit>
                                        <Link to={routesPath.EXIT}>
                                            Выйти
                                        </Link>
                                    </S.HeaderExit>
                            </S.HeaderUserSet>
                        )}
                    </S.HeaderNav>
                </S.HeaderBlock>
                </S.HeaderContainer>
        </S.Header>
    )
}