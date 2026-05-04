import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container-footer'>
      <div className='footer-background-overlay'></div>

      <div className='container-fluid position-relative'>

        {/* ===== PRIMERA FILA ===== */}
        <div className='row first-row'>

          <div className='col-md-8 col-lg-9 col-12'>
            <div className='footer_logo_numbers'>

              <div className='footer_logo'>
                <img
                  src='https://cdn.hidalgo.gob.mx/gobierno/images/logos/logo_gob.png'
                  alt='Logo Gobierno de Hidalgo'
                />
              </div>

              <div className='footer_numbers'>

                <div className='emergency-card'>
                  <div className='emergency-icon'>
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className='emergency-content'>
                    <h4>911</h4>
                    <span>Emergencia</span>
                  </div>
                </div>

                <div className='emergency-card'>
                  <div className='emergency-icon'>
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div className='emergency-content'>
                    <h4>089</h4>
                    <span>Denuncia Anónima</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ===== CONTACTO ===== */}
          <div className='col-md-4 col-lg-3 col-12'>
            <div className='footer_contacto'>

              <h6 className='privacy-link'>
                <a
                  href='https://gobierno.hidalgo.gob.mx/AvisoPrivacidad'
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-shield-halved"></i> Aviso de privacidad
                </a>
              </h6>

              <h6 className='contact-title'>Contacto:</h6>

              <ul className='contact-list'>

                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <a href="https://maps.app.goo.gl/2xpq9Nm455BS2mz46" target="_blank">Camino Real de La Plata 336, Zona Plateada, 42084 Pachuca de Soto, Hgo.</a>

                </li>

                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>
                    <a href="tel:+527717158390">771 715 8390</a>
                  </span>
                  <span> / 93 al 96</span>
                </li>

                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:ceaa.direcciongeneral@hidalgo.gob.mx">
                    ceaa.direcciongeneral@hidalgo.gob.mx
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div>

        <hr className='footer-divider' />

        {/* ===== SEGUNDA FILA ===== */}
        <div className='row second-row'>

          <div className='col-sm-9 col-12 d-flex align-items-center'>
            <p className='copyright-text'>
              Copyrights © {currentYear} Todos los derechos reservados por Hidalgo de la Transformación
            </p>
          </div>

          <div className='col-sm-3 col-12'>
            <div className='footer_sociales'>

              <a
                href='https://www.facebook.com/gobhidalgo'
                target="_blank"
                rel="noreferrer"
                className='social-icon bg-facebook'
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href='https://twitter.com/gobiernohidalgo'
                target="_blank"
                rel="noreferrer"
                className='social-icon bg-twitter'
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Footer;