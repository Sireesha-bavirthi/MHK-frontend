import React, { useState } from 'react';

const CloudSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const masteryContent = [
    {
      title: 'Discovery & Assessment',
      content: "When we engage with any of our clients, our first response is to initiate learning workshops and discovery sessions, which helps us understand their IT infrastructure and the business model. This lays the foundation for us to develop custom solutions that best fit the task at hand."
    },
    {
      title: 'Re-evaluating the Challenge',
      content: "A deep dive analysis of the problem statement/ pain points is critical to arrive at a conclusive project goal and road map. With the help of the client's teams, we gather a deeper understanding of the current systems and processes to determine the best way ahead."
    },
    {
      title: 'Solution Architecture',
      content: "Whether the requirement asks for a Cloud Native solution or a Cloud Migration, our teams are well equipped to handle either situation. Our solutions architecture teams are experts in identifying the customizing a framework that best suits the client's requirements."
    },
    {
      title: 'Design & Implementation',
      content: "Once we have chosen a cloud provider, our design and implementation teams start the solution design by checking which cloud services best suit the problem. This starts with identifying the Identity Access Management roles and features, gauging the compute and resource budget estimates, mapping out the technical and network services that are going to be at play, and design the technical architecture map for the solution. Planning stages like these enable us to meet our deadlines in the most efficient and secure way."
    },
    {
      title: 'Deploy, Test & Support',
      content: "Automation through CI/CD is a given in all our processes that deploy standalone apps to microservices. This kind of automation gives back a lot of time to the development and testing teams to let them focus on their core areas and not worry about the code movement. Once deployed, we participate in testing and certifying the solution and furthermore support it until the client's IT teams are trained to take over."
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">CLOUD Solutions</h1>
            <p className="text-xl md:text-2xl text-cyan-700 max-w-3xl mx-auto">
              Transforming Business Operations with Cutting-Edge Cloud Solutions
            </p>
          </div>
        </div>
      </section>

      {/* MHK Mastery - Flip Cards Grid */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">MHK Mastery</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive cloud transformation approach
            </p>
          </div>

          {/* Flip Cards Grid */}
          <div className="flex flex-wrap justify-center gap-8">
            {masteryContent.map((item, index) => (
              <div
                key={index}
                className="h-80 perspective-1000 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${hoveredIndex === index ? 'rotate-y-180' : ''
                  }`}>
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="w-full h-full bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center text-center border-2 border-cyan-100 hover:border-cyan-300 transition-colors">
                      <div className="text-6xl font-bold text-cyan-600 mb-4">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 italic">Hover to read more</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl shadow-xl p-8 flex flex-col justify-center text-white">
                      <h3 className="text-xl font-bold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style jsx>{`
            .perspective-1000 {
              perspective: 1000px;
            }
            .transform-style-3d {
              transform-style: preserve-3d;
            }
            .backface-hidden {
              backface-visibility: hidden;
            }
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
          `}</style>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Cloud Native" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Cloud Native Solutions</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Build modern, cloud-native applications that drive innovation, productivity, and efficiency. Our cloud-native approach leverages containers, microservices, and serverless architectures.
              </p>
              <ul className="space-y-3">
                {['Kubernetes orchestration', 'Serverless computing', 'Microservices architecture', 'API-first design', 'DevOps automation'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-cyan-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Cloud Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '📦', title: 'SaaS', desc: 'Software as a Service solutions for instant access to applications' },
              { icon: '🖥️', title: 'IaaS', desc: 'Infrastructure as a Service for flexible computing resources' },
              { icon: '🛠️', title: 'PaaS', desc: 'Platform as a Service for streamlined application development' },
              { icon: '🔄', title: 'Cloud Migration', desc: 'Seamless transition of workloads to the cloud' },
              { icon: '🔒', title: 'Security', desc: 'Enterprise-grade cloud security and compliance' },
              { icon: '💰', title: 'Cost Optimization', desc: 'Maximize ROI with optimized cloud spending' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Cloud Migration</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Successfully move your workloads to modern cloud platforms with our proven migration methodology. We minimize downtime, ensure data integrity, and optimize performance throughout the migration process.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our experts handle everything from assessment and planning to execution and post-migration optimization, ensuring a smooth transition to the cloud.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560732488-6b0df240254a?w=800&q=80" alt="Migration" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Cloud Solutions Tools and Technologies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              When it comes to benefiting our clients, MHKTech relies on the best technologies in the market. To have the highest quality output with the best practices of the industry in place, we partner with the largest cloud solutions providers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud'].map((tech, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-700">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Which cloud platforms do you support?', a: 'We work with all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform, helping you choose the best fit for your needs.' },
              { q: 'How long does cloud migration take?', a: 'Migration timelines vary based on complexity, typically ranging from a few weeks for simple applications to several months for enterprise-wide migrations.' },
              { q: 'Can you help reduce our cloud costs?', a: 'Yes, we provide cloud cost optimization services including right-sizing, reserved instances, and automated resource management to minimize expenses.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-cyan-50 to-blue-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace Cloud Computing?</h2>
          <p className="text-xl mb-8 text-cyan-800">Let's accelerate your cloud journey together.</p>
          <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-all transform hover:scale-105">
            TAKE THE LEAD
          </button>
          <p className="mt-6 text-cyan-700 text-lg">Innovate. Accelerate. Transform.</p>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;