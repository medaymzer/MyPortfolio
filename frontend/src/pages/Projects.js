
import React, { useEffect , useState } from 'react';
import Project from '../components/Project'
import { Routes,Route } from 'react-router-dom';
import ReactLoading from "react-loading";
import { motion } from 'framer-motion';


const Projects = () => { 

    const [projects,setProjects] = useState(null)
    const [loading, setLoading] = useState(true);

    const projs = [
        { id: 1, title: 'Tecsas', type: "Développement complet du site", date: 'avril 2020',description : "Développement d'un site web vitrine pour la société EURL TECSAS. Le site permet aux utilisateurs d'en savoir plus sur l'entreprise en parcourant les plusieurs rubrique tel que (Produits, Services, References ..etc) mais aussi les contacter via l'email de l'entreprise.  Technologie utilisé : React, Nodejs, HTML5, Sass ",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/tecsasthumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20006%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 2, title: 'Heliotech', type: "Développement front end du site", date: 'mai 2021',description : "Développement d'un site web vitrine pour la société HELIOTECH (une société de solutions energetiques). Le site permet aux utilisateurs d'en savoir plus sur l'entreprise en parcourant les plusieurs rubrique tel que (A propos de nous, Formules de payements, Services proposé ..etc) mais aussi les contacter via l'email de l'entreprise.  Technologie utilisé : React, Nodejs, HTML5, Sass",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/heliotech%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20004%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 3, title: 'Archidoc', type: "conception et développement du site", date: 'juin 2020',description : "Développement d'une application web de gestion de fichier important a la realisation de projet de fin d'anneé pour aider les étudiants en architecture à mieux réaliser ses derniers. Avec un systeme de compte l'application permet aux utilisateurs de créer, modifier, supprimer, et organiser des projets complets mais aussi ils ont tout les fichier dont ils ont besoins (P.O.S, P.d.a.u, projets reél ou fictif) pour la réalisation de leur projet. l'application offre un forum de disscusion entre étudiants et professeur. Technologie utilisé : Laravel, Js, HTML5, Sass ",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/archidoc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20003%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 4, title: 'HK&C', type: "Développement front end", date: 'juillet 2022',description : "Développement front end d'une application web pour la club HK&C qui permet a ses utilisateurs de connaitre le club mais aussi de consulter leur activité et réserver en ligne pour de prochaine activité. Avec un systeme de boutique l'application permet aux utilisateurs d'acheter quelque produits mis en vente par le club. l'application offre aussi une rubrique FAQ pour voir les questions récurentes a propos du club . Technologie utilisé : React, Nodejs, Expressjs, Mongodb,  HTML5, Sass",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/hkc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20005%20-%20'Preview'%20-%20editor.wix.com-min.png"] }
        
      ];

      useEffect(()=>{
        localStorage.clear()
        const storedData = localStorage.getItem('exampleData');

        if (storedData) {
            setProjects(JSON.parse(storedData));
            setLoading(false);
        }else{


        const fetchProjects = async () =>{
            try{
            const response = projs
            console.log(response)
           // const json = await response.json()
            if (response){

                setProjects(response)
                localStorage.setItem('exampleData', JSON.stringify(response));
                console.log("okok")
            }
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchProjects()
    }}, [])
    
        
   /* useEffect(()=>{
        localStorage.clear()
        const storedData = localStorage.getItem('exampleData');

        if (storedData) {
            setProjects(JSON.parse(storedData));
            setLoading(false);
        }else{


        const fetchProjects = async () =>{
            try{
            const response = await fetch('/api/projects')
            const json = await response.json()
            if (response.ok){
                setProjects(json)
                localStorage.setItem('exampleData', JSON.stringify(json));
                console.log("okok")
            }
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchProjects()
    }}, [])
*/
    if(loading){
        return(
            <div className='loading__'>
            <ReactLoading type="spin" color="#EEA302" />
            <p>Loading recources please wait.</p>
            </div>
        )
    }
    return(
        <div className='projects'>
            <motion.div
             className='projects_title'
             initial={{ translateY : "20px" , opacity : 0 }}
             animate={{ translateY : "0px" , opacity : 1 }}
             transition={{ duration: 0.5 }}
             >
                <h2>Mon Portfolio</h2>
                <h5>Bienvenue sur mon portfolio. Vous trouverez ici une sélection de mes travaux. <br/> Explorez mes projets pour en savoir plus.</h5>
            </motion.div>

            <div className='portfolio'>
            {projects && projects.map((project) =>(
               // <div></div>
           <Project key={project.id} project={project}/>
            ))}
            </div>

            <div className='project_title_2'>
                <h5>Et bien d'autres encore ...</h5>
            </div>
            
        </div>
    )
 }
 export default Projects
