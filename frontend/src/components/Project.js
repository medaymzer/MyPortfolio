import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import SingleProject from '../pages/singleProject'
import { motion } from 'framer-motion';


const Project = ({project}) => { 
        const [hover , setHover] = useState(true)
        const [proj,setProj]=useState(null)
       // setProj(project)
    return(
        <Link to={"/api/projects/"+project.id} id='project1'>
        <motion.div 
        className='project'
        initial={{ translateY : "20px" , opacity : 0 }}
        animate={{ translateY : "0px" , opacity : 1 }}
        transition={{ duration: 0.8 }}
        >
         <div className='projectimg' onMouseEnter={()=> setHover(false)} onMouseLeave={()=> setHover(true)}>
            <img src={project.screenshotBase64[0]} alt={project.title} style={{opacity: hover?  1: 0.6}} />
            <div className='project_title_hidden' >
                <h5 style={{opacity : hover? 0:1}}>{project.title}</h5>
            </div>
         </div>
        </motion.div>
        <Routes>
            
           </Routes>
        
        </Link>
       
    )
}
export default Project
