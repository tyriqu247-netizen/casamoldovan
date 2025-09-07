import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer
        className={`footer1-footer7 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer1-max-width thq-section-max-width">
          <div className="footer1-content">
            <div className="footer1-logo1">
              <img
                alt="/untitled%20design1-1500h.png"
                src="/untitled%20design1-1500h.png"
                className="footer1-logo2"
              />
            </div>
            <div className="footer1-links">
              <a
                href={props.textUrl1}
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link1"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="footer1-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zVYnX-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.textUrl2}
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link2"
              >
                {props.text2 ?? (
                  <Fragment>
                    <span className="footer1-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wKfw-N'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.textUrl3}
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link3"
              >
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer1-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-ZmsKh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.textUrl4}
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link4"
              >
                {props.text4 ?? (
                  <Fragment>
                    <span className="footer1-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zrHwYY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a
                href={props.textUrl5}
                target="_blank"
                rel="noreferrer noopener"
                className="footer1-link5"
              >
                {props.text5 ?? (
                  <Fragment>
                    <span className="footer1-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9IryZ8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer1-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer1-row">
              <div className="footer1-container">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_P3tZqw'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer1-footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer1-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .footer1-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .footer1-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer1-logo1 {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer1-logo2 {
            height: 2rem;
          }
          .footer1-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer1-link1 {
            align-self: center;
          }
          .footer1-link2 {
            align-self: center;
          }
          .footer1-link3 {
            align-self: center;
          }
          .footer1-link4 {
            align-self: center;
          }
          .footer1-link5 {
            align-self: center;
          }
          .footer1-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer1-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer1-container {
            display: flex;
            align-items: flex-start;
          }
          .footer1-footer-links {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer1-text2 {
            display: inline-block;
          }
          .footer1-text3 {
            display: inline-block;
          }
          .footer1-text4 {
            display: inline-block;
          }
          .footer1-text5 {
            display: inline-block;
          }
          .footer1-text6 {
            display: inline-block;
          }
          .footer1root-class-name {
            background-color: #ffffff;
          }
          @media (max-width: 767px) {
            .footer1-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer1-links {
              flex-direction: column;
            }
            .footer1-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text1: undefined,
  textUrl1: 'https://example.com',
  text2: undefined,
  text3: undefined,
  textUrl2: 'https://example.com',
  rootClassName: '',
  text5: undefined,
  textUrl4: 'https://example.com',
  text4: undefined,
  textUrl5: 'https://example.com',
  textUrl3: 'https://example.com',
}

Footer1.propTypes = {
  text1: PropTypes.element,
  textUrl1: PropTypes.string,
  text2: PropTypes.element,
  text3: PropTypes.element,
  textUrl2: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.element,
  textUrl4: PropTypes.string,
  text4: PropTypes.element,
  textUrl5: PropTypes.string,
  textUrl3: PropTypes.string,
}

export default Footer1
