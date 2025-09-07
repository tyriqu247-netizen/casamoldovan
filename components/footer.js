import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  const translate = useTranslations()
  return (
    <>
      <footer
        className={`footer-footer7 thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="footer-content">
            <div className="footer-logo1">
              <img
                alt="/untitled%20design1-1500h.png"
                src="/untitled%20design1-1500h.png"
                className="footer-logo2"
              />
            </div>
            <div className="footer-links">
              <a
                href={props.textUrl1}
                target="_blank"
                rel="noreferrer noopener"
                className="footer-link1"
              >
                {props.text1 ?? (
                  <Fragment>
                    <span className="footer-text5">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0kkxnK'),
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
                className="footer-link2"
              >
                {props.text2 ?? (
                  <Fragment>
                    <span className="footer-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_T7bcYp'),
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
                className="footer-link3"
              >
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer-text2">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Drf3mL'),
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
                className="footer-link4"
              >
                {props.text4 ?? (
                  <Fragment>
                    <span className="footer-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_HKFpxb'),
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
                className="footer-link5"
              >
                {props.text5 ?? (
                  <Fragment>
                    <span className="footer-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZnLsxk'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer-row">
              <div className="footer-container">
                <span className="thq-body-small">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_dGLHdk'),
                    }}
                  ></span>
                </span>
              </div>
              <div className="footer-footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-footer7 {
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
          .footer-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #ffffff;
          }
          .footer-content {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer-logo1 {
            gap: 24px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-logo2 {
            height: 2rem;
          }
          .footer-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer-link1 {
            align-self: center;
          }
          .footer-link2 {
            align-self: center;
          }
          .footer-link3 {
            align-self: center;
          }
          .footer-link4 {
            align-self: center;
          }
          .footer-link5 {
            align-self: center;
          }
          .footer-credits {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-container {
            display: flex;
            align-items: flex-start;
          }
          .footer-footer-links {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
          }
          .footer-text2 {
            display: inline-block;
          }
          .footer-text3 {
            display: inline-block;
          }
          .footer-text4 {
            display: inline-block;
          }
          .footer-text5 {
            display: inline-block;
          }
          .footer-text6 {
            display: inline-block;
          }
          .footerroot-class-name {
            background-color: #ffffff;
          }
          .footerroot-class-name1 {
            background-color: #ffffff;
          }
          @media (max-width: 767px) {
            .footer-row {
              gap: var(--dl-layout-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .footer-links {
              flex-direction: column;
            }
            .footer-footer-links {
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

Footer.defaultProps = {
  text3: undefined,
  rootClassName: '',
  textUrl3: 'https://example.com',
  text2: undefined,
  textUrl1: 'https://example.com',
  text5: undefined,
  text1: undefined,
  text4: undefined,
  textUrl5: 'https://example.com',
  textUrl4: 'https://example.com',
  textUrl2: 'https://example.com',
}

Footer.propTypes = {
  text3: PropTypes.element,
  rootClassName: PropTypes.string,
  textUrl3: PropTypes.string,
  text2: PropTypes.element,
  textUrl1: PropTypes.string,
  text5: PropTypes.element,
  text1: PropTypes.element,
  text4: PropTypes.element,
  textUrl5: PropTypes.string,
  textUrl4: PropTypes.string,
  textUrl2: PropTypes.string,
}

export default Footer
