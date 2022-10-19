import React from 'react';
import {FaGithubSquare,FaLinkedin} from "react-icons/fa";
import '../sass/components/_footer.scss'
const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '5px', color: 'rgb(235 230 230 / 48%)', marginTop:"11rem" }}>
     <div className="container">
      <div className="text-center">
      <a href="https://www.linkedin.com/in/george-kakazianis-24ba97224/"><FaLinkedin /></a>
      <a href="https://github.com/Kakajohn"><FaGithubSquare /></a>
      </div>
     </div>
      You can contact us at{' '}
      <a style={{ color: 'rgb(235 230 230 / 48%)' }} href='mailto:kakaziag@csd.auth.gr'>
        kakaziag@csd.auth.gr{' '}
      </a>
      <br />
      This University Thesis was created by Gkakazianis. ❤
    </footer>
  );
};

export default Footer;
