import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AppComponent = (props) => {
  return (
    <>
      <div className={`component-container ${props.rootClassName} `}>
        <iframe
          src="https://www.google.com/maps?q=Casa Moldovan- Colțișorul meu de rai Ocna Sugatag Maramures&amp;output=embed"
          address="Casa Moldovan- Colțișorul meu de rai Ocna Sugatag Maramures"
          className="component-google-maps"
        ></iframe>
      </div>
      <style jsx>
        {`
          .component-container {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .component-google-maps {
            width: 982px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .componentroot-class-name {
            align-self: center;
          }
          @media (max-width: 991px) {
            .component-google-maps {
              width: 670px;
              height: 206px;
            }
          }
          @media (max-width: 767px) {
            .component-google-maps {
              width: 437px;
              height: 192px;
            }
          }
          @media (max-width: 479px) {
            .component-google-maps {
              width: 372px;
              height: auto;
              align-items: center;
              padding-right: var(--dl-layout-space-oneandhalfunits);
              flex-direction: row;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
