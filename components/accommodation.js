import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Accommodation = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.accommodationId}
        className={`accommodation-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="accommodation-max-width thq-section-max-width">
          <div className="accommodation-section-title">
            <h2 className="accommodation-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="accommodation-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zURzpa'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
          </div>
          <div className="accommodation-container10">
            <div className="accommodation-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="accommodation-slider swiper"
              >
                <div
                  data-thq="slider-wrapper"
                  className="accommodation-slider-wrapper swiper-wrapper"
                >
                  <div
                    data-thq="slider-slide"
                    className="accommodation-slider-slide1 swiper-slide"
                  >
                    <div className="accommodation-container11">
                      <img
                        alt="/kitchen-1400w.jpg"
                        src="/kitchen-1400w.jpg"
                        className="accommodation-image1 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation-container12">
                      <img
                        alt="/room-1400w.jpg"
                        src="/room-1400w.jpg"
                        className="accommodation-image2 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation-slider-slide2 swiper-slide"
                  >
                    <div className="accommodation-container13">
                      <img
                        alt="/dining-1400w.jpg"
                        src="/dining-1400w.jpg"
                        className="accommodation-image31 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation-container14">
                      <img
                        alt="/table-1400w.jpg"
                        src="/table-1400w.jpg"
                        className="accommodation-image41 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation-slider-slide3 swiper-slide"
                  >
                    <div className="accommodation-container15">
                      <img
                        alt="/2-1400w.png"
                        src="/2-1400w.png"
                        className="accommodation-image32 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation-container16">
                      <img
                        alt="/4-1400w.png"
                        src="/4-1400w.png"
                        className="accommodation-image42 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation-slider-slide4 swiper-slide"
                  >
                    <div className="accommodation-container17">
                      <img
                        alt="/untitled%20design-1400w.png"
                        src="/untitled%20design-1400w.png"
                        className="accommodation-image51 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation-container18">
                      <img
                        alt="/3-1400w.png"
                        src="/3-1400w.png"
                        className="accommodation-image61 thq-img-ratio-4-3"
                      />
                    </div>
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="accommodation-slider-slide5 swiper-slide"
                  >
                    <div className="accommodation-container19">
                      <img
                        alt="/bed3-1400w.jpg"
                        src="/bed3-1400w.jpg"
                        className="accommodation-image52 thq-img-ratio-4-3"
                      />
                    </div>
                    <div className="accommodation-container20">
                      <img
                        alt="/hot%20tub-1400w.jpg"
                        src="/hot%20tub-1400w.jpg"
                        className="accommodation-image62 thq-img-ratio-4-3"
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
                  className="accommodation-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
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
          .accommodation-gallery3 {
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
          .accommodation-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .accommodation-section-title {
            gap: 24px;
            width: auto;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .accommodation-text1 {
            text-align: center;
          }
          .accommodation-container10 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .accommodation-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .accommodation-slider {
            width: 100%;
            height: 600px;
            display: inline-block;
          }
          .accommodation-slider-wrapper {
            width: 100%;
          }
          .accommodation-slider-slide1 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation-container11 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-container12 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-slider-slide2 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation-container13 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image31 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-container14 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image41 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-slider-slide3 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation-container15 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image32 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-container16 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image42 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-slider-slide4 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation-container17 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image51 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-container18 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image61 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-slider-slide5 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            height: calc(100% - 20px);
            display: flex;
          }
          .accommodation-container19 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image52 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .accommodation-container20 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accommodation-image62 {
            width: 100%;
            height: 100%;
            display: block;
            align-self: flex-start;
            object-fit: cover;
          }
          .accommodation-slider-pagination {
            display: block;
          }
          .accommodation-text2 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .accommodation-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .accommodation-section-title {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .accommodation-slider-slide1 {
              flex-direction: column;
            }
            .accommodation-container11 {
              height: calc(50% - 8px);
            }
            .accommodation-container12 {
              height: calc(50% - 8px);
            }
            .accommodation-slider-slide2 {
              flex-direction: column;
            }
            .accommodation-container13 {
              height: calc(50% - 8px);
            }
            .accommodation-container14 {
              height: calc(50% - 8px);
            }
            .accommodation-slider-slide3 {
              flex-direction: column;
            }
            .accommodation-container15 {
              height: calc(50% - 8px);
            }
            .accommodation-container16 {
              height: calc(50% - 8px);
            }
            .accommodation-slider-slide4 {
              flex-direction: column;
            }
            .accommodation-container17 {
              height: calc(50% - 8px);
            }
            .accommodation-container18 {
              height: calc(50% - 8px);
            }
            .accommodation-slider-slide5 {
              flex-direction: column;
            }
            .accommodation-container19 {
              height: calc(50% - 8px);
            }
            .accommodation-container20 {
              height: calc(50% - 8px);
            }
          }
          @media (max-width: 479px) {
            .accommodation-slider {
              height: 440px;
            }
          }
        `}
      </style>
    </>
  )
}

Accommodation.defaultProps = {
  heading1: undefined,
  rootClassName: '',
  accommodationId: '',
}

Accommodation.propTypes = {
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
  accommodationId: PropTypes.string,
}

export default Accommodation
