import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorry Robots: A Full-Stack Product Design Firm</title>
        <meta content="Sorry Robots: A Full-Stack Product Design Firm" name="title" />
        <meta content="We’re a full-stack product design firm and 3PL. We’re not reinventing the wheel, but everything else is fair game." name="description"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="new-menu">
          <div className="logo-wrapper">
            <a href="index.html" aria-current="page" className="goto_home">
              <Image src="/images/Sorry-Robots-Logo-2000.webp" width={98} height={17} alt="Sorry Robots: A Full-Stack Product Design Firm" layout="responsive" />
            </a>
          </div>
          <div className="new-menu-links">
            <ul>
              <li><a href="#" className="goto_founder navlink1">Meet our Founder</a></li>
              <li><a href="#" className="goto_work navlink1">Work</a></li>
              <li><a href="#" className="gotocontact navlink1">Contact</a></li>
            </ul>
          </div>
        </div>

        <div id="section-1" className="section-full _1">
          <div className="hero-text w-container">
            <img src="images/Sorry-Robots.webp" loading="lazy" width="334" alt="" />
            <h2 data-ix="the-modern-web-is-elegant" className="heading-2">We’re a full-stack product design firm and 3PL.
              We’re not reinventing the wheel, but everything else is fair game.</h2>
            <a href="index.html#" data-ix="play-icon" className="w-inline-block w-lightbox">
              <img src="images/play-button.png" width="70" alt="" className="play-icon" />
            </a>
          </div>
        </div>

        <div id="hero2" className="section-full _3">
          <div className="div-block">
            <h1 className="heading-7">Industrial Design &amp; Engineering Shipping &amp; Logistics. Growth Solutions.</h1>
            <div className="container w-container">
              <a href="index.html" data-ix="start-your-project-btn" className="button gotocontact">Work with us</a>
            </div>
          </div>

        </div>


        <div className="founder-section section_founder">
          <div className="two-cols">
            <div className="hideme">
            </div>
            <div className="center_grid">
              <h1 className="heading-6">Hi, I’m Sam!</h1>

              <h4>
                I’m the founder and CEO of Sorry Robots, a full-stack product design agency, 3PL, and former parent company of GIR. I revolutionized the spatula and 50+ kitchen products with patented designs and built brand new systems for growth while doing it. My newest adventure is Mvnifest, which offers those operational systems and product development expertise as services to help fellow brands grow and scale.

                ——

                Let’s build things together.
                hello@sorryrobots.com
              </h4>
            </div>
          </div>

        </div>




        <div id="portfolio" className="color-section section_work">
          <div className="portfolio-title-container w-container">
            <h1 className="heading-6">WORK</h1>
          </div>
        </div>

        <div className="portfolio-section">

          <div className="portfolio-row w-row">
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-up" className="portfolio-item _1">
                  <img src="images/Box-1_GIR_UltimateToolSet_10Piece_Studio_Black_Multiple_Banner_9D_Photo_WebRes_RATIO.webp" />
                </div>
                <h3>GIR</h3>
                <h4>A line of bright, beautiful, ultra-functional kitchen tools that get it right. Now part of the Pattern Brands family. </h4>
              </a>
            </div>
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-down" className="portfolio-item _2">
                  <img src="images/Box-2_Voltaire_Shop_Silver_RATIO.webp" />
                </div>
                <h3>Voltaire</h3>
                <h4>A portable, IoT burr grinder that senses coffee bean freshness. This is seriously smart coffee. </h4>
              </a>
            </div>
          </div>

          <div className="portfolio-row w-row">
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-up" className="portfolio-item _1"><img src="images/Box&#32;3_2000x1000.webp" /></div>
                <h3>Mvnifest Software</h3>
                <h4>Our brand new Operational Intelligence software platform. Order management, inventory management, and catalog management for product brands of all sizes.</h4>
              </a>
            </div>
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-down" className="portfolio-item _2"><img src="images/Box-4_3PL-Boxes-Resized.webp" /></div>
                <h3>Mvnifest 3PL + Logistics</h3>
                <h4>Crush complex logistics with a partner that’s done it all. Masterful omnichannel distribution and product fulfillment for ecomm and retail.</h4>
              </a>
            </div>
          </div>

          <div className="portfolio-row w-row">
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-up" className="portfolio-item _1"><img src="images/Box-5-MVF_Website_Banner_Square.252.webp" /></div>
                <h3>Mvnifest Industrial Design</h3>
                <h4>Full-stack product development. Design, engineering, sourcing, manufacturing, and import/export, all under one roof.</h4>
              </a>
            </div>
            <div className="portfolio-column w-col w-col-6">
              <a href="index.html" className="link-block gotocontact w-inline-block">
                <div data-ix="portfolio-item-down" className="portfolio-item _2"><img src="images/Box-6_Regular.webp" alt="" /></div>
                <h3>Hire Us</h3>
                <h4>We love helping people bring things to life. If you’d like to chat about launching a product or growing your brand, let’s connect: hello@sorryrobots.com</h4>
              </a>
            </div>
          </div>


        </div>



      </main>

      <footer className={styles.footer}>
      <div className="banner-section contactform" >
    <div className="banner-container w-container">
      <h1 className="heading">Want to work together? </h1>
      <div className="text-block" >Drop us a line at <a href="mailto:hello@sorryrobots.com" className="link">hello@sorryrobots.com</a>
            </div>
            </div>
            </div>

      <div className="footer version-2">
        <div className="footer-container w-container">


          <div className="partner-links">
            <ul>
              <li><a href="https://samantharose.co" target="_blank" rel="noreferrer" >SAMANTHA ROSE | Our Founder</a></li>
              <li><a href="https://mvnifest.com" target="_blank" rel="noreferrer">MVNIFEST | Design + Logistics</a></li>
              <li><a href="https://voltaire.co" target="_blank" rel="noreferrer">VOLTAIRE | Coffee, Enlightened</a>	</li>
            </ul>
          </div>

          <div className="footer-copyright">© 2021 Sorry Robots.All Rights Reserved.</div>
        </div>
        </div>

      </footer >
    </div >
  )
}

export default Home
