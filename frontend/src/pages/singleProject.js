import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from "react-loading";


const SingleProject = () => { 

    const [project,setProject]=useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams()
    const projs = [
        { id: 1, title: 'Tecsas', type: "Développement complet du site", date: 'avril 2022',description : "Développement d'un site web vitrine pour la société EURL TECSAS. Le site permet aux utilisateurs d'en savoir plus sur l'entreprise en parcourant les plusieurs rubrique tel que (Produits, Services, References ..etc) mais aussi les contacter via l'email de l'entreprise.  Technologie utilisé : React, Nodejs, HTML5, Sass ",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/tecsasthumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20006%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 2, title: 'Heliotech', type: "Développement front end du site", date: 'mars 2023',description : "Développement d'un site web vitrine pour la société HELIOTECH (une société de solutions energetiques). Le site permet aux utilisateurs d'en savoir plus sur l'entreprise en parcourant les plusieurs rubrique tel que (A propos de nous, Formules de payements, Services proposé ..etc) mais aussi les contacter via l'email de l'entreprise.  Technologie utilisé : React, Nodejs, HTML5, Sass",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/heliotech%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20004%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 3, title: 'Archidoc', type: "conception et développement du site", date: 'juin 2021',description : "Développement d'une application web de gestion de fichier important a la realisation de projet de fin d'anneé pour aider les étudiants en architecture à mieux réaliser ses derniers. Avec un systeme de compte l'application permet aux utilisateurs de créer, modifier, supprimer, et organiser des projets complets mais aussi ils ont tout les fichier dont ils ont besoins (P.O.S, P.d.a.u, projets reél ou fictif) pour la réalisation de leur projet. l'application offre un forum de disscusion entre étudiants et professeur. Technologie utilisé : Laravel, Js, HTML5, Sass ",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/archidoc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20003%20-%20'Preview'%20-%20editor.wix.com-min.png"] },
        { id: 4, title: 'HK&C', type: "Développement front end", date: 'juillet 2023',description : "Développement front end d'une application web pour la club HK&C qui permet a ses utilisateurs de connaitre le club mais aussi de consulter leur activité et réserver en ligne pour de prochaine activité. Avec un systeme de boutique l'application permet aux utilisateurs d'acheter quelque produits mis en vente par le club. l'application offre aussi une rubrique FAQ pour voir les questions récurentes a propos du club . Technologie utilisé : React, Nodejs, Expressjs, Mongodb,  HTML5, Sass",screenshotBase64 : ["https://raw.githubusercontent.com/medaymzer/testvercel/main/hkc%20thumb-min.png","https://raw.githubusercontent.com/medaymzer/testvercel/main/FireShot%20Pro%20Webpage%20Capture%20005%20-%20'Preview'%20-%20editor.wix.com-min.png"] }
        
      ];
      useEffect(() => {
        let i = 0;
        let foundUser = null;
    
        // While loop to find the first user who is older than 30
        while (i < projs.length) {
          if (projs[i].id == params.id) {
            foundUser = projs[i];
            setIsLoading(false);
            break;
          }
          i++;
        }
    
        // Set the found user in state
        setProject(foundUser);
      }, []);

    /*useEffect(() => {
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
    },[])*/
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
            <p>Loading recources please wait. </p>
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

 
