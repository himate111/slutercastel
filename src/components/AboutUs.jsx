import "../styles/about.css";

const services = [
  {
    id: "01",
    title: "Arch Design",
    desc: "From initial concept development and schematic design",
    img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    id: "02",
    title: "Interior Design",
    desc: "Creating cohesive interior spaces that reflect your style",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    id: "03",
    title: "Urban Planning",
    desc: "Designing the spaces between buildings & outdoors",
    img: "https://images.pexels.com/photos/4393914/pexels-photo-4393914.jpeg",
  },
  {
    id: "04",
    title: "Project Manage",
    desc: "Overseeing & controlling the entire construction process",
    img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
];

export default function About() {
  return (
    <section className="about">

      {/* TOP ROW */}
      <div className="about-top">
        <div className="about-text">
          <h3>About Company</h3>
          <p>
            Shelter Castle Pvt. Ltd. is a construction and real estate company  
            led by experienced professionals, dedicated to building unique,  
            practical, and responsibly designed residential spaces with long-term value.
            <br />
            <br />
            We approach every project from the customer’s perspective,  
            understanding their vision and needs to deliver homes  
            with quality construction, smart space planning,  
            good ventilation, and ample natural lighting.
          </p>

         
        </div>

        <div className="about-stats">
          <div>
            <h2>25+</h2>
            <p>Years of Excellence in Architecture & Design</p>
          </div>
          <div>
            <h2>500+</h2>
            <p>Projects Successfully Completed</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>Our Client Retention Rate</p>
          </div>
          <div>
            <h2>15+</h2>
            <p>Countries with Our Projects</p>
          </div>
        </div>
      </div>

      <hr />

      {/* SERVICES HEADER */}
      <div className="services-header">
        <h3>Services we provide</h3>

        <div className="arrows">
          <button>←</button>
          <button>→</button>
        </div>
      </div>

      {/* SERVICES */}
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.id}>
            <div className="service-img">
              <img src={s.img} alt={s.title} />
              <span className="service-num">{s.id}</span>
            </div>

            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
