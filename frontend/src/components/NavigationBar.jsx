import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaPlusCircle, FaHome,FaBars,FaArchive,FaArrowRight,FaCommentAlt } from "react-icons/fa";
import infos from '../config/navbar.json'
import '../sass/components/_navbar.scss';
import '../sass/components/_accordion.scss'
const NavigationBar = () => {

  const [navbarOpen, setNavBarOpen] = useState(false);

  const handleToggle = () => {
    setNavBarOpen(prev => !prev)
  }

  return (
    <>     
      <nav className="topnav" >
          <button onClick={handleToggle}>{navbarOpen ? <FaPlusCircle id='nv icon' /> : <FaBars id='nv'/>}</button>          
            <div className={`menuNav ${navbarOpen ? "showMenu" : ""}`}>
             <button onClick={handleToggle}>{navbarOpen ? <FaPlusCircle id='icon' /> : <FaBars />}</button>        
              <ul> 
                {infos.NavInfos.map((item,index)=>{
                    return(  
                    <>
                      <h3 id='pagination'>{item.helper}</h3>
                      <li key={index} id='option'><Link to={item.link}>{item.name}</Link></li>
                    </>  
                  )
                  })}
               </ul>
           </div>
        </nav>
    </>   
  );
};

export default NavigationBar;
