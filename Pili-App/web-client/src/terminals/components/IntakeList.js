import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { editIntake, fetchIntakes, setFetchedIntakes, intakesModel, setSentIntakes } from '../../shared/IntakeFunctions'
import AuthGlobal from "../../shared/context/store/AuthGlobal";

import './IntakeList.css'

import Intake from './Intake'
const axios = require('axios').default

const IntakeList = props => {
    let INTAKES = []

    const context = useContext(AuthGlobal);
    useEffect(() => {
        if (context.stateUser.isAuthenticated === false || context.stateUser.isAuthenticated === null) {
            /* props.history.push("/"); */
            window.location.href = "/"
        }
        /* setShowChild(true); */
    }, [context.stateUser.isAuthenticated, props.history]);

    //const INTAKES = [{ id: '1', number: '1', date: '2020-05-1', hour: '15:30', med: 'Omeoprazol' }, { id: '2', number: '2', date: '2020-05-2', hour: '9:30', med: 'Aspirina' }]
    /*  const [currentIntakes, setCurrentIntakes] = useState(props.intakes); */
    const [currentIntakes, setCurrentIntakes] = useState(INTAKES);
    const [hasError, setErrors] = useState(false);

    async function fetchData() {
        let fetchedIntakes = []
        
        try {
        const res = await axios.post('http://127.0.0.1:80/getIntakes', { serNum: "014" })
        fetchedIntakes = await setFetchedIntakes(res)
        setCurrentIntakes(fetchedIntakes)
        }  catch (e) {
            setErrors(true);
            console.log(e)
        }
    }

    async function sendIntakes(data) {
        let fetchedIntakes = []
        let message = {
            serNum: "014",
            data: data
        }
        console.log(message)
        try {
        const res = await axios.post('http://127.0.0.1:80/setIntakes', message )
       /*  fetchedIntakes = await setFetchedIntakes(fetchedIntakes)
        setCurrentIntakes(fetchedIntakes) */
        }  catch (e) {
            setErrors(true);
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const saveNewProgram = async () => {
        let i
        let newDate = ""
        let newHour=""
        let newMed=""
        let newProgram = [];
        //console.log(currentIntakes.length)
        for (i = 0; i < currentIntakes.length; i++) {
            //console.log("INtakeList()")
            const index = i + 1;
            if (document.getElementById("dateStat-" + index) !== null){
               newDate = document.getElementById("dateStat-" + index).textContent;
            } else {
                newDate = "";
            }
            if (document.getElementById("hourStat-" + index) !== null) {
                newHour = document.getElementById("hourStat-" + index).textContent;
            } else {
                newHour = "";
            }
            if (document.getElementById("medStat-" + index) !== null) {
               newMed = document.getElementById("medStat-" + index).textContent;
            } else {
               newMed = "";
            }
            
            const newIntake = { id: index, number: index, date: newDate, hour: newHour, med: newMed }
            //console.log(newIntake);
            newProgram.push(newIntake);
            //editIntake(newIntake); //Esto es cambiarla en el hardcodeo para luego volverla a cargar
            //setCurrentIntakes(INTAKES);
        }
        //console.log(newProgram)
        let dataIntakes = await setSentIntakes(newProgram);
        console.log("These are the dataIntakes to send.")
        console.log(dataIntakes);
        sendIntakes(dataIntakes);
        window.alert("¡Tu nueva configuración se ha guardado satisfactoriamente!");
        window.location.href = "/ControlCentre"
        //props.redirect();
        //console.log(dataIntakes)
        // --> sendIntakes

        /* let newIntakes = updateIntakes();
        setCurrentIntakes(newIntakes);
        console.log(newIntakes)  */
    }

    const getRowColor = (state) => {
        if (state === 'T'){
            return "table-success"
        }
        if (state === 'P'){
            return "table-warning"
        }
        if (state === 'F'){
            return "table-light"
        }
        if (state === 'O'){
            return "table-danger"
        }
    }

    if (!currentIntakes.length) {
        return (
            <div>
                <h2>Loading</h2>
            </div>
        )
    } else {
        if (!props.program) {
            return (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover">

                        <thead className="thead-light thead">
                            <tr>
                                <th scope="col" className="noBorderCell text-center">Número de toma</th>
                                <th scope="col" className="noBorderCell text-center">Estado</th>
                                <th scope="col" className="noBorderCell text-center">Fecha</th>
                                <th scope="col" className="noBorderCell text-center">Hora</th>
                                <th scope="col" className="noBorderCell text-center">Medicamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentIntakes.map(intake => {
                                let rowColor = getRowColor(intake.state)
                                return <Intake key={intake.id} number={intake.number} date={intake.date} hour={intake.hour} med={intake.med} program={false} state={intake.state} rowColor={rowColor}></Intake>
                            })}
                        </tbody>
                    </table>
                </div>

            )
        }
        if (props.program) {
            return (
                <div className="table-responsive">

                    <table className="table table-bordered table-hover">
                        <thead className="thead-light thead">
                            <tr>
                                <th scope="col" className="noBorderCell text-center">Número de toma</th>
                                <th scope="col" className="noBorderCell text-center">Fecha</th>
                                <th scope="col" className="noBorderCell text-center">Hora</th>
                                <th scope="col" className="noBorderCell text-center">Medicamento</th>
                                <th className="text-center tableCorner"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentIntakes.map(intake => {
                                return <Intake key={intake.id} number={intake.number} date={intake.date} hour={intake.hour} med={intake.med} program={true}></Intake>
                            })}
                        </tbody>
                    </table>
                    <Link to="/ControlCentre"> <button className="buttonAddRow btn btn-danger float-right buttonBottom">Cancel</button></Link>
                    <Link to="/ControlCentre"> <button onClick={saveNewProgram} className="buttonAddRow btn btn-success float-right buttonBottom">Save</button></Link>
                </div>

            )
        }
    }
}

export default IntakeList