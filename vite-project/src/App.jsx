import { useState } from 'react';
import './App.css'
import {lightTheme, darkTheme} from './lib/globalTheme.js';
import { GlobalStyled } from './lib/global.styled.js';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './AppRoutes.jsx';
//import { UserProvider } from './context/userContext.jsx';



function App() {
  const [theme, setTheme] = useState(true);

  return (
    
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
         <UserProvider>
        <GlobalStyled />
        <AppRoutes setTheme={setTheme} theme={theme} />
        </UserProvider>
      </ThemeProvider>
     
  )
}

export default App
