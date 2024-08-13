import React from 'react'
import { motion } from 'framer-motion';


const Cv = () => { 

    return(
        <div className="cv_container">
            
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
                            <h5>2022 - 2023</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur Web Front End</h4>
                            <p>EURL TECSAS <br/> J'ai été chargé de développer le site web vitrine de la société en utilisant les technologie :  React, Nodejs, HTML5, Sass . Ainsi que d'autres tache informatique quotidienne (maintenance et gestion de logiciels, serveur et du réseau )</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>2023 - 2023</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur Web Full Stack</h4>
                            <p>FREELANCE <br/> J'avais pour mission de développer plusieurs application et site web pour plusieurs entreprise tel que Heliotech et le club HK&C en utilsant principalement : React, Nodejs, Expressjs, Mongodb, HTML5, Sass</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>2023 - 2024</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Développeur Web Full Stack et de logiciels</h4>
                            <p>SAS 2SCL <br/>Dans cet entreprise j'ai été chargé de divers tache tel que aidé a la conception de la solution proposé par la société mais encore quelque mission d'integration front-end sur le site web mais aussi la traduction et l'integration du site complet en diffents langues  </p>
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
                            <h5>2017 - 2020</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>License en informatique </h4>
                            <p>Obtention d'une License en informatique à l'université de Badji Mokhtar, Département d'informatique, Annaba .</p>
                        </div>
                    </div>
                    <div className='exp'>
                        <div className="exp_time">
                            <h5>2020 - 2022</h5>
                        </div>
                        <div className="exp_detail">
                            <h4>Master en informatique</h4>
                            <p>Obtention d'un master en informatique spécialité ILC (Ingeniérie des Logiciels Complexe) en étant major de promotion . <br/> Projet de fin d'etudes: Création d'un modéle "Cross-Project" pour la prédiction de la maintenabilité de logiciels en utilisant l'apprentissage automatique profond (en python)</p>
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
                            <p>Je suis un(e) développeur(se) web passionné(é) par la création d'expériences numériques innovantes. Mon rôle consiste à concevoir et développer des applications web performantes et intuitives pour répondre aux besoins des utilisateurs. pour cela j'avais envie de maitriser le MERN Stack 'Mongodb, Expressjs, React, Nodejs' , mais au fil des anneés j'ai acquis un bon niveau en developement native dans des language tel que Python ou java, je pratique aussi le design UI/UX des sites web. Ma langue natale est l'arabe mais je maitrise tout aussi bien le francais et l'anglais  </p>
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
