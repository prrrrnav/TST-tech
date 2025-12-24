import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    alert(`Thank you for your inquiry, ${formData.name}! Our team will contact you within 24 hours.`);
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      content: 'Ghaziabad, Delhi/NCR\nUttar Pradesh, India',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-100'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 XXXXX XXXXX',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-100'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@tsttechnologies.com',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-100'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9 AM - 6 PM\nSat: 9 AM - 2 PM',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-emerald-50/30 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-white text-emerald-600 px-6 py-2 rounded-full text-sm font-semibold shadow-sm border border-emerald-100">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Let's Connect &{' '}
            <span className="text-emerald-600">
              Collaborate
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or ready to discuss your security needs? We're here to help you every step of the way
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="group relative">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-3xl"></div>
              
              {/* Form Card */}
              <div className="relative bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">We typically respond within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 focus:bg-white outline-none transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 focus:bg-white outline-none transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 focus:bg-white outline-none transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 focus:bg-white outline-none transition-all duration-300"
                      placeholder="Your Organization"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 focus:bg-white outline-none resize-none transition-all duration-300"
                      placeholder="Tell us about your requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="group/btn relative w-full overflow-hidden bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold">
                      <Send size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      <span>Send Message</span>
                    </div>
                  </button>
                </form>

                {/* Trust Badges */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center">
                        <CheckCircle size={14} className="text-emerald-600" />
                      </div>
                      <span>24-Hour Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center">
                        <CheckCircle size={14} className="text-blue-600" />
                      </div>
                      <span>Expert Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-purple-50 rounded-full flex items-center justify-center">
                        <CheckCircle size={14} className="text-purple-600" />
                      </div>
                      <span>100% Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="group relative">
                {/* Subtle Glow Effect */}
                <div className={`absolute inset-0 ${info.bgColor} rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 blur-xl`}></div>
                
                {/* Info Card */}
                <div className={`relative bg-white rounded-2xl border ${info.borderColor} p-6 group-hover:shadow-md transition-all duration-300`}>
                  <div className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={info.iconColor} size={22} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="group relative mt-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-2xl opacity-50 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl border border-emerald-200 p-8 shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Phone size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Need Quick Assistance?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Our team is available to help with urgent inquiries
                  </p>
                  <a 
                    href="tel:+91XXXXXXXXXX" 
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <Phone size={18} />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Average response time: <span className="font-semibold text-gray-800">2-4 hours</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;