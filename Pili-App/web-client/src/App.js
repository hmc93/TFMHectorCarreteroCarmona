import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Login from './users/pages/Login'
import ControlCentre from './terminals/pages/ControlCentre'
import PacientInfo from './users/pages/PacientInfo'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Program from './terminals/pages/Program'
import Auth from './shared/context/store/Auth'

//import {INTAKES, fetchIntakes} from './shared/IntakeFunctions'

import './App.css'

function App() {
  /* const context = useContext(AuthGlobal); */
  return (
    <div className="wrapper">
      <Auth>
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/ControlCentre" exact>
                <ControlCentre />
              </Route>
              <Route path="/Program" exact>
                <Program />
              </Route>
              <Route path="/PacientInfo" exact>
                <PacientInfo />
              </Route>
              <Redirect to="/ControlCentre" />
            </Switch>
          </main>
        </Router>
      </Auth>
    </div>
  );
};

export default App
