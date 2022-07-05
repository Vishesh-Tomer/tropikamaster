import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";

const Home = () => {
  const [Homepage1, setHomepage1] = useState([]);
  const [Service1, setService1] = useState([]);
  const [Testimonial1, setTestimonial1] = useState([]);
  const [Fruit1, setFruit1] = useState([]);
  const [Contact1, setContact1] = useState({
    fname: "",
    phone_number: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    loadUsers();
    loadUser();
    loadUser1();
    loadUser2();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/homeparts?populate=*`
    );
    setHomepage1(result.data.data);
  };

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/services?populate=*`
    );
    setService1(result.data.data);
  };

  const loadUser1 = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/fruits/?populate=*`
    );
    setFruit1(result.data.data);
  };

  const loadUser2 = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/testimonial1s/?populate=*`
    );
    setTestimonial1(result.data.data);
  };

  const url = "http://localhost:1337/api/contacts";

  const submit = (e) => {
    e.preventDefault();

    const data = {
      fname: Contact1.fname,
      phone_number: Contact1.phone_number,
      email: Contact1.email,
      message: Contact1.message,
    };

    // console.log(data);
    Axios.post(url, {
      data,
    }).then((res) => {
      // console.log(res.data);
    });
  };

  function handle(e) {
    const newdata = { ...Contact1 };
    newdata[e.target.id] = e.target.value;
    setContact1(newdata);
    //  console.log(newdata);
  }

  return (
    <>
      <div className="hero_area">
        <Header />

        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {Homepage1.map((Homepage) => (
            <section className=" slider_section position-relative">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="slider_item-box">
                      <div className="slider_item-container">
                        <SwiperSlide>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="slider_item-detail">
                                  <div>
                                    <h1>{Homepage.attributes?.title}</h1>
                                    <p>{Homepage.attributes?.description}</p>
                                    <div className="d-flex">
                                      <a
                                        href="#profile"
                                        className="text-uppercase custom_orange-btn mr-3"
                                      >
                                        Shop Now
                                      </a>
                                      <a
                                        href="#profile"
                                        className="text-uppercase custom_dark-btn"
                                      >
                                        Contact Us
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="slider_img-box">
                                  <div>
                                    <img
                                      src={
                                        "http://localhost:1337" +
                                        Homepage.attributes?.image?.data[0]
                                          ?.attributes?.url
                                      }
                                      alt=""
                                      className=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom_carousel-control">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </section>
          ))}
        </Swiper>
      </div>

      <section className="service_section layout_padding ">
        <div className="container">
          <h2 className="custom_heading">Our Services</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>

          <div className=" layout_padding2">
            <div className="card-deck">
              {Service1.map((Service) => (
                <div className="card">
                  <img
                    className="card-img-top"
                    src={
                      "http://localhost:1337" +
                      Service.attributes?.image?.data[0]?.attributes?.url
                    }
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{Service.attributes?.title}</h5>
                    <p className="card-text">
                      {Service.attributes?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a href="#profile" className="custom_dark-btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="fruit_section">
        <div className="container">
          <h2 className="custom_heading">Fresh Fruits</h2>

          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          {Fruit1.map((Fruit) => (
            <div className="row layout_padding2">
              <div className="col-md-8">
                <div className="fruit_detail-box">
                  <h3>{Fruit.attributes?.title}</h3>
                  <p className="mt-4 mb-5">{Fruit.attributes?.description}</p>
                  <div>
                    <a href="#profile" className="custom_dark-btn">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <div className="fruit_img-box d-flex justify-content-center align-items-center">
                  <img
                    src={
                      "http://localhost:1337" +
                      Fruit.attributes?.image?.data[0]?.attributes?.url
                    }
                    alt=""
                    className=""
                    width="250px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tasty_section">
        <div className="container_fluid">
          <h2>Very tasty fruits</h2>
        </div>
      </section>

      <section className="client_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">Testimonial</h2>
          <p className="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div>
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {Testimonial1.map((Testimonial) => (
                <SwiperSlide>
                
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="client_container layout_padding2">
                          <div className="client_img-box">
                            <img
                              src={
                                "http://localhost:1337" +
                                Testimonial.attributes?.image?.data[0]
                                  ?.attributes?.url
                              }
                            />
                          </div>
                          <div className="client_detail">
                            <h3>{Testimonial.attributes?.title}</h3>
                            <p className="custom_heading-text">
                              {Testimonial.attributes?.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                 
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="contact_section layout_padding">
        <div className="container">
          <h2 className="font-weight-bold">Contact Us</h2>
          <div className="row">
            <div className="col-md-8 mr-auto">
              <form>
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input
                        onChange={(e) => handle(e)}
                        placeholder="Your full Name"
                        required="required"
                        id="fname"
                        value={Contact1.fname}
                        type="text"
                      />
                    </div>
                    <div>
                      <input
                        onChange={(e) => handle(e)}
                        value={Contact1.phone_number}
                        required="required"
                        id="phone_number"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <input
                        onChange={(e) => handle(e)}
                        value={Contact1.email}
                        required="required"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mt-5">
                      <input
                        onChange={(e) => handle(e)}
                        value={Contact1.message}
                        required="required"
                        id="message"
                        type="text"
                        placeholder="Message"
                      />
                    </div>
                    <div className="mt-5">
                      <button type="submit" onClick={(e) => submit(e)}>
                        send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map_section">
        <div id="map" className="h-100 w-100 "></div>
      </section>

      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Fruits</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Services</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>List</h5>
              <ul>
                <li>randomised</li>
                <li>words which</li>
                <li>don't look even</li>
                <li>slightly</li>
                <li>believable. If you</li>
                <li>are going to use</li>
                <li>a passage of</li>
                <li>Lorem Ipsum,</li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="social_container">
                <h5>Follow Us</h5>
                <div className="social-box">
                  <a href="#profile">
                    <img src="assests/images/fb.png" alt="" />
                  </a>

                  <a href="#profile">
                    <img src="assests/images/twitter.png" alt="" />
                  </a>
                  <a href="#profile">
                    <img src="assests/images/linkedin.png" alt="" />
                  </a>
                  <a href="#profile">
                    <img src="assests/images/instagram.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="subscribe_container">
                <h5>Subscribe Now</h5>
                <div className="form_container">
                  <form action="">
                    <input type="email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid footer_section">
        <p>
          Copyright &copy; 2019 All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </section>

      <script
        type="text/javascript"
        src="assests/js/jquery-3.4.1.min.js"
      ></script>
      <script type="text/javascript" src="assests/js/bootstrap.js"></script>

      {/* function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom : 11,
        center : {
          lat : 40.645037,
          lng : -73.880224
        },
      });
    

      var image = 'images/maps-and-flags.png';
      var beachMarker = new google.maps.Marker({
        position : {
          lat : 40.645037,
          lng : -73.880224
        },
        map: map,
        icon: image
      });
    } */}

      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
    </>
  );
};

export default Home;
