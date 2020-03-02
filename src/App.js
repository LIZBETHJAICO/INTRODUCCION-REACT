import React from 'react'
import {render} from 'react-dom'
import './App.css';
import logo from './logo.svg';
import ComponenteContador from './components/contador'
import TodoListApp from './components/TodoListApp'
import Pokemon from './components/pokemon'

const App = () => {
    //const [name, setName] = useState('Liz');
    const name= 'liz';
    const lastName ='Jaico';
    return (
    <div className='App' >
    <head className='App-header' >
        <img src={logo}></img>
       { /*<ComponenteContador nameApp={name} lastNameApp={lastName} /> */}
       {/* <TodoListApp />  */}
        <Pokemon></Pokemon>
    </head>
    </div>
    )
}
export default App