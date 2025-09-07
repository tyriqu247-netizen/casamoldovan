import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const About1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <a href="#about" id={props.about1Id} className="about1-link">
        <div
          className={`about1-layout349 thq-section-padding ${props.rootClassName} `}
        >
          <div className="about1-max-width thq-section-max-width">
            <div className="about1-content1">
              <div className="about1-section-title">
                <div className="about1-content2">
                  <h2 className="thq-heading-2">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="about1-text3">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_EDWTIH'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-large">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="about1-text4">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_oZ0vm-'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="about1-image-container">
              <img
                alt="/img_1590-1400w.jpg"
                src="/img_1590-1400w.jpg"
                className="about1-placeholder-image thq-img-ratio-16-9"
              />
            </div>
          </div>
        </div>
      </a>
      <style jsx>
        {`
          .about1-link {
            display: contents;
          }
          .about1-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
          .about1-max-width {
            gap: var(--dl-layout-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .about1-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about1-section-title {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about1-content2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .about1-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .about1-placeholder-image {
            height: 412px;
          }
          .about1-text3 {
            display: inline-block;
          }
          .about1-text4 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .about1-max-width {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </>
  )
}

About1.defaultProps = {
  rootClassName: '',
  feature1Title: undefined,
  feature1Description: undefined,
  about1Id: '',
}

About1.propTypes = {
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  about1Id: PropTypes.string,
}

export default About1
