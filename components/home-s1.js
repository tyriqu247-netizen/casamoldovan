import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeS1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`home-s1-container1 thq-section-padding ${props.rootClassName} `}
      >
        <img
          alt="/external/terrace-1500w-1500w.jpg"
          src="/external/terrace-1500w-1500w.jpg"
          className="home-s1-image thq-img-ratio-16-9"
        />
        <div className="home-s1-max-width thq-section-max-width">
          <div className="home-s1-container2">
            <h2 className="home-s1-title thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-s1-text2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZqSX-9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <h3 className="home-s1-text1 thq-heading-3">
              {props.content1 ?? (
                <Fragment>
                  <span className="home-s1-text3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_okK8jU'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
          </div>
          <button
            id="https://www.booking.com/hotel/ro/casa-moldovan-coltisorul-meu-de-rai-ocna-sugatag1.en-gb.html?aid=318615&amp;label=New_English_EN_IE_20153704825-FYUwHK1Cx8hIZpAQIPOUJQS640874805295%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=0d037d2d888fb1d68f09e5707b604c9f&amp;dest_id=-1165458&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1756987000&amp;srpvid=170253f99eaa0657&amp;type=total&amp;ucfs=1&amp;"
            type="button"
            className="home-s1-button thq-button-filled"
          >
            <a href={props.textUrl} target="_blank" rel="noreferrer noopener">
              {props.text ?? (
                <Fragment>
                  <span className="home-s1-text4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ml81AH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </a>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .home-s1-container1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-s1-image {
            left: 0px;
            width: 100%;
            bottom: 0px;
            height: 100%;
            position: absolute;
          }
          .home-s1-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-s1-container2 {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            z-index: 100;
            align-items: center;
            flex-direction: column;
          }
          .home-s1-title {
            color: #ffffff;
            text-align: center;
          }
          .home-s1-text1 {
            color: #fffefe;
            text-align: center;
          }
          .home-s1-button {
            border-color: #fffdfd;
            background-color: #326f32;
          }
          .home-s1-text2 {
            display: inline-block;
          }
          .home-s1-text3 {
            display: inline-block;
          }
          .home-s1-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

HomeS1.defaultProps = {
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  text: undefined,
  textUrl: 'https://example.com',
}

HomeS1.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  text: PropTypes.element,
  textUrl: PropTypes.string,
}

export default HomeS1
