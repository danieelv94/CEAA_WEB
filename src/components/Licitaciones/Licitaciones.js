import React, { useEffect } from 'react';
import './licitaciones.css';
import { licitaciones } from '../../json/licitaciones';

const Licitaciones = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='container container-mh'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='title'>Licitaciones</h3>
          <hr className='hr-gob' />
        </div>
      </div>
      <div className='row'>
      {
            licitaciones.map((licitacion, index1) => (
              <div key={index1} className='col-12 container-armon'>
                <p>
                  <button
                    className='btn btn-primary contenido-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#licitacion-${index1}`}
                    aria-expanded='false'
                    aria-controls={`licitacion-${index1}`}
                  >
                    {licitacion.anio}
                  </button>
                </p>
                {
                  licitacion.licitacionesLista.map((lista, index2) => (
                    <div
                      key={`${index1}-${index2}`}
                      className='collapse multi-collapse'
                      id={`licitacion-${index1}`}
                    >
                      <p>
                        <button
                          className='btn btn-primary contenido-button'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target={`#lista-${index1}-${index2}`}
                          aria-expanded='false'
                          aria-controls={`lista-${index1}-${index2}`}
                        >
                          {lista.nombre}
                        </button>
                      </p>
                      {
                        lista.contenidoLicitacion.map((contenido, index3) => (
                            <div
                            key={`${index1}-${index2}-${index3}-${index3}`}
                            className='collapse multi-collapse armo-collapse'
                            id={`lista-${index1}-${index2}`}
                          >
                            {
                               contenido.url ?
                                <a
                                  href={contenido.url}
                                  target='_blank'
                                  className='btn btn-primary btn-armo-collapse'
                                >
                                  {contenido.nombre}
                                </a> : null
                              
                            }
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default Licitaciones;
