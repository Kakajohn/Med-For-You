import React from 'react'
import { useRef,useEffect, useState } from 'react';
import '../sass/components/_medcaresection.scss'
import Autoimmune from './Autoimmune';
import FollowUp from './FollowUp';
import MedicalInformatics from './MedicalInformatics';
import Telemedicine from './Telemedicine';
const MedCareSection = () => {

  const [click, setClick] = useState(false)

  const selectComponent = () => {

  }

  // let [count, setCount] = useState(0);

  // const ref = useRef(null);

  // const showmore = () => {

  //    setClick(true);
  //    document.getElementById('less').style.visibility = 'visible';
  //    document.getElementById('read').style.visibility = 'collapse' ;  
     
  //    document.getElementById('less2').style.visibility = 'visible';
  //    document.getElementById('read2').style.visibility = 'collapse' ;  
  //    count ++;
  //    setCount(count)
  //    console.log(count)

  // }

  // const showless = () => {
  //   setClick(false);
  //   document.getElementById('less').style.visibility = 'collapse';
  //   document.getElementById('read').style.visibility = 'visible';
   
  //   document.getElementById('less2').style.visibility = 'collapse';
  //   document.getElementById('read2').style.visibility = 'visible';
   
  // }

  // useEffect(()=>{
  //   if(click === false ){
  //     document.getElementById('more').style.visibility = 'collapse' ;
  //     document.getElementById('less').style.visibility = 'collapse';
  //     document.getElementById('read').style.visibility = 'visible' ;

  //     document.getElementById('more2').style.visibility = 'collapse' ;
  //     document.getElementById('less2').style.visibility = 'collapse';
  //     document.getElementById('read2').style.visibility = 'visible' ;
  //     console.log(click, setClick)
  //   }else if(click === true ) {
  //     document.getElementById('read').style.visibility = 'collapse' ;
  //     document.getElementById('more').style.visibility = 'visible' ;

  //     document.getElementById('read2').style.visibility = 'collapse' ;
  //     document.getElementById('more2').style.visibility = 'visible' ;
  //   }
  // },[setClick])

  return (
    <>
    <div className="content">
       <div className="secondary">
          <Telemedicine />
          <MedicalInformatics />
          <Autoimmune />
          <FollowUp />
        </div>
    </div>
    </>
  )
}

export default MedCareSection