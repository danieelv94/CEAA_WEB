import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './transparencia.css';
import { labagua_item} from '../../json/labaguaitem';

const Labagua = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className='container transparencia-container container-mh'>
        <div className='row'>
            <div className='col-12'>
                <div className='transparencia_title'>
                    <h1>Laboratoriode Calidad del Agua</h1>
                </div>
            </div>
        </div>
        <div className='row'>
            {
                labagua_item.map((item, index)=>(
                    <div key={ index } className='col-md-4 col-sm-6 col-12 transparencia_item'>
                        <Link to={ item.labagua_item_url }>{ item.labagua_item_nombre }</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Labagua