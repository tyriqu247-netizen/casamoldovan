import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import HomeS from '../components/home-s'
import HomeG from '../components/home-g'
import About from '../components/about'
import Review from '../components/review'
import Services from '../components/services'
import Facilities from '../components/facilities'
import Awards from '../components/awards'
import Accommodation from '../components/accommodation'
import Bookings from '../components/bookings'
import Reviews from '../components/reviews'
import Booking from '../components/booking'
import Location from '../components/location'
import AppComponent from '../components/component'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Casa Moldovan</title>
          <meta property="og:title" content="Casa Moldovan" />
        </Head>
        <Navbar
          link1={
            <Fragment>
              <span className="home-text100">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Oeh_lE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text101">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LaAmnj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text102">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jIqgpc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text103">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y1LoTt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text104">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eNHUpN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1Url="#About"
          link2Url="#Accommodation"
          link3Url="#Location"
          link4Url="#Contact"
          text={
            <Fragment>
              <span className="home-text105">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PHiHin'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          navbarId="Navbar"
          locale={props?.locale ?? ''}
        ></Navbar>
        <HomeS
          content1={
            <Fragment>
              <span className="home-text106">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bF-28x'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text107">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KUnwMZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text108">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GZZNxl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl="#Bookings"
          locale={props?.locale ?? ''}
        ></HomeS>
        <HomeG
          content1={
            <Fragment>
              <span className="home-text109">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ry6KKw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text110">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KFkw9q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></HomeG>
        <About
          about="about"
          aboutId="About"
          feature1Title={
            <Fragment>
              <span className="home-text111">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T7TWUH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          aboutSectionId="About section"
          aboutSectionId1="Aboout"
          feature1ImageSrc="About section"
          feature1Description={
            <Fragment>
              <span className="home-text112">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UYF7dw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></About>
        <Review
          content1={
            <Fragment>
              <span className="home-text113">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8XJjlf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text114">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rTr-tK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text115">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YkLdkH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text116">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sofz6C'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name1={
            <Fragment>
              <span className="home-text117">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GJ3T3z'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Review>
        <Services
          plan1={
            <Fragment>
              <span className="home-text118">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hn6grB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text119">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HFh2GQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text120">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Xj5VwG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Detail={
            <Fragment>
              <span className="home-text121">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_od5g5j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text122">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7GyjIj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text123">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lDxBoo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text124">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GVlY_5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature4={
            <Fragment>
              <span className="home-text125">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__3vkx4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature5={
            <Fragment>
              <span className="home-text126">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BfrX7I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature6={
            <Fragment>
              <span className="home-text127">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AWEve6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature7={
            <Fragment>
              <span className="home-text128">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-OHJ42'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature8={
            <Fragment>
              <span className="home-text129">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9VH7gl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature9={
            <Fragment>
              <span className="home-text130">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_84zw3g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Includes={
            <Fragment>
              <span className="home-text131">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t_fehD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature10={
            <Fragment>
              <span className="home-text132">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5Lk1c-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Services>
        <Facilities
          heading1={
            <Fragment>
              <span className="home-text133">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NmdrN-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Facilities>
        <Awards
          plan1={
            <Fragment>
              <span className="home-text134">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h1B2tV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text135">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CuwWTC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text136">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JNsBGK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text137">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_DVKMBw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text138">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y3HNMn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text139">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDv-CK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text140">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5scu9c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text141">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qT_zJk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text142">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7BuQzn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text143">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P-wq0q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text144">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qYsQ9e'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text145">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5iRwS9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text146">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lHRO5n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text147">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_w6gP1D'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text148">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_owszQi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text149">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_f3BXdY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text150">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PmB1vH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text151">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iHbk23'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text152">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7btNLr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text153">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yMWj5N'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text154">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pznINu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text155">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lGYlLR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text156">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sb87oI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text157">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7x4S-S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text158">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hRMrDz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text159">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_eXRcA4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text160">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Psv-gF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text161">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LtxCyj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text162">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3MgUFr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text163">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8NJBpE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature4={
            <Fragment>
              <span className="home-text164">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6JoGsT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature11={
            <Fragment>
              <span className="home-text165">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDGT3_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature11={
            <Fragment>
              <span className="home-text166">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4PfNID'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature11={
            <Fragment>
              <span className="home-text167">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gJeDXw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Awards>
        <Accommodation
          heading1={
            <Fragment>
              <span className="home-text168">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_OPz_Gb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="accommodationroot-class-name"
          accommodationId="Accommodation"
          accommodationSection1Id="Accommodation"
          locale={props?.locale ?? ''}
        ></Accommodation>
        <Bookings
          plan3Feature4={
            <Fragment>
              <span className="home-text169">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8U2exZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature3={
            <Fragment>
              <span className="home-text170">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_L69pos'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan31={
            <Fragment>
              <span className="home-text171">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-cW2Sk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan11={
            <Fragment>
              <span className="home-text172">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gpsvsk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature2={
            <Fragment>
              <span className="home-text173">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9P4Piy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature4={
            <Fragment>
              <span className="home-text174">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5OsnJd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price={
            <Fragment>
              <span className="home-text175">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fLjwbQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly1={
            <Fragment>
              <span className="home-text176">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4pS9AE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price={
            <Fragment>
              <span className="home-text177">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_unx65f'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature1={
            <Fragment>
              <span className="home-text178">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uyNXM3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action={
            <Fragment>
              <span className="home-text179">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IIcZUj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan21={
            <Fragment>
              <span className="home-text180">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JSYnlC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price={
            <Fragment>
              <span className="home-text181">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_F4TXBS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1={
            <Fragment>
              <span className="home-text182">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_D8oxC6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text183">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XcIqRI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3={
            <Fragment>
              <span className="home-text184">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_i2F_v1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature3={
            <Fragment>
              <span className="home-text185">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tmwoC1'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Feature2={
            <Fragment>
              <span className="home-text186">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VLk2Ym'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action1={
            <Fragment>
              <span className="home-text187">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mnPiBq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Price1={
            <Fragment>
              <span className="home-text188">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rqCgMv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature1={
            <Fragment>
              <span className="home-text189">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AlBzNW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly={
            <Fragment>
              <span className="home-text190">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1yJArH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text191">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2de4bg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Action={
            <Fragment>
              <span className="home-text192">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7K76gp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly1={
            <Fragment>
              <span className="home-text193">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gH5-ia'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Yearly1={
            <Fragment>
              <span className="home-text194">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iKFJm_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature2={
            <Fragment>
              <span className="home-text195">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ra8Phd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Price1={
            <Fragment>
              <span className="home-text196">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ngAONa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text197">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__PII9j'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Feature1={
            <Fragment>
              <span className="home-text198">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ayB8MI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Action1={
            <Fragment>
              <span className="home-text199">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Uk0Vi9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action1={
            <Fragment>
              <span className="home-text200">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WArMDP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2Yearly={
            <Fragment>
              <span className="home-text201">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ERiLEj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Yearly={
            <Fragment>
              <span className="home-text202">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wVayyr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan3Price1={
            <Fragment>
              <span className="home-text203">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kCqSQo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan2={
            <Fragment>
              <span className="home-text204">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n0lyMs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Feature3={
            <Fragment>
              <span className="home-text205">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3DV-NS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          bookingsId="Bookings"
          locale={props?.locale ?? ''}
        ></Bookings>
        <Reviews
          review1={
            <Fragment>
              <span className="home-text206">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rQ6pZ_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text207">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mhhoD8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text208">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-BJiI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text209">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KOjCFx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text210">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6q_xmB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text211">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o2k4af'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text212">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N4sG0_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text213">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cCGnXj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text214">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_s3KEis'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text215">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p-gOKc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Reviews>
        <Booking
          plan1={
            <Fragment>
              <span className="home-text216">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ekb3Mj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          plan1Action={
            <Fragment>
              <span className="home-text217">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ODlVFp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locale={props?.locale ?? ''}
        ></Booking>
        <Location
          content1={
            <Fragment>
              <span className="home-text218">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_77bnTa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="home-text219">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1LKVlw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content3={
            <Fragment>
              <span className="home-text220">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VpjHEK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text221">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2zaWnU'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          locationSectionId="Location"
          locale={props?.locale ?? ''}
        ></Location>
        <AppComponent locale={props?.locale ?? ''}></AppComponent>
        <Contact
          email={
            <Fragment>
              <span className="home-text222">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UUY1_m'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="home-text223">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_t-8Z3y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="home-text224">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_o28sWC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          adress={
            <Fragment>
              <span className="home-text225">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gw_eXY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text226">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HpA-W9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text227">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_A6qsg_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          contactSectionId="Contact"
          locale={props?.locale ?? ''}
        ></Contact>
        <Footer
          text1={
            <Fragment>
              <span className="home-text228">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8FeB6X'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text229">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-R2hOq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text230">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_J4jGnF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text231">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Vzy-Cz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text232">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Zpc8xj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          textUrl1="#Navbar"
          textUrl2="#About"
          textUrl3="#Accommodation"
          textUrl4="#Location"
          textUrl5="#Contact"
          rootClassName="footerroot-class-name"
          locale={props?.locale ?? ''}
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text100 {
            display: inline-block;
          }
          .home-text101 {
            display: inline-block;
          }
          .home-text102 {
            display: inline-block;
          }
          .home-text103 {
            display: inline-block;
          }
          .home-text104 {
            display: inline-block;
          }
          .home-text105 {
            display: inline-block;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-text117 {
            display: inline-block;
          }
          .home-text118 {
            display: inline-block;
          }
          .home-text119 {
            display: inline-block;
          }
          .home-text120 {
            display: inline-block;
          }
          .home-text121 {
            display: inline-block;
          }
          .home-text122 {
            display: inline-block;
          }
          .home-text123 {
            display: inline-block;
          }
          .home-text124 {
            display: inline-block;
          }
          .home-text125 {
            display: inline-block;
          }
          .home-text126 {
            display: inline-block;
          }
          .home-text127 {
            display: inline-block;
          }
          .home-text128 {
            display: inline-block;
          }
          .home-text129 {
            display: inline-block;
          }
          .home-text130 {
            display: inline-block;
          }
          .home-text131 {
            display: inline-block;
          }
          .home-text132 {
            display: inline-block;
          }
          .home-text133 {
            display: inline-block;
          }
          .home-text134 {
            display: inline-block;
          }
          .home-text135 {
            display: inline-block;
          }
          .home-text136 {
            display: inline-block;
          }
          .home-text137 {
            display: inline-block;
          }
          .home-text138 {
            display: inline-block;
          }
          .home-text139 {
            display: inline-block;
          }
          .home-text140 {
            display: inline-block;
          }
          .home-text141 {
            display: inline-block;
          }
          .home-text142 {
            display: inline-block;
          }
          .home-text143 {
            display: inline-block;
          }
          .home-text144 {
            display: inline-block;
          }
          .home-text145 {
            display: inline-block;
          }
          .home-text146 {
            display: inline-block;
          }
          .home-text147 {
            display: inline-block;
          }
          .home-text148 {
            display: inline-block;
          }
          .home-text149 {
            display: inline-block;
          }
          .home-text150 {
            display: inline-block;
          }
          .home-text151 {
            display: inline-block;
          }
          .home-text152 {
            display: inline-block;
          }
          .home-text153 {
            display: inline-block;
          }
          .home-text154 {
            display: inline-block;
          }
          .home-text155 {
            display: inline-block;
          }
          .home-text156 {
            display: inline-block;
          }
          .home-text157 {
            display: inline-block;
          }
          .home-text158 {
            display: inline-block;
          }
          .home-text159 {
            display: inline-block;
          }
          .home-text160 {
            display: inline-block;
          }
          .home-text161 {
            display: inline-block;
          }
          .home-text162 {
            display: inline-block;
          }
          .home-text163 {
            display: inline-block;
          }
          .home-text164 {
            display: inline-block;
          }
          .home-text165 {
            display: inline-block;
          }
          .home-text166 {
            display: inline-block;
          }
          .home-text167 {
            display: inline-block;
          }
          .home-text168 {
            display: inline-block;
          }
          .home-text169 {
            display: inline-block;
          }
          .home-text170 {
            display: inline-block;
          }
          .home-text171 {
            display: inline-block;
          }
          .home-text172 {
            display: inline-block;
          }
          .home-text173 {
            display: inline-block;
          }
          .home-text174 {
            display: inline-block;
          }
          .home-text175 {
            display: inline-block;
          }
          .home-text176 {
            display: inline-block;
          }
          .home-text177 {
            display: inline-block;
          }
          .home-text178 {
            display: inline-block;
          }
          .home-text179 {
            display: inline-block;
          }
          .home-text180 {
            display: inline-block;
          }
          .home-text181 {
            display: inline-block;
          }
          .home-text182 {
            display: inline-block;
          }
          .home-text183 {
            display: inline-block;
          }
          .home-text184 {
            display: inline-block;
          }
          .home-text185 {
            display: inline-block;
          }
          .home-text186 {
            display: inline-block;
          }
          .home-text187 {
            display: inline-block;
          }
          .home-text188 {
            display: inline-block;
          }
          .home-text189 {
            display: inline-block;
          }
          .home-text190 {
            display: inline-block;
          }
          .home-text191 {
            display: inline-block;
          }
          .home-text192 {
            display: inline-block;
          }
          .home-text193 {
            display: inline-block;
          }
          .home-text194 {
            display: inline-block;
          }
          .home-text195 {
            display: inline-block;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-text218 {
            display: inline-block;
          }
          .home-text219 {
            display: inline-block;
          }
          .home-text220 {
            display: inline-block;
          }
          .home-text221 {
            display: inline-block;
          }
          .home-text222 {
            display: inline-block;
          }
          .home-text223 {
            display: inline-block;
          }
          .home-text224 {
            display: inline-block;
          }
          .home-text225 {
            display: inline-block;
          }
          .home-text226 {
            display: inline-block;
          }
          .home-text227 {
            display: inline-block;
          }
          .home-text228 {
            display: inline-block;
          }
          .home-text229 {
            display: inline-block;
          }
          .home-text230 {
            display: inline-block;
          }
          .home-text231 {
            display: inline-block;
          }
          .home-text232 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

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
