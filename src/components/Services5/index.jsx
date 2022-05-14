import React from "react";
import Link from "next/link";

const Services5 = () => {
  return (
    <section className="services-col section-padding" id="services">
      <div className="container">
        <div className="main-header text-center">
          <h3>What We Do</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-home"></span>
            <h6 className="mb-20">Architecture</h6>
            <p>
              We develop and design exquisite architectual plans and buildings.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-living-room"></span>
            <h6 className="mb-20">Interior Design</h6>
            <p>
               We develop, design and render innovative interior designs.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-home-1"></span>
            <h6 className="mb-20">Exterior Design</h6>
            <p>
              We develop, design and render magnificient exterior designs.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon flaticon-interior-design"></span>
            <h6 className="mb-20">3D Modeling</h6>
            <p>
              We develop, design and render elegant, unique 3D models and buildings.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
