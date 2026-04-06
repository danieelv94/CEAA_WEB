import React, { useState, useEffect } from 'react';
import { ultimasNoticias } from '../../json/ultimasNoticias';
import './ultimasnoticias.css';

const UltimasNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('https://comunicacion-a.hidalgo.gob.mx/traer/notas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        if (data && data.success && data.success.notas && data.success.notas.length > 0) {
          setNoticias(data.success.notas);
        }
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div id='ultimas_noticias' className="un-wrapper">
      <div className='section-header'>
        <h3 className='title'>ÚLTIMAS NOTICIAS</h3>
        <hr className='hr-gob' />
      </div>
      <div className='un-content row'>
        <div className='col-12 col-xl-7 mb-4 mb-xl-0'>
          <div className="un-carousel-container">
            <div id="carouselExampleControls" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner h-100">
                {
                  ultimasNoticias.map((item, index) => (
                    <div key={index} className={index === 0 ? "carousel-item active h-100" : "carousel-item h-100"}>
                      <a href={item.url} target="_blank" rel="noreferrer" className="d-block h-100">
                        <div className="img-carousel h-100" style={{ backgroundImage: `url("${item.imagen}")` }}>
                          <div className='title_img_carousel'>
                            <h6>{item.titulo}</h6>
                            <p>{item.fecha}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))
                }
              </div>
              <button className="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-12 col-xl-5'>
          <div className='un-cards-container'>
            {
              noticias.length > 0 ?
                noticias.map((item, index) => (
                  <div key={index} className="modern-news-card">
                    <p className='card_date'>{new Date(item.date).toLocaleDateString()}</p>
                    <h5 className="card-sec">{item.secretaria}</h5>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.descripcion ? item.descripcion.substring(0, 80) + '...' : ''}</p>
                    <a href={"https://comunicacion-a.hidalgo.gob.mx/detalles/" + item.id} target="_blank" rel="noreferrer" className="read-more">Leer completo <i className="fas fa-arrow-right"></i></a>
                  </div>
                )) : 
                <div className="modern-news-card d-flex align-items-center justify-content-center">
                   <p className="text-muted">Cargando noticias...</p>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UltimasNoticias