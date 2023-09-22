import SideBar from "../layouts/sidebar";

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Contact() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627    
        },
        zoom: 11
    };
    return (
        <div >

            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_phone"></span>
                                <h4>Phone</h4>
                                <p>+01-3-8888-6868</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_pin_alt"></span>
                                <h4>Address</h4>
                                <p>60-49 Road 11378 New York</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_clock_alt"></span>
                                <h4>Open time</h4>
                                <p>10:00 am to 23:00 pm</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 text-center">
                            <div class="contact__widget">
                                <span class="icon_mail_alt"></span>
                                <h4>Email</h4>
                                <p>hello@colorlib.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="map" >
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>

                <div class="map-inside">
                    <i class="icon_pin"></i>
                    <div class="inside-widget">
                        <h4>New York</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="contact-form spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="contact__form__title">
                                <h2>Leave Message</h2>
                            </div>
                        </div>
                    </div>
                    <form action="#">
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your name" />
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <input type="text" placeholder="Your Email" />
                            </div>
                            <div class="col-lg-12 text-center">
                                <textarea placeholder="Your message"></textarea>
                                <button type="submit" class="site-btn">SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contact;