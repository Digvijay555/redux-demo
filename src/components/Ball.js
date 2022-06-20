import React,{useState} from 'react'
import {connect} from "react-redux";

function Ball(props) {
  return (
    <>
        <h1>Balls</h1>
        <div>No of Balls:{props.balls}</div>
        <button onClick={props.buyBall}>+</button>
        <button onClick={props.sellBall}>-</button>
    </>
  )
}

// to get your state variable from redux store
const mapStateToProps = (store) =>{
    return store;
}

const mapDispatchtoProps = (dispatch) =>{
    return{
        sellBall: ()=>{
            dispatch({
                type:"decrement"
            })
        },
        buyBall: ()=>{
            dispatch({
                type:"increment"
            })
        }
    }
}

export default connect (mapStateToProps, mapDispatchtoProps)(Ball);