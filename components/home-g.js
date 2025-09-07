import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeG = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-g-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="home-g-max-width thq-section-max-width">
          <div className="home-g-section-title">
            <h2 className="home-g-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-g-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__bxs6G'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="home-g-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-g-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dQyRoE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="home-g-container1">
            <div className="home-g-content">
              <div className="home-g-container2">
                <div className="home-g-container3">
                  <img
                    alt="/garden3-1400w.jpg"
                    src="/garden3-1400w.jpg"
                    className="home-g-image1 thq-img-ratio-4-3"
                  />
                </div>
                <img
                  alt="/1-1400w.jpg"
                  src="/1-1400w.jpg"
                  className="home-g-image2 thq-img-ratio-1-1"
                />
              </div>
              <div className="home-g-container4">
                <img
                  alt="/external/terrace-1500w-1400w.jpg"
                  src="/external/terrace-1500w-1400w.jpg"
                  className="home-g-image3 thq-img-ratio-1-1"
                />
                <img
                  alt="/external/img_1504-1400w-1400w.jpg"
                  src="/external/img_1504-1400w-1400w.jpg"
                  className="home-g-image4 thq-img-ratio-1-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-g-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-g-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-g-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .home-g-text1 {
            text-align: center;
          }
          .home-g-text2 {
            text-align: center;
          }
          .home-g-container1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-g-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .home-g-container2 {
            gap: HalfUnits;
            flex: 1;
            width: 100%;
            height: 902px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-g-container3 {
            width: 100%;
            height: 40%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .home-g-image1 {
            width: 100%;
            height: 100%;
            max-width: 100%;
            align-self: center;
            max-height: 700px;
          }
          .home-g-image2 {
            width: 100%;
            height: 60%;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g-container4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-g-image3 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g-image4 {
            width: 100%;
            height: 440px;
            max-height: 700px;
            object-fit: cover;
          }
          .home-g-text3 {
            display: inline-block;
          }
          .home-g-text4 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-g-content {
              align-items: center;
              flex-direction: column;
            }
            .home-g-container2 {
              height: auto;
            }
            .home-g-image1 {
              flex: 0 0 auto;
              width: 100%;
              height: 100%;
            }
            .home-g-image2 {
              height: 100%;
            }
            .home-g-container4 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-g-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-g-image2 {
              max-height: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

HomeG.defaultProps = {
  rootClassName: '',
  content1: undefined,
  heading1: undefined,
}

HomeG.propTypes = {
  rootClassName: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default HomeG
