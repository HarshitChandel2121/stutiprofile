import React from "react"
import Head from "./components/Head"
import Main from "./components/Main"
import Tail from "./components/Tail"

export default function App() {
    return (
        <div className="app">
            <Head />
            <Main />
            <Tail />
        </div>
    )
}