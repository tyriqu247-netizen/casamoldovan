import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Bookings = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        id={props.bookingsId}
        className="bookings-pricing23 thq-section-padding"
      >
        <div className="bookings-max-width thq-section-max-width">
          <div className="bookings-section-title">
            <div className="bookings-content">
              <h2 className="bookings-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="bookings-text75">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BDFSAI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="bookings-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="bookings-text69">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PBTk03'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly === false && (
            <div className="bookings-container1">
              <div className="bookings-column1 thq-card">
                <div className="bookings-price10">
                  <div className="bookings-price11">
                    <span className="bookings-text12 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="bookings-text60">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_AMtn_R'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings-text13 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="bookings-text59">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_eUq1YG'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="bookings-text68">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BSTXWk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings-list1">
                    <div className="bookings-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="bookings-text67">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_bkAYKk'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="bookings-text51">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text__JvDcN'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="bookings-text83">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_J4DPIL'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings-button1 thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="bookings-text61">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iTFtT7'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="bookings-column2 thq-card">
                <div className="bookings-price12">
                  <div className="bookings-price13">
                    <span className="bookings-text19 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="bookings-text82">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_LVTSeB'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings-text20 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="bookings-text55">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_an8N5L'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="bookings-text79">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_hO0qbD'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings-list2">
                    <div className="bookings-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="bookings-text56">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_63pNf4'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="bookings-text64">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_JpBqiL'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="bookings-text48">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_WvU-F1'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="bookings-text52">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_sm74Rh'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings-button2 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="bookings-text57">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_yVS5IJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="bookings-column3 thq-card">
                <div className="bookings-price14">
                  <div className="bookings-price15">
                    <span className="bookings-text27 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="bookings-text62">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qkmDoW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings-text28 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="bookings-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-HY8Ow'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="bookings-text80">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_yeFVZJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings-list3">
                    <div className="bookings-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="bookings-text76">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_1cxrBa'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="bookings-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_DeBv_h'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="bookings-text63">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ev47WO'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="bookings-text47">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_DtR7Mg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings-button3 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="bookings-text70">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_L3nPWx'),
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
            <div className="bookings-container2">
              <div className="bookings-column4 thq-card">
                <div className="bookings-price16">
                  <div className="bookings-price17">
                    <p className="bookings-text35 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="bookings-text50">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PwrL7t'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings-text36 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="bookings-text66">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_b15jws'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="bookings-text72">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_SGjAGN'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.booking.com/hotel/ro/casa-moldovan-coltisorul-meu-de-rai-ocna-sugatag1.en-gb.html?aid=318615&amp;label=New_English_EN_IE_20153704825-FYUwHK1Cx8hIZpAQIPOUJQS640874805295%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=0d037d2d888fb1d68f09e5707b604c9f&amp;dest_id=-1165458&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1756987000&amp;srpvid=170253f99eaa0657&amp;type=total&amp;ucfs=1&amp;"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bookings-button4 thq-button-outline"
                >
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="bookings-text78">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_AhCn42'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="bookings-column5 thq-card">
                <div className="bookings-price18">
                  <div className="bookings-price19">
                    <p className="bookings-text39 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="bookings-text58">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text__MDcEe'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings-text40 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="bookings-text74">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-CaOUk'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="bookings-text71">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xW8fPG'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.airbnb.co.uk/rooms/1345030639892238477?check_out=2025-09-17&amp;viralityEntryPoint=1&amp;unique_share_id=DE32F91C-8003-4EAF-A2FD-604AF998EA6A&amp;slcid=6b2b6389df3f4a6fa8fda4a890769f46&amp;s=76&amp;adults=2&amp;check_in=2025-09-12&amp;slug=CdI7ebI1&amp;source_impression_id=p3_1757274181_P3jIfBw5e_BDstN7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bookings-button5 thq-button-filled"
                >
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="bookings-text77">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_FdqRxQ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="bookings-column6 thq-card">
                <div className="bookings-price20">
                  <div className="bookings-price21">
                    <p className="bookings-text43 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="bookings-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_-l_8YP'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings-text44 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="bookings-text81">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_nbf7hJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="bookings-text54">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_SDuFCH'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                </div>
                <a
                  href="https://travelminit.ro/casa-moldovan-ocna-sugatag"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="bookings-button6 thq-button-filled"
                >
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="bookings-text65">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_d6eq9L'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .bookings-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bookings-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .bookings-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bookings-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text10 {
            text-align: center;
          }
          .bookings-text11 {
            text-align: center;
          }
          .bookings-container1 {
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
          .bookings-column1 {
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
          .bookings-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text13 {
            font-size: 48px;
          }
          .bookings-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-button1 {
            width: 100%;
          }
          .bookings-column2 {
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
          .bookings-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text20 {
            font-size: 48px;
          }
          .bookings-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-button2 {
            width: 100%;
          }
          .bookings-column3 {
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
          .bookings-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text28 {
            font-size: 48px;
          }
          .bookings-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings-button3 {
            width: 100%;
          }
          .bookings-container2 {
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
          .bookings-column4 {
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
          .bookings-price16 {
            gap: var(--dl-layout-space-twounits);
            height: 160px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text35 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text36 {
            font-size: 48px;
          }
          .bookings-button4 {
            color: #ffffff;
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings-column5 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(255, 255, 255, 0);
          }
          .bookings-price18 {
            gap: var(--dl-layout-space-twounits);
            height: 162px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text39 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text40 {
            font-size: 48px;
          }
          .bookings-button5 {
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings-column6 {
            flex: 1;
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            background-color: rgba(245, 209, 176, 0);
          }
          .bookings-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-price21 {
            gap: var(--dl-layout-space-halfunit);
            height: 162px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings-text43 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings-text44 {
            font-size: 48px;
          }
          .bookings-button6 {
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings-text47 {
            display: inline-block;
          }
          .bookings-text48 {
            display: inline-block;
          }
          .bookings-text49 {
            display: inline-block;
          }
          .bookings-text50 {
            display: inline-block;
          }
          .bookings-text51 {
            display: inline-block;
          }
          .bookings-text52 {
            display: inline-block;
          }
          .bookings-text53 {
            display: inline-block;
          }
          .bookings-text54 {
            display: inline-block;
          }
          .bookings-text55 {
            display: inline-block;
          }
          .bookings-text56 {
            display: inline-block;
          }
          .bookings-text57 {
            display: inline-block;
          }
          .bookings-text58 {
            display: inline-block;
          }
          .bookings-text59 {
            display: inline-block;
          }
          .bookings-text60 {
            display: inline-block;
          }
          .bookings-text61 {
            display: inline-block;
          }
          .bookings-text62 {
            display: inline-block;
          }
          .bookings-text63 {
            display: inline-block;
          }
          .bookings-text64 {
            display: inline-block;
          }
          .bookings-text65 {
            display: inline-block;
          }
          .bookings-text66 {
            display: inline-block;
          }
          .bookings-text67 {
            display: inline-block;
          }
          .bookings-text68 {
            display: inline-block;
          }
          .bookings-text69 {
            display: inline-block;
          }
          .bookings-text70 {
            display: inline-block;
          }
          .bookings-text71 {
            display: inline-block;
          }
          .bookings-text72 {
            display: inline-block;
          }
          .bookings-text73 {
            display: inline-block;
          }
          .bookings-text74 {
            display: inline-block;
          }
          .bookings-text75 {
            display: inline-block;
          }
          .bookings-text76 {
            display: inline-block;
          }
          .bookings-text77 {
            display: inline-block;
          }
          .bookings-text78 {
            display: inline-block;
          }
          .bookings-text79 {
            display: inline-block;
          }
          .bookings-text80 {
            display: inline-block;
          }
          .bookings-text81 {
            display: inline-block;
          }
          .bookings-text82 {
            display: inline-block;
          }
          .bookings-text83 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .bookings-container1 {
              flex-direction: column;
            }
            .bookings-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .bookings-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .bookings-button2 {
              width: 100%;
            }
            .bookings-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Bookings.defaultProps = {
  plan3Feature4: undefined,
  plan2Feature3: undefined,
  plan31: undefined,
  plan11: undefined,
  plan1Feature2: undefined,
  plan2Feature4: undefined,
  plan3Price: undefined,
  plan3Yearly1: undefined,
  plan2Price: undefined,
  plan2Feature1: undefined,
  plan2Action: undefined,
  plan21: undefined,
  plan1Price: undefined,
  plan1: undefined,
  plan1Action: undefined,
  plan3: undefined,
  plan3Feature3: undefined,
  plan2Feature2: undefined,
  plan3Action1: undefined,
  plan1Price1: undefined,
  plan1Feature1: undefined,
  plan1Yearly: undefined,
  content2: undefined,
  plan3Action: undefined,
  plan2Yearly1: undefined,
  plan1Yearly1: undefined,
  plan3Feature2: undefined,
  plan2Price1: undefined,
  heading1: undefined,
  plan3Feature1: undefined,
  plan2Action1: undefined,
  plan1Action1: undefined,
  plan2Yearly: undefined,
  plan3Yearly: undefined,
  plan3Price1: undefined,
  plan2: undefined,
  plan1Feature3: undefined,
  bookingsId: '',
}

Bookings.propTypes = {
  plan3Feature4: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan31: PropTypes.element,
  plan11: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Action: PropTypes.element,
  plan21: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1: PropTypes.element,
  plan1Action: PropTypes.element,
  plan3: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Yearly: PropTypes.element,
  content2: PropTypes.element,
  plan3Action: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan2Price1: PropTypes.element,
  heading1: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan1Feature3: PropTypes.element,
  bookingsId: PropTypes.string,
}

export default Bookings
