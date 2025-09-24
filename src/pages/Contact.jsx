import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Phone } from "lucide-react";
import contactus from "../assets/contactus.png"


export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_5opar3i",
        "template_erzg2r2",
        {
          from_name: form.name,
          to_name: "Africkson",
          from_email: form.email,
          to_email: "africksonsafaris@gmail.com",
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        "dIvCHe-RXOwaM1cCy"
      )
      .then(() => {
        setLoading(false);
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        setLoading(false);
      });
  };

  return (
    <section className="w-full bg-orange-200 py-20">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#0a0f1c] text-center mb-16">
        CONTACT US
      </h1>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        {/* Left: Form */}
        <div className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-[#0a0f1c]">Get in touch</h2>
          <p className="text-gray-500 mt-1 mb-6">
            Our friendly team would love to hear from you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@gmail.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows="4"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>

        {/* Right: Info Section */}
        <div className="flex flex-col justify-center">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src={contactus}
              alt="Contact illustration"
              className="h-auto max-w-[24vw] rounded-lg shadow-xl"
            />
          </div>

          {/* Text */}
          <h3 className="text-2xl font-bold text-[#0a0f1c]">
            Let’s start the conversation
          </h3>
          <p className="text-gray-500 mt-2 mb-8">
            We’re here to answer questions, explore ideas, or kick off your next
            big project.
          </p>

          {/* Contact Cards */}
          <div className="grid gap-6">
            {/* Kenyan Office */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h4 className="font-semibold text-[#0a0f1c] mb-2">
                 Kenya Office
              </h4>
              <p className="text-gray-500 text-sm">
                Africkson Safaris <br />
                PO BOX 546, 20107 Njoro <br />
                Kenya, East Africa
              </p>
              <p className="text-gray-500 text-sm mt-2">
                📞 +254 711 477 574 <br />
                📞 +254 724 647 982
              </p>
              <p className="text-gray-500 text-sm mt-2">
                ✉️ africksonsafaris@gmail.com
              </p>
            </div>

            {/* Spanish Office */}
            <div className="bg-white shadow rounded-2xl p-6">
              <h4 className="font-semibold text-[#0a0f1c] mb-2">
                 Barcelona Office
              </h4>
              <p className="text-gray-500 text-sm">
                Casa Ametlla , Camí de Santa Rosa s/n 08680 Ametlla de Casserres (Barcelona)
              </p>
              <p className="text-gray-500 text-sm mt-2">
                📞 +34 938 228 860 <br />
                📞 +34 646 24 21 32
              </p>
              <p className="text-gray-500 text-sm mt-2">
                ✉️ hola@africksonsafaris.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
