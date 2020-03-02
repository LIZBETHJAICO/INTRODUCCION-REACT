import React, { useState } from 'react'

const TodoListApp = () =>{
    const [item, setItem] = useState('')
    const [list, setList] = useState(['Item de prueba'])

    const agregaItem =(event)=>{
        const valor= event.target.value
        setList([...list, valor])
    }

    return (
        <div>
            <h1>TODO LIST APP</h1>
            <br />
            <input placeholder='Escribe un elemento' value={item} onChange={agregaItem} />
            <h2>{list}</h2>   
        </div>
    )
}
export default TodoListApp