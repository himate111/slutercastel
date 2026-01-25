import "../styles/property.css";

export default function PropertyList({ properties }) {
  return (
    <section className="property">
      <div className="property-grid">
        {properties.length === 0 ? (
          <p className="no-results">No properties found</p>
        ) : (
          properties.map((item) => (
            <div className="property-card" key={item.id}>
              {/* IMAGE */}
              <img src={item.image} alt={item.title} />

              {/* CARD BODY */}
              <div className="card-body">
                {/* BADGE + RATING */}
                <div className="top-row">
                  <span className="badge">{item.type}</span>
                  <span className="rating">★★★★★ 4.8</span>
                </div>

                {/* TITLE */}
                <h3>{item.title}</h3>

                {/* PRICE */}
                <p className="price">${item.price}</p>

                {/* LOCATION */}
                <p className="location">{item.location}</p>

                {/* FEATURES */}
                <div className="features">
                  <span>{item.beds} Beds</span>
                  <span>{item.baths} Baths</span>
                  <span>2+</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
