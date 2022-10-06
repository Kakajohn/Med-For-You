import React from 'react';
import '../sass/components/_top_button.scss';
import '../sass/components/_navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

import MedCareSection from './MedCareSection';
const FrontPage = () => {
  return (
    <>
      {/* header */}
      <NavigationBar />
      {/* main content */}
      <div className='container'>
        <div className='row'>
          <div className='col-10' style={{marginLeft:'4rem'}}>
            <MedCareSection />
          </div>

          <div className='col-2'>
            {/* Side nav */}

            <nav id='side-nav' class='section-nav' style={{ position: 'fixed', marginLeft:'2rem' }}>
              <ol style={{ background: '#121212', borderRadius: '1em' }}>
                <li class=''>
                  <a href='#medcare'>Medical Care</a>
                </li>

                <li>
                  <a href='#need'>Telemedicine</a>
                </li>
                <li>
                  <a href='#auto'>Autoimmune Diseases</a>
                </li>
                <li class=''>
                  <a href='#medit'>Medical IT</a>
                </li>
                <li class=''>
                  <a href='#follow'>Patients from Home</a>
                </li>
                {/*	<li class=""><a href="#options">Treatment Options</a></li>
					<li class=""><a href="#future">Future treatments</a></li>
					<li class=""><a href="#support">Coping and support</a></li>
                    <li class=""><a href="#quest">Questionairie</a></li>*/}
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FrontPage;
