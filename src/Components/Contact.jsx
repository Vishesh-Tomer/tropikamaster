import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Axios from "axios";

const Contact = () => {
  const [Contact1, setContact1] = useState({
    fname: "",
    phone_number: "",
    email: "",
    message: "",
  });

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
      <div className="hero_area sub_pages">
        <Header />
      </div>

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

export default Contact;
