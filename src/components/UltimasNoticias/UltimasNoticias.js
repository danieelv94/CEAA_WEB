import React from 'react';
import { ultimasNoticias } from '../../json/ultimasNoticias';
import { useState,useEffect } from 'react';
import './ultimasnoticias.css';


const UltimasNoticias = () => {
  const[noticias, setNoticias] = useState([]);

  useEffect(() => {
    fetch('https://comunicacion-a.hidalgo.gob.mx/traer/notas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => {
        console.log(data.success.notas);
        if(data.success.notas.length > 0){
          setNoticias(data.success.notas);
        }
      })
      .catch(error => console.error(error));
  },[]);

  return (
    <div id='ultimas_noticias'>
      <div className='row'>
        <div className='col-12'>
          <div className='notice_section'>
            <div className='notice_title'>
              <h3 className='title'>ÚLTIMAS NOTICIAS</h3>
              <hr className='hr-gob'/>
            </div>
            <div className='notice_content'>
              <div className='col-sm-8 col-12'>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {
                      ultimasNoticias.map((item, index)=>(
                        <div key={ index } className={ index >= 1 ? "carousel-item" : "carousel-item active" }>
                          <a href={ item.url } target="_blank">
                            <div className="img-carousel d-block w-100" style={{ backgroundImage: `url("${ item.imagen }")` }} alt="First slide">
                              <div className='title_img_carousel'>
                                <h6>{ item.titulo }</h6>
                                <p>{ item.fecha }</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      ))
                    }
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className='col-md-4 col-12'>
                <div className='card_container'>
                  {
                    noticias.length > 0 ?
                    noticias.map((item, index)=>(
                      <div key={ index } className="card">
                        <div className="card-body">
                          <p className='card_date'>{new Date(item.date).toLocaleString()}</p>
                          <h5 className="card-title">{item.secretaria}</h5>
                          <h4 className="card-subtitle mb-2 text-muted">{item.title}</h4>
                          <p className="card-text">{item.descripcion}</p>
                          <a href={"https://comunicacion-a.hidalgo.gob.mx/detalles/" + item.id} target="_blank">Leer completo</a>
                        </div>
                      </div>
                    )) : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default UltimasNoticias