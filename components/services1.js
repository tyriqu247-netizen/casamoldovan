import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Services1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`services1-pricing4 thq-section-padding ${props.rootClassName} `}
      >
        <div className="services1-max-width thq-section-max-width">
          <div className="services1-section-title">
            <div className="services1-content1">
              <h2 className="services1-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="services1-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uOUh6b'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="services1-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="services1-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_w98Bg5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="services1-content2 thq-card">
            <div className="services1-price-title1">
              <div className="services1-price-title2">
                <div className="services1-title">
                  <p className="services1-text12 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="services1-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pQZgdp'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="thq-body-large services1-text13">
                    {props.plan1Detail ?? (
                      <Fragment>
                        <span className="services1-text35">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7uCi7W'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="thq-divider-horizontal"></div>
            <div className="services1-content3">
              <span className="thq-body-small">
                {props.plan1Includes ?? (
                  <Fragment>
                    <span className="services1-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_q0af6n'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="services1-content4">
                <div className="services1-list1">
                  <div className="services1-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="services1-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GZROVv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="services1-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6tNXpm'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="services1-text26">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wIAQAf'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature4 ?? (
                        <Fragment>
                          <span className="services1-text32">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Z4uuFy'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature5 ?? (
                        <Fragment>
                          <span className="services1-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_O6zK6W'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="services1-list2">
                  <div className="services1-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature6 ?? (
                        <Fragment>
                          <span className="services1-text27">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_l5BBUB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature7 ?? (
                        <Fragment>
                          <span className="services1-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_crSyIa'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature8 ?? (
                        <Fragment>
                          <span className="services1-text25">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Loe61s'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature9 ?? (
                        <Fragment>
                          <span className="services1-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_bZS_oQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services1-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature10 ?? (
                        <Fragment>
                          <span className="services1-text28">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xC5Gba'),
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
      </div>
      <style jsx>
        {`
          .services1-pricing4 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .services1-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services1-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .services1-text10 {
            text-align: center;
          }
          .services1-text11 {
            text-align: center;
          }
          .services1-content2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .services1-price-title1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .services1-price-title2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services1-title {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services1-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .services1-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .services1-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-halfunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .services1-list1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services1-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services1-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services1-text25 {
            display: inline-block;
          }
          .services1-text26 {
            display: inline-block;
          }
          .services1-text27 {
            display: inline-block;
          }
          .services1-text28 {
            display: inline-block;
          }
          .services1-text29 {
            display: inline-block;
          }
          .services1-text30 {
            display: inline-block;
          }
          .services1-text31 {
            display: inline-block;
          }
          .services1-text32 {
            display: inline-block;
          }
          .services1-text33 {
            display: inline-block;
          }
          .services1-text34 {
            display: inline-block;
          }
          .services1-text35 {
            display: inline-block;
          }
          .services1-text36 {
            display: inline-block;
          }
          .services1-text37 {
            display: inline-block;
          }
          .services1-text38 {
            display: inline-block;
          }
          .services1-text39 {
            display: inline-block;
          }

          @media (max-width: 479px) {
            .services1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .services1-price-title1 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .services1-price-title2 {
              align-items: center;
              justify-content: center;
            }
            .services1-title {
              align-items: center;
              justify-content: center;
            }
            .services1-text12 {
              text-align: center;
            }
            .services1-text13 {
              text-align: center;
            }
            .services1-content4 {
              flex-direction: column;
            }
            .services1-list1 {
              width: 100%;
            }
            .services1-list2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Services1.defaultProps = {
  plan1Feature8: undefined,
  plan1Feature3: undefined,
  plan1Feature6: undefined,
  plan1Feature10: undefined,
  plan1Feature5: undefined,
  plan1Includes: undefined,
  plan1Feature1: undefined,
  plan1Feature4: undefined,
  plan1Feature2: undefined,
  plan1Feature9: undefined,
  plan1Detail: undefined,
  content2: undefined,
  plan1: undefined,
  rootClassName: '',
  plan1Feature7: undefined,
  heading1: undefined,
}

Services1.propTypes = {
  plan1Feature8: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan1Feature6: PropTypes.element,
  plan1Feature10: PropTypes.element,
  plan1Feature5: PropTypes.element,
  plan1Includes: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature4: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature9: PropTypes.element,
  plan1Detail: PropTypes.element,
  content2: PropTypes.element,
  plan1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1Feature7: PropTypes.element,
  heading1: PropTypes.element,
}

export default Services1
