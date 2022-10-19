import React from 'react';
import Footer from './Footer';
import MedCareSection from './MedCareSection';
import Popup from './Popup';
import Navigate from './Navigate';

const FrontPage = () => {
  return (
    <>
      <Popup />
      <Navigate />
      <MedCareSection />  
      <Footer />
    </>
  );
};

export default FrontPage;
