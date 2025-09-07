import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Reviews = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className={`thq-section-padding ${props.rootClassName} `}>
        <div className="reviews-max-width thq-section-max-width">
          <div className="reviews-container10">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="reviews-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lzxZ9z'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="reviews-text11 thq-body-small">
              {props.content1 ?? (
                <Fragment>
                  <span className="reviews-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_K9NJVE'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="reviews-container12 thq-card">
              <div className="reviews-container13">
                <img alt="image" src="/a-200h.png" className="reviews-image1" />
                <div className="reviews-container14">
                  <strong className="reviews-text12 thq-body-large">
                    {props.author1Name ?? (
                      <Fragment>
                        <span className="reviews-text23">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_2RyOc9'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews-text13 thq-body-small">
                {props.review1 ?? (
                  <Fragment>
                    <span className="reviews-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ln7dTp'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews-container15 thq-card">
              <div className="reviews-container16">
                <img
                  alt="/m-200h.png"
                  src="/m-200h.png"
                  className="reviews-image2"
                />
                <div className="reviews-container17">
                  <strong className="reviews-text14 thq-body-large">
                    {props.author2Name ?? (
                      <Fragment>
                        <span className="reviews-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_6B8GFq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews-text15 thq-body-small">
                {props.review2 ?? (
                  <Fragment>
                    <span className="reviews-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_NPsOO6'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews-container18 thq-card">
              <div className="reviews-container19">
                <img
                  alt="/g-200h.png"
                  src="/g-200h.png"
                  className="reviews-image3"
                />
                <div className="reviews-container20">
                  <strong className="reviews-text16 thq-body-large">
                    {props.author3Name ?? (
                      <Fragment>
                        <span className="reviews-text21">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_5pK8rW'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews-text17 thq-body-small">
                {props.review3 ?? (
                  <Fragment>
                    <span className="reviews-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8ZfGsJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="reviews-container21 thq-card">
              <div className="reviews-container22">
                <img
                  alt="/a2-200h.png"
                  src="/a2-200h.png"
                  className="reviews-image4"
                />
                <div className="reviews-container23">
                  <strong className="reviews-text18 thq-body-large">
                    {props.author4Name ?? (
                      <Fragment>
                        <span className="reviews-text24">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pfX4tG'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </strong>
                </div>
              </div>
              <span className="reviews-text19 thq-body-small">
                {props.review4 ?? (
                  <Fragment>
                    <span className="reviews-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_A6hgzA'),
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
          .reviews-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .reviews-container10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-layout-space-fourunits);
            flex-direction: column;
          }
          .reviews-text11 {
            text-align: center;
          }
          .reviews-container12 {
            flex: 1;
            height: 304px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews-container13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews-image1 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews-text12 {
            color: #ffffff;
          }
          .reviews-text13 {
            color: #ffffff;
            text-align: left;
          }
          .reviews-container15 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews-container16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews-image2 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews-container17 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews-text14 {
            color: #ffffff;
          }
          .reviews-text15 {
            color: #ffffff;
            text-align: left;
          }
          .reviews-container18 {
            flex: 1;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews-container19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews-image3 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews-container20 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews-text16 {
            color: #ffffff;
          }
          .reviews-text17 {
            color: #ffffff;
            text-align: left;
          }
          .reviews-container21 {
            flex: 1;
            height: 234px;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #68aa5f;
          }
          .reviews-container22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .reviews-image4 {
            width: var(--dl-layout-size-small);
            height: var(--dl-layout-size-small);
            object-fit: cover;
            border-radius: var(--dl-layout-radius-round);
          }
          .reviews-container23 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .reviews-text18 {
            color: #ffffff;
          }
          .reviews-text19 {
            color: #ffffff;
            text-align: left;
          }
          .reviews-text20 {
            display: inline-block;
          }
          .reviews-text21 {
            display: inline-block;
          }
          .reviews-text22 {
            display: inline-block;
          }
          .reviews-text23 {
            display: inline-block;
          }
          .reviews-text24 {
            display: inline-block;
          }
          .reviews-text25 {
            display: inline-block;
          }
          .reviews-text26 {
            display: inline-block;
          }
          .reviews-text27 {
            display: inline-block;
          }
          .reviews-text28 {
            display: inline-block;
          }
          .reviews-text29 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .reviews-container10 {
              margin-bottom: var(--dl-layout-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .reviews-container10 {
              margin-bottom: var(--dl-layout-space-oneandhalfunits);
            }
            .reviews-container12 {
              width: 100%;
            }
            .reviews-container15 {
              width: 100%;
            }
            .reviews-container18 {
              width: 100%;
            }
            .reviews-container21 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Reviews.defaultProps = {
  review2: undefined,
  author3Name: undefined,
  heading1: undefined,
  author1Name: undefined,
  author4Name: undefined,
  content1: undefined,
  review3: undefined,
  rootClassName: '',
  review4: undefined,
  review1: undefined,
  author2Name: undefined,
}

Reviews.propTypes = {
  review2: PropTypes.element,
  author3Name: PropTypes.element,
  heading1: PropTypes.element,
  author1Name: PropTypes.element,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  review3: PropTypes.element,
  rootClassName: PropTypes.string,
  review4: PropTypes.element,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
}

export default Reviews
