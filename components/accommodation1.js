import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Accommodation1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.accommodationSection1Id}
        className={`accommodation1-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="accommodation1-max-width thq-section-max-width">
          <div className="accommodation1-section-title">
            <h2 className="accommodation1-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="accommodation1-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_g5jk4E'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="accommodation1-container10">
            <div className="accommodation1-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="accommodation1-slider swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="accommodation1-slider-wrapper swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="accommodation1-slider-slide1 swiper-slide"
                  >
                    <div className="accommodation1-container11">
                      <img
                        alt="/kitchen-1400w.jpg"
                        src="/kitchen-1400w.jpg"
                        className="accommodation1-image1 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation1-container12">
                      <img
                        alt="/room-1400w.jpg"
                        src="/room-1400w.jpg"
                        className="accommodation1-image2 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation1-slider-slide2 swiper-slide"
                  >
                    <div className="accommodation1-container13">
                      <img
                        alt="/dining-1400w.jpg"
                        src="/dining-1400w.jpg"
                        className="accommodation1-image31 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation1-container14">
                      <img
                        alt="/table-1400w.jpg"
                        src="/table-1400w.jpg"
                        className="accommodation1-image41 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation1-slider-slide3 swiper-slide"
                  >
                    <div className="accommodation1-container15">
                      <img
                        alt="/2-1400w.png"
                        src="/2-1400w.png"
                        className="accommodation1-image32 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation1-container16">
                      <img
                        alt="/4-1400w.png"
                        src="/4-1400w.png"
                        className="accommodation1-image42 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation1-slider-slide4 swiper-slide"
                  >
                    <div className="accommodation1-container17">
                      <img
                        alt="/untitled%20design-1400w.png"
                        src="/untitled%20design-1400w.png"
                        className="accommodation1-image51 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation1-container18">
                      <img
                        alt="/3-1400w.png"
                        src="/3-1400w.png"
                        className="accommodation1-image61 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation1-slider-slide5 swiper-slide"
                  >
                    <div className="accommodation1-container19">
                      <img
                        alt="/bed3-1400w.jpg"
                        src="/bed3-1400w.jpg"
                        className="accommodation1-image52 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation1-container20">
                      <img
                        alt="/hot%20tub-1400w.jpg"
                        src="/hot%20tub-1400w.jpg"
                        className="accommodation1-image62 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="accommodation1-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accommodation1-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .accommodation1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .accommodation1-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accommodation1-text1 {
            text-align: center;
          }
          .accommodation1-container10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .accommodation1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .accommodation1-slider {
            width: 100%;
            height: 600px;
            display: inline-block;
          }
          .accommodation1-slider-wrapper {
            width: 100%;
          }
          .accommodation1-slider-slide1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation1-container11 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-container12 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-slider-slide2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation1-container13 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image31 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-container14 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image41 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-slider-slide3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation1-container15 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image32 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-container16 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image42 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-slider-slide4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation1-container17 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image51 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-container18 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image61 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-slider-slide5 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation1-container19 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image52 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation1-container20 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation1-image62 {
            width: 100%;
            height: 100%;
            display: block;
            align-self: flex-start;
            object-fit: cover;
          }
          .accommodation1-slider-pagination {
            display: block;
          }
          .accommodation1-text2 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .accommodation1-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .accommodation1-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .accommodation1-slider-slide1 {
              flex-direction: column;
            }
            .accommodation1-container11 {
              height: calc(50% - 8px);
            }
            .accommodation1-container12 {
              height: calc(50% - 8px);
            }
            .accommodation1-slider-slide2 {
              flex-direction: column;
            }
            .accommodation1-container13 {
              height: calc(50% - 8px);
            }
            .accommodation1-container14 {
              height: calc(50% - 8px);
            }
            .accommodation1-slider-slide3 {
              flex-direction: column;
            }
            .accommodation1-container15 {
              height: calc(50% - 8px);
            }
            .accommodation1-container16 {
              height: calc(50% - 8px);
            }
            .accommodation1-slider-slide4 {
              flex-direction: column;
            }
            .accommodation1-container17 {
              height: calc(50% - 8px);
            }
            .accommodation1-container18 {
              height: calc(50% - 8px);
            }
            .accommodation1-slider-slide5 {
              flex-direction: column;
            }
            .accommodation1-container19 {
              height: calc(50% - 8px);
            }
            .accommodation1-container20 {
              height: calc(50% - 8px);
            }
          }
          @media (max-width: 479px) {
            .accommodation1-slider {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Accommodation1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  accommodationSection1Id: '',
}

Accommodation1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  accommodationSection1Id: PropTypes.string,
}

export default Accommodation1
