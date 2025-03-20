import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import './header.css';
import { links } from '../../json/headerLinks';

const Header = () => {
    const [overlay, setOverlay] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
  }
  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  }

  const hideMenu = () => {
    const div =  document.getElementById('navbarNav');
    div.classList.remove('show');
    setOverlay(false);
  }
  
  return (
    <>
        {
            overlay ? <div onClick={()=>{setOverlay(!overlay)}} className='overlay-menu' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"></div> : null
        }
        <div id='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-gob">
                <div className="container-fluid">
                    <Link className="nav-link active" aria-current="page" to="/">
                        {
                            isMobile ? <img className='logo-menu' src=''/> : <span>COMISIÓN ESTATAL DEL AGUA Y ALCANTARILLADO</span>
                            // isMobile ? <img className='logo-menu' src='https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/Infraestructura/Infraestructura_ocre_h.svg'/> : <span>COMISIÓN ESTATAL DEL AGUA Y ALCANTARILLADO</span>
                            // isMobile ? <img className='logo-menu' src='https://cdn.hidalgo.gob.mx/gobierno/images/secretarias/MedioAmbiente/MedioAmbiente_ocre_h.svg'/> : <span>COMISIÓN ESTATAL DEL AGUA Y ALCANTARILLADO</span>
                        }
                    </Link>
                    <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{setOverlay(true)}} style={{color: "white"}} viewBox="0 0 32 32">
                        MENÚ
                    </span>
                    <div className="collapse navbar-collapse second-navbar-gob" id="navbarNav">
                        <ul id='menu-list' className="navbar-nav"
                            onClick={() => {setActiveSubmenu(null); hideMenu()}}>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            {
                                links.map((item, index)=>(
                                    <li key={ index } className="nav-item dropdown"
                                        onMouseEnter={() => handleMouseEnter( item.nombre )}
                                        onMouseLeave={handleMouseLeave}>
                                        <Link to={ item.link } 
                                            className="nav-link"
                                            onClick={() =>{setActiveSubmenu(null) }}>{ item.nombre }</Link>
                                        {
                                            item.submenu && item.submenu.length > 0 && (
                                                <ol className={`dropdown-menu ${activeSubmenu ===  item.nombre  ? "show" : ""}`} aria-labelledby="navbarDropdownMenuLink">
                                                    {
                                                        item.submenu.map((item, index)=>(
                                                            <li key={ index }><Link className="dropdown-item" to={ item.subMenuUrl }>{ item.subMenuNombre }</Link></li>
                                                        ))
                                                    }
                                                </ol>
                                            )
                                        }
                                        <span className={`triangle ${activeSubmenu ===  item.nombre  ? "show" : ""}`} />
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Header