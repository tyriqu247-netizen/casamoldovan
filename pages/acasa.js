import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar1 from '../components/navbar1'
import HomeS1 from '../components/home-s1'
import HomeG1 from '../components/home-g1'
import About1 from '../components/about1'
import Review1 from '../components/review1'
import Services1 from '../components/services1'
import Facilities1 from '../components/facilities1'
import Awards1 from '../components/awards1'
import Accommodation1 from '../components/accommodation1'
import Bookings1 from '../components/bookings1'
import Reviews1 from '../components/reviews1'
import Booking1 from '../components/booking1'
import Location1 from '../components/location1'
import AppComponent from '../components/component'
import Contact1 from '../components/contact1'
import Footer1 from '../components/footer1'

const Acasa = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="acasa-container">
        <Head>
          <title>Acasa - Casa Moldovan</title>
          <meta property="og:title" content="Acasa - Casa Moldovan" />
        </Head>
        <Navbar1
          link1={
            <Fragment>
              <span className="acasa-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_woRSro'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="acasa-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PthVuT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="acasa-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iqDQnX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="acasa-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vjqn41'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="acasa-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dkci-F'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="acasa-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_udS2kH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1Url="#About1"
          rootClassName="navbar1root-class-name"
          link2Url="#Accommodation1"
          link3Url="#Location1"
          link4Url="#Contact1"
          navbar1Id="Navbar1"
          locale={props?.locale ?? ''}
        ></Navbar1>
        <HomeS1
          heading1={
            <Fragment>
              <span className="acasa-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pYDGg1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NWTBSP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="acasa-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aWi7q3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="home-s1root-class-name"
          textUrl="#Bookings1"
          locale={props?.locale ?? ''}
        ></HomeS1>
        <HomeG1
          content1={
            <Fragment>
              <span className="acasa-text109">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rUFFWg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z1jeZl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="home-g1root-class-name"
          locale={props?.locale ?? ''}
        ></HomeG1>
        <About1
          about1Id="About1"
          feature1Title={
            <Fragment>
              <span className="acasa-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tRLSQh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="about1root-class-name"
          aboutSection1Id="About1"
          feature1Description={
            <Fragment>
              <span className="acasa-text112">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PHvNib'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></About1>
        <Review1
          content1={
            <Fragment>
              <span className="acasa-text113">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XhGznl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text114">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ULPfHu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="acasa-text115">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0UIqOu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="acasa-text116">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q2qHFw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name1={
            <Fragment>
              <span className="acasa-text117">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nXOtsi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="review1root-class-name"
          locale={props?.locale ?? ''}
        ></Review1>
        <Services1
          plan1={
            <Fragment>
              <span className="acasa-text118">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b8yQIz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text119">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_crC4g7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text120">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dlgKVy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Detail={
            <Fragment>
              <span className="acasa-text121">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__y5Las'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="acasa-text122">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_u7NQgF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="acasa-text123">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JtpI6-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="acasa-text124">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_779Q2U'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature4={
            <Fragment>
              <span className="acasa-text125">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2CuNLh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature5={
            <Fragment>
              <span className="acasa-text126">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__6TvJR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature6={
            <Fragment>
              <span className="acasa-text127">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UuNF09'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature7={
            <Fragment>
              <span className="acasa-text128">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9wcJoU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature8={
            <Fragment>
              <span className="acasa-text129">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NZQkdx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature9={
            <Fragment>
              <span className="acasa-text130">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NZkf9I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Includes={
            <Fragment>
              <span className="acasa-text131">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eM6vzU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="services1root-class-name"
          plan1Feature10={
            <Fragment>
              <span className="acasa-text132">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ktmhgw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Services1>
        <Facilities1
          heading1={
            <Fragment>
              <span className="acasa-text133">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xG52Vt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="facilities1root-class-name"
          locale={props?.locale ?? ''}
        ></Facilities1>
        <Awards1
          plan1={
            <Fragment>
              <span className="acasa-text134">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WTSnvh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="acasa-text135">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NAxX_7'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="acasa-text136">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ne0dhK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text137">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nRj358'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text138">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i6ysMt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="acasa-text139">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ICpQmX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="acasa-text140">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M_R_xH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="acasa-text141">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OC2xx1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="acasa-text142">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_27qGPa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="acasa-text143">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vjtHxi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="acasa-text144">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pQcNIf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="acasa-text145">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AXxjoo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="acasa-text146">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8qUNC-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="acasa-text147">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0zfTBX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="acasa-text148">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cuRBsO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="acasa-text149">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NRYU3V'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="acasa-text150">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ok8xHU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="acasa-text151">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q3KjT6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="acasa-text152">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5BuuLW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="acasa-text153">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yMwYzK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="acasa-text154">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j5p1lB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="acasa-text155">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KK4IDj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="acasa-text156">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Cf8004'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="acasa-text157">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ms9Pz6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="acasa-text158">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UWX4f0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="acasa-text159">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T00sU8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="acasa-text160">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__FZFc5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="acasa-text161">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8mDxJS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="acasa-text162">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kxs8A6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="acasa-text163">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SVo5x_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="acasa-text164">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_taPuCT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="awards1root-class-name"
          plan1Feature11={
            <Fragment>
              <span className="acasa-text165">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4QOW1v'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="acasa-text166">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xna3gK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="acasa-text167">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R-yD5C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Awards1>
        <Accommodation1
          heading1={
            <Fragment>
              <span className="acasa-text168">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bczuea'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="accommodation1root-class-name"
          accommodationSection1Id="Accommodation1"
          locale={props?.locale ?? ''}
        ></Accommodation1>
        <Bookings1
          heading1={
            <Fragment>
              <span className="acasa-text169">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z5i5CH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text170">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UAdrNU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="acasa-text171">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U0tk8T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="acasa-text172">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__SFCWC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="acasa-text173">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VaCiDg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="acasa-text174">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jMQ4sX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="acasa-text175">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0fbrCd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="acasa-text176">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iNI94m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="acasa-text177">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_llBtNk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="acasa-text178">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DM_bYV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="acasa-text179">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wgIBbZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="acasa-text180">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y_qahI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="acasa-text181">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_45hrF6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="acasa-text182">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fqcpvN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="acasa-text183">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_E5fQ_j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="acasa-text184">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yhWEa_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="acasa-text185">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xox0nw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="acasa-text186">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wzwbHK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="acasa-text187">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xmM3iq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="acasa-text188">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R2NxYi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="acasa-text189">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A9yIFk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="acasa-text190">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sz1f0r'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="acasa-text191">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UB8rQh'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="acasa-text192">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_d1aef1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="acasa-text193">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JKdCm3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="acasa-text194">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FeYC_g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="acasa-text195">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tDA7Rp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="acasa-text196">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T8kilz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="acasa-text197">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xbgsfz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="acasa-text198">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yoRYOi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="acasa-text199">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ABHFiR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="acasa-text200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hPa57u'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="acasa-text201">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aBwrDk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="acasa-text202">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R6a3q3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="acasa-text203">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k34MCF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="acasa-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sGF8im'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="acasa-text205">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8pwjwm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="bookings1root-class-name"
          bookings1Id="Bookings1"
          locale={props?.locale ?? ''}
        ></Bookings1>
        <Reviews1
          review1={
            <Fragment>
              <span className="acasa-text206">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WUEM9K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="acasa-text207">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LhmdU1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="acasa-text208">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CPnQtM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="acasa-text209">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lhYk9I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text210">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_B9YUg5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text211">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A9ZiZm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="acasa-text212">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Mkv_Ak'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="acasa-text213">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Wp_629'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="acasa-text214">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c0hmLZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="acasa-text215">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_49W7qp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="reviews1root-class-name"
          locale={props?.locale ?? ''}
        ></Reviews1>
        <Booking1
          plan1={
            <Fragment>
              <span className="acasa-text216">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rE_vYs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="acasa-text217">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NNEs96'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="booking1root-class-name"
          locale={props?.locale ?? ''}
        ></Booking1>
        <Location1
          content1={
            <Fragment>
              <span className="acasa-text218">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5xzuOy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="acasa-text219">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_m-_ueJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="acasa-text220">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JOXYr3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text221">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uS98DK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="location1root-class-name"
          locationSection1Id="Location1"
          locale={props?.locale ?? ''}
        ></Location1>
        <AppComponent
          rootClassName="app-componentroot-class-name"
          locale={props?.locale ?? ''}
        ></AppComponent>
        <Contact1
          email={
            <Fragment>
              <span className="acasa-text222">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kLnZo8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="acasa-text223">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o1GdDn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="acasa-text224">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_K-a-K6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="acasa-text225">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JYbSH8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="acasa-text226">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ayy7ck'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="acasa-text227">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lYMCOR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="contact1root-class-name"
          contactSection1Id="Contact1"
          locale={props?.locale ?? ''}
        ></Contact1>
        <Footer1
          text1={
            <Fragment>
              <span className="acasa-text228">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5snMBJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="acasa-text229">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HwR0I9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="acasa-text230">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9lUgSl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="acasa-text231">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jVuyx8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="acasa-text232">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gfS582'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl1="#Navbar1"
          textUrl2="#About1"
          textUrl3="#Accommodation1"
          textUrl4="#Location1"
          textUrl5="#Contact1"
          rootClassName="footer1root-class-name"
          locale={props?.locale ?? ''}
        ></Footer1>
      </div>
      <style jsx>
        {`
          .acasa-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .acasa-text100 {
            display: inline-block;
          }
          .acasa-text101 {
            display: inline-block;
          }
          .acasa-text102 {
            display: inline-block;
          }
          .acasa-text103 {
            display: inline-block;
          }
          .acasa-text104 {
            display: inline-block;
          }
          .acasa-text105 {
            display: inline-block;
          }
          .acasa-text106 {
            display: inline-block;
          }
          .acasa-text107 {
            display: inline-block;
          }
          .acasa-text108 {
            display: inline-block;
          }
          .acasa-text109 {
            display: inline-block;
          }
          .acasa-text110 {
            display: inline-block;
          }
          .acasa-text111 {
            display: inline-block;
          }
          .acasa-text112 {
            display: inline-block;
          }
          .acasa-text113 {
            display: inline-block;
          }
          .acasa-text114 {
            display: inline-block;
          }
          .acasa-text115 {
            display: inline-block;
          }
          .acasa-text116 {
            display: inline-block;
          }
          .acasa-text117 {
            display: inline-block;
          }
          .acasa-text118 {
            display: inline-block;
          }
          .acasa-text119 {
            display: inline-block;
          }
          .acasa-text120 {
            display: inline-block;
          }
          .acasa-text121 {
            display: inline-block;
          }
          .acasa-text122 {
            display: inline-block;
          }
          .acasa-text123 {
            display: inline-block;
          }
          .acasa-text124 {
            display: inline-block;
          }
          .acasa-text125 {
            display: inline-block;
          }
          .acasa-text126 {
            display: inline-block;
          }
          .acasa-text127 {
            display: inline-block;
          }
          .acasa-text128 {
            display: inline-block;
          }
          .acasa-text129 {
            display: inline-block;
          }
          .acasa-text130 {
            display: inline-block;
          }
          .acasa-text131 {
            display: inline-block;
          }
          .acasa-text132 {
            display: inline-block;
          }
          .acasa-text133 {
            display: inline-block;
          }
          .acasa-text134 {
            display: inline-block;
          }
          .acasa-text135 {
            display: inline-block;
          }
          .acasa-text136 {
            display: inline-block;
          }
          .acasa-text137 {
            display: inline-block;
          }
          .acasa-text138 {
            display: inline-block;
          }
          .acasa-text139 {
            display: inline-block;
          }
          .acasa-text140 {
            display: inline-block;
          }
          .acasa-text141 {
            display: inline-block;
          }
          .acasa-text142 {
            display: inline-block;
          }
          .acasa-text143 {
            display: inline-block;
          }
          .acasa-text144 {
            display: inline-block;
          }
          .acasa-text145 {
            display: inline-block;
          }
          .acasa-text146 {
            display: inline-block;
          }
          .acasa-text147 {
            display: inline-block;
          }
          .acasa-text148 {
            display: inline-block;
          }
          .acasa-text149 {
            display: inline-block;
          }
          .acasa-text150 {
            display: inline-block;
          }
          .acasa-text151 {
            display: inline-block;
          }
          .acasa-text152 {
            display: inline-block;
          }
          .acasa-text153 {
            display: inline-block;
          }
          .acasa-text154 {
            display: inline-block;
          }
          .acasa-text155 {
            display: inline-block;
          }
          .acasa-text156 {
            display: inline-block;
          }
          .acasa-text157 {
            display: inline-block;
          }
          .acasa-text158 {
            display: inline-block;
          }
          .acasa-text159 {
            display: inline-block;
          }
          .acasa-text160 {
            display: inline-block;
          }
          .acasa-text161 {
            display: inline-block;
          }
          .acasa-text162 {
            display: inline-block;
          }
          .acasa-text163 {
            display: inline-block;
          }
          .acasa-text164 {
            display: inline-block;
          }
          .acasa-text165 {
            display: inline-block;
          }
          .acasa-text166 {
            display: inline-block;
          }
          .acasa-text167 {
            display: inline-block;
          }
          .acasa-text168 {
            display: inline-block;
          }
          .acasa-text169 {
            display: inline-block;
          }
          .acasa-text170 {
            display: inline-block;
          }
          .acasa-text171 {
            display: inline-block;
          }
          .acasa-text172 {
            display: inline-block;
          }
          .acasa-text173 {
            display: inline-block;
          }
          .acasa-text174 {
            display: inline-block;
          }
          .acasa-text175 {
            display: inline-block;
          }
          .acasa-text176 {
            display: inline-block;
          }
          .acasa-text177 {
            display: inline-block;
          }
          .acasa-text178 {
            display: inline-block;
          }
          .acasa-text179 {
            display: inline-block;
          }
          .acasa-text180 {
            display: inline-block;
          }
          .acasa-text181 {
            display: inline-block;
          }
          .acasa-text182 {
            display: inline-block;
          }
          .acasa-text183 {
            display: inline-block;
          }
          .acasa-text184 {
            display: inline-block;
          }
          .acasa-text185 {
            display: inline-block;
          }
          .acasa-text186 {
            display: inline-block;
          }
          .acasa-text187 {
            display: inline-block;
          }
          .acasa-text188 {
            display: inline-block;
          }
          .acasa-text189 {
            display: inline-block;
          }
          .acasa-text190 {
            display: inline-block;
          }
          .acasa-text191 {
            display: inline-block;
          }
          .acasa-text192 {
            display: inline-block;
          }
          .acasa-text193 {
            display: inline-block;
          }
          .acasa-text194 {
            display: inline-block;
          }
          .acasa-text195 {
            display: inline-block;
          }
          .acasa-text196 {
            display: inline-block;
          }
          .acasa-text197 {
            display: inline-block;
          }
          .acasa-text198 {
            display: inline-block;
          }
          .acasa-text199 {
            display: inline-block;
          }
          .acasa-text200 {
            display: inline-block;
          }
          .acasa-text201 {
            display: inline-block;
          }
          .acasa-text202 {
            display: inline-block;
          }
          .acasa-text203 {
            display: inline-block;
          }
          .acasa-text204 {
            display: inline-block;
          }
          .acasa-text205 {
            display: inline-block;
          }
          .acasa-text206 {
            display: inline-block;
          }
          .acasa-text207 {
            display: inline-block;
          }
          .acasa-text208 {
            display: inline-block;
          }
          .acasa-text209 {
            display: inline-block;
          }
          .acasa-text210 {
            display: inline-block;
          }
          .acasa-text211 {
            display: inline-block;
          }
          .acasa-text212 {
            display: inline-block;
          }
          .acasa-text213 {
            display: inline-block;
          }
          .acasa-text214 {
            display: inline-block;
          }
          .acasa-text215 {
            display: inline-block;
          }
          .acasa-text216 {
            display: inline-block;
          }
          .acasa-text217 {
            display: inline-block;
          }
          .acasa-text218 {
            display: inline-block;
          }
          .acasa-text219 {
            display: inline-block;
          }
          .acasa-text220 {
            display: inline-block;
          }
          .acasa-text221 {
            display: inline-block;
          }
          .acasa-text222 {
            display: inline-block;
          }
          .acasa-text223 {
            display: inline-block;
          }
          .acasa-text224 {
            display: inline-block;
          }
          .acasa-text225 {
            display: inline-block;
          }
          .acasa-text226 {
            display: inline-block;
          }
          .acasa-text227 {
            display: inline-block;
          }
          .acasa-text228 {
            display: inline-block;
          }
          .acasa-text229 {
            display: inline-block;
          }
          .acasa-text230 {
            display: inline-block;
          }
          .acasa-text231 {
            display: inline-block;
          }
          .acasa-text232 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Acasa

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
