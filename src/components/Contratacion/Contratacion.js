import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './contratacion.css';
import { transparencia_item } from '../../json/contratacionItem';

const Transparencia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='container contratacion-container container-mh'>
        <div className='row'>
            <div className='col-12'>
                <div className='contratacion_title'>
                    <h1>Contratacion</h1>
                </div>
            </div>
        </div>
        <div className='row'>
            {
                contratacion_item.map((item, index)=>(
                    <div key={ index } className='col-md-4 col-sm-6 col-12 contratacion_item'>
                        <Link to={ item.contratacion_item_url }>{ item.contratacion_item_nombre }</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Contratacion