import React from 'react'
import "../components/Footer.css"

export default function Footer() {
  return (
    <div class="FooterSec text-white d-flex align-items-center" style={{height:300}}>
        <div className="container row row-cols-1">
            <div className="container col-md-6 d-flex align-items-start">
                <div className="row row-cols-1 firstSec ps-max">
                    <img src="" alt="img1" />
                    <p class="" style={{width:450}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum totam animi aspernatur, vitae pariatur iusto quasi nobis fuga incidunt?</p>
                    <img src="" alt="img2" />
                </div>
            </div>
            <div className="sec2 col-md-6">
                <div className="row row-cols-3 g-4 d-flex justify-content-end ps-5">
                    <div className="col">
                        <h3>About Us</h3>
                        <ul>
                            <li>Our Vision & Mission</li>
                            <li>Our Team</li>
                            <li>Services</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div className="col ps-5">
                    <h3>Resources</h3>
                        <ul>
                            <li>Blog</li>
                            <li>News</li>
                            <li>EBooks</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                    <div className="col ps-5">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Subscribe</li>
                            <li>Get a Quote</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
