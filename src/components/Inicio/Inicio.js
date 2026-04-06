import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import './inicio.css';
import { titular } from '../../json/titular';
import { Link } from 'react-router-dom';
import { carouselInicio } from '../../json/carousel';

const Inicio = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <div className='home-wrapper'>
      <Carousel bannerData={carouselInicio} search={true} name="banner-principal" />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='hero-section'>
              <div className='secretaria_logo'>
                <div className='secretaria_logo_img' style={{ backgroundImage: `url("https://scontent.fmex19-1.fna.fbcdn.net/v/t39.30808-6/475886587_937154025236367_5242512120157269503_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeGGDFneau-cMayk6Am-3VI7fI7-mdPuPtN8jv6Z0-4-00aYiCDaH_yBmtIk5BCTtU4pn1EdclQTE_OFP7nQPtwd&_nc_ohc=Xzj8OCSec_EQ7kNvwHJVOCC&_nc_oc=AdrcPrAOJcj0Qdrv6zVseA1WBkyo9al8pygP3x05twuxqtugQbYJlU2kyPvbPkC8Vf8&_nc_zt=23&_nc_ht=scontent.fmex19-1.fna&_nc_gid=7yMziq4sKX7Ya2RU8U_khA&_nc_ss=7a3a8&oh=00_Af1WW8I1YK63D5YsFeOowu-8zzBj-mUqpVaiYezfaw2fRw&oe=69D9CF6B")` }}>
                </div>
              </div>
              <div className='hero-title'>
                <h1>Comisión Estatal de Agua y Alcantarillado</h1>
              </div>
            </div>

            <div className='glass-card secretaria_funciones'>
              <div className='section-header'>
                <h3 className='title'>FUNCIONES</h3>
                <hr className='hr-gob' />
              </div>
              <p>Coordinar entre los municipios y el estado y entre éste y la federación las acciones relacionadas con la explotación, uso y aprovechamiento del agua, coadyuvando en el
                ámbito de su competencia al fortalecimiento del pacto federal y del municipio libre en los términos de los artículos 115 de la Constitución General de la República, 115 y
                116 de la Constitución Política del Estado, para lograr el desarrollo equilibrado y la descentralización de los servicios de agua en la entidad.</p>
              <div className='btn_organigrama'>
                {/* <button type="button" className="btn btn-primary">Organigrama</button>
                  <button type="button" className="btn btn-primary">Normatividad</button> */}
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-12 col-md-7 col-lg-8'>
            <div className='section-header'>
              <h3 className='title'>CERTIFICACIONES</h3>
              <hr className='hr-gob' />
            </div>
            <div className='certificacion-container'>
              {/* === INSTRUCCIÓN PARA AGREGAR IMAGEN === 
                  Mueve tu imagen a la carpeta "public/assets" (o "public") en tu proyecto 
                  y coloca aquí su ruta (por ejemplo "/assets/tu-certificado.jpg") o pega
                  directamente el link de la imagen si la subiste a otro lugar en internet. */}
              <div
                className='certificacion-img'
                style={{ backgroundImage: `url("/assets/imgs/SGC.png")` }}
                title="Certificación CEAA"
              >
              </div>
            </div>
          </div>
          <div className='col-12 col-md-5 col-lg-4'>
            <div className='section-header'>
              <h3 className='title'>REDES SOCIALES</h3>
              <hr className='hr-gob' />
            </div>
            <div id='redes_sociales' className='redes-sociales-container'>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fceaahgo&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12'>
            <div className='section-header'>
              <h3 className='title'>TITULAR DE LA COMISIÓN</h3>
              <hr className='hr-gob' />
            </div>
            <div className='section_notes'>
              {
                titular.map((item, index) => (
                  <div key={index} className='titular-card'>
                    <div className='titular-img-wrapper'>
                      <div className='img_secretario' style={{ backgroundImage: `url("${item.imagen}")` }}>
                      </div>
                    </div>
                    <div className='titular-info'>
                      <h3>{item.nombre}</h3>
                      <h4>{item.funcion ? item.funcion : "Función del Director"}</h4>
                      <p>{item.descripcion || "Dirigir, administrar y representar a la Comisión Estatal de Agua y Alcantarillado con eficiencia y transparencia, promoviendo proyectos sustentables."}</p>
                      <div className='btn_agenda mt-3'>
                        {/* <Link to="Agenda" className="btn-agenda-link">Conoce la agenda del Secretario</Link> */}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-12'>
            <div className='section-header'>
              <h3 className='title'>UBICACIÓN</h3>
              <hr className='hr-gob' />
            </div>
            <div className='map-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8731978110677!2d-98.78166842554457!3d20.097586819110223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0fd384df585%3A0x1054d73859a953bc!2sComision%20Estatal%20del%20Agua%20y%20Alcantarillado!5e0!3m2!1ses!2smx!4v1686266044010!5m2!1ses!2smx" width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Inicio