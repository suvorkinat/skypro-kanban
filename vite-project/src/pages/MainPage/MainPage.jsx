import { useEffect, useState, useContext } from "react";
import { Main } from '../../components/Main/Main.jsx';
import { Wrapper } from "../../lib/global.styled.js";
import { Header } from '../../components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import { getCards } from "../../Api.js";
import { Column } from "../../components/Column/Column.jsx";
import { UserContext } from "../../context/userContext.jsx";
import { TaskContext } from "../../context/taskContext.jsx";


export const MainPage = ({setTheme, theme }) => {
    const {cards, setCards} = useContext(TaskContext);
    const [isLoading, setIsLoading] = useState(true);

    const [errorMsg, setErrorMsg] = useState('');

    const {user} = useContext(UserContext);

    useEffect (() => {
        setIsLoading (true)

        getCards(user.token).then((response) =>{
            setCards(response.tasks)
            setIsLoading (false)
        }).catch((err) => {
            setErrorMsg(err)
        }).finally(() =>{
            setIsLoading(false)
        })

    }, [user, setCards]);



    const statusList = [
        "Без статуса",
        "Нужно сделать",
        "В работе",
        "Тестирование",
        "Готово",
    ];


    return (
        <Wrapper>
            <Outlet />
            <Header
                setTheme={setTheme}
                theme={theme}
            />
            {errorMsg ? <p>${errorMsg}</p> : (
                isLoading ? ("Загрузка...") : (
                    <Main errorMsg={errorMsg} cards={cards}>
                        {statusList.map((status) => (
                            <Column
                                title={status}
                                key={status}
                                cardList={cards.filter((card) => card.status === status)}
                            />
                        ))}
                    </Main>
                )
            )}
        </Wrapper>
    )
}