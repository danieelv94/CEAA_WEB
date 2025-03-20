import React, { useEffect, useState } from 'react';
import './carousel.css';
import Search from '../Search/Search';

const Carousel = ({ bannerData, search, name }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    if(bannerData ){
      setImages(bannerData);
    }
  },[]);

  return (
      <div id={name} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            images.map(( item,index )=>(
              <div key={ index } className={ index >= 1 ? "carousel-item" : "carousel-item active" }>
                <a href={ item.url } target="_blank">
                  <div className="img-carousel d-block w-100" style={{ backgroundImage: `url("${ item.imagen }")` }} alt="First slide">
                  </div>
                </a>
              </div>
            ))
          }
          {
            search ? <Search /> : null
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#"+ name} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#"+ name} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  )
}

export default Carousel