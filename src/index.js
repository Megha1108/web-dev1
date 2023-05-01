import React from "react"
import ReactDOM from 'react-dom/client';
import './style.css'
import App from "./App"
import Footer from "./Footer"
import Body from "./Body"

const pic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"


function comp(){
    return <h3>components</h3>
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h3>welcome to css in react</h3>
    <comp/>
    <App/>
    <Body/>
    <Footer/>
    </>
)