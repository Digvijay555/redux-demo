import React, { useReducer } from 'react'

let initialState={
    bat:10,
    value:""
}

function reducer(state, action)
{
    switch(action.type)
    {
        case "sell_bat":
            return{
                bat: state.bat - state.value,
                value:""
            }
        case "buy_bat":
            return{
                bat: state.bat + Number(state.value),
                value:""
            }
        case "set_value":
            return{
                bat: state.bat,
                value: action.payload
            }
    }
}
function BatuseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
        <h1> Bat </h1>
        <h2> No. of Bat: {state.bat}</h2>
        <input type="text" value={state.value} onChange={(e)=>{
            let val = e.target.value;
            dispatch({
                type:"set_value",
                payload:val
            } )
        }}/>

        <button onClick={()=>dispatch({ type:"sell_bat"})}>Sell</button>
        <button onClick={()=>dispatch({ type:"buy_bat"})}>Buy</button>
    </>
  )
}

export default BatuseReducer