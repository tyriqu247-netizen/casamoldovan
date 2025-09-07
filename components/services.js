import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Services = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`services-pricing4 thq-section-padding ${props.rootClassName} `}
      >
        <div className="services-max-width thq-section-max-width">
          <div className="services-section-title">
            <div className="services-content1">
              <h2 className="services-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="services-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_WI693k'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="services-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="services-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1_gYxY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="services-content2 thq-card">
            <div className="services-price-title1">
              <div className="services-price-title2">
                <div className="services-title">
                  <p className="services-text12 thq-body-large">
                    {props.plan1 ?? (
                      <Fragment>
                        <span className="services-text36">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_r33LwD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="thq-body-large services-text13">
                    {props.plan1Detail ?? (
                      <Fragment>
                        <span className="services-text32">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_KVbqJX'),
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
            <div className="services-content3">
              <span className="thq-body-small">
                {props.plan1Includes ?? (
                  <Fragment>
                    <span className="services-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_41O4K8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <div className="services-content4">
                <div className="services-list1">
                  <div className="services-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature1 ?? (
                        <Fragment>
                          <span className="services-text30">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vcO8kt'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature2 ?? (
                        <Fragment>
                          <span className="services-text34">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BCQL1a'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature3 ?? (
                        <Fragment>
                          <span className="services-text39">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BBNGiw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature4 ?? (
                        <Fragment>
                          <span className="services-text33">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_lIxGND'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature5 ?? (
                        <Fragment>
                          <span className="services-text31">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GAxEcd'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <div className="services-list2">
                  <div className="services-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature6 ?? (
                        <Fragment>
                          <span className="services-text38">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_QW6A0F'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature7 ?? (
                        <Fragment>
                          <span className="services-text29">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_E3Kz0a'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature8 ?? (
                        <Fragment>
                          <span className="services-text35">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cSpld_'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature9 ?? (
                        <Fragment>
                          <span className="services-text37">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_4W4bSO'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="services-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span className="thq-body-small">
                      {props.plan1Feature10 ?? (
                        <Fragment>
                          <span className="services-text25">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_3U9oPK'),
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
          .services-pricing4 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .services-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .services-text10 {
            text-align: center;
          }
          .services-text11 {
            text-align: center;
          }
          .services-content2 {
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
          .services-price-title1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .services-price-title2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-title {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .services-content3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-content4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-halfunit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .services-list1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .services-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .services-text25 {
            display: inline-block;
          }
          .services-text26 {
            display: inline-block;
          }
          .services-text27 {
            display: inline-block;
          }
          .services-text28 {
            display: inline-block;
          }
          .services-text29 {
            display: inline-block;
          }
          .services-text30 {
            display: inline-block;
          }
          .services-text31 {
            display: inline-block;
          }
          .services-text32 {
            display: inline-block;
          }
          .services-text33 {
            display: inline-block;
          }
          .services-text34 {
            display: inline-block;
          }
          .services-text35 {
            display: inline-block;
          }
          .services-text36 {
            display: inline-block;
          }
          .services-text37 {
            display: inline-block;
          }
          .services-text38 {
            display: inline-block;
          }
          .services-text39 {
            display: inline-block;
          }

          @media (max-width: 479px) {
            .services-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .services-price-title1 {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .services-price-title2 {
              align-items: center;
              justify-content: center;
            }
            .services-title {
              align-items: center;
              justify-content: center;
            }
            .services-text12 {
              text-align: center;
            }
            .services-text13 {
              text-align: center;
            }
            .services-content4 {
              flex-direction: column;
            }
            .services-list1 {
              width: 100%;
            }
            .services-list2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Services.defaultProps = {
  plan1Feature10: undefined,
  heading1: undefined,
  content2: undefined,
  rootClassName: '',
  plan1Includes: undefined,
  plan1Feature7: undefined,
  plan1Feature1: undefined,
  plan1Feature5: undefined,
  plan1Detail: undefined,
  plan1Feature4: undefined,
  plan1Feature2: undefined,
  plan1Feature8: undefined,
  plan1: undefined,
  plan1Feature9: undefined,
  plan1Feature6: undefined,
  plan1Feature3: undefined,
}

Services.propTypes = {
  plan1Feature10: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1Includes: PropTypes.element,
  plan1Feature7: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature5: PropTypes.element,
  plan1Detail: PropTypes.element,
  plan1Feature4: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature8: PropTypes.element,
  plan1: PropTypes.element,
  plan1Feature9: PropTypes.element,
  plan1Feature6: PropTypes.element,
  plan1Feature3: PropTypes.element,
}

export default Services
