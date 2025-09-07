import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Location1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.locationSection1Id}
        className={`location1-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="location1-max-width thq-section-max-width">
          <div className="location1-section-title">
            <div className="location1-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="location1-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_bH6odW'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="location1-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="location1-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-ftdHj'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="location1-content2 thq-flex-row">
            <div className="location1-content3">
              <div className="location1-content4">
                <div className="location1-contact-info1">
                  <h3 className="location1-text12 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KDPBEH'),
                      }}
                    ></span>
                  </h3>
                  <p className="location1-text13 thq-body-large">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="location1-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_an9KJR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className="location1-content5">
                <div className="location1-contact-info2">
                  <h3 className="location1-text14 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_X9LrEH'),
                      }}
                    ></span>
                  </h3>
                  <p className="location1-text15 thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="location1-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rahG5o'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .location1-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-max-width {
            align-self: center;
          }
          .location1-section-title {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .location1-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-text11 {
            width: 1005px;
          }
          .location1-content2 {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .location1-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 1040px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-contact-info1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .location1-text13 {
            width: 1040px;
          }
          .location1-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-contact-info2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location1-text14 {
            align-self: flex-start;
            text-align: center;
          }
          .location1-text15 {
            width: 1011px;
          }
          .location1-text16 {
            display: inline-block;
          }
          .location1-text17 {
            display: inline-block;
          }
          .location1-text18 {
            display: inline-block;
          }
          .location1-text19 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .location1-content2 {
              position: relative;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Location1.defaultProps = {
  content2: undefined,
  locationSection1Id: '',
  heading1: undefined,
  content1: undefined,
  content3: undefined,
  rootClassName: '',
}

Location1.propTypes = {
  content2: PropTypes.element,
  locationSection1Id: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  content3: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Location1
