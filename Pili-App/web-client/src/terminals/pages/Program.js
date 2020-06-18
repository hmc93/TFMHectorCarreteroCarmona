import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import Calendar from '../components/Calendar'
import IntakeList from '../components/IntakeList'
//import {fetchIntakes} from '../../shared/IntakeFunctions'

import './Program.css'


const Program = props => {
    const [redirectHome, setRedirectHome] = useState(false);
    const redirectHomeHandler = () => setRedirectHome(true);
    //fetchIntakes("014");
    const calendarExists = true
    if (redirectHome) {
      return <Redirect to="/ControlCentre" />
    } else {
    return (
     <div>
       {/*  <Calendar calendarExists={calendarExists}></Calendar> */}
        <IntakeList program={true} redirect={redirectHomeHandler}></IntakeList>
     </div>
    )
  }
}

export default Program