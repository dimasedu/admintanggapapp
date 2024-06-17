import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Userlist from './component/Userlist';
import Login from './component/Login';



function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Userlist />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
