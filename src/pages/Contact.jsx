import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';



export default function Contact() {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) =>{
    const { name, value } = e.target
    // console.log(name, value)
    setForm({...form, [name]: value })
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)

    emailjs.send(
       "service_5opar3i",
       "template_erzg2r2",
       {
        from_name: form.name,
        to_name: "Africkson",
        from_email: form.email,
        to_email: 'africksonsafaris@gmail.com',
        phone: form.phone,
        subject: form.subject,
        message: form.message,
       },
       "dIvCHe-RXOwaM1cCy"
      )
      .then(()=>{
        setLoading(false)
        alert("Message sent successfully!")
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      },
     (error) => {
        alert("Error sending email: ", error);
        setLoading(false)
      });
    
  }

    return (
      <div className="bg-orange-200"> 
        
        <div className="parent bg-orange-200"> 
          <div className="bg-orange-200"> 

            {/* Header Section */}
            <div className="text-center py-8 bg-orange-200 text-white">
              
              
              <h1 className="text-4xl font-bold mt-14">Contact Us</h1>
            </div>
            

            {/* Contact Information */}
            <div className="text-center py-18 px-4">
              <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-12">
                Ready to start planning your dream African adventure? Get in touch with us today and let’s make it a reality!
              </p>
              
              {/* Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {/* Location Card */}
                <div className="bg-black text-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-1.79-8-4 0-1.988 2.912-3.6 6.8-3.93.407 0 .8.045 1.2.128.4.083.8.195 1.2.314 3.888.33 6.8 1.942 6.8 3.93 0 2.21-3.582 4-8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                  <p className="text-sm">
                    Africkson Safaris <br />
                    PO BOX 298 – 20107 Nairobi <br />
                    Kenya, East Africa.
                  </p>
                </div>
  
                {/* Call Us Card */}
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4 4 4-4m-4-4v8m6 4H6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-sm">
                    +254 711 477 574 <br />
                    +254 793 715 710
                  </p>
                </div>
  
                {/* Email Us Card */}
                <div className="bg-black text-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.389-5.159c.768-.537 1.848-.537 2.616 0L21 8m0 0v10c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V8m18 0L12 14 3 8" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-sm">africksonsafaris@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="bg-orange-200 min-h-screen flex items-center justify-center">
  <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
    <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Contact Us</h2>
    <form ref={formRef} className="space-y-7">
     
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-300"
          required
        />
      </div>

      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-300"
          required
        />
      </div>

     
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-300"
          required
        />
      </div>

      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-300"
          required
        />
      </div>

   
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-400 focus:ring focus:ring-orange-300"
          required
        ></textarea>
      </div>

    
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white font-medium py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  </div>
</div>

  
      </div>
    )
  }
  