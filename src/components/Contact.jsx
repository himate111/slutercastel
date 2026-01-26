import "../styles/contact.css";
import contactimg from "../assets/images/contimage.png"

export default function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="contact-wrapper">

        {/* LEFT – FORM */}
        <div className="contact-form">
          <h2>
            Have questions? <br /> get in touch!
          </h2>

          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div>
              <label>Email</label>
              <input type="email"  />
            </div>

            <div>
              <label>Phone Number</label>
              <input type="text"  />
            </div>

            <div>
              <label>Address</label>
              <input type="text"  />
            </div>
          </div>

          <div className="message-box">
            <label>Message</label>
            <textarea placeholder="Type..." />
          </div>

          <button className="send-btn">Send Message</button>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="contact-image">
          <img
            src={contactimg}
            alt="Real estate consultation"
          />
        </div>

      </div>
    </section>
  );
}
