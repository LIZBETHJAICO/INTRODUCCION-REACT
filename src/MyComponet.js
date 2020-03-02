import React, { Component } from 'react'
 
// Function Component
const MyComponent = (props) => {
  return(<div>My name is {props.name}</div>)
}

// Function Component
/* function MyComponent (props) {
  return(<div>My name is {props.name}</div>)
} */

// Class Component
/* class MyComponent extends Component {
 render(){
 return (<div>My name is {this.props.name}</div>)
 }
} */
 
export default MyComponent