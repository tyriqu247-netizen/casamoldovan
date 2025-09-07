import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.contactSection1Id}
        className={`contact1-contact5 thq-section-padding ${props.rootClassName} `}
      >
        <div className="thq-section-max-width thq-flex-row contact1-max-width">
          <div className="thq-flex-column contact1-content">
            <div className="contact1-section-title">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact1-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8nKrgg'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact1-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_s_Wa7_'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact1-contact-info thq-flex-column">
              <div className="contact1-row1 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact1-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_8IhQbw'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact1-row2 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.phone ?? (
                    <Fragment>
                      <span className="contact1-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_I6HRit'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact1-row3 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.adress ?? (
                    <Fragment>
                      <span className="contact1-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_kDb-R4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <form className="contact1-form">
            <div className="contact1-input1">
              <label htmlFor="contact-form-2-name" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WS56FY'),
                  }}
                ></span>
              </label>
              <input
                type="text"
                id="contact-form-2-name"
                placeholder="Nume"
                className="contact1-text-input1 thq-input"
              />
            </div>
            <div className="contact1-input2">
              <label htmlFor="contact-form-2-email" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EA_-b4'),
                  }}
                ></span>
              </label>
              <input
                type="email"
                id="contact-form-2-email"
                required="true"
                placeholder="Email"
                className="contact1-text-input2 thq-input"
              />
            </div>
            <div className="contact1-input3">
              <label
                htmlFor="contact-form-2-message"
                className="thq-body-small"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tfpSKQ'),
                  }}
                ></span>
              </label>
              <textarea
                id="contact-form-2-message"
                rows="3"
                placeholder="Scrieți mesajul aici"
                className="contact1-textarea thq-input"
              ></textarea>
            </div>
            <div className="contact1-checkbox1">
              <input
                type="checkbox"
                id="contact-form-2-check"
                checked="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-2-check" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z5k2ck'),
                  }}
                ></span>
              </label>
            </div>
            <button type="submit" className="contact1-button thq-button-filled">
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact1-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kqMC7d'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact1-contact5 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact1-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact1-contact-info {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact1-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact1-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact1-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .contact1-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact1-input1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact1-text-input1 {
            width: 100%;
          }
          .contact1-input2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact1-text-input2 {
            width: 100%;
          }
          .contact1-input3 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact1-textarea {
            width: 100%;
          }
          .contact1-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact1-button {
            border-color: #70a846;
            background-color: #70a846;
          }
          .contact1-text16 {
            display: inline-block;
          }
          .contact1-text17 {
            display: inline-block;
          }
          .contact1-text18 {
            display: inline-block;
          }
          .contact1-text19 {
            display: inline-block;
          }
          .contact1-text20 {
            display: inline-block;
          }
          .contact1-text21 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .contact1-max-width {
              flex-direction: column;
            }
            .contact1-content {
              width: 100%;
            }
            .contact1-form {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact1.defaultProps = {
  contactSection1Id: '',
  action: undefined,
  heading1: undefined,
  email: undefined,
  rootClassName: '',
  phone: undefined,
  content1: undefined,
  adress: undefined,
}

Contact1.propTypes = {
  contactSection1Id: PropTypes.string,
  action: PropTypes.element,
  heading1: PropTypes.element,
  email: PropTypes.element,
  rootClassName: PropTypes.string,
  phone: PropTypes.element,
  content1: PropTypes.element,
  adress: PropTypes.element,
}

export default Contact1
