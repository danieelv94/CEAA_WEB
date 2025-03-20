import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './transparencia.css';
import { transparencia_item } from '../../json/transparenciaItem';

const Transparencia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='container transparencia-container container-mh'>
        <div className='row'>
            <div className='col-12'>
                <div className='transparencia_title'>
                    <h1>Transparencia</h1>
                </div>
            </div>
        </div>
        <div className='row'>
            {
                transparencia_item.map((item, index)=>(
                    <div key={ index } className='col-md-4 col-sm-6 col-12 transparencia_item'>
                        <Link to={ item.transparencia_item_url }>{ item.transparencia_item_nombre }</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Transparencia