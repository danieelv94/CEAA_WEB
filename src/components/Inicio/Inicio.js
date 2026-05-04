import React, { useEffect } from 'react';
import Carousel from '../Carousel/Carousel';
import './inicio.css';
import { titular } from '../../json/titular';
import { carouselInicio } from '../../json/carousel';

const Inicio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='home-wrapper'>

      <Carousel bannerData={carouselInicio} search={true} name="banner-principal" />

      <div className='container'>

        {/* HERO */}
        <div className='row'>
          <div className='col-12'>
            <div className='hero-section'>

              <div className='secretaria_logo'>
                <div
                  className='secretaria_logo_img'
                  style={{ backgroundImage: `url("/assets/imgs/logo_ceaa.webp")` }}
                />
              </div>

              <div className='hero-title'>
                <h1>
                  <i className="fa-solid fa-water"></i> Comisión Estatal de Agua y Alcantarillado
                </h1>
              </div>

            </div>

            {/* FUNCIONES */}
            <div className='glass-card secretaria_funciones'>
              <div className='section-header'>
                <h3 className='title'>
                  <i className="fa-solid fa-gears"></i> FUNCIONES
                </h3>
                <hr className='hr-gob' />
              </div>

              <p>
                Coordinar entre los municipios y el estado y entre éste y la federación las acciones relacionadas con la explotación, uso y aprovechamiento del agua, coadyuvando en el ámbito de su competencia al fortalecimiento del pacto federal y del municipio libre en los términos de los artículos 115 de la Constitución General de la República, 115 y 116 de la Constitución Política del Estado, para lograr el desarrollo equilibrado y la descentralización de los servicios de agua en la entidad.
              </p>
            </div>
          </div>
        </div>

        {/* CERTIFICACIONES + REDES */}
        <div className='row mt-4'>

          <div className='col-12 col-md-7 col-lg-8'>
            <div className='section-header'>
              <h3 className='title'>
                <i className="fa-solid fa-certificate"></i> CERTIFICACIONES
              </h3>
              <hr className='hr-gob' />
            </div>

            <div className='certificacion-container'>
              <div
                className='certificacion-img'
                style={{ backgroundImage: `url("/assets/imgs/SGC.png")` }}
              />
              <div
                className='certificacion-img'
                style={{ backgroundImage: `url("/assets/imgs/MAAC.png")` }}
              />
            </div>
          </div>

          <div className='col-12 col-md-5 col-lg-4'>
            <div className='section-header'>
              <h3 className='title'>
                <i className="fa-brands fa-facebook"></i> REDES SOCIALES
              </h3>
              <hr className='hr-gob' />
            </div>

            <div className='redes-sociales-container'>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fceaahgo%2F%3Flocale%3Des_LA&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>

        {/* TITULAR */}
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='section-header'>
              <h3 className='title'>
                <i className="fa-solid fa-user-tie"></i> TITULAR DE LA COMISIÓN
              </h3>
              <hr className='hr-gob' />
            </div>

            <div className='section_notes'>
              {
                titular.map((item, index) => (
                  <div key={index} className='titular-card'>

                    <div className='titular-img-wrapper'>
                      <div
                        className='img_secretario'
                        style={{ backgroundImage: `url("${item.imagen}")` }}
                      />
                    </div>

                    <div className='titular-info'>
                      <h3>{item.nombre}</h3>
                      <h4 className='mt-2'>{item.cargo}</h4>
                      <h4 className='mt-2' style={{ color: '#7e7e8d' }}>{item.actividades}</h4>
                      <h4 className='mt-2' style={{ color: '#7e7e8d' }}>{item.funcion}</h4>
                      <p>{item.descripcion}</p>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* DOCUMENTO PDF */}
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='section-header'>
              <h3 className='title'>
                <i className="fa-solid fa-file-pdf"></i> Convocatoria
              </h3>
              <hr className='hr-gob' />
            </div>

            <div className='pdf-container'>
              <iframe
                src="https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/CEAA/2026/pdf/Convocatoria%20P%C3%BAblica.pdf"
                title="Documento PDF"
              />
            </div>
          </div>
        </div>

        {/* UBICACIÓN */}
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='section-header'>
              <h3 className='title'>
                <i className="fa-solid fa-location-dot"></i> UBICACIÓN
              </h3>
              <hr className='hr-gob' />
            </div>

            <div className='map-container'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.8731978110677!2d-98.78166842554457!3d20.097586819110223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a0fd384df585%3A0x1054d73859a953bc!2sComision%20Estatal%20del%20Agua%20y%20Alcantarillado!5e0!3m2!1ses!2smx"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Inicio;