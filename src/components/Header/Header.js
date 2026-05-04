import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import './header.css';
import { links } from '../../json/headerLinks';

const Header = () => {
    const [overlay, setOverlay] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (submenu) => {
    if(!isMobile) setActiveSubmenu(submenu);
  }
  const handleMouseLeave = () => {
    if(!isMobile) setActiveSubmenu(null);
  }
  const handleMenuClick = (submenu) => {
    if(isMobile) {
      setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    }
  }

  const hideMenu = () => {
    const div =  document.getElementById('navbarNav');
    if(div) {
        div.classList.remove('show');
    }
    setOverlay(false);
  }
  
  return (
    <>
        {
            overlay && <div onClick={hideMenu} className='overlay-menu'></div>
        }
        <div id='header' className="header-wrapper">
            <nav className="navbar navbar-expand-lg navbar-dark bg-gob-header">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" aria-current="page" to="/">
                        {
                            isMobile ? (
                                <span className="mobile-brand"><i className="fa-solid fa-water"></i> CEAA</span>
                            ) : (
                                <span className="desktop-brand">
                                  <i className="fa-solid fa-water"></i> COMISIÓN ESTATAL DEL AGUA Y ALCANTARILLADO
                                </span>
                            )
                        }
                    </Link>
                    <button className="navbar-toggler modern-toggler" type="button" onClick={()=>{setOverlay(true)}} data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="toggler-icon"><i className="fa-solid fa-bars"></i> MENÚ</span>
                    </button>
                    <div className="collapse navbar-collapse second-navbar-gob" id="navbarNav">
                        <ul id='menu-list' className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" onClick={() => {setActiveSubmenu(null); hideMenu()}}>
                                  <i className="fa-solid fa-house-chimney me-1"></i> Inicio
                                </Link>
                            </li>
                            {
                                links.map((item, index)=>(
                                    <li key={ index } className={`nav-item dropdown ${activeSubmenu === item.nombre ? 'active-dropdown' : ''}`}
                                        onMouseEnter={() => handleMouseEnter( item.nombre )}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => handleMenuClick( item.nombre )}>
                                        <div className="nav-link dropdown-toggle-custom"
                                            onClick={(e) => { 
                                              if(!item.submenu || item.submenu.length === 0) {
                                                setActiveSubmenu(null); 
                                                hideMenu();
                                              }
                                            }}>
                                            { item.link ? (
                                                <Link to={item.link}>{ item.nombre }</Link>
                                            ) : (
                                                <span>{ item.nombre }</span>
                                            )}
                                            {
                                                item.submenu && item.submenu.length > 0 && (
                                                    <i className={`fa-solid fa-chevron-down ms-1 icon-arrow ${activeSubmenu === item.nombre ? "rotated" : ""}`}></i>
                                                )
                                            }
                                        </div>
                                        {
                                            item.submenu && item.submenu.length > 0 && (
                                                <ul className={`dropdown-menu modern-dropdown ${activeSubmenu ===  item.nombre  ? "show" : ""}`}>
                                                    {
                                                        item.submenu.map((subItem, subIndex)=>(
                                                            <li key={ subIndex }>
                                                              <Link className="dropdown-item" to={ subItem.subMenuUrl } onClick={() => {setActiveSubmenu(null); hideMenu()}}>
                                                                <i className="fa-solid fa-angle-right me-2"></i>{ subItem.subMenuNombre }
                                                              </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="mobile-close-btn d-lg-none" onClick={hideMenu}>
                            <i className="fa-solid fa-xmark"></i> Cerrar
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Header