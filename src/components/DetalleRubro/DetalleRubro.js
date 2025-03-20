import React from 'react';
import './detallerubro.css';
import { rubros } from '../../json/rubros';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DetalleRubro = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { nombre } = useParams();
  const rubro = rubros.find((rubro) => rubro.nombre === nombre);

  return (
    <div className='container container_detalle_rubro'>
      <div className='row'>
        <div className='col-12'>
          <div className='rubro_titulo'>
            <h3 className='title'>{rubro.nombre}</h3>
            <hr className='hr-gob' />
          </div>
        </div>
      </div>
      <div className='row'>
        {
          rubro.formatos.map((formato, index) => {
            const urlXLSX = "https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/CEAA/dir1/xlsx/a69_" + formato.xlsx + "CEAA.xlsx";
            const urlHTML = "https://transparenciadocs.hidalgo.gob.mx/ENTIDADES/CEAA/dir1/htm/a69_" + formato.html + "CEAA.htm";
            return (
              <div key={ index } className='col-md-4 col-12'>
                <div className='rubro_container_detalle'>
                  <div className='detalle_rubro_nombre'>
                    <h5>{ formato.nombre }</h5>
                  </div>
                  <div className='detalle_rubro_enlaces'>
                    
                    <a href={ formato.xlsx_liga ? formato.xlsx_liga : urlXLSX } target="_blank">XLSX</a>
                    <a href={ formato.htm_liga ? formato.htm_liga : urlHTML } target="_blank">Ver Tabla</a>
                    
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default DetalleRubro;
