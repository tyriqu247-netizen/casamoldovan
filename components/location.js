import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Location = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        id={props.locationSectionId}
        className={`location-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="location-max-width thq-section-max-width">
          <div className="location-section-title">
            <div className="location-content1">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="location-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Vg4HtB'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="location-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="location-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OiQ7Ir'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="location-content2 thq-flex-row">
            <div className="location-content3">
              <div className="location-content4">
                <div className="location-contact-info1">
                  <h3 className="location-text12 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UJvUUY'),
                      }}
                    ></span>
                  </h3>
                  <p className="location-text13 thq-body-large">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="location-text16">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Wcy-na'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
              <div className="location-content5">
                <div className="location-contact-info2">
                  <h3 className="location-text14 thq-heading-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_kS3HYV'),
                      }}
                    ></span>
                  </h3>
                  <p className="location-text15 thq-body-large">
                    {props.content3 ?? (
                      <Fragment>
                        <span className="location-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_CeO1V2'),
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
          .location-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-max-width {
            align-self: center;
          }
          .location-section-title {
            width: 100%;
            margin-bottom: var(--dl-layout-space-threeunits);
          }
          .location-content1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-text11 {
            width: 1005px;
          }
          .location-content2 {
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .location-content3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 1040px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-content4 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-contact-info1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-text12 {
            align-self: flex-start;
            text-align: center;
          }
          .location-text13 {
            width: 1040px;
          }
          .location-content5 {
            gap: 16px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-contact-info2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .location-text14 {
            align-self: flex-start;
            text-align: center;
          }
          .location-text15 {
            width: 1011px;
          }
          .location-text16 {
            display: inline-block;
          }
          .location-text17 {
            display: inline-block;
          }
          .location-text18 {
            display: inline-block;
          }
          .location-text19 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .location-content2 {
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

Location.defaultProps = {
  content2: undefined,
  content1: undefined,
  rootClassName: '',
  locationSectionId: '',
  heading1: undefined,
  content3: undefined,
}

Location.propTypes = {
  content2: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
  locationSectionId: PropTypes.string,
  heading1: PropTypes.element,
  content3: PropTypes.element,
}

export default Location
