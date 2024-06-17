import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Aduanbaru from './component/aduan/Aduanbaru';
import Aduanproses from './component/aduan/Aduanproses';
import Aduanselesai from './component/aduan/Aduanselesai';
import BeritaAdd from './component/berita/BeritaAdd';
import BeritaEdit from './component/berita/BeritaEdit';
import BeritaList from './component/berita/BeritaList';



function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/aduanbaru" element={<Aduanbaru />} />
                    <Route path="/aduanproses" element={<Aduanproses />} />
                    <Route path="/aduanselesai" element={<Aduanselesai />} />
                    <Route path="/berita" element={<BeritaList/>}/>
                    <Route path="/beritaadd" element={<BeritaAdd/>}/>
                    <Route path="/beritaedit/:id" element={<BeritaEdit/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
