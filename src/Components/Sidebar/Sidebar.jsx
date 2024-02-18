import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import gameIcon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import carry from '../../assets/carryminati.jpg';
import r2h from '../../assets/r2h.jpg';
import cwh from '../../assets/cwh.jpg';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

export default function Sidebar({sidebar,category,setCategory,openMenu}) {

  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"} ${openMenu?"openMobileMenu":""}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0 ? "active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="home-icon" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20 ? "active":""}`} onClick={()=>setCategory(20)}>
                <img src={gameIcon} alt="game-icon" /><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2 ? "active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="automobiles-icon" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17 ? "active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="sports-icon" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24 ? "active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="entertainment-icon" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28 ? "active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="tech-icon" /><p>Technology</p>
            </div>
            <div className={`side-link ${category===10 ? "active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="music-icon" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22 ? "active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="blogs-icon" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25 ? "active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="news-icon" /><p>News</p>
            </div>
            <hr />
        </div>  

        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <img src={carry} alt="jack" /><p>Carryminati</p>
            </div>
            <div className="side-link">
                <img src={r2h} alt="simon" /><p>Round2Hell</p>
            </div>
            <div className="side-link">
                <img src={cwh} alt="tom" /><p>CodeWithHarry</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="megan" /><p>5-Minute Crafts</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="cameron" /><p>Nas Daily</p>
            </div>
        </div>
    </div>
  )
}
