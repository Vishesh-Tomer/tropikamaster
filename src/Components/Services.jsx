import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Services = () => {
  const [Service1, setService1] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(
      `http://localhost:1337/api/services?populate=*`
    );
    setService1(result.data.data);
  };

  return (
    <>
      <div className="hero_area sub_pages">
        <Header />
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
              {/* <div className="card">
                <img className="card-img-top" src="assests/images/card-item-2.png" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Grapes</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src="assests/images/card-item-3.png" alt="Card cap" />
                <div className="card-body">
                  <h5 className="card-title">Gauva</h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#profile" className="custom_dark-btn">
              Read More
            </a>
          </div>
        </div>
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

      {/* <script>
        // This example adds a marker to indicate the position of Bondi Beach in Sydney,
        // Australia.
        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: {
              lat: 40.645037,
              lng: -73.880224
            },
          });
    
          var image = 'images/maps-and-flags.png';
          var beachMarker = new google.maps.Marker({
            position: {
              lat: 40.645037,
              lng: -73.880224
            },
            map: map,
            icon: image
          });
        }
      </script> */}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap"></script>
    </>
  );
};

export default Services;
