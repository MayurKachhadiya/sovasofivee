import React from 'react'
import features from "../Images/features.jpg";
import testing1 from "../Images/testimony1.jpg";
import testing2 from "../Images/testimony2.jpg";
import testing3 from "../Images/testimony3.jpg";
import testing4 from "../Images/testimony4.jpg";
import Slider from "react-slick";
const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
        };
  return (
    <>
        <section className="section " id="team">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-6">
                    <div className="bg-light p-2 rounded shadow">
                        <img className="img-fluid rounded" src={features} alt="features"/>
                    </div>
                </div>
                <div className="col-lg-7 col-md-6 mt-sm-0 pt-sm-0">
                    <div className="ms-lg-5">
                        <div className="section-title">
                            <h6 className="text-success fw-normal">- Our expert</h6>
                            <h2 className="heading"><span className="text-success">Jack Murry</span> - CEO and <br/> co-founder
                                of this <br/> consulting
                            </h2>

                            <p className="text-muted mb-0">Various versions have evolved over the years, sometimes by
                                accident<br/> excepteur sint occaecat cupidatat non proident over the years.</p>
                        </div>

                        <ul className="list list-unstyled mb-0 ps-0 mt-3">
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Product engineering
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Consulting & advisory</li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Technology services</li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Business consultation
                            </li>
                            <li className="mb-0 fs-6"><span className="icon me-2 text-danger">
                                    <i className="uil uil-check-circle align-middle"></i></span>Digital solution </li>
                        </ul>

                        <div className="button mt-4">
                            <a href="#About" className="btn pill btn-success rounded-pill">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='section bg-light'>
        <div className="container">
            <div className="row">
                <div className="section-title">
                    <h6 className="text-success text-center fw-normal">- Our clients -</h6>
                    <h3 className="heading text-center fw-bold">What patients say</h3>
                    <p className="text-muted text-center mb-0 text-center">Various versions have evolved over the years,
                        sometimes
                        by
                        accident<br/>excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
            <div className="row">
            <Slider {...settings}>
            <div className="tiny-slide">
                <div className="col-12 mt-4 pt-2">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center ">
                                    <img className="img-fluid rounded-pill" src={testing1} alt="testimony1"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Amber koay</h5>
                                        <p className="text-success mb-0">Student</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio
                                    amet dolores placeat voluptatum magnam.
                                </p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className="tiny-slide">
                        <div className="col-12 mt-4 pt-2">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-pill" src={testing2} alt="testimony2"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Rachel Manon</h5>
                                        <p className="text-success mb-0">Housewife</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing elit Optio amet
                                    dolores placeat voluptatum magnam.</p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className="tiny-slide">
                        <div className="col-12 mt-4 pt-2">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                <img className="img-fluid rounded-pill" src={testing3} alt="testimony3"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">John will</h5>
                                        <p className="text-success mb-0">Businessman</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio amet
                                    dolores placeat voluptatum magnam.</p>
                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                        </div>

                        <div className="tiny-slide">
                        <div className="col-12 mt-4 pt-2">
                            <div className="rounded p-4 m-2 bg-white">
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid rounded-pill" src={testing4} alt="testimony4"/>
                                    <div className="ms-3">
                                        <h5 className="title fs-6 mb-0">Achara Murry</h5>
                                        <p className="text-success mb-0">Teacher</p>
                                    </div>
                                </div>
                                <p className="text-muted mt-3 mb-0">Lorem ipsum, dolor sit amet consectetur
                                    sit adipisicing
                                    elit Optio amet
                                    dolores placeat voluptatum magnam.</p>

                                <ul className="text-warning list-unstyled mt-3">
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                    <li className="list-inline-item"><i className="icon-content mdi mdi-star-outline"></i></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </Slider>
                    </div>
                    </div>
        </div>
        <div className="section abc">
        <div className="bg-overlay bg-gradient" style={{opacity: 0.7}}>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-3 pb-2">
                        <h6 className="text-white-50 text-center fw-normal">- More Updates -</h6>
                        <h4 className="text-white title mt-3 fw-normal">Sign Up for Updates,<br/>Get Subscribed Today! </h4>
                    </div>
                </div>

                <div className="col-lg-7">
                    <div className="text-center subcribe-form mt-3 pt-2">
                        <form className="mx-auto">
                            <div className="input-group mb-0">
                                <input name="email" id="email1" type="email" className="form-control pill" placeholder="Enter Your Email..."/>
                                <button type="submit" className="btn pill btn-success">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </section>
    </>
  )
}

export default Team;
