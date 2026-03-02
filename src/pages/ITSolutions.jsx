import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const ITSolutions = () => {
  const [activeSection, setActiveSection] = useState(0);

  const masteryContent = [
    {
      title: 'Requirements Gathering',
      content: "MHKTech business analysis teams work closely with business stakeholders and the client's IT and engineering teams to gather requirements and form joint workshops to perform a deep dive analysis of the problem statement. This collaboration will help us determine the best path ahead and support the client's goals."
    },
    {
      title: 'IT Support Vs Managed IT',
      content: "Be it ad-hoc technical assistance, or management of ongoing IT systems, MHKTech can handle either or both with the one goal of achieving stellar results for our clients. We cater to one-off requirements that fill in the gaps in the client's IT ecosystem and can also take on bigger challenges like managing an entire region of their IT landscape. Some of our success stories come from clients who hired us to take on a siloed job and later converted us into their managed IT partner."
    },
    {
      title: 'Range of Services',
      content: "At MHKTech, our highly scalable solutions range over a variety of services in the IT landscape. On a short notice, we are well equipped to deploy network and infrastructure management, IT Project Management, Data engineering, AI Solutions, Cloud computing, cybersecurity, software development and maintenance and back up and disaster recovery services."
    },
    {
      title: 'Automation',
      content: "We use state of the art tools and technologies to provide the best automation solutions to our client's repetitive problems. CI/CD pipelines are a lifeline of our deployment strategies and using them we have transformed many challenges into opportunities that enhance the environments of our clients. With our Devops expertise, we efficiently cut down delivery time of code across various environments and ensure security and scalability on the way."
    },
    {
      title: 'Monitoring & Support',
      content: "We firmly believe that the true sense of security is achieved, when we know how our production environment looks at any given point in time. To support this, we have invested in the best monitoring technologies that are configured and customized for each of our clients. With this approach we can quantify the reduction in repetitive outages and catch them before they hit the product and their clientele. MHKTech support teams thrive on such invasive alerting to provide the best 24x7 monitoring without the pain of a burnout."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">IT Solutions</h1>
            <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto">
              Trusted IT Support for Your Business
            </p>
          </div>
        </div>
      </section>

      {/* MHK Mastery Section with Tabs Layout */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">MHK Mastery</h2>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3">
              {/* Left Sidebar - Navigation */}
              <div className="lg:col-span-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-r border-slate-200">
                <div className="space-y-2 sticky top-24">
                  {masteryContent.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${activeSection === index
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'hover:bg-white text-slate-700 hover:shadow-md'
                        }`}
                    >
                      <span className="font-semibold">{item.title}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeSection === index ? 'rotate-90 text-white' : 'text-slate-400 group-hover:text-blue-600'
                        }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content Area */}
              <div className="lg:col-span-2 p-8 md:p-12">
                <div className="min-h-[400px]">
                  {masteryContent.map((item, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-500 ${activeSection === index
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 absolute translate-x-8 pointer-events-none'
                        }`}
                    >
                      <div className="mb-6">
                        <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                          Step {index + 1}
                        </span>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        {item.content}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-8 pt-8 border-t border-slate-200">
                        <div className="flex items-center text-sm text-slate-500">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          Our approach to {item.title.toLowerCase()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Development & Deployment */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Software Development & Deployment</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our software development services cover the entire lifecycle, from requirements gathering to deployment and maintenance. We use modern development practices including CI/CD pipelines to ensure rapid, reliable releases.
              </p>
              <ul className="space-y-4">
                {[
                  'Custom software development tailored to your needs',
                  'Automated CI/CD pipelines for faster deployment',
                  'Microservices architecture for scalability',
                  'DevOps practices for operational excellence',
                  'Quality assurance and testing automation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Software Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Project Management"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Project Management</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We employ industry-standard project management methodologies including Agile, Scrum, and Waterfall to ensure your projects are delivered on time, within budget, and to specification.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Agile', desc: 'Iterative development' },
                  { title: 'Scrum', desc: 'Sprint-based delivery' },
                  { title: 'Waterfall', desc: 'Structured approach' },
                  { title: 'Hybrid', desc: 'Best of both worlds' }
                ].map((method, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold mb-2 text-blue-600">{method.title}</h3>
                    <p className="text-sm text-slate-600">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managed IT Services */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Managed IT Services</h2>
            <p className="text-xl text-slate-600">Comprehensive IT support and infrastructure management</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🖥️',
                title: '24/7 Monitoring',
                description: 'Round-the-clock system monitoring and proactive issue resolution to minimize downtime.'
              },
              {
                icon: '🔒',
                title: 'Security Management',
                description: 'Comprehensive security solutions including firewalls, encryption, and threat detection.'
              },
              {
                icon: '☁️',
                title: 'Cloud Management',
                description: 'Expert management of your cloud infrastructure for optimal performance and cost.'
              },
              {
                icon: '💾',
                title: 'Backup & Recovery',
                description: 'Automated backup solutions and disaster recovery planning to protect your data.'
              },
              {
                icon: '🔧',
                title: 'Infrastructure Support',
                description: 'Ongoing maintenance and support for your IT infrastructure and systems.'
              },
              {
                icon: '📊',
                title: 'Performance Optimization',
                description: 'Continuous optimization of systems for maximum efficiency and reliability.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">IT Tools & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              MHKTech has always believed in investing in the best technologies and the best talent to drive them forward in the interest of our client’s goals.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Jira Software', 'Java', 'Python', 'Trello', 'Kubernetes', '.NET', 'MongoDB', 'SolarWinds', 'Git', 'Oracle', 'SAP', 'Docker', 'Dynatrace'].map((tech, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-slate-100">
                <h3 className="font-semibold text-slate-700">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'What IT services do you offer?',
                answer: 'We offer comprehensive IT services including software development, project management, managed IT services, cloud solutions, cybersecurity, and IT consulting.'
              },
              {
                question: 'Do you provide 24/7 support?',
                answer: 'Yes, our managed IT services include 24/7 monitoring and support to ensure your systems are always running smoothly.'
              },
              {
                question: 'Can you help with cloud migration?',
                answer: 'Absolutely. We specialize in cloud migration projects, helping businesses transition smoothly to cloud platforms like AWS, Azure, and Google Cloud.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Transform Your IT Infrastructure</h2>
          <p className="text-xl mb-8 text-blue-800">
            Partner with us for reliable, scalable IT solutions that drive business growth.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
            TAKE THE LEAD
          </button>
          <p className="mt-6 text-blue-800 text-lg">
            Innovate. Accelerate. Transform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ITSolutions;