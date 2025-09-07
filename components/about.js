import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const About = (props) => {
  const translate = useTranslations()
  return (
    <>
      <a href="#about" id={props.aboutId} className="about-link">
        <section
          className={`about-layout349 thq-section-padding ${props.rootClassName} `}
        >
          <div className="about-max-width thq-section-max-width">
            <div className="about-content1">
              <div className="about-section-title">
                <div className="about-content2">
                  <h2 className="thq-heading-2">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="about-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pdttWR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-large">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="about-text3">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pyhEyu'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="about-image-container">
              <img
                alt="/img_1590-1400w.jpg"
                src="/img_1590-1400w.jpg"
                className="about-placeholder-image thq-img-ratio-16-9"
              />
            </div>
          </div>
        </section>
      </a>
      <style jsx>
        {`
          .about-link {
            display: contents;
          }
          .about-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
          .about-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .about-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .about-placeholder-image {
            height: 412px;
          }
          .about-text3 {
            display: inline-block;
          }
          .about-text4 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .about-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

About.defaultProps = {
  aboutId: '',
  feature1Description: undefined,
  feature1Title: undefined,
  rootClassName: '',
}

About.propTypes = {
  aboutId: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default About
