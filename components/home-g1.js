import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeG1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-g1-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="home-g1-max-width thq-section-max-width">
          <div className="home-g1-section-title">
            <h2 className="home-g1-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-g1-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_njwmtF'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="home-g1-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-g1-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_inGSun'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="home-g1-container1">
            <div className="home-g1-content">
              <div className="home-g1-container2">
                <div className="home-g1-container3">
                  <img
                    alt="/garden3-1400w.jpg"
                    src="/garden3-1400w.jpg"
                    className="home-g1-image1 thq-img-ratio-4-3"
                  />
                </div>
                <img
                  alt="/1-1400w.jpg"
                  src="/1-1400w.jpg"
                  className="home-g1-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="home-g1-container4">
                <img
                  alt="/external/terrace-1500w-1400w.jpg"
                  src="/external/terrace-1500w-1400w.jpg"
                  className="home-g1-image3 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/img_1504-1400w-1400w.jpg"
                  src="/external/img_1504-1400w-1400w.jpg"
                  className="home-g1-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-g1-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-g1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-g1-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-g1-text1 {
            text-align: center;
          }
          .home-g1-text2 {
            text-align: center;
          }
          .home-g1-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-g1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-g1-container2 {
            gap: HalfUnits;
            flex: 1;
            width: 100%;
            height: 902px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-g1-container3 {
            width: 100%;
            height: 40%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .home-g1-image1 {
            width: 100%;
            height: 100%;
            display: block;
            max-width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .home-g1-image2 {
            width: 100%;
            height: 60%;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g1-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-g1-image3 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g1-image4 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g1-text3 {
            display: inline-block;
          }
          .home-g1-text4 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .home-g1-content {
              align-items: center;
              flex-direction: column;
            }
            .home-g1-container2 {
              height: auto;
            }
            .home-g1-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 100%;
            }
            .home-g1-image2 {
              height: 100%;
            }
            .home-g1-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-g1-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-g1-image2 {
              max-height: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

HomeG1.defaultProps = {
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

HomeG1.propTypes = {
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default HomeG1
