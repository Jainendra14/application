import React from "react";
import Fnheader from "./header";
const Fnhero=()=>{
    return(
        <section className="nf-hero-section">
        <div className="nf-hero-container">
            <Fnheader/>
          <div className="nf-hero-content">
            <h1 className="nf-hero-content-title">
              Unlimited movies, TV shows and more
            </h1>
            <p className="nf-hero-content-subtitle">
              Watch anywhere. Cancel anytime.
            </p>
          </div>
          <div className="nf-subscription-section">
            <p className="nf-subscription-title">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="nf-subscription-form">
              <form>
                <div className="nf-subscription-input-item">
                  <input type="email" id="nf-user-email" name="email" />
                  <label for="nf-user-email">Email Address</label>
                </div>
               
                <button className="nf-lg-btn nf-btn-red">
                  Get Started <i className="fa-solid fa-chevron-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
};

export default Fnhero