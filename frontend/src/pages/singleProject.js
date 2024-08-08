import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";


const SingleProject = () => { 

    const [project,setProject]=useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()

    useEffect(() => {
        const fetchProject = async () =>{
            console.log(params.id)
            const response = await fetch(`http://localhost:3000/api/projects/${params.id}`)
            const json = await response.json()
            if(response.ok){
                setProject(json)
                setIsLoading(false);
                
            }else{
                console.log("error")
            }
        }
        fetchProject()
    },[])
    useEffect(() => {
        if (project !== null) {
            console.log('State has been updated:', project);
           
            // Perform actions that need to happen after state has been updated
        }
    }, [project]);

    if(isLoading){
        return(
            <div className='loading__'>
            <ReactLoading type="spin" color="#EEA302" />
            <p>Loading recources please wait.</p>
            </div>
        )
    }

    return(
        <div className='single_project'>
          <div className='single_project_text'>
            <div className='single_project_text_title'>
                <h2>{project.title}</h2>
                <h4>Type du projet :</h4>
                <h5>{project.type}</h5>
                <h4>Date :</h4>
                <h5>{project.date}</h5>
            </div>
            <div className='single_project_text_description'>
                <p key={project._id}>{project.description}</p>
            </div>
          </div>
          <div className='single_project_screenshots'>
            {project.screenshotBase64.map((screenshot,index)=>(
                <img key={index} id={"screenshot"+index} src={screenshot} alt="screenshot" />
            ))}
          </div>
        </div>
    )
    }
    export default SingleProject

 