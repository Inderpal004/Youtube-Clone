import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';

export default function Home({sidebar,openMenu}) {

  const [category,setCategory] = useState(0);

  return (
    <>
     <Sidebar sidebar={sidebar} openMenu={openMenu} category={category} setCategory={setCategory}/> 
     <div className={`container ${sidebar?"":"large-container"}`}>
      <Feed category={category}/>
     </div>
    </>
  )
}