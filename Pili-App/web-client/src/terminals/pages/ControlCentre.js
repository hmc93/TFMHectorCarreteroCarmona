import React from 'react';

import Calendar from '../components/Calendar'
import IntakeList from '../components/IntakeList'
//import {fetchIntakes} from '../../shared/IntakeFunctions'

import './ControlCentre.css'

const ControlCentre = props => {
    const calendarExists = true
    //fetchIntakes("014");
    return (
     <div>
       {/*  <Calendar calendarExists={calendarExists}></Calendar> */}
        <IntakeList program={false} ></IntakeList>
     </div>
    )
}

export default ControlCentre