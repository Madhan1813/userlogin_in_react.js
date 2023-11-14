import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import PageCreateuser from './components/PageCreateuser'
import PageUser from './components/PageUser'
import PageEdituser from './components/PageEdituser'

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element = {<HomePage/>} path='/' />
                    <Route element = {<PageCreateuser/>} path='/createuser' />
                    <Route element = {<PageUser/>} path='/user' />
                    <Route element = {<PageEdituser/>} path='/edituser/:abc' />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App