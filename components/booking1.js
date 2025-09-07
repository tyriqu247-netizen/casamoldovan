import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Booking1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`booking1-pricing1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="booking1-max-width thq-section-max-width">
          <div className="booking1-content thq-card">
            <div className="booking1-price">
              <p className="booking1-text1 thq-body-large">
                {props.plan1 ?? (
                  <Fragment>
                    <span className="booking1-text4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kfmqBp'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <a
              href="https://www.booking.com/hotel/ro/casa-moldovan-coltisorul-meu-de-rai-ocna-sugatag1.ro.html?aid=318615&amp;label=New_English_EN_IE_20153704825-FYUwHK1Cx8hIZpAQIPOUJQS640874805295%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=0d037d2d888fb1d68f09e5707b604c9f&amp;dest_id=-1165458&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1756987000&amp;srpvid=170253f99eaa0657&amp;type=total&amp;ucfs=1&amp;lang=ro&amp;soz=1&amp;lang_changed=1#tab-reviews"
              target="_blank"
              rel="noreferrer noopener"
              className="booking1-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.plan1Action ?? (
                  <Fragment>
                    <span className="booking1-text3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_abSM3J'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .booking1-pricing1 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .booking1-max-width {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .booking1-content {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: center;
            flex-shrink: 0;
            border-color: var(--dl-color-theme-neutral-dark);
            border-style: solid;
            border-width: 1px;
            flex-direction: column;
          }
          .booking1-price {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .booking1-text1 {
            font-style: normal;
            font-weight: 600;
          }
          .booking1-button {
            width: 100%;
            border-color: #609e4b;
            text-decoration: none;
            background-color: #609e4b;
          }
          .booking1-text3 {
            display: inline-block;
          }
          .booking1-text4 {
            display: inline-block;
          }

          @media (max-width: 479px) {
            .booking1-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .booking1-button {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Booking1.defaultProps = {
  plan1Action: undefined,
  rootClassName: '',
  plan1: undefined,
}

Booking1.propTypes = {
  plan1Action: PropTypes.element,
  rootClassName: PropTypes.string,
  plan1: PropTypes.element,
}

export default Booking1
