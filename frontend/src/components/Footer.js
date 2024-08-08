import React from 'react'
import { Link } from 'react-router-dom'
import linkedin from '../linkedin.svg'
import twitter from '../twitter.svg'

const Footer = () => { 
    return(
        <div className="footer_container">

            <div className="footer_tel">
                <h4>Télephone</h4>
                <h5>05 55 06 90 61</h5>
            </div>
            <div className="footer_email">
                <h4>Email</h4>
                <h5>hamza_zer@outlook.fr</h5>
            </div>
            <div className="footer_follow">
                <h4>Suivez-moi</h4>
                <div className="footer_follow_socials">
                    <div className="socials"><Link to="/"><img src={linkedin} alt="" /></Link></div>
                    <div className="socials"><Link to="/"><img src={twitter} alt="" /></Link></div>
                    
                    
                </div>
            </div>
            <div className="footer_politics">
                <p>Politique de confidentialité <br/>Mentions légales <br/>Politique de cookies</p>
            </div>
            <div className="footer_c">
                <p>
                    © 2024 par Zermane Med Aymen. <br/>
                    Créé avec React
                </p>
            </div>
        </div>
    )
 }
 export default Footer