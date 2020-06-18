import React from 'react'

import './Calendar.css'

const Calendar = props => {
    if (props.calendarExists === true){
        return (
            <div className="center"> 
            <h2>Calendar should exist</h2>
            </div>
        )    }
    else return (
        <h1>Calendar shouldn't exist</h1>
    )


}

export default Calendar