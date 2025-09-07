import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Review = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="review-max-width thq-section-max-width">
          <div className="review-section-title">
            <h2 className="review-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="review-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_58AbnM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="review-subtitle thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="review-text7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3kNEGl'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="review-container thq-flex-row">
            <div className="review-content1 thq-flex-column">
              <div className="review-stars1">
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
              <div className="review-avatar1">
                <img
                  alt="/external/2737066-200h-200h.png"
                  src="/external/2737066-200h-200h.png"
                  className="review-avatar-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="review-avatar-content1">
                  <span className="review-text1 thq-body-small">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="review-text8">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mlDde-'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="review-content2 thq-flex-column">
              <div className="review-stars2">
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
              <div className="review-avatar2">
                <img
                  alt="/external/timely-communication-200h-200h.png"
                  src="/external/timely-communication-200h-200h.png"
                  className="review-avatar-image2 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="review-avatar-content2">
                  <span className="review-text2 thq-body-small">
                    {props.author1Name1 ?? (
                      <Fragment>
                        <span className="review-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fxmhHu'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="review-content3 thq-flex-column">
              <div className="review-stars3">
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
              <div className="review-avatar3">
                <img
                  alt="/external/756488-200h-200h.png"
                  src="/external/756488-200h-200h.png"
                  className="review-avatar-image3 thq-img-round"
                />
                <div className="review-avatar-content3">
                  <span className="review-text3 thq-body-small">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="review-text5">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SWtz-V'),
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
          .review-max-width {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .review-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .review-title {
            width: 100%;
            text-align: center;
          }
          .review-subtitle {
            text-align: center;
          }
          .review-container {
            gap: var(--dl-layout-space-twounits);
            width: auto;
          }
          .review-content1 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-stars1 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review-avatar1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-avatar-image1 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review-avatar-content1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review-text1 {
            font-style: normal;
            font-weight: 600;
          }
          .review-content2 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-stars2 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review-avatar2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-avatar-image2 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review-avatar-content2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review-text2 {
            font-style: normal;
            font-weight: 600;
          }
          .review-content3 {
            gap: var(--dl-layout-space-twounits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-stars3 {
            fill: var(--dl-color-theme-primary1);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .review-avatar3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .review-avatar-image3 {
            width: 56px;
            height: 56px;
            object-fit: cover;
          }
          .review-avatar-content3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .review-text3 {
            font-style: normal;
            font-weight: 600;
          }
          .review-text4 {
            display: inline-block;
          }
          .review-text5 {
            display: inline-block;
          }
          .review-text6 {
            display: inline-block;
          }
          .review-text7 {
            display: inline-block;
          }
          .review-text8 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .review-container {
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .review-max-width {
              padding: var(--dl-layout-space-threeunits);
            }
            .review-section-title {
              width: 100%;
              max-width: 800px;
            }
            .review-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .review-max-width {
              padding: var(--dl-layout-space-oneandhalfunits);
            }
            .review-avatar1 {
              flex-direction: column;
            }
            .review-avatar-content1 {
              align-items: center;
              justify-content: center;
            }
            .review-avatar2 {
              flex-direction: column;
            }
            .review-avatar-content2 {
              align-items: center;
              justify-content: center;
            }
            .review-avatar3 {
              flex-direction: column;
            }
            .review-avatar-content3 {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Review.defaultProps = {
  author1Name1: undefined,
  author2Name: undefined,
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  author1Name: undefined,
}

Review.propTypes = {
  author1Name1: PropTypes.element,
  author2Name: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  author1Name: PropTypes.element,
}

export default Review
