import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Facilities = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`facilities-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="facilities-max-width">
          <div className="facilities-section-title">
            <h2 className="facilities-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="facilities-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ux49M5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="facilities-container1">
            <div className="facilities-content">
              <div className="facilities-container2">
                <img
                  alt="/hot%20tub-1500w.jpg"
                  src="/hot%20tub-1500w.jpg"
                  className="facilities-image1 thq-img-ratio-1-1"
                />
                <img
                  alt="/small%20terrace-1500w.jpg"
                  src="/small%20terrace-1500w.jpg"
                  className="facilities-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="facilities-container3">
                <img
                  alt="/garden3-1500w.jpg"
                  src="/garden3-1500w.jpg"
                  className="facilities-image3 thq-img-ratio-4-3"
                />
                <img
                  alt="/external/terrace-1500w.jpg"
                  src="/external/terrace-1500w.jpg"
                  className="facilities-image4 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/garden1-1500w.jpg"
                  src="/external/garden1-1500w.jpg"
                  className="facilities-image5 thq-img-ratio-4-3"
                />
              </div>
              <div className="facilities-container4">
                <img
                  alt="/1-1500w.png"
                  src="/1-1500w.png"
                  className="facilities-image6 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/img_1520-1500w.jpg"
                  src="/external/img_1520-1500w.jpg"
                  className="facilities-image7 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .facilities-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .facilities-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .facilities-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .facilities-text1 {
            text-align: center;
          }
          .facilities-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .facilities-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .facilities-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-image1 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities-image2 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-image3 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .facilities-image4 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities-image5 {
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          .facilities-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .facilities-image6 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities-image7 {
            width: 100%;
            height: 440px;
            object-fit: cover;
          }
          .facilities-text2 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .facilities-content {
              align-items: center;
              flex-direction: column;
            }
            .facilities-container2 {
              width: 100%;
            }
            .facilities-image1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .facilities-container3 {
              width: 100%;
            }
            .facilities-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .facilities-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Facilities.defaultProps = {
  heading1: undefined,
  rootClassName: '',
}

Facilities.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Facilities
