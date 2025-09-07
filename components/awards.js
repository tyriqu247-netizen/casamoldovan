import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Awards = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        className={`awards-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="awards-max-width thq-section-max-width">
          <div className="awards-section-title">
            <div className="awards-content">
              <h2 className="awards-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="awards-text68">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZG505J'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="awards-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="awards-text54">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QODwMV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly === false && (
            <div className="awards-container1">
              <div className="awards-column1 thq-card">
                <div className="awards-price10">
                  <div className="awards-price11">
                    <span className="awards-text12 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="awards-text60">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_GeIPtA'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards-text13 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="awards-text58">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_s7AQHV'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="awards-text56">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6fFBBD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards-list1">
                    <div className="awards-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="awards-text76">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_xQf-D5'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="awards-text51">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Fl8PJw'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="awards-text44">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_flzedZ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards-button1 thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="awards-text71">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_cDfWNW'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="awards-column2 thq-card">
                <div className="awards-price12">
                  <div className="awards-price13">
                    <span className="awards-text19 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="awards-text61">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_JPttrN'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards-text20 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="awards-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_f4PUOs'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="awards-text62">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_fWXiRw'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards-list2">
                    <div className="awards-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="awards-text65">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_YYrCbM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="awards-text45">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_PRn786'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="awards-text59">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_cm3Oeg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="awards-text55">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_LZcFP5'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards-button2 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="awards-text67">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_o1Hw0x'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="awards-column3 thq-card">
                <div className="awards-price14">
                  <div className="awards-price15">
                    <span className="awards-text27 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="awards-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Ocq6Nk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards-text28 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="awards-text72">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AGnT72'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="awards-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_i-dw3y'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards-list3">
                    <div className="awards-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="awards-text53">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_cz_wzh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="awards-text50">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_6FSJwB'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="awards-text74">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_daZq4m'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="awards-text77">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_lvsLMM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards-button3 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="awards-text69">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_R4b0oh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          )}
          {isMonthly === true && (
            <div className="awards-container2">
              <div className="awards-column4 thq-card">
                <div className="awards-price16">
                  <div className="awards-price17">
                    <h3 className="awards-text35 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="awards-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IzJIi9'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards-text36 thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="awards-text64">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XzBmto'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards-list4">
                    <div className="awards-list-item21">
                      <span className="awards-text37 thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="awards-text52">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tdwAsu'),
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
              <div className="awards-column5 thq-card">
                <div className="awards-price18">
                  <div className="awards-price19">
                    <h3 className="awards-text38 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="awards-text57">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8CVTPs'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards-text39 thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="awards-text48">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BMKVQu'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards-list5">
                    <div className="awards-list-item22">
                      <span className="awards-text40 thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="awards-text75">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tTPCnk'),
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
              <div className="awards-column6 thq-card">
                <div className="awards-price20">
                  <div className="awards-price21">
                    <h3 className="awards-text41 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="awards-text66">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_IU9AUO'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards-text42 thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="awards-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_6DcT8P'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards-list6">
                    <div className="awards-list-item23">
                      <span className="awards-text43 thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="awards-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_mhyRs4'),
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
          )}
        </div>
      </div>
      <style jsx>
        {`
          .awards-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .awards-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .awards-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .awards-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text10 {
            text-align: center;
          }
          .awards-text11 {
            text-align: center;
          }
          .awards-container1 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .awards-column1 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
          }
          .awards-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .awards-text13 {
            font-size: 48px;
          }
          .awards-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-button1 {
            width: 100%;
          }
          .awards-column2 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-theme-accent1);
          }
          .awards-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .awards-text20 {
            font-size: 48px;
          }
          .awards-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-button2 {
            width: 100%;
          }
          .awards-column3 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            background-color: var(--dl-color-theme-accent2);
          }
          .awards-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .awards-text28 {
            font-size: 48px;
          }
          .awards-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-button3 {
            width: 100%;
          }
          .awards-container2 {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .awards-column4 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            background-color: #68aa5f;
          }
          .awards-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text35 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards-text36 {
            color: #ffffff;
          }
          .awards-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-text37 {
            color: #ffffff;
          }
          .awards-column5 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            background-color: #68aa5f;
          }
          .awards-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text38 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards-text39 {
            color: #ffffff;
          }
          .awards-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-text40 {
            color: #ffffff;
          }
          .awards-column6 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: #ffffff;
            border-style: solid;
            border-width: 1px;
            background-color: #68aa5f;
          }
          .awards-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards-text41 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards-text42 {
            color: #fffdfd;
          }
          .awards-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards-text43 {
            color: #ffffff;
          }
          .awards-text44 {
            display: inline-block;
          }
          .awards-text45 {
            display: inline-block;
          }
          .awards-text46 {
            display: inline-block;
          }
          .awards-text47 {
            display: inline-block;
          }
          .awards-text48 {
            display: inline-block;
          }
          .awards-text49 {
            display: inline-block;
          }
          .awards-text50 {
            display: inline-block;
          }
          .awards-text51 {
            display: inline-block;
          }
          .awards-text52 {
            display: inline-block;
          }
          .awards-text53 {
            display: inline-block;
          }
          .awards-text54 {
            display: inline-block;
          }
          .awards-text55 {
            display: inline-block;
          }
          .awards-text56 {
            display: inline-block;
          }
          .awards-text57 {
            display: inline-block;
          }
          .awards-text58 {
            display: inline-block;
          }
          .awards-text59 {
            display: inline-block;
          }
          .awards-text60 {
            display: inline-block;
          }
          .awards-text61 {
            display: inline-block;
          }
          .awards-text62 {
            display: inline-block;
          }
          .awards-text63 {
            display: inline-block;
          }
          .awards-text64 {
            display: inline-block;
          }
          .awards-text65 {
            display: inline-block;
          }
          .awards-text66 {
            display: inline-block;
          }
          .awards-text67 {
            display: inline-block;
          }
          .awards-text68 {
            display: inline-block;
          }
          .awards-text69 {
            display: inline-block;
          }
          .awards-text70 {
            display: inline-block;
          }
          .awards-text71 {
            display: inline-block;
          }
          .awards-text72 {
            display: inline-block;
          }
          .awards-text73 {
            display: inline-block;
          }
          .awards-text74 {
            display: inline-block;
          }
          .awards-text75 {
            display: inline-block;
          }
          .awards-text76 {
            display: inline-block;
          }
          .awards-text77 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .awards-container1 {
              flex-direction: column;
            }
            .awards-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .awards-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .awards-button2 {
              width: 100%;
            }
            .awards-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Awards.defaultProps = {
  plan1Feature3: undefined,
  plan2Feature2: undefined,
  plan1Price1: undefined,
  plan3Yearly1: undefined,
  plan2Yearly1: undefined,
  plan3: undefined,
  plan3Feature2: undefined,
  plan1Feature2: undefined,
  plan1Feature11: undefined,
  plan3Feature1: undefined,
  content2: undefined,
  plan2Feature4: undefined,
  plan1Yearly: undefined,
  plan2Price1: undefined,
  plan1Price: undefined,
  plan2Feature3: undefined,
  plan1: undefined,
  plan2: undefined,
  plan2Yearly: undefined,
  plan3Yearly: undefined,
  plan1Yearly1: undefined,
  plan2Feature1: undefined,
  plan3Price1: undefined,
  plan2Action: undefined,
  heading1: undefined,
  plan3Action: undefined,
  plan2Price: undefined,
  plan1Action: undefined,
  plan3Price: undefined,
  plan3Feature11: undefined,
  plan3Feature3: undefined,
  plan2Feature11: undefined,
  plan1Feature1: undefined,
  rootClassName: '',
  plan3Feature4: undefined,
}

Awards.propTypes = {
  plan1Feature3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan3Feature1: PropTypes.element,
  content2: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan1: PropTypes.element,
  plan2: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Action: PropTypes.element,
  heading1: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan1Feature1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan3Feature4: PropTypes.element,
}

export default Awards
