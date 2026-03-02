import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [selectedLocation, setSelectedLocation] = useState(0);

  const locations = [
    {
      country: 'USA',
      city: 'Houston, Texas',
      address: '12345 Jones Rd, STE 126, Houston, TX 77070, USA',
      phone: '+1 (555) 123-4567',
      coordinates: { lat: 29.9702, lng: -95.5721 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5786411514782!2d-95.5746351!3d29.970034299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ceaa6aa11a41%3A0xeebd2a0a2df362b0!2s12345%20Jones%20Rd%20UNIT%20126%2C%20Houston%2C%20TX%2077070%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    },
    {
      country: 'INDIA',
      city: 'Jubilee Hills, Hyderabad',
      address: 'Road No 36 & 37, Beside Madhapur Metro Station, Jubilee Hills, Hyderabad, Telangana, 500033, India',
      phone: '+91 40 1234 5678',
      coordinates: { lat: 17.4326, lng: 78.4071 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8429326634494!2d78.40493631487653!3d17.43258708805743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9740d4c3c3e3%3A0x326d1c90786b2ab6!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
    },
    {
      country: 'CANADA',
      city: 'Kitchener, Ontario',
      address: '132 Daylily Lane, Kitchener, Ontario, Canada, N2R 0L7',
      phone: '+1 (519) 123-4567',
      coordinates: { lat: 43.4116, lng: -80.5055 },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.397664426555!2d-80.5080789!3d43.4116327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b8a07119f3bb3%3A0x7e0deae4df5b9e58!2s132%20Daylily%20Ln%2C%20Kitchener%2C%20ON%20N2R%200L7%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus'
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-slate-100 to-emerald-50">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Know about us or simply get in touch
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Get In Touch</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Have questions about our services or want to discuss your project? We're here to help. Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">contact@mhktechinc.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-slate-600">Saturday: 10AM - 4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Request Consultation</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <p className="text-sm text-slate-500">
                  * Please note: For job applications, visit our <a href="/join-us" className="text-emerald-600 hover:underline">Careers page</a>.
                </p>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 mt-4 shadow-lg shadow-emerald-900/10"
                >
                  Send Request
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - Visit Our Offices */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Visit Our Offices</h2>
            <p className="text-xl text-slate-600">Select a location to view it on the map</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Location Selector */}
            <div className="lg:col-span-1 space-y-4">
              {locations.map((location, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedLocation(i)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${selectedLocation === i
                    ? 'bg-emerald-600 text-white shadow-xl'
                    : 'bg-white text-slate-900 hover:bg-slate-100 shadow-md'
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${selectedLocation === i ? 'bg-white/20' : 'bg-emerald-100'
                      }`}>
                      <svg className={`w-5 h-5 ${selectedLocation === i ? 'text-white' : 'text-emerald-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{location.country}</h3>
                      <p className={`text-sm ${selectedLocation === i ? 'text-emerald-100' : 'text-slate-600'}`}>
                        {location.city}
                      </p>
                    </div>
                    <svg
                      className={`w-6 h-6 transition-transform ${selectedLocation === i ? 'rotate-90 text-white' : 'text-slate-400'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Map Display */}
            <div className="lg:col-span-2">
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <iframe
                  src={locations[selectedLocation].mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${locations[selectedLocation].city}`}
                ></iframe>
              </div>

              {/* Location Details Card */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg text-slate-900 mb-2">
                      {locations[selectedLocation].country} - {locations[selectedLocation].city}
                    </h4>
                    <p className="text-slate-600 mb-2">{locations[selectedLocation].address}</p>
                    <p className="text-slate-700 font-medium">{locations[selectedLocation].phone}</p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locations[selectedLocation].address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-all text-sm font-medium whitespace-nowrap"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;