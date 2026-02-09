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


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setLoading(true);
//   setStatus({ type: "", message: "" });

//   try {
//     const res = await fetch(
//       "https://sheltercastle-production.up.railway.app/send-message",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//        body: JSON.stringify({
//   name: formData.name,
//   email: formData.email,
//   phone: formData.phone,
//   address: formData.address,
//   message: formData.message,
// }),


//       }
//     );

//     // 🔴 IMPORTANT: handle non-200 safely
//     if (!res.ok) {
//       throw new Error("Request failed");
//     }

//     const data = await res.json();

//     if (data.success) {
//       setStatus({
//         type: "success",
//         message: "Message sent successfully!",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         message: "",
//       });
//     } else {
//       setStatus({
//         type: "error",
//         message: "Failed to send message. Try again.",
//       });
//     }
//   } catch (error) {
//     console.error(error);

//     setStatus({
//       type: "error",
//       message:
//         "Unable to send message right now. Please try again later.",
//     });
//   } finally {
//     setLoading(false);
//   }
// };


const handleSubmit = (e) => {
  e.preventDefault();

  const phoneNumber = "919176777004"; 
  // Replace with your real WhatsApp number
  // Format: country code + number (no +, no spaces)

  const message = `
New Contact Form Message:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Message: ${formData.message}
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional: clear form
  setFormData({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
};

  return (
    <section id="contact" className="contact">
      
      {status.type === "error" && (
  <p className="error-text">
    {status.message}
  </p>
)}


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
