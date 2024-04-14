//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
//import WelcomeMessage from './components/WelcomeMessage';
import { PopExit } from './components/Popups/PopExit/PopExit.jsx';
import { PopBrowse } from './components/Popups/PopBrowse/PopBrowse.jsx';
import { PopNewCard } from './components/Popups/PopNewCard/PopNewCard.jsx';
import {Header} from './components/Header/Header.jsx'
import {Main} from './components/Main/Main';
function App() {
  //const [count, setCount] = useState(0);
 // const name = "Vasya";

  return (
    <>
      <div className='wrapper'>
      <PopExit />
        <PopNewCard />
        <PopBrowse />
        {/* pop-up end*/}

        <Header />
        <Main />

      </div>
      </>     
  )
}

export default App
