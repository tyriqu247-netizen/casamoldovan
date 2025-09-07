import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Facilities1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`facilities1-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="facilities1-max-width">
          <div className="facilities1-section-title">
            <h2 className="facilities1-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="facilities1-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Z9pHty'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="facilities1-container1">
            <div className="facilities1-content">
              <div className="facilities1-container2">
                <img
                  alt="/hot%20tub-1500w.jpg"
                  src="/hot%20tub-1500w.jpg"
                  className="facilities1-image1 thq-img-ratio-1-1"
                />
                <img
                  alt="/small%20terrace-1500w.jpg"
                  src="/small%20terrace-1500w.jpg"
                  className="facilities1-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="facilities1-container3">
                <img
                  alt="/garden3-1500w.jpg"
                  src="/garden3-1500w.jpg"
                  className="facilities1-image3 thq-img-ratio-4-3"
                />
                <img
                  alt="/external/terrace-1500w.jpg"
                  src="/external/terrace-1500w.jpg"
                  className="facilities1-image4 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/garden1-1500w.jpg"
                  src="/external/garden1-1500w.jpg"
                  className="facilities1-image5 thq-img-ratio-4-3"
                />
              </div>
              <div className="facilities1-container4">
                <img
                  alt="/1-1500w.png"
                  src="/1-1500w.png"
                  className="facilities1-image6 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/img_1520-1500w.jpg"
                  src="/external/img_1520-1500w.jpg"
                  className="facilities1-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .facilities1-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .facilities1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .facilities1-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .facilities1-text1 {
            text-align: center;
          }
          .facilities1-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .facilities1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .facilities1-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities1-image1 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities1-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities1-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities1-image3 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .facilities1-image4 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities1-image5 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .facilities1-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities1-image6 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities1-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities1-text2 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .facilities1-content {
              align-items: center;
              flex-direction: column;
            }
            .facilities1-container2 {
              width: 100%;
            }
            .facilities1-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .facilities1-container3 {
              width: 100%;
            }
            .facilities1-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .facilities1-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Facilities1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
}

Facilities1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Facilities1
