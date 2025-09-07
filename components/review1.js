import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Review1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="review1-max-width thq-section-max-width">
          <div className="review1-section-title">
            <h2 className="review1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="review1-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6leL28'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="review1-subtitle thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="review1-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zxoGEJ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="review1-container thq-flex-row">
            <div className="review1-content1 thq-flex-column">
              <div className="review1-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <div className="review1-avatar1">
                <img
                  alt="/external/2737066-200h-200h.png"
                  src="/external/2737066-200h-200h.png"
                  className="review1-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="review1-avatar-content1">
                  <span className="review1-text1 thq-body-small">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="review1-text8">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gP_Ayl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="review1-content2 thq-flex-column">
              <div className="review1-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <div className="review1-avatar2">
                <img
                  alt="/external/timely-communication-200h-200h.png"
                  src="/external/timely-communication-200h-200h.png"
                  className="review1-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="review1-avatar-content2">
                  <span className="review1-text2 thq-body-small">
                    {props.author1Name1 ?? (
                      <Fragment>
                        <span className="review1-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_l3_c0v'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="review1-content3 thq-flex-column">
              <div className="review1-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <div className="review1-avatar3">
                <img
                  alt="/external/756488-200h-200h.png"
                  src="/external/756488-200h-200h.png"
                  className="review1-avatar-image3 thq-img-round"
                />
                <div className="review1-avatar-content3">
                  <span className="review1-text3 thq-body-small">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="review1-text7">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_sKplfV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .review1-max-width {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .review1-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .review1-title {
            width: 100%;
            text-align: center;
          }
          .review1-subtitle {
            text-align: center;
          }
          .review1-container {
            gap: var(--dl-layout-space-twounits);
            width: auto;
          }
          .review1-content1 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review1-avatar1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review1-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review1-text1 {
            font-style: normal;
            font-weight: 600;
          }
          .review1-content2 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review1-avatar2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review1-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review1-text2 {
            font-style: normal;
            font-weight: 600;
          }
          .review1-content3 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review1-avatar3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review1-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review1-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review1-text3 {
            font-style: normal;
            font-weight: 600;
          }
          .review1-text4 {
            display: inline-block;
          }
          .review1-text5 {
            display: inline-block;
          }
          .review1-text6 {
            display: inline-block;
          }
          .review1-text7 {
            display: inline-block;
          }
          .review1-text8 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .review1-container {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .review1-max-width {
              padding: var(--dl-layout-space-threeunits);
            }
            .review1-section-title {
              width: 100%;
              max-width: 800px;
            }
            .review1-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .review1-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .review1-avatar1 {
              flex-direction: column;
            }
            .review1-avatar-content1 {
              align-items: center;
              justify-content: center;
            }
            .review1-avatar2 {
              flex-direction: column;
            }
            .review1-avatar-content2 {
              align-items: center;
              justify-content: center;
            }
            .review1-avatar3 {
              flex-direction: column;
            }
            .review1-avatar-content3 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Review1.defaultProps = {
  rootClassName: '',
  author1Name1: undefined,
  heading1: undefined,
  content1: undefined,
  author2Name: undefined,
  author1Name: undefined,
}

Review1.propTypes = {
  rootClassName: PropTypes.string,
  author1Name1: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Review1
