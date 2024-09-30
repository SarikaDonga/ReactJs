import ReactDOM from 'react-dom/client';
import React from 'react'
import { useState } from 'react';

import Nested_Com from './Nested_Com';
const root = ReactDOM.createRoot(document.getElementById("root"))

// Basic Rendering
const ele = <h1>Hello</h1>
root.render(ele)

// Rendering Component
function Test() {
    return <h1>Rendering Components</h1>
}
root.render(<Test />)

// Rendering List
const items = [10, 20, 30, 40, 50]
function NumberList() {
    return (
        <ul>
            {items.map((no, index) => (
                <li key={index}>{no}</li>
            ))}
        </ul>
    )
}
root.render(<NumberList />)

// Conditional Rendering
function User() {
    const isLoggedIn = true;
    return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;


} root.render(<User />)

// Rendering with usestate
function Inc() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increement</button>
        </>

    )

}
root.render(<Inc />)

// Render Nested Element
// ATTRIBUTES
root.render(<Nested_Com user="Sarika" />)

const RenderEle = () => {
    return (
        <div>RenderEle</div>
    )
}

export default RenderEle