import React, {useState, useEffect} from 'react';
import './cardArmonizacion.css';
import { obtenerDatosSeleccionados, obtenerDatosSeleccionadosDisciplina } from '../../methods/methods';

const CardArmonizacion = ({ selectedItemIndex, dataType }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataType === "/Armonizacion") {
      setData(obtenerDatosSeleccionados(selectedItemIndex));
    } else {
      setData(obtenerDatosSeleccionadosDisciplina(selectedItemIndex));
    }
  }, [selectedItemIndex, dataType]);
  return (
    <div className='container'>
      <div className='row card-content-anio'>
          {
            data.map((item, index) => (
                <div key={index} className='col-sm-6 col-12'>
                  <div className='card-body card'>
                    <h5>{item.anio}</h5>
                    {
                      item.trimestre.map((trimestre, index2) => (
                        <div key={index2} className='card_trimestre'>
                          <p>{trimestre.trimestreNombre}
                          {
                            trimestre.trimestreContenido.map((contenido) => (
                              <div>
                                {
                                  contenido.excel ?
                                    <span className='badge bg-secondary span-excel'>
                                      <a href={contenido.excel} target="_blank">Excel</a>
                                    </span> : null
                                }
                                {
                                  contenido.pdf ?
                                    <span className='badge bg-secondary span-pdf'>
                                      <a href={contenido.pdf} target="_blank" >PDF</a>
                                    </span> : null
                                }
                              </div>
                            ))
                          }
                          </p>
                        </div>
                      ))
                    }
                  </div>
                </div>
            ))
          }
      </div>
    </div>
  );
}

export default CardArmonizacion;
