import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Awards1 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        className={`awards1-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="awards1-max-width thq-section-max-width">
          <div className="awards1-section-title">
            <div className="awards1-content">
              <h2 className="awards1-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="awards1-text71">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_L5IF2M'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="awards1-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="awards1-text49">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_fIJNmP'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly === false && (
            <div className="awards1-container1">
              <div className="awards1-column1 thq-card">
                <div className="awards1-price10">
                  <div className="awards1-price11">
                    <span className="awards1-text12 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="awards1-text74">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_0qOJ2F'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards1-text13 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="awards1-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8N8H1b'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="awards1-text57">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nHqJ6R'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards1-list1">
                    <div className="awards1-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="awards1-text64">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uc-U30'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="awards1-text65">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_UhZ6-C'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="awards1-text60">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_c95ayl'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards1-button1 thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="awards1-text48">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4GSZ-V'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="awards1-column2 thq-card">
                <div className="awards1-price12">
                  <div className="awards1-price13">
                    <span className="awards1-text19 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="awards1-text61">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OvKcso'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards1-text20 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="awards1-text47">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_aEiVYX'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="awards1-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XIYv8-'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards1-list2">
                    <div className="awards1-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="awards1-text59">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_gg_hcb'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="awards1-text76">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_NOMMoP'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="awards1-text46">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_TM5L-W'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="awards1-text72">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_EFae2W'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards1-button2 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="awards1-text45">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_YUJ0sX'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="awards1-column3 thq-card">
                <div className="awards1-price14">
                  <div className="awards1-price15">
                    <span className="awards1-text27 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="awards1-text69">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PKR6qQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="awards1-text28 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="awards1-text55">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nbO6xl'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="awards1-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-CctsF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="awards1-list3">
                    <div className="awards1-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="awards1-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Tub_Fx'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="awards1-text68">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_czTedQ'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="awards1-text75">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_SmolHB'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="awards1-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="awards1-text62">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_eXXzQf'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="awards1-button3 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="awards1-text52">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_1E9sGg'),
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
            <div className="awards1-container2">
              <div className="awards1-column4 thq-card">
                <div className="awards1-price16">
                  <div className="awards1-price17">
                    <h3 className="awards1-text35 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="awards1-text56">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7M7zSs'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards1-text36 thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="awards1-text77">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_WGLPD3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards1-list4">
                    <div className="awards1-list-item21">
                      <span className="awards1-text37 thq-body-small">
                        {props.plan1Feature11 ?? (
                          <Fragment>
                            <span className="awards1-text58">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_9jGN9Q'),
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
              <div className="awards1-column5 thq-card">
                <div className="awards1-price18">
                  <div className="awards1-price19">
                    <h3 className="awards1-text38 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="awards1-text67">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_MEF8qn'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards1-text39 thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="awards1-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_9I_Wtk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards1-list5">
                    <div className="awards1-list-item22">
                      <span className="awards1-text40 thq-body-small">
                        {props.plan2Feature11 ?? (
                          <Fragment>
                            <span className="awards1-text66">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_S0m22l'),
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
              <div className="awards1-column6 thq-card">
                <div className="awards1-price20">
                  <div className="awards1-price21">
                    <h3 className="awards1-text41 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="awards1-text51">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_8s0qBz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="awards1-text42 thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="awards1-text50">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ELBsUY'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="awards1-list6">
                    <div className="awards1-list-item23">
                      <span className="awards1-text43 thq-body-small">
                        {props.plan3Feature11 ?? (
                          <Fragment>
                            <span className="awards1-text53">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_viT8bj'),
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
          .awards1-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .awards1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .awards1-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .awards1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text10 {
            text-align: center;
          }
          .awards1-text11 {
            text-align: center;
          }
          .awards1-container1 {
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
          .awards1-column1 {
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
          .awards1-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .awards1-text13 {
            font-size: 48px;
          }
          .awards1-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-button1 {
            width: 100%;
          }
          .awards1-column2 {
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
          .awards1-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .awards1-text20 {
            font-size: 48px;
          }
          .awards1-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-button2 {
            width: 100%;
          }
          .awards1-column3 {
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
          .awards1-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .awards1-text28 {
            font-size: 48px;
          }
          .awards1-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-button3 {
            width: 100%;
          }
          .awards1-container2 {
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
          .awards1-column4 {
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
          .awards1-price16 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text35 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards1-text36 {
            color: #ffffff;
          }
          .awards1-list4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item21 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-text37 {
            color: #ffffff;
          }
          .awards1-column5 {
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
          .awards1-price18 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text38 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards1-text39 {
            color: #ffffff;
          }
          .awards1-list5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-text40 {
            color: #ffffff;
          }
          .awards1-column6 {
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
          .awards1-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-price21 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .awards1-text41 {
            color: #ffffff;
            font-size: 48px;
          }
          .awards1-text42 {
            color: #fffdfd;
          }
          .awards1-list6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .awards1-list-item23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .awards1-text43 {
            color: #ffffff;
          }
          .awards1-text44 {
            display: inline-block;
          }
          .awards1-text45 {
            display: inline-block;
          }
          .awards1-text46 {
            display: inline-block;
          }
          .awards1-text47 {
            display: inline-block;
          }
          .awards1-text48 {
            display: inline-block;
          }
          .awards1-text49 {
            display: inline-block;
          }
          .awards1-text50 {
            display: inline-block;
          }
          .awards1-text51 {
            display: inline-block;
          }
          .awards1-text52 {
            display: inline-block;
          }
          .awards1-text53 {
            display: inline-block;
          }
          .awards1-text54 {
            display: inline-block;
          }
          .awards1-text55 {
            display: inline-block;
          }
          .awards1-text56 {
            display: inline-block;
          }
          .awards1-text57 {
            display: inline-block;
          }
          .awards1-text58 {
            display: inline-block;
          }
          .awards1-text59 {
            display: inline-block;
          }
          .awards1-text60 {
            display: inline-block;
          }
          .awards1-text61 {
            display: inline-block;
          }
          .awards1-text62 {
            display: inline-block;
          }
          .awards1-text63 {
            display: inline-block;
          }
          .awards1-text64 {
            display: inline-block;
          }
          .awards1-text65 {
            display: inline-block;
          }
          .awards1-text66 {
            display: inline-block;
          }
          .awards1-text67 {
            display: inline-block;
          }
          .awards1-text68 {
            display: inline-block;
          }
          .awards1-text69 {
            display: inline-block;
          }
          .awards1-text70 {
            display: inline-block;
          }
          .awards1-text71 {
            display: inline-block;
          }
          .awards1-text72 {
            display: inline-block;
          }
          .awards1-text73 {
            display: inline-block;
          }
          .awards1-text74 {
            display: inline-block;
          }
          .awards1-text75 {
            display: inline-block;
          }
          .awards1-text76 {
            display: inline-block;
          }
          .awards1-text77 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .awards1-container1 {
              flex-direction: column;
            }
            .awards1-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .awards1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .awards1-button2 {
              width: 100%;
            }
            .awards1-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Awards1.defaultProps = {
  plan2Yearly: undefined,
  plan2Action: undefined,
  plan2Feature3: undefined,
  plan2Price: undefined,
  plan1Action: undefined,
  content2: undefined,
  plan3Yearly1: undefined,
  plan3Price1: undefined,
  plan3Action: undefined,
  plan3Feature11: undefined,
  plan2Yearly1: undefined,
  plan3Price: undefined,
  plan1Price1: undefined,
  rootClassName: '',
  plan1Yearly: undefined,
  plan1Feature11: undefined,
  plan2Feature1: undefined,
  plan1Feature3: undefined,
  plan2: undefined,
  plan3Feature4: undefined,
  plan1Price: undefined,
  plan1Feature1: undefined,
  plan1Feature2: undefined,
  plan2Feature11: undefined,
  plan2Price1: undefined,
  plan3Feature2: undefined,
  plan3: undefined,
  plan3Yearly: undefined,
  heading1: undefined,
  plan2Feature4: undefined,
  plan3Feature1: undefined,
  plan1: undefined,
  plan3Feature3: undefined,
  plan2Feature2: undefined,
  plan1Yearly1: undefined,
}

Awards1.propTypes = {
  plan2Yearly: PropTypes.element,
  plan2Action: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Price: PropTypes.element,
  plan1Action: PropTypes.element,
  content2: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan3Action: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan3Price: PropTypes.element,
  plan1Price1: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1Yearly: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan3: PropTypes.element,
  plan3Yearly: PropTypes.element,
  heading1: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan1: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan1Yearly1: PropTypes.element,
}

export default Awards1
