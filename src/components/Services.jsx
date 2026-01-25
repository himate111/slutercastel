import "../styles/services.css";

export default function Services() {
  return (
    <section className="services">
      {/* HEADER */}
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Enhance your property listings and videos with accurate
          <br />
          and engaging subtitles.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="services-grid">
        {/* ACTIVE CARD */}
        <div className="service-card active">
          <div className="icon">🏠</div>
          <h3>Affordable Property Taxes</h3>
          <p>
            We help you find a new home by offering a
            smart real estate experience
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🔍</div>
          <h3>Guaranteed Quality Homes</h3>
          <p>
            We help you find a new home by offering a
            smart real estate experience
          </p>
        </div>

        <div className="service-card">
          <div className="icon">⚡</div>
          <h3>Fast and Easy Process</h3>
          <p>
            We help you find a new home by offering a
            smart real estate experience
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🛡️</div>
          <h3>Property Insurance</h3>
          <p>
            We help you find a new home by offering a
            smart real estate experience
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="services-cta">
        <button>
          Explore <span>→</span>
        </button>
      </div>
    </section>
  );
}
