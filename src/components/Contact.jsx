import "../styles/contact.css";
import contactimg from "../assets/images/contimage.png";
import illus from "../assets/images/illu.png";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [status, setStatus] = useState({
  type: "", // success | error
  message: "",
});


  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: "", message: "" });

  try {
    const res = await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: `
Phone: ${formData.phone}
Address: ${formData.address}

${formData.message}
        `,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } else {
      setStatus({
        type: "error",
        message: "Failed to send message. Try again.",
      });
    }
  } catch (error) {
    setStatus({
      type: "error",
      message: "Server error. Please try later.",
    });
  } finally {
    setLoading(false);
  }
};


  return (
    <section id="contact" className="contact">


      {status.type === "success" && (
  <div className="success-overlay">
    <div className="success-box">
      <img
        src={illus}
        alt="Success"
        className="success-image"
      />

      <h2>Thank you for contacting us!</h2>
      <p>
        We have received your message. <br />
        We'll reach you out immediately!
      </p>

      <div className="success-actions">
        <button onClick={() => setStatus({ type: "", message: "" })}>
          Back to homepage
        </button>
      </div>
    </div>
  </div>
)}

      <div className="contact-wrapper">

        {/* LEFT – FORM */}
        <div className="contact-form">
          <h2>
            Have questions? <br /> get in touch!
          </h2>

          <form onSubmit={handleSubmit} className="contact-form-inner">

            

            <div className="form-grid">
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="message-box">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Type..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            
           

            <button className="send-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="contact-image">
          <img src={contactimg} alt="Real estate consultation" />
        </div>

      </div>
    </section>
  );
}
