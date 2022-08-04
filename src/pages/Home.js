import React from 'react'

const Home = () => {
  return (
    <>
    <section class="bg-half-200 d-table w-100 ac" id="home">
        <div class="bg-overlay bg-black" style={{opacity: 0.70}}></div>
        <div className="container">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-lg-12 col-md-6">
                    <div className="title-heading">
                        <h6 className="text-white-50 fw-normal">- Consulting Agency -</h6>
                        <h3 className="heading text-light mt-3">Get Things Done By<br/><span className="text-success">Great
                                Remote Team</span></h3>
                        <p className="text-white-50 mt-3 mb-0">Digital, business & technology consulting
                            for business<br/>resilience.<br/></p>

                        <div className="mt-4 pt-3">
                            <a href=" " className="btn btn-success rounded-pill">Explore Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section> 
    </>
  )
}

export default Home;
