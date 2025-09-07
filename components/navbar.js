import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <header id={props.navbarId} className="navbar-container1">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            alt="/logo_resized-200h.png"
            src="/logo_resized-200h.png"
            className="navbar-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links1">
              <div className="navbar-container2">
                <div className="navbar-container3">
                  <div className="navbar-container4">
                    <div className="navbar-container5">
                      <a
                        href={props.link1Url}
                        className="navbar-link11 thq-body-small thq-link"
                      >
                        {props.link1 ?? (
                          <Fragment>
                            <span className="navbar-text3">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_N_72Pl'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </a>
                      <a
                        href={props.link2Url}
                        className="navbar-link21 thq-body-small thq-link"
                      >
                        {props.link2 ?? (
                          <Fragment>
                            <span className="navbar-text5">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tjZvJU'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </a>
                      <a
                        href={props.link3Url}
                        className="navbar-link31 thq-body-small thq-link"
                      >
                        {props.link3 ?? (
                          <Fragment>
                            <span className="navbar-text4">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_VBfbMW'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </a>
                      <a
                        href={props.link4Url}
                        className="navbar-link41 thq-body-small thq-link"
                      >
                        {props.link4 ?? (
                          <Fragment>
                            <span className="navbar-text6">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_mMydqX'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
                <Link href="/acasa">
                  <a className="navbar-link6 button">
                    <span>
                      {props.text ?? (
                        <Fragment>
                          <span className="navbar-text7">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_D4icbz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </Link>
              </div>
            </nav>
            <div className="navbar-icon-group1">
              <a
                href="https://www.instagram.com/coltderai2021?igsh=MWZyYzc0Yzl0eWNxOA=="
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link7"
              >
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  className="navbar-icon10"
                >
                  <circle
                    cx="22.406"
                    cy="9.594"
                    r="1.44"
                    fill="currentColor"
                  ></circle>
                  <path
                    fill="currentColor"
                    d="M16 9.838A6.162 6.162 0 1 0 22.162 16A6.16 6.16 0 0 0 16 9.838M16 20a4 4 0 1 1 4-4a4 4 0 0 1-4 4"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M16 6.162c3.204 0 3.584.012 4.849.07a6.6 6.6 0 0 1 2.228.413a3.98 3.98 0 0 1 2.278 2.278a6.6 6.6 0 0 1 .413 2.228c.058 1.265.07 1.645.07 4.85s-.012 3.583-.07 4.848a6.6 6.6 0 0 1-.413 2.228a3.98 3.98 0 0 1-2.278 2.278a6.6 6.6 0 0 1-2.228.413c-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07a6.6 6.6 0 0 1-2.228-.413a3.98 3.98 0 0 1-2.278-2.278a6.6 6.6 0 0 1-.413-2.228c-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849a6.6 6.6 0 0 1 .413-2.228a3.98 3.98 0 0 1 2.278-2.278a6.6 6.6 0 0 1 2.228-.413c1.265-.058 1.645-.07 4.849-.07M16 4c-3.259 0-3.668.014-4.948.072a8.8 8.8 0 0 0-2.912.558a6.14 6.14 0 0 0-3.51 3.51a8.8 8.8 0 0 0-.558 2.913C4.014 12.333 4 12.74 4 16s.014 3.668.072 4.948a8.8 8.8 0 0 0 .558 2.912a6.14 6.14 0 0 0 3.51 3.51a8.8 8.8 0 0 0 2.913.558c1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072a8.8 8.8 0 0 0 2.913-.558a6.14 6.14 0 0 0 3.51-3.51a8.8 8.8 0 0 0 .557-2.913C27.986 19.667 28 19.26 28 16s-.014-3.668-.072-4.948a8.8 8.8 0 0 0-.558-2.912a6.14 6.14 0 0 0-3.51-3.51a8.8 8.8 0 0 0-2.913-.557C19.667 4.013 19.26 4 16 4"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/19mqMo3Q5d/?mibextid=wwXlfr"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link8"
              >
                <svg
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  className="navbar-icon14"
                >
                  <path
                    fill="currentColor"
                    d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@coltisorulmeuderai2?_t=ZN-8zWp6DxXxG&amp;_r=1"
                target="_blank"
                rel="noreferrer noopener"
                className="navbar-link9"
              >
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  className="navbar-icon16"
                >
                  <path
                    fill="currentColor"
                    d="M19.321 5.562a5 5 0 0 1-.443-.258a6.2 6.2 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943q.002.3-.008.595l-.004.073q0 .016-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604a3.2 3.2 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.18 7.18 0 0 0-5.532 1.62a7.6 7.6 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246c-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.9 7.9 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187c.359-.015 1.562 0 2.928-.647c1.515-.718 2.377-1.787 2.377-1.787a7.4 7.4 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon18">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon20">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links2">
                <a href={props.link1Url} className="thq-body-small thq-link">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar-text3">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_N_72Pl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url} className="thq-body-small thq-link">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar-text5">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tjZvJU'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="thq-body-small thq-link">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar-text4">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_VBfbMW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url} className="thq-body-small thq-link">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar-text6">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_mMydqX'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link5Url} className="thq-body-small thq-link">
                  {props.link5 ?? (
                    <Fragment>
                      <span className="navbar-text2">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_nSKLtI'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
            <div className="navbar-icon-group2">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: idth;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar-image1 {
            width: auto;
            height: var(--dl-layout-size-medium);
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-right: var(--dl-layout-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .navbar-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-container5 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link11 {
            margin-right: var(--dl-layout-space-threeunits);
          }
          .navbar-link21 {
            margin-right: var(--dl-layout-space-threeunits);
          }
          .navbar-link31 {
            margin-right: var(--dl-layout-space-threeunits);
          }
          .navbar-link41 {
            margin-right: var(--dl-layout-space-threeunits);
          }
          .navbar-link6 {
            color: #ffffff;
            display: flex;
            border-color: #ffffff;
            border-width: 2px;
            border-radius: var(--dl-layout-radius-buttonradius);
            justify-content: flex-end;
            text-decoration: none;
            background-color: #458245;
          }
          .navbar-icon-group1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar-link7 {
            display: contents;
          }
          .navbar-icon10 {
            text-decoration: none;
          }
          .navbar-link8 {
            display: contents;
          }
          .navbar-icon14 {
            text-decoration: none;
          }
          .navbar-link9 {
            display: contents;
          }
          .navbar-icon16 {
            text-decoration: none;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon18 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon20 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-icon-group2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
          }
          .navbar-text2 {
            display: inline-block;
          }
          .navbar-text3 {
            display: inline-block;
          }
          .navbar-text4 {
            display: inline-block;
          }
          .navbar-text5 {
            display: inline-block;
          }
          .navbar-text6 {
            display: inline-block;
          }
          .navbar-text7 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .navbar-image1 {
              width: auto;
              height: var(--dl-layout-size-small);
            }
            .navbar-container5 {
              justify-content: flex-end;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-icon18 {
              width: var(--dl-layout-size-small);
              height: var(--dl-layout-size-small);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-icon18 {
              width: var(--dl-layout-size-small);
            }
            .navbar-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link5: undefined,
  link1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link4Url: 'https://www.teleporthq.io',
  logoAlt: 'Company Logo',
  link3: undefined,
  link3Url: 'https://www.teleporthq.io',
  link2: undefined,
  link2Url: 'https://www.teleporthq.io',
  link4: undefined,
  link1Url: 'https://www.teleporthq.io',
  link5Url: 'https://www.teleporthq.io',
  text: undefined,
  navbarId: '',
}

Navbar.propTypes = {
  link5: PropTypes.element,
  link1: PropTypes.element,
  logoSrc: PropTypes.string,
  link4Url: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link3Url: PropTypes.string,
  link2: PropTypes.element,
  link2Url: PropTypes.string,
  link4: PropTypes.element,
  link1Url: PropTypes.string,
  link5Url: PropTypes.string,
  text: PropTypes.element,
  navbarId: PropTypes.string,
}

export default Navbar
