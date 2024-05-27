import { Route, Routes } from 'react-router-dom';
import {routesPath } from './lib/routesPath.js';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import { MainPage } from './pages/MainPage/MainPage.jsx';
import { ExitPage } from './pages/ExitPage/ExitPage.jsx';
import { NotFound } from './pages/NotFoundPage/NotFound.jsx';
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx';
import { PopBrowsePage } from './pages/PopBrowsePage/PopBrowsePage.jsx';
import {PopNewCard} from './components/Popups/PopNewCard/PopNewCard.jsx';


export const AppRoutes = ({setTheme, theme}) => {

    return (
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route 
            path={routesPath.MAIN} element={<MainPage setTheme={setTheme} theme={theme} />}>
              <Route path={routesPath.CARD_ID} element={<PopBrowsePage />} />
              <Route path={routesPath.NEW_CARD} element={<PopNewCard />} />
              <Route path={routesPath.EXIT} element={<ExitPage/>} />
            </Route>
          </Route>
          <Route path={routesPath.LOGIN} element={<LoginPage/>} />
          <Route path={routesPath.REGISTER} element={<RegisterPage />} />
          <Route path={routesPath.NOT_FOUND} element={<NotFound />} />
        </Routes>
      )
    };
