import "../styles/trust.css";
import firstimage from "../assets/images/firstimage.jpg";
import secondimage from "../assets/images/secondimage.jpg";
import thridimage from "../assets/images/thridimage.jpg";

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="trust-container">

        {/* LEFT CONTENT */}
        <div className="trust-left">
          <h2>Your Trusted Real Estate Advisors</h2>
          <p>
            Find Your Property. We put together more than 50 examples of
            automated real estate text message scripts to use in your first
            text messaging campaign.
          </p>

          <div className="trust-stats">
            <div className="stat-card">
              <h3>30+</h3>
              <span>Satisfied Customers</span>
            </div>

            <div className="stat-card">

              <h3>5k+</h3>
              <span>Award Winning</span>
            </div>

            <div className="stat-card">
              <h3>07+</h3>
              <span>Years of Experience</span>
            </div>

            <div className="stat-card">
              <h3>33+</h3>
              <span>Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
         <div className="trust-right">
  <img
    src={firstimage}
    alt="Building"
    className="img-main"
  />

  <div className="img-row">
    <img
      src={secondimage}
      alt="Family"
    />

    <img
      src={thridimage}
      alt="Moving"
    />
  </div>
</div>


      </div>
    </section>
  );
}
