import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Header = (props) => {
  const translate = useTranslations()
  return (
    <>
      <header className="header-container">
        <header data-thq="thq-navbar" className="header-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="header-image1"
          />
          <div data-thq="thq-navbar-nav" className="header-desktop-menu">
            <nav className="header-links1">
              <a href={props.link2Url} className="thq-body-small thq-link">
                {props.link2 ?? (
                  <Fragment>
                    <span className="header-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wIhdru'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="thq-body-small thq-link">
                {props.link3 ?? (
                  <Fragment>
                    <span className="header-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7azEeN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="thq-body-small thq-link">
                {props.link4 ?? (
                  <Fragment>
                    <span className="header-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ag2gwY'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link5Url} className="thq-body-small thq-link">
                {props.link5 ?? (
                  <Fragment>
                    <span className="header-text6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1aChex'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className="header-buttons1">
              <button className="header-action11 thq-button-animated thq-button-filled">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="header-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_v06YRO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="header-action21 thq-button-animated thq-button-outline">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="header-text9">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_D19XfW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div className="header-nav">
              <div className="header-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="header-logo"
                />
                <div data-thq="thq-close-menu" className="header-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="header-links2">
                <a href={props.link1Url} className="thq-body-small thq-link">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="header-text8">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_h2-FvO'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url} className="thq-body-small thq-link">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="header-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_wIhdru'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="thq-body-small thq-link">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="header-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7azEeN'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url} className="thq-body-small thq-link">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="header-text7">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Ag2gwY'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link5Url} className="thq-body-small thq-link">
                  {props.link5 ?? (
                    <Fragment>
                      <span className="header-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_1aChex'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
            <div className="header-buttons2">
              <button>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('action1_34T5FW'),
                  }}
                ></span>
              </button>
              <button>
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('action2_RAL9Io'),
                  }}
                ></span>
              </button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .header-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .header-image1 {
            height: 3rem;
          }
          .header-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .header-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .header-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .header-action11 {
            display: flex;
            flex-direction: row;
          }
          .header-action21 {
            display: flex;
            flex-direction: row;
          }
          .header-burger-menu {
            display: none;
          }
          .header-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .header-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header-logo {
            height: 3rem;
          }
          .header-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          .header-text3 {
            display: inline-block;
          }
          .header-text4 {
            display: inline-block;
          }
          .header-text5 {
            display: inline-block;
          }
          .header-text6 {
            display: inline-block;
          }
          .header-text7 {
            display: inline-block;
          }
          .header-text8 {
            display: inline-block;
          }
          .header-text9 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .header-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .header-desktop-menu {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .header-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .header-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  link3: undefined,
  link2: undefined,
  action1: undefined,
  link5: undefined,
  logoAlt: 'Your Company Name',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4: undefined,
  link4Url: 'https://www.teleporthq.io',
  link5Url: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
  link2Url: 'https://www.teleporthq.io',
  link1: undefined,
  link1Url: 'https://www.teleporthq.io',
  action2: undefined,
}

Header.propTypes = {
  link3: PropTypes.element,
  link2: PropTypes.element,
  action1: PropTypes.element,
  link5: PropTypes.element,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link4: PropTypes.element,
  link4Url: PropTypes.string,
  link5Url: PropTypes.string,
  link3Url: PropTypes.string,
  link2Url: PropTypes.string,
  link1: PropTypes.element,
  link1Url: PropTypes.string,
  action2: PropTypes.element,
}

export default Header
