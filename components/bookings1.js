import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Bookings1 = (props) => {
  const translate = useTranslations()
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <>
      <div
        id={props.bookings1Id}
        className={`bookings1-pricing23 thq-section-padding ${props.rootClassName} `}
      >
        <div className="bookings1-max-width thq-section-max-width">
          <div className="bookings1-section-title">
            <div className="bookings1-content">
              <h2 className="bookings1-text10 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="bookings1-text47">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HrUgfV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="bookings1-text11 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="bookings1-text48">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_p252o_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          {isMonthly === false && (
            <div className="bookings1-container1">
              <div className="bookings1-column1 thq-card">
                <div className="bookings1-price10">
                  <div className="bookings1-price11">
                    <span className="bookings1-text12 thq-body-large">
                      {props.plan1 ?? (
                        <Fragment>
                          <span className="bookings1-text55">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_qtjJ5K'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings1-text13 thq-heading-3">
                      {props.plan1Price ?? (
                        <Fragment>
                          <span className="bookings1-text56">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_1V11BF'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan1Yearly ?? (
                        <Fragment>
                          <span className="bookings1-text57">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_lrJCOj'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings1-list1">
                    <div className="bookings1-list-item10">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature1 ?? (
                          <Fragment>
                            <span className="bookings1-text73">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_wdZU09'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item11">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature2 ?? (
                          <Fragment>
                            <span className="bookings1-text74">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_p7RHDW'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item12">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan1Feature3 ?? (
                          <Fragment>
                            <span className="bookings1-text75">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_qc80ez'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings1-button1 thq-button-outline">
                  <span className="thq-body-small">
                    {props.plan1Action ?? (
                      <Fragment>
                        <span className="bookings1-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SJ96U8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="bookings1-column2 thq-card">
                <div className="bookings1-price12">
                  <div className="bookings1-price13">
                    <span className="bookings1-text19 thq-body-large">
                      {props.plan2 ?? (
                        <Fragment>
                          <span className="bookings1-text58">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_g_B2pl'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings1-text20 thq-heading-3">
                      {props.plan2Price ?? (
                        <Fragment>
                          <span className="bookings1-text59">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_vEsVLg'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan2Yearly ?? (
                        <Fragment>
                          <span className="bookings1-text60">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ck7Zdv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings1-list2">
                    <div className="bookings1-list-item13">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature1 ?? (
                          <Fragment>
                            <span className="bookings1-text76">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uqlcYg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item14">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature2 ?? (
                          <Fragment>
                            <span className="bookings1-text77">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_1XvJCI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item15">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature3 ?? (
                          <Fragment>
                            <span className="bookings1-text78">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_njs5iC'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item16">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan2Feature4 ?? (
                          <Fragment>
                            <span className="bookings1-text79">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_hTfa-G'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings1-button2 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan2Action ?? (
                      <Fragment>
                        <span className="bookings1-text50">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XhjFmv'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
              <div className="bookings1-column3 thq-card">
                <div className="bookings1-price14">
                  <div className="bookings1-price15">
                    <span className="bookings1-text27 thq-body-large">
                      {props.plan3 ?? (
                        <Fragment>
                          <span className="bookings1-text61">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_p-TBBI'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                    <h3 className="bookings1-text28 thq-heading-3">
                      {props.plan3Price ?? (
                        <Fragment>
                          <span className="bookings1-text62">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text__kFdrJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <span className="thq-body-large">
                      {props.plan3Yearly ?? (
                        <Fragment>
                          <span className="bookings1-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_tdaC81'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="bookings1-list3">
                    <div className="bookings1-list-item17">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature1 ?? (
                          <Fragment>
                            <span className="bookings1-text80">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_6GhQsO'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item18">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature2 ?? (
                          <Fragment>
                            <span className="bookings1-text81">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_BtDppI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item19">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature3 ?? (
                          <Fragment>
                            <span className="bookings1-text82">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_zeegYg'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                    <div className="bookings1-list-item20">
                      <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">
                        {props.plan3Feature4 ?? (
                          <Fragment>
                            <span className="bookings1-text83">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_ltkNhU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bookings1-button3 thq-button-filled">
                  <span className="thq-body-small">
                    {props.plan3Action ?? (
                      <Fragment>
                        <span className="bookings1-text51">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_4nxiRp'),
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
            <div className="bookings1-container2">
              <div className="bookings1-column4 thq-card">
                <div className="bookings1-price16">
                  <div className="bookings1-price17">
                    <p className="bookings1-text35 thq-body-large">
                      {props.plan11 ?? (
                        <Fragment>
                          <span className="bookings1-text64">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_eK7xHJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings1-text36 thq-heading-3">
                      {props.plan1Price1 ?? (
                        <Fragment>
                          <span className="bookings1-text65">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_bXeOoS'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan1Yearly1 ?? (
                        <Fragment>
                          <span className="bookings1-text66">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_p8U9sG'),
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
                  className="bookings1-button4 thq-button-outline"
                >
                  <span className="thq-body-small">
                    {props.plan1Action1 ?? (
                      <Fragment>
                        <span className="bookings1-text52">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_CbqUHj'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="bookings1-column5 thq-card">
                <div className="bookings1-price18">
                  <div className="bookings1-price19">
                    <p className="bookings1-text39 thq-body-large">
                      {props.plan21 ?? (
                        <Fragment>
                          <span className="bookings1-text67">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wqE524'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings1-text40 thq-heading-3">
                      {props.plan2Price1 ?? (
                        <Fragment>
                          <span className="bookings1-text68">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_2ZwbDS'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan2Yearly1 ?? (
                        <Fragment>
                          <span className="bookings1-text69">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_N9u34W'),
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
                  className="bookings1-button5 thq-button-filled"
                >
                  <span className="thq-body-small">
                    {props.plan2Action1 ?? (
                      <Fragment>
                        <span className="bookings1-text53">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_EUFrm_'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
              <div className="bookings1-column6 thq-card">
                <div className="bookings1-price20">
                  <div className="bookings1-price21">
                    <p className="bookings1-text43 thq-body-large">
                      {props.plan31 ?? (
                        <Fragment>
                          <span className="bookings1-text70">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wWfJdf'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                    <h3 className="bookings1-text44 thq-heading-3">
                      {props.plan3Price1 ?? (
                        <Fragment>
                          <span className="bookings1-text71">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_CB1A14'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p className="thq-body-large">
                      {props.plan3Yearly1 ?? (
                        <Fragment>
                          <span className="bookings1-text72">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XRLsB5'),
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
                  className="bookings1-button6 thq-button-filled"
                >
                  <span className="thq-body-small">
                    {props.plan3Action1 ?? (
                      <Fragment>
                        <span className="bookings1-text54">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_k5-0VV'),
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
          .bookings1-pricing23 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bookings1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-section-title {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .bookings1-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text10 {
            text-align: center;
          }
          .bookings1-text11 {
            text-align: center;
          }
          .bookings1-container1 {
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
          .bookings1-column1 {
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
          .bookings1-price10 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price11 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text12 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text13 {
            font-size: 48px;
          }
          .bookings1-list1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings1-list-item10 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-button1 {
            width: 100%;
          }
          .bookings1-column2 {
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
          .bookings1-price12 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            flex-grow: 1;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price13 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text19 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text20 {
            font-size: 48px;
          }
          .bookings1-list2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings1-list-item13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-button2 {
            width: 100%;
          }
          .bookings1-column3 {
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
          .bookings1-price14 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price15 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text27 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text28 {
            font-size: 48px;
          }
          .bookings1-list3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .bookings1-list-item17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item18 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item19 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-list-item20 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .bookings1-button3 {
            width: 100%;
          }
          .bookings1-container2 {
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
          .bookings1-column4 {
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
          .bookings1-price16 {
            gap: var(--dl-layout-space-twounits);
            height: 160px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price17 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text35 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text36 {
            font-size: 48px;
          }
          .bookings1-button4 {
            color: #ffffff;
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings1-column5 {
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
          .bookings1-price18 {
            gap: var(--dl-layout-space-twounits);
            height: 162px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price19 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text39 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text40 {
            font-size: 48px;
          }
          .bookings1-button5 {
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings1-column6 {
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
          .bookings1-price20 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-price21 {
            gap: var(--dl-layout-space-halfunit);
            height: 162px;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .bookings1-text43 {
            font-style: normal;
            font-weight: 600;
          }
          .bookings1-text44 {
            font-size: 48px;
          }
          .bookings1-button6 {
            width: 100%;
            border-color: #ffffff;
            text-decoration: none;
            background-color: #46793b;
          }
          .bookings1-text47 {
            display: inline-block;
          }
          .bookings1-text48 {
            display: inline-block;
          }
          .bookings1-text49 {
            display: inline-block;
          }
          .bookings1-text50 {
            display: inline-block;
          }
          .bookings1-text51 {
            display: inline-block;
          }
          .bookings1-text52 {
            display: inline-block;
          }
          .bookings1-text53 {
            display: inline-block;
          }
          .bookings1-text54 {
            display: inline-block;
          }
          .bookings1-text55 {
            display: inline-block;
          }
          .bookings1-text56 {
            display: inline-block;
          }
          .bookings1-text57 {
            display: inline-block;
          }
          .bookings1-text58 {
            display: inline-block;
          }
          .bookings1-text59 {
            display: inline-block;
          }
          .bookings1-text60 {
            display: inline-block;
          }
          .bookings1-text61 {
            display: inline-block;
          }
          .bookings1-text62 {
            display: inline-block;
          }
          .bookings1-text63 {
            display: inline-block;
          }
          .bookings1-text64 {
            display: inline-block;
          }
          .bookings1-text65 {
            display: inline-block;
          }
          .bookings1-text66 {
            display: inline-block;
          }
          .bookings1-text67 {
            display: inline-block;
          }
          .bookings1-text68 {
            display: inline-block;
          }
          .bookings1-text69 {
            display: inline-block;
          }
          .bookings1-text70 {
            display: inline-block;
          }
          .bookings1-text71 {
            display: inline-block;
          }
          .bookings1-text72 {
            display: inline-block;
          }
          .bookings1-text73 {
            display: inline-block;
          }
          .bookings1-text74 {
            display: inline-block;
          }
          .bookings1-text75 {
            display: inline-block;
          }
          .bookings1-text76 {
            display: inline-block;
          }
          .bookings1-text77 {
            display: inline-block;
          }
          .bookings1-text78 {
            display: inline-block;
          }
          .bookings1-text79 {
            display: inline-block;
          }
          .bookings1-text80 {
            display: inline-block;
          }
          .bookings1-text81 {
            display: inline-block;
          }
          .bookings1-text82 {
            display: inline-block;
          }
          .bookings1-text83 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .bookings1-container1 {
              flex-direction: column;
            }
            .bookings1-container2 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .bookings1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .bookings1-button2 {
              width: 100%;
            }
            .bookings1-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Bookings1.defaultProps = {
  heading1: undefined,
  content2: undefined,
  plan1Action: undefined,
  plan2Action: undefined,
  plan3Action: undefined,
  plan1Action1: undefined,
  plan2Action1: undefined,
  plan3Action1: undefined,
  plan1: undefined,
  plan1Price: undefined,
  plan1Yearly: undefined,
  plan2: undefined,
  plan2Price: undefined,
  plan2Yearly: undefined,
  plan3: undefined,
  plan3Price: undefined,
  plan3Yearly: undefined,
  plan11: undefined,
  plan1Price1: undefined,
  plan1Yearly1: undefined,
  plan21: undefined,
  plan2Price1: undefined,
  plan2Yearly1: undefined,
  plan31: undefined,
  plan3Price1: undefined,
  plan3Yearly1: undefined,
  plan1Feature1: undefined,
  plan1Feature2: undefined,
  plan1Feature3: undefined,
  plan2Feature1: undefined,
  plan2Feature2: undefined,
  plan2Feature3: undefined,
  plan2Feature4: undefined,
  plan3Feature1: undefined,
  plan3Feature2: undefined,
  plan3Feature3: undefined,
  plan3Feature4: undefined,
  rootClassName: '',
  bookings1Id: '',
}

Bookings1.propTypes = {
  heading1: PropTypes.element,
  content2: PropTypes.element,
  plan1Action: PropTypes.element,
  plan2Action: PropTypes.element,
  plan3Action: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1: PropTypes.element,
  plan1Price: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan2: PropTypes.element,
  plan2Price: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan3: PropTypes.element,
  plan3Price: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan11: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  plan21: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan31: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan2Feature3: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan3Feature4: PropTypes.element,
  rootClassName: PropTypes.string,
  bookings1Id: PropTypes.string,
}

export default Bookings1
