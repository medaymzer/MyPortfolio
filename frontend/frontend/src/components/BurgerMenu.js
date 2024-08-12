import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'
const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div 
      className="burger-menu"
      
      >
        <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <motion.div
         className={`menu ${isOpen ? 'open' : ''}`}
         initial={{  opacity : 0 }}
      animate={isOpen?{  opacity : 1 }:{opacity : 0}}
      transition={{ duration: 0.3 }}
         >
          <ul>
            <li><Link to="/" id='home' onClick={toggleMenu}>Accueil</Link></li>
            <li><Link to="/Cv" id='cvcv' onClick={toggleMenu}>CV</Link></li>
            <li><Link to="/api/projects" id='proj' onClick={toggleMenu}>Projets</Link></li>
            <li><Link to="/contact" id='cont' onClick={toggleMenu}>Contacts</Link></li>
          </ul>
        </motion.div>
      </div>
    );
  };
  
  export default BurgerMenu;