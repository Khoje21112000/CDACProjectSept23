import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <div className="section__container__1">
          <div className="header__container">
            <h1>Providing an Exceptional Health Security</h1>
            <p>
              When you buy insurance from us, you get more than just financial
              safety. You also get: our promise of simplifying complex insurance
              terms and conditions, quick stress-free claims, instant quotes
              from top insurers and being present for you in the toughest of
              times.
            </p>
          </div>
        </div>
      </header>

      <section className="section__container__2">
        <div className="service_plan">
          <h1>Presenting Active Health Platinum-Enhanced Plan</h1>
        </div>
        <div className="service__grid">
          <div className="service__card">
            <span>
              <i className="ri-microscope-line"></i>
            </span>
            <p>Get up to 100% of your premium as HealthReturnsTM</p>
          </div>
          <div className="service__card">
            <span>
              <i className="ri-mental-health-line"></i>
            </span>
            <p>
              Day 1 Cover for Chronic Conditions such as Diabetes & High Blood
              Pressure
            </p>
          </div>
        </div>
      </section>

      <section className="section__container_3">
        <div className="eligiblity_coverage">
          <h1>Choose Who You're Most Likely</h1>
          <p>
            Let us know your personality type we will let you know which
            features of Activ Health you will love the most
          </p>
        </div>

        <div className="columnwise">
          <img
            src={require("./assets/health-thinker.png")}
            alt="Health Thinker"
          />
          <h3>A Health Thinker</h3>
          <p>
            I am aware I need to have a healthy lifestyle. Trying to get there
          </p>
        </div>

        <div className="columnwise">
          <img
            src={require("./assets/health-enthusiast.png")}
            alt="Health enthusiast"
          />
          <h3>A Health Enthusiast</h3>
          <p>I maintain a healthy lifestyle and almost work out every day</p>
        </div>

        <div className="columnwise">
          <img
            src={require("./assets/living-with-a-lifestyle.png")}
            alt="Life Style"
          />
          <h3>Living with a Lifestyle Condition</h3>
          <p>Good to have expert guidance for chronic management</p>
        </div>
      </section>

      <section className="eligibility-section">
        <h2 className="eligibility-section-heading">
          Eligibility Criteria for Health Gain Policy
        </h2>
        <div className="key-features-wrapper">
          <table className="key-features-table">
            <tbody>
              <tr>
                <th className="detail-header">Details</th>
                <th className="criteria-header">Criteria</th>
              </tr>
              <tr>
                <td className="detail">Age</td>
                <td className="criteria">
                  Child: 91 days to 25 years
                  <br />
                  Adult: 18 years to 65 years
                </td>
              </tr>
              <tr>
                <td className="detail">
                  Family Composition for Floater policy
                </td>
                <td className="criteria">
                  Plus - Maximum of 2 Adults (Self + Spouse) and 6 children
                  <br />
                  Power - Maximum of 4 Adults (Self + Spouse + one set of
                  dependent Parents or Parents-in-law) and 6 children
                  <br />
                  Prime - Maximum of 6 Adults (Self + Spouse + set of dependent
                  Parents + set of Parents in law) and 6 children
                </td>
              </tr>
              <tr>
                <td className="detail">Policy Period</td>
                <td className="criteria">1 year, 2 years & 3 Years</td>
              </tr>
              <tr>
                <td className="detail">Sum insured (₹)</td>
                <td className="criteria">
                  Plus - 3 and 5 Lakh;
                  <br />
                  Power - 10, 15 and 20 Lakhs,
                  <br />
                  Prime - 25, 30, 50 and 100 Lakhs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section__container_4">
        <div className="demo-policy">
          <h4>Our Top Dealing Policies </h4>
        </div>

        <div className="flipcard-container">
          <div className="flipcard">
            <div className="flipcard__front flipcard__side">
              <div className="flipcard__img">
                <img
                  src={require("./assets/care_health_insurance_logo.png")}
                  alt="Insurance Logo"
                />
                <h5 style={{ textAlign: "center" }}> ₹7,378 annually</h5>
              </div>
            </div>
            <div className="flipcard__back flipcard__side">
              <div className="flipcard__text">
                <ul>
                  <li className="discount">Inclusive of 5% direct discount</li>
                  <li>
                    Option to reduce waiting period from 4 years to 30 days for
                    Diabetes with 'Instant Cover' rider
                  </li>
                  <li>Restoration of cover once a year</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipcard">
            <div className="flipcard__front flipcard__side">
              <div className="flipcard__text">
              <img src={require("./assets/695.jpg")} alt="Insurance Logo" style={{ width: "95%" }} />

                <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                  {" "}
                  ₹8,600 annually
                </h5>
              </div>
            </div>
            <div className="flipcard__back flipcard__side">
              <div className="flipcard__text">
                <ul>
                  <li className="discount">
                    Customise your own plan with additional discount upto 30%
                  </li>
                  <li> Waiting period 3 years</li>
                  <li>Restoration of cover once a year</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flipcard">
            <div className="flipcard__front flipcard__side">
              <div className="flipcard__text">
                <img
                  src={require("./assets/HDFC-Life-Insurance-Logo-Small.png")}
                  alt="Insurance Logo"
                />
                <h5 style={{ textAlign: "center", marginTop: "20px" }}>
                  {" "}
                  ₹10,200 annually
                </h5>
              </div>
            </div>
            <div className="flipcard__back flipcard__side">
              <div className="flipcard__text">
                <ul>
                  <li className="discount">
                    2x coverage from day 1 with 4x increase in cover after 2
                    renewal
                  </li>
                  <li>Waiting period 3 years</li>
                  <li>Unlimited Restoration of cover</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* View more button */}
        <div className="view-more">
          <Link to="/register" className="view-more__btn">
            View more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
