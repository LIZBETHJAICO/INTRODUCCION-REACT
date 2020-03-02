import React, { useState } from 'react'

const ComponenteContador = (props) => {
    const [count, setCount]= useState(0);
    const {nameApp, lastNameApp} = props;
   

    const sumar = () => {
        setCount(count+1)
    }
    const restar = () => {
        setCount(count-1)
    }
    return (
        <div>
            {lastNameApp}, {nameApp}
        <div>{count}</div>
        <button onClick={sumar} >Sumar</button>
        <button onClick={restar} >Restar</button>
        </div>
    )

}
export default ComponenteContador