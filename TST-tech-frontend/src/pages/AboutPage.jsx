import React from 'react';
import { Shield, Target, Users, Award, Zap, CheckCircle, Fingerprint, Lightbulb, Heart, TrendingUp, Lock, Eye, Handshake, Star, Rocket, Database, Settings } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Fingerprint size={20} />
              15+ Years of Excellence
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              About <span className="gradient-text">TST Technologies</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leading provider of biometric security solutions, RFID technology, and automated fingerprint identification systems
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, number: '580+', label: 'Active Clients' },
              { icon: Award, number: '15+', label: 'Years Experience' },
              { icon: Target, number: '99.9%', label: 'Uptime SLA' },
              { icon: Star, number: '4.9/5', label: 'Client Rating' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover-lift shadow-lg">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg shadow-emerald-500/30">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  T.S.T Technologies is a leader in Biometric security, RFID Technology, and Automated Fingerprint Identification Systems. Our fingerprint identification, search matching, and recognition software are the cornerstone products of our company.
                </p>
                <p>
                  We design, provide, and manage biometric solutions utilizing our proprietary Fingerprint Technology—specifically engineered for "1:N" fingerprint matching solutions.
                </p>
                <p>
                  Our innovation transforms fingerprint technology, allowing any integrator, customer, or manufacturer to select their preferred hardware while maintaining consistent matching software compliance. This flexibility ensures biometric and RFID solutions are accessible to everyone, regardless of environmental limitations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80" 
                alt="Team collaboration"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl floating">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <Shield className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">Hardware</div>
                    <div className="text-gray-600 font-medium">Agnostic Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 text-center text-white mb-20 relative overflow-hidden shadow-2xl shadow-emerald-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <Rocket className="mx-auto mb-6" size={56} />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed opacity-95">
                We are committed to providing total and quality Biometrics / RFID solutions to give technology leverage in enhancing business and security. Our mission is to deliver solutions that make biometric technology accessible to everyone without limitations.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">What drives us every day</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Quality */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover-lift group-hover:border-emerald-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    <Award className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We understand the importance of producing quality products and the long way it goes in winning customers' trust and loyalty. We have set strict parameters for checking quality and efficiency of our products.
                  </p>
                </div>
              </div>

              {/* Expertise */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover-lift group-hover:border-emerald-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    <Lightbulb className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our outstanding and experienced team uses a customer-oriented approach, listening carefully to customer needs. Our R&D team cooperates closely with technical support engineers to solve problems effectively.
                  </p>
                </div>
              </div>

              {/* Customer Satisfaction */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover-lift group-hover:border-emerald-400 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are a customer-oriented company following this principle in all business operations. Our dedicated team takes every care in offering delight to customers. We always welcome suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Advantages */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600">Technology that sets us apart</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Settings,
                  title: 'Hardware Agnostic',
                  description: 'Pick your own hardware while maintaining consistent matching software compliance'
                },
                {
                  icon: Database,
                  title: '1:N Matching',
                  description: 'Proprietary fingerprint technology designed for one-to-many identification'
                },
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'AES-256 encryption and multi-layer protection for all biometric data'
                },
                {
                  icon: Zap,
                  title: 'No Limitations',
                  description: 'Solutions that work across different environments and conditions'
                },
                {
                  icon: Eye,
                  title: 'Complete Solutions',
                  description: 'End-to-end biometric and RFID systems with full integration support'
                },
                {
                  icon: Handshake,
                  title: 'Trusted Partner',
                  description: '580+ organizations across government, corporate, and industrial sectors'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border-2 border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-l-8 border-emerald-600 shadow-xl">
            <div className="flex items-start gap-6 max-w-5xl">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl shadow-emerald-500/30">
                <Lock className="text-white" size={40} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Data Privacy</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  All biometric data is encrypted end-to-end using AES-256 encryption, stored securely with multi-layer protection, and handled in full compliance with GDPR and Indian data privacy standards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We prioritize the security and privacy of your data above all else, ensuring complete peace of mind for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;