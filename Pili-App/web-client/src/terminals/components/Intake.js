import React, { useState } from 'react';
import './Intake.css'


const Intake = props => {
    const [editingIntake, setEditingIntake] = useState(false);

    const getIntakeStateString = (state) => {
        if (state === 'T'){
            return "Tomada"
        } 
        if (state === 'P') {
            return "Pendiente" 
        }
        if (state === 'F') {
            return "Programada"
        } 
        if (state === 'O') {
            return "Pasada"
        }
    }
    let intakeState = getIntakeStateString (props.state);
    const [currentIntake, setCurrentIntake] = useState({id:props.number, number: props.number, date: props.date, hour: props.hour, med: props.med, state: intakeState });
    const edit = () => {
        setEditingIntake(true);
    };

    const cancelEdit = () => {
        setEditingIntake(false);
    };

    const editIntakeButton = () => {
        const newDate = document.getElementById("date-"+props.number).value;
        const newFormattedDate = newDate.split("-")[2] + "-" + newDate.split("-")[1] + "-" + newDate.split("-")[0]
        const newHour = document.getElementById("hour-"+props.number).value;
        const newMed = document.getElementById("med-"+props.number).value;
        const newIntake = {id:props.number, number: props.number, date: newFormattedDate, hour: newHour, med: newMed }
        setCurrentIntake(newIntake);
        console.log(newIntake);
       // editIntake(newIntake);
        setEditingIntake(false);
    };
    
    if (!props.program) {
        return (
            <tr>
                <td scope="row" className="noBorderCell centreVertical">Toma {props.number}</td>
                <td className={"noBorderCell centreVertical "+props.rowColor}>{intakeState}</td>
                <td className="noBorderCell centreVertical">{props.date}</td>
                <td className="noBorderCell centreVertical">{props.hour}</td>
                <td className="noBorderCell centreVertical">{props.med}</td>
            </tr>
        )
    }
    if (props.program) {
        if (!editingIntake){
        return (
            <tr>
                <td scope="row" className="noBorderCell centreVertical">Toma {currentIntake.number}</td>
                <td id={"dateStat-"+props.number} className="noBorderCell centreVertical">{currentIntake.date}</td>
                <td id={"hourStat-"+props.number} className="noBorderCell centreVertical">{currentIntake.hour}</td>
                <td id={"medStat-"+props.number} className="noBorderCell centreVertical">{currentIntake.med}</td>
                <td>
                    <button className='btn btn-primary glyphicon glyphicon-pencil row-remove' onClick={edit}></button>
                </td>
            </tr>
        )
    }
    if (editingIntake){
        return (
            <tr>
                <td scope="row" className="noBorderCell centreVertical">Toma {props.number}</td>
                <td className="noBorderCell"><input id={"date-"+props.number} type="date" placeholder='Fecha' className="form-control" /></td>
                <td className="noBorderCell"><input id={"hour-"+props.number} type="time" placeholder='Hora' className="form-control" /></td>
                <td className="noBorderCell centreVertical"><input id={"med-"+props.number} type="text" placeholder="Medicamento" className="form-control" /> </td>
                <td>
                    <button className='btn btn-success glyphicon glyphicon-ok row-remove editButton' onClick={editIntakeButton}></button>
                    <button className='btn btn-danger glyphicon glyphicon-remove row-remove' onClick={cancelEdit}></button>
                </td>
            </tr>
        )
    }
    }
}

export default Intake