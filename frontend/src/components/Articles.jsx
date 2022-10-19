import React , { useRef,useEffect, useState } from 'react';
import NavigationBar from './NavigationBar'
import FamilialAdenomatous from './FamilialAdenomatous';
import Crohn from './Crohn';
import Footer from './Footer'
import '../sass/components/_articles.scss'
import Navigate from './Navigate';

const Articles = () => {

  const [show, setShow] = useState(false);

 // TODO: Add back to top button

  return (
    <>
    <Navigate />
    <div className="content-a">        
      <div className="secondary-a">
      {/* <>
            <h1>Familial Adenomatous Polyposis</h1>
            <button onClick={expand} id='more'>Read more</button>
            <button onClick={collapse} id='lesss'>Read less</button>
      </> */}
        <div className="col-8" id='fap'>
         {/* {show && ( */}
           <FamilialAdenomatous />
          {/*   )} */}
           </div>
      </div>
      <div className="secondary-a" id='define-new-section'>
      <div className="col-8" id='crohn'>
        <Crohn />
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Articles