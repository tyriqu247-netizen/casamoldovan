import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Contact = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.contactSectionId}
        className={`contact-contact5 thq-section-padding ${props.rootClassName} `}
      >
        <div className="thq-section-max-width thq-flex-row contact-max-width">
          <div className="thq-flex-column contact-content">
            <div className="contact-section-title">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-text21">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_PJYAG5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_JXq1mc'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="contact-contact-info thq-flex-column">
              <div className="contact-row1 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.email ?? (
                    <Fragment>
                      <span className="contact-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ofjJOu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-row2 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.phone ?? (
                    <Fragment>
                      <span className="contact-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-8LVhC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="contact-row3 thq-flex-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small">
                  {props.adress ?? (
                    <Fragment>
                      <span className="contact-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_wyKdn8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="contact-input1">
              <label htmlFor="contact-form-2-name" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kqXxrR'),
                  }}
                ></span>
              </label>
              <input
                type="text"
                id="contact-form-2-name"
                placeholder="Name"
                className="contact-text-input1 thq-input"
              />
            </div>
            <div className="contact-input2">
              <label htmlFor="contact-form-2-email" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GCx42n'),
                  }}
                ></span>
              </label>
              <input
                type="email"
                id="contact-form-2-email"
                required="true"
                placeholder="Email"
                className="contact-text-input2 thq-input"
              />
            </div>
            <div className="contact-input3">
              <label
                htmlFor="contact-form-2-message"
                className="thq-body-small"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NjYKlm'),
                  }}
                ></span>
              </label>
              <textarea
                id="contact-form-2-message"
                rows="3"
                placeholder="Enter your message"
                className="contact-textarea thq-input"
              ></textarea>
            </div>
            <div className="contact-checkbox1">
              <input
                type="checkbox"
                id="contact-form-2-check"
                checked="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-2-check" className="thq-body-small">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_X2bzww'),
                  }}
                ></span>
              </label>
            </div>
            <button type="submit" className="contact-button thq-button-filled">
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-text20">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__b76qd'),
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
          .contact-contact5 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-section-title {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contact-info {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-row1 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-row2 {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .contact-form {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .contact-input1 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text-input1 {
            width: 100%;
          }
          .contact-input2 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text-input2 {
            width: 100%;
          }
          .contact-input3 {
            gap: 8px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-textarea {
            width: 100%;
          }
          .contact-checkbox1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
          }
          .contact-button {
            border-color: #70a846;
            background-color: #70a846;
          }
          .contact-text16 {
            display: inline-block;
          }
          .contact-text17 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
          .contact-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-max-width {
              flex-direction: column;
            }
            .contact-content {
              width: 100%;
            }
            .contact-form {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact.defaultProps = {
  adress: undefined,
  phone: undefined,
  contactSectionId: '',
  content1: undefined,
  email: undefined,
  rootClassName: '',
  action: undefined,
  heading1: undefined,
}

Contact.propTypes = {
  adress: PropTypes.element,
  phone: PropTypes.element,
  contactSectionId: PropTypes.string,
  content1: PropTypes.element,
  email: PropTypes.element,
  rootClassName: PropTypes.string,
  action: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact
