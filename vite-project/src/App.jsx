import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { format } from "date-fns";
//import WelcomeMessage from './components/WelcomeMessage';
import { PopExit } from './components/Popups/PopExit/PopExit.jsx';
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse.jsx';
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard.jsx';
import {Header} from './components/Header/Header.jsx';
import {Main} from './components/Main/Main';
import {cardList} from './data.js';

function App() {

  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  function addCard(e) {
    e.preventDefault()
    const newCard = {
      id: cards[cards.length-1].id + 1,
      status: "Без статуса",
      theme: "Web design",
      ThemeColor: "_orange",
      title: "Название задачи",
      date: `${format(new Date(), "dd.MM.yy")}`,
    }
    setCards([...cards, newCard])
    console.log(newCard)
  }
  return (
    <>

      <div className='wrapper'>
      <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}

        <Header addCard={addCard} />
        {isLoading ? ("Загрузка...") : (
          <Main cards={cards}/>
        )}
        
     
      </div>
      </>     
  )
}

export default App
