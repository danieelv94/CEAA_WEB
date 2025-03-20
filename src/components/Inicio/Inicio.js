import React, { useEffect,useState } from 'react';
import Carousel from '../Carousel/Carousel';
import UltimasNoticias from '../UltimasNoticias/UltimasNoticias';
import './inicio.css';
import { titular } from '../../json/titular';
import { Link } from 'react-router-dom';
import { carouselInicio } from '../../json/carousel';

const Inicio = () => {
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
 
  return (
    <>
      <Carousel bannerData={carouselInicio} search={true} name="banner-principal" />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='secretaria_logo'>
              <div className='secretaria_logo_img' style={{ backgroundImage: `url("")` }}>

              </div>
            </div>
          </div>
          <div className='secretaria_name'>
            <h1>COMISIÓN ESTATAL DEL AGUA Y ALCANTARILLADO</h1>
          </div>
          <div className='secretaria_funciones'>
            <h3 className='title'>FUNCIONES</h3>
            <hr className='hr-gob'/>
            <p>Coordinar entre los municipios y el estado y entre éste y la federación las acciones relacionadas con la explotación, uso y aprovechamiento del agua, coadyuvando en el 
              ámbito de su competencia al fortalecimiento del pacto federal y del municipio libre en los términos de los artículos 115 de la Constitución General de la República, 115 y 
              116 de la Constitución Política del Estado, para lograr el desarrollo equilibrado y la descentralización de los servicios de agua en la entidad.</p>
              <div className='btn_organigrama'>
                {/* <button type="button" className="btn btn-primary">Organigrama</button>
                <button type="button" className="btn btn-primary">Normatividad</button> */}
              </div>
              <div className='secretaria-redes'>
                {/* <a href='https://www.facebook.com/ceaahgo/'><i class="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/ceaahidalgo/'><i class="fa-brands fa-instagram"></i></a>
                <a href='https://twitter.com/ceaa_hgo?lang=es'><i class="fa-brands fa-twitter"></i></a> */}
              </div>
          </div>
        </div>
        <UltimasNoticias/>
        <div className='row'>
          <div className='col-12'>
            <div className='notes_title'>
              <h3 className='title'>TITULAR DE LA COMISIÓN</h3>
              <hr className='hr-gob'/>
            </div>
            <div className='section_notes'>
              {
                titular.map((item, index) =>(
                    <>
                      <div key={ index } className='sec_photo'>
                        <div className='img_secretario' style={{ backgroundImage: `url("${ item.imagen }")` }}>
                        </div>
                      </div>
                      <div className='sec_container'>
                        <div className='sec_name'>
                          <h3>{ item.nombre }</h3>
                        </div>
                        <div className='sec_function'>
                          <h4>Función del Director</h4>
                          <p>{ item.funcion }</p>
                          <div className='btn_agenda'>
                            {/* <Link to="Agenda">Conoce la agenda del Secretario</Link> */}
                          </div>
                        </div>
                      </div>
                    </>
                ))
              }
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='section_map'>
              <div className='map_name'>
                <h3 className='title'>UBICACIÓN</h3>
                <hr className='hr-gob'/>
              </div>
              {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=palacio%20de%20gobierno%20pachuca%20hidalgo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="100%" 
                      height="300" 
                      frameborder="0" 
                      style={{border:0, marginBottom:50}} 
                      allowfullscreen>
              </iframe> */}

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8731978110677!2d-98.78166842554457!3d20.097586819110223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0fd384df585%3A0x1054d73859a953bc!2sComision%20Estatal%20del%20Agua%20y%20Alcantarillado!5e0!3m2!1ses!2smx!4v1686266044010!5m2!1ses!2smx"width="100%" 
                      height="300" 
                      frameborder="0" 
                      style={{border:0, marginBottom:50}} 
                      allowfullscreen></iframe>

            </div>
          </div>
        </div>   
      </div>
    </>
  )
}

export default Inicio