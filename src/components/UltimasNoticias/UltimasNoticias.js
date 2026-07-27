import React from 'react';
import { ultimasNoticias } from '../../json/ultimasNoticias';
import './ultimasnoticias.css';

const UltimasNoticias = () => {
  return (
    <div id='ultimas_noticias' className="un-wrapper">
      <div className='section-header'>
        <h3 className='title'>
          <i className="fa-solid fa-newspaper"></i> ÚLTIMAS NOTICIAS
        </h3>
        <hr className='hr-gob' />
      </div>
      <div className='un-content row justify-content-center'>
        <div className='col-12 col-lg-10 col-xl-8'>
          <div className="un-carousel-container">
            <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner h-100">
                {
                  ultimasNoticias.map((item, index) => (
                    <div key={index} className={index === 0 ? "carousel-item active h-100" : "carousel-item h-100"}>
                      <a href={item.url} target="_blank" rel="noreferrer" className="h-100 img-link-wrapper">
                        {/* Blurred background to fill margins nicely */}
                        <div 
                          className="carousel-bg-blur" 
                          style={{ backgroundImage: `url("${item.imagen}")` }}
                        />
                        {/* Centered responsive image */}
                        <img 
                          src={item.imagen} 
                          className="img-carousel-fit" 
                          alt={item.titulo || "Noticia"} 
                        />
                        {item.titulo && (
                          <div className='title_img_carousel'>
                            <h6>{item.titulo}</h6>
                            {item.fecha && <p>{item.fecha}</p>}
                          </div>
                        )}
                      </a>
                    </div>
                  ))
                }
              </div>
              {ultimasNoticias.length > 1 && (
                <>
                  <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimasNoticias;