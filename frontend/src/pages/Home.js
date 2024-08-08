import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';


const Home = () => { 

    return(
        <motion.div 
        className="container_home"
        initial={{ translateY : "100px" , opacity : 0 }}
        animate={{ translateY : "0px" , opacity : 1 }}
        transition={{ duration: 0.7 }}
        >
            <div className='cont_cont_home'>
                <div className="cont_pic">
                <div className="home_pic">
                </div>
                </div>
           
            <div className="home_text">
                <div className="home_text_text">
                <h2>Salut</h2>
                <h4>Qui suis-je ?</h4>
                <p>Je suis passionné(e) par le développement web et je m'efforce de créer des expériences en ligne à la fois élégantes et fonctionnelles. Mon objectif est de fournir des solutions numériques innovantes qui répondent aux besoins de mes clients. Ce site est l'endroit idéal pour en apprendre davantage sur mes compétences et mes réalisations.</p>
                </div>
                <div className="home_text_btns">
                <motion.div 
                className="btns"
                initial={{ translateY : "20px"  }}
                animate={{ translateY : "0px" }}
                transition={{ duration: 1 }}
                >
                <Link to="/Cv" id='cv'><h5>CV</h5></Link>
                </motion.div>
                <motion.div 
                className="btns"
                initial={{ translateY : "60px"  }}
                animate={{ translateY : "0px" }}
                transition={{ duration: 1 }}
                >
                <Link to="/api/projects" id='projects'><h5>Projets</h5></Link>
                </motion.div>
                <motion.div 
                className="btns"
                initial={{ translateY : "100px"  }}
                animate={{ translateY : "0px" }}
                transition={{ duration: 1 }}
                >
                <Link to="/Contact" id='contact'><h5>Contact</h5></Link>
                </motion.div>
                 
                 
                 
                </div>
            </div>
            </div>
        </motion.div>
    )
 }
 export default Home