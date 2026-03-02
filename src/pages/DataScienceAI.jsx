import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

const DataScienceAI = () => {
  const [activeCard, setActiveCard] = useState(0);

  const masteryContent = [
    {
      title: 'Defining the problem statement',
      content: "Identifying the business problem or rather an opportunity that the AI Solution will address sets the platform for our engagement. This could vary from automation requirements to cost reduction to customer experience enhancement. MHKTech AI teams are open minded to solve newer problems each day.",
      icon: '🎯',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Availability and Feasibility study',
      content: "Often an expensive and exciting solution may or may not fulfill the business goal. This is where we come in to conduct a feasibility study that will help us, and our clients realize if this solution will add value to their already rich and diverse technological investments. The goal is to ensure that this investment pays off quickly paving the path for many such discoveries with the data at hand. Since AI solutions rely heavily on data, before we start the solution architecture, we assess the data and determine if the client is primed for an AI solution or needs more data acquisition.",
      icon: '📊',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Proof of Concept',
      content: "Based on the MHKTech AI teams' direction, once we choose the right AI for the client, we map out a plan to develop a small-scale implementation of the solution. Crafting this plan requires in-depth knowledge of the AI solution methodologies, because this prototype should eventually resemble the big picture while riding on the rails of the client's business framework.",
      icon: '🔬',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'The Big Picture',
      content: "Once the POC is complete, our teams engage fully in delivering the full-scale solution. This involves building and training the AI Model and integrating it with existing systems and pushing the solution to production.",
      icon: '🚀',
      color: 'from-violet-500 to-purple-500'
    },
    {
      title: 'Optimizing the transformation',
      content: "AI Solutions are not set and forget in nature. They are constantly evolving and so are we. We run along with the AI solution evolution and fine-tune the model as needed to get the best value out of the deep learning algorithms at play.",
      icon: '⚡',
      color: 'from-fuchsia-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-purple-50 via-indigo-50 to-slate-100">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">AI & Data Science Solutions</h1>
            <p className="text-xl md:text-2xl text-purple-800 max-w-3xl mx-auto">
              We craft AI-led solutions to experience the unseen future, today
            </p>
          </div>
        </div>
      </section>

      {/* MHK Mastery - Card Gallery */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold text-sm">Our Approach</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">MHK Mastery</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive methodology for delivering transformative AI solutions
            </p>
          </div>

          {/* Horizontal Scrolling Cards */}
          <div className="relative">
            {/* Card Display */}
            <div className="grid lg:grid-cols-5 gap-4 mb-8">
              {masteryContent.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`p-6 rounded-xl transition-all duration-300 text-left ${activeCard === index
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-600 shadow-2xl scale-105'
                    : 'bg-white hover:bg-slate-50 hover:shadow-lg border-2 border-slate-200'
                    }`}
                >
                  <h3 className={`font-bold text-sm transition-colors ${activeCard === index ? 'text-white' : 'text-slate-700'
                    }`}>
                    {item.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Content Display */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 min-h-[300px] relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${masteryContent[activeCard].color} opacity-5 blur-3xl rounded-full`}></div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    {masteryContent[activeCard].title}
                  </h3>
                  <div className={`w-24 h-1 bg-gradient-to-r ${masteryContent[activeCard].color} rounded-full`}></div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  {masteryContent[activeCard].content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Revolutionizing Data Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Enhanced Customer Experience', desc: 'Personalize interactions with AI-driven recommendations and insights', icon: '😊' },
              { title: 'Improved Predictive Analytics', desc: 'Forecast trends and behaviors with advanced machine learning models', icon: '📈' },
              { title: 'Competitive Advantage', desc: 'Stay ahead with AI-powered automation and intelligence', icon: '🚀' },
              { title: 'Fraud Detection & Prevention', desc: 'Identify anomalies and prevent fraud in real-time', icon: '🔒' },
              { title: 'Operational Efficiency', desc: 'Automate processes and optimize resource allocation', icon: '⚙️' },
              { title: 'Data-Driven Decision Making', desc: 'Make confident decisions backed by AI insights', icon: '💡' }
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl shadow-lg flex items-start hover:shadow-xl transition-shadow">
                <span className="text-4xl mr-4">{benefit.icon}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" alt="ML" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">AI & Machine Learning</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We develop custom machine learning models that solve specific business problems, from classification and regression to deep learning and reinforcement learning applications.
              </p>
              <ul className="space-y-3">
                {['Natural Language Processing', 'Computer Vision', 'Recommendation Systems', 'Time Series Forecasting', 'Anomaly Detection'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Predictive Analytics */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Predictive Analytics</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Leverage historical data to predict future outcomes with our advanced predictive analytics solutions. Make proactive decisions based on data-driven forecasts.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our predictive models help businesses anticipate customer behavior, optimize inventory, forecast demand, and identify potential risks before they materialize.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Analytics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">AI & Data Science Tools and Technologies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              MHKTech Teams working on AI Solutions use the cutting-edge languages and softwares that arm them to deliver the best AI solutions to our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Big Data tools', 'Python', 'Spark Apache', 'Tableau', 'PyTorch', 'SpaCy', 'Theano'].map((tech, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow shadow-sm border border-slate-100">
                <h3 className="font-semibold text-slate-700">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'What AI services do you provide?', a: 'We offer machine learning model development, natural language processing, computer vision, predictive analytics, and AI consulting services.' },
              { q: 'How long does it take to implement AI solutions?', a: 'Timeline varies by project complexity, typically ranging from 2-6 months for full implementation including model development and deployment.' },
              { q: 'Do you provide ongoing AI model maintenance?', a: 'Yes, we offer continuous monitoring, retraining, and optimization services to ensure your AI models remain accurate and effective.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-indigo-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 text-purple-800">Let's build intelligent solutions together.</p>
          <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all transform hover:scale-105">
            TAKE THE LEAD
          </button>
          <p className="mt-6 text-purple-700 text-lg">Innovate. Accelerate. Transform.</p>
        </div>
      </section>
    </div>
  );
};

export default DataScienceAI;