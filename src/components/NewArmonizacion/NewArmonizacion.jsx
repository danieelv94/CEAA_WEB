import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewArmonizacion = ({data, title}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

  return (
    <div className='container container-mh'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='title'>{title}</h3>
        <hr className='hr-gob' />
      </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <div className='data-armo-list'>
          {
              data.map((item, index1) => (
              <div key={index1}>
                  <p>
                    <button
                        className={`btn btn-primary`}
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target={`#nombre-${index1}`}
                        aria-expanded='false'
                        aria-controls={`nombre-${index1}`}
                        >
                        {item.titulo}
                    </button>
                  </p>
                  {
                      item.subtitulo.map((item, index2) => (
                        item.url ? 
                           <Link to={item.url} target='_blank'>
                                <div
                                    className='collapse armo-collapse'
                                    id={`nombre-${index1}`}
                                    key={`${index1}-${index2}`}
                                >
                                    <button
                                        type='button'
                                        className='btn btn-secondary'
                                        >
                                        {item.informacionTitulo}
                                    </button>
                                </div>
                           </Link>  : null
                          ))
                      
                  }
              </div>
              ))
          }
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewArmonizacion