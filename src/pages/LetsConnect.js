import React, { useState } from 'react';

const LetsConnect = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Replace with actual email/DB integration if needed
    alert('Message sent!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="letsconnect" className="bg-gray-800 text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Let’s Connect</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-900 text-white"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-900 text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded bg-gray-900 text-white md:col-span-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-900 text-white"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default LetsConnect;
