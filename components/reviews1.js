import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Reviews1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="reviews1-max-width thq-section-max-width">
          <div className="reviews1-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="reviews1-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_vScRkz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="reviews1-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="reviews1-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_8vwaw1'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="reviews1-container12 thq-card">
              <div className="reviews1-container13">
                <img
                  alt="image"
                  src="/a-200h.png"
                  className="reviews1-image1"
                />
                <div className="reviews1-container14">
                  <strong className="reviews1-text12 thq-body-large">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="reviews1-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_J8I-bl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews1-text13 thq-body-small">
                {props.review1 ?? (
                  <Fragment>
                    <span className="reviews1-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cNPf2L'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews1-container15 thq-card">
              <div className="reviews1-container16">
                <img
                  alt="/m-200h.png"
                  src="/m-200h.png"
                  className="reviews1-image2"
                />
                <div className="reviews1-container17">
                  <strong className="reviews1-text14 thq-body-large">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="reviews1-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_cXoO0I'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews1-text15 thq-body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="reviews1-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5-78gN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews1-container18 thq-card">
              <div className="reviews1-container19">
                <img
                  alt="/g-200h.png"
                  src="/g-200h.png"
                  className="reviews1-image3"
                />
                <div className="reviews1-container20">
                  <strong className="reviews1-text16 thq-body-large">
                    {props.author3Name ?? (
                      <Fragment>
                        <span className="reviews1-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Pkl4W5'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews1-text17 thq-body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="reviews1-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_TYD9r5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews1-container21 thq-card">
              <div className="reviews1-container22">
                <img
                  alt="/a2-200h.png"
                  src="/a2-200h.png"
                  className="reviews1-image4"
                />
                <div className="reviews1-container23">
                  <strong className="reviews1-text18 thq-body-large">
                    {props.author4Name ?? (
                      <Fragment>
                        <span className="reviews1-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_oLNuyT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews1-text19 thq-body-small">
                {props.review4 ?? (
                  <Fragment>
                    <span className="reviews1-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RdCaf2'),
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
      <style jsx>
        {`
          .reviews1-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .reviews1-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .reviews1-text11 {
            text-align: center;
          }
          .reviews1-container12 {
            flex: 1;
            height: 304px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews1-container13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews1-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews1-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews1-text12 {
            color: #ffffff;
          }
          .reviews1-text13 {
            color: #ffffff;
            text-align: left;
          }
          .reviews1-container15 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews1-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews1-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews1-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews1-text14 {
            color: #ffffff;
          }
          .reviews1-text15 {
            color: #ffffff;
            text-align: left;
          }
          .reviews1-container18 {
            flex: 1;
            height: 230px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews1-container19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews1-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews1-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews1-text16 {
            color: #ffffff;
          }
          .reviews1-text17 {
            color: #ffffff;
            text-align: left;
          }
          .reviews1-container21 {
            flex: 1;
            height: 234px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews1-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews1-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews1-container23 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews1-text18 {
            color: #ffffff;
          }
          .reviews1-text19 {
            color: #ffffff;
            text-align: left;
          }
          .reviews1-text20 {
            display: inline-block;
          }
          .reviews1-text21 {
            display: inline-block;
          }
          .reviews1-text22 {
            display: inline-block;
          }
          .reviews1-text23 {
            display: inline-block;
          }
          .reviews1-text24 {
            display: inline-block;
          }
          .reviews1-text25 {
            display: inline-block;
          }
          .reviews1-text26 {
            display: inline-block;
          }
          .reviews1-text27 {
            display: inline-block;
          }
          .reviews1-text28 {
            display: inline-block;
          }
          .reviews1-text29 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .reviews1-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .reviews1-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .reviews1-container12 {
              width: 100%;
            }
            .reviews1-container15 {
              width: 100%;
            }
            .reviews1-container18 {
              width: 100%;
            }
            .reviews1-container21 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Reviews1.defaultProps = {
  review2: undefined,
  author4Name: undefined,
  content1: undefined,
  author2Name: undefined,
  author3Name: undefined,
  author1Name: undefined,
  review3: undefined,
  rootClassName: '',
  heading1: undefined,
  review1: undefined,
  review4: undefined,
}

Reviews1.propTypes = {
  review2: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  author2Name: PropTypes.element,
  author3Name: PropTypes.element,
  author1Name: PropTypes.element,
  review3: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  review1: PropTypes.element,
  review4: PropTypes.element,
}

export default Reviews1
