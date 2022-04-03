import React from "react"
import Navbar from "../components/Navbar"
import PagesLayouts from "../layouts/PagesLayouts"
import Image from "next/image"
import headingImage from "../assets/heading.png"
import zeppelin from "../assets/zeppelin.png"
import samsung from "../assets/samsung.png"
import oracle from "../assets/oracle.png"
import segment from "../assets/segment.png"
import morpheus from "../assets/morpheus.png"

const Home = () => {
  return (
    <React.Fragment>
      <PagesLayouts>
        <Navbar />
        {/* Heading */}
        <div className="jumbotron" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Managing business payment more easly</h1>
              <p className="lead fs-6 mt-4 lh-base">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <button className="btn btn-primary btn-lg mt-4">Get Started</button>
            </div>
            <div className="col-md-6">
              <Image src={headingImage} alt={'heading'} />
            </div>
          </div>

          {/* Sponsors */}
          <div className="row">
            <div className="col-12">
              <h3 className="fs-4 fw-bold text-center">Over 1200+ Software Business Growth with Paymentku</h3>
              <div className="sponsors">
                {/* <Image src={samsung} /> */}
                {/* <Image src={oracle} /> */}
                <Image src={morpheus} alt={'morpheus'} />
                <Image src={zeppelin} alt={'zeppelin'} />
                <Image src={segment} alt={'segment'} />
              </div>
            </div>
          </div>
        </div>
      </PagesLayouts>
    </React.Fragment>
  )
}

export default Home