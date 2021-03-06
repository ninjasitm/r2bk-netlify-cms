import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom';

const ServiceGrid = ({ gridItems }) => (
  <div className="row is-multiline justify-content-center">
    {gridItems.map((service, key) => (
        <div key={key} className="col-lg-6 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <Zoom>
                <div>
                  <i className={`fa fa-4x fa-${service.icon} text-primary mb-3 sr-icons`}></i>
                  <h3 className="mb-3">{service.title}</h3>
                  <p className="text-muted mb-0">{service.text}</p>
                </div>
              </Zoom>
            </div>
        </div>
    ))}
  </div>
)

ServiceGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  )
}

export default ServiceGrid
