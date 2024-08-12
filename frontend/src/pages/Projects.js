
import React, { useEffect , useState } from 'react';
import Project from '../components/Project'
import { Routes,Route } from 'react-router-dom';
import ReactLoading from "react-loading";
import { motion } from 'framer-motion';


const Projects = () => { 

    const [projects,setProjects] = useState(null)
    const [loading, setLoading] = useState(true);

    const projs = [
        { id: 1, title: 'Tecsas', type: "Développement complet du site", date: 'avril 2020',description : "Description du projet. Présentez une vue d'ensemble ou donnez des détails sur ce qui vous a inspiré, comment vous l'avez créé, ou tout autre élément que vous souhaitez partager avec les visiteurs. Pour ajouter des descriptions de projet, allez à Gérer les projets.",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/tecsasthumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20006%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 2, title: 'Heliotech', type: "Développement front end du site", date: 'mai 2021',description : "Description du projet. Présentez une vue d'ensemble ou donnez des détails sur ce qui vous a inspiré, comment vous l'avez créé, ou tout autre élément que vous souhaitez partager avec les visiteurs. Pour ajouter des descriptions de projet, allez à Gérer les projets.",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/heliotech%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20004%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 3, title: 'Archidoc', type: "conception et développement du site", date: 'juin 2020',description : "Description du projet. Présentez une vue d'ensemble ou donnez des détails sur ce qui vous a inspiré, comment vous l'avez créé, ou tout autre élément que vous souhaitez partager avec les visiteurs. Pour ajouter des descriptions de projet, allez à Gérer les projets.",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/archidoc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20003%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 4, title: 'HK&C', type: "Développement front end", date: 'juillet 2022',description : "Description du projet. Présentez une vue d'ensemble ou donnez des détails sur ce qui vous a inspiré, comment vous l'avez créé, ou tout autre élément que vous souhaitez partager avec les visiteurs. Pour ajouter des descriptions de projet, allez à Gérer les projets.",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/hkc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20005%20-%20'Preview'%20-%20editor.wix.com-min.png"] }
        
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
