import React from 'react'
import { motion } from 'framer-motion';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Cv = () => { 

    return(
        <div className="cv_container">
            <ScrollToTopButton></ScrollToTopButton>
            <div className='cv_title'>
                <h2>CV</h2>
            </div>

            <div className="cv_exp">
                <motion.div 
                className="exp_title"
                initial={{ translateY : "30px" , opacity : 0 }}
                animate={{ translateY : "0px" , opacity : 1 }}
                transition={{ duration: 0.3 }}
                >
                    <h2>Expérience <br/> professionnelle</h2>
                </motion.div>
                <div className="cv_exp_exp">
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>20XX - Présent</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur(se) Web Full Stack</h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>2015 - Présent</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur(se) Web Full Stack</h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>20XX - Présent</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur(se) Web Full Stack</h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="cv_exp">
                <div className="exp_title">
                    <h2>Formation</h2>
                </div>
                <div className="cv_exp_exp">
                    
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>20XX - Présent</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur(se) Web Full Stack</h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>20XX - Présent</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur(se) Web Full Stack</h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv_exp">
                <div className="exp_title">
                    <h2>Compétences <br/> et expertise</h2>
                </div>
                <div className="cv_exp_exp">
                    <div className='exp'>
                        <div className="exp_time">
                            <h5></h5>
                        </div>
                        <div className="exp_detail">
                            <h4></h4>
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="cv_forma">

            </div>
            <div className="cv_skills">

            </div>
        </div>
    )
 }
 export default Cv