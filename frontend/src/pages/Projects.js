
import React, { useEffect , useState } from 'react';
import Project from '../components/Project'
import { Routes,Route } from 'react-router-dom';
import ReactLoading from "react-loading";
import { motion } from 'framer-motion';


const Projects = () => { 

    const [projects,setProjects] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        localStorage.clear()
        const storedData = localStorage.getItem('exampleData');

        if (storedData) {
            setProjects(JSON.parse(storedData));
            setLoading(false);
        }else{


        const fetchProjects = async () =>{
            try{
            const response = await fetch('/api/projects')
                console.log("error1")
            const json = await response.json()
                console.log("error2")
            if (response.ok){
                console.log("okokokok")
                setProjects(json)
                localStorage.setItem('exampleData', JSON.stringify(json));
                console.log("okok")
            }
            }catch(error){
                console.log(error.json())
            }finally{
                setLoading(false)
            }
        }

        fetchProjects()
    }}, [])

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
           <Project key={project._id} project={project}/>
            ))}
            </div>

            <div className='project_title_2'>
                <h5>Et bien d'autres encore ...</h5>
            </div>
            
        </div>
    )
 }
 export default Projects
