import React, { useEffect, useState } from 'react';
import './armonizacionContable.css';
import CardArmonizacion from '../CardArmonizacion/CardArmonizacion';
import { Armonizacion } from '../../json/armonizacionContable';

const ArmonizacionContable = ({data, title, dataType}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState('');

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
        <div className='col-md-4 col-12'>
          <div className='data-armo-list'>
            {
                data.map((item, index1) => (
                <div key={index1}>
                    <p>
                    {
                        item.titulo ? (
                            <button
                            className={`btn btn-primary`}
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target={`#nombre-${index1}`}
                            aria-expanded='false'
                            aria-controls={`nombre-${index1}`}
                            onClick={() => setSelectedItemIndex(item.titulo)}
                            >
                            {item.titulo}
                            </button>
                        ) : (
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
                        )
                    }
                    </p>
                    {
                        item.subtitulo
                        ? item.subtitulo.map((item, index2) => (
                            <div
                                className='collapse armo-collapse'
                                id={`nombre-${index1}`}
                                key={`${index1}-${index2}`}
                            >
                                <button
                                type='button'
                                className='btn btn-secondary'
                                onClick={() => setSelectedItemIndex(item.informacionTitulo)}
                                >
                                {item.informacionTitulo}
                                </button>
                            </div>
                            ))
                        : null
                    }
                </div>
                ))
            }
          </div>
        </div>
        <div className='col-sm-8 col-12'>
          <CardArmonizacion selectedItemIndex={selectedItemIndex} dataType={dataType} />
        </div>
      </div>
    </div>
  );
};

export default ArmonizacionContable;
