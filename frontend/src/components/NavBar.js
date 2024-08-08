import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import BurgerMenu from '../components/BurgerMenu'
const NavBar = ()=>{
    return(
        <div className="container_nav">
            <div className="title_nav">
                <div className="container_title_svg">
                <Link to="/" className='title_svg'>
                <img src={logo} alt="" />
                </Link>
                </div>
                
                <Link to="/" className='title_title'>
                <h4>Zermane Med Aymen</h4>
                </Link>
                <h5>Développeur full stack</h5>

                
            </div>
            <div className="nav">
                <div className="nav_nav">
                <Link to="/Cv"><h5>CV</h5></Link>
                <Link to="/api/projects" className="projets"><h5>Projets</h5></Link>
                <Link to="/Contact"><h5>Contact</h5></Link>
                </div>
            
            </div>
        <BurgerMenu></BurgerMenu>
            
        </div>
    )
}
export default  NavBar