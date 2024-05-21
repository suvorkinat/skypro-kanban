import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Main } from '../../components/Main/Main.jsx';
import { cardList } from "../../data.js";
import { Wrapper } from "../../lib/global.styled.js";
import { Header } from '../../components/Header/Header.jsx';
import {PopNewCard} from '../../components/Popups/PopNewCard/PopNewCard.jsx';
import { Outlet } from 'react-router-dom';
import { getCards } from "../../Api.js";

export const MainPage = ({setTheme, theme, isAuth}) => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [errorMsg, setErrorMsg] = useState('');


    function addCard(e) {
        e.preventDefault()
        const newCard = {
          id: cards[cards.length-1].id + 1,
          status: "Без статуса",
          theme: "Web Design",
          ThemeColor: "_orange",
          title: "Название задачи",
          date: `${format(new Date(), "dd.MM.yy")}`,
        }
        setCards([...cards, newCard])
    }

    useEffect(() => {
        setIsLoading (true)

        getCards(isAuth.token).then((response)=>{
            setErrorMsg('')
            setCards(response.tasks)
            setIsLoading(false)
        }).catch((err) => {
            setErrorMsg(err)
        }).finally(()=>{
            setIsLoading(false)
        })

    },[]);

    return (
        <Wrapper>
                {/* pop-up start*/}
            <Outlet />
                {/* Перенесены в Outlet */}
                    {/* Взамен <PopExit /> */}
                    {/* <PopBrowse /> */}
            <PopNewCard />

                {/* pop-up end*/}

            <Header 
            addCard={addCard}
            isAuth={isAuth}
            setTheme={setTheme} 
            theme={theme}/>
              {errorMsg ? <p>${errorMsg}</p> : (
                isLoading ? ("Загрузка...") : (<MainComponent errorMsg={errorMsg}  cards={cards}/>)
            )}
        </Wrapper>
    )
}
