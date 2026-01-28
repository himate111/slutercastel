import "../styles/about.css";
import residentialImg from "../assets/images/residental.jpg";
import jointVentureImg from "../assets/images/partner.jpg";
import salesMarketingImg from "../assets/images/meeting.jpg";
import projectManagementImg from "../assets/images/planning.jpg";

const services = [
  {
    id: "01",
    title: "Residential Construction",
    desc: "High-quality residential construction with smart design, ventilation, and natural lighting.",
    img: residentialImg,
  },
  {
    id: "02",
    title: "Joint Venture Development",
    desc: "Partnering with landowners to develop and deliver profitable residential projects.",
    img: jointVentureImg,
  },
  {
    id: "03",
    title: "Real Estate Sales & Marketing",
    desc: "Strategic marketing and sales for residential projects from launch to closure.",
    img: salesMarketingImg,
  },
  {
    id: "04",
    title: "Project Planning & Management",
    desc: "Complete project planning ensuring quality, timelines, cost control, and satisfaction.",
    img: projectManagementImg,
  },
];

export default function About() {
  return (
    <section className="about" id="aboutus">

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
            <h2>7+</h2>
            <p>Years of Excellence in Architecture & Design</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Projects Successfully Completed</p>
          </div>
          <div>
            <h2>98%</h2>
            <p>Our Client Retention Rate</p>
          </div>
          <div>
            <h2>5+</h2>
            <p>Countries with Our Projects</p>
          </div>
        </div>
      </div>

      <hr />

      {/* SERVICES HEADER */}
      <div className="services-header">
        <h3>Services we provide</h3>

        {/* <div className="arrows">
          <button>←</button>
          <button>→</button>
        </div> */}
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
