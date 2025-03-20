import React, { useEffect } from 'react';
import { rubrosHistoricos } from '../../json/rubrosHistoricos';
import './rubroshistoricos.css';

const RubrosHistoricos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='container'>
        <div className='row'>
            <div>
                <h3 className='title'>Información Histórica</h3>
                <hr className='hr-gob'/>
            </div>
                {
                rubrosHistoricos.map((item, index)=>(
                    <div key={ index } className='col-md-3 col-sm-6 col-12'>
                        <div className='card_container_historicos'>
                            <div className='card_anio'>
                                <h5>{ item.anio }</h5>
                                <h6>{ item.descripcion }</h6>
                                {
                                    item.trimestres.map((trim, index)=>(
                                        <div key={ index } className='card_trimestre'>
                                            <p>{ trim.trimestre } <span className="badge bg-secondary">
                                                <a href={ trim.url } target="_blank">.zip</a></span>
                                            </p> 
                                        </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                    ))
                }
        </div>
    </div>
  )
}

export default RubrosHistoricos