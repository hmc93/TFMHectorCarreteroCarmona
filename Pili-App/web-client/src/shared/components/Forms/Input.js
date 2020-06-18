import React, {useReducer} from 'react'

const inputReducer = (state, action) => {
    switch (action.type){
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: true
            }
        default:
            return state
    }
}


const Input = props => {
       
    const onChangeHandler = (event) => {
        dispatch({type: 'CHANGE', val: event.target.value})
    }
    
    const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid:false})
    const element = props.element === 'input' ? <input id={props.id} type={props.type} placeholder={props.placehorder} onChange={onChangeHandler} value={inputState.value}/> : <textarea id={props.id} rows={props.rows || 3} onChange={onChangeHandler} value={inputState.value}/>
    return <div className={`always_style ${!inputState.isValid && 'style_whenItsntvalid'}`}> 
        <label htmlFor={props.id}> {props.label}</label>
        {element}
        {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
}

export default Input