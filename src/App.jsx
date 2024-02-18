import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

export default function App() {
  const [sidebar,setSidebar] = useState(true);
  const [openMenu,setOpenMenu] = useState(false);

  return (
    <>
      <Navbar setSidebar={setSidebar} setOpenMenu={setOpenMenu}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} openMenu={openMenu}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </>
  )
}
