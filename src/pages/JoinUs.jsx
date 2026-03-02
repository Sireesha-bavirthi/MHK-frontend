import React, { useState } from 'react';
import { Users, Rocket, Globe, Lightbulb, Target, Award, TrendingUp, Heart, Zap } from 'lucide-react';

const JoinUs = () => {
  const [activeValue, setActiveValue] = useState(0);

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Career Growth',
      desc: 'Continuous learning and advancement opportunities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      desc: 'Work on projects that make a difference worldwide',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Culture',
      desc: 'Your ideas are valued and implemented',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      desc: 'Work with the best minds in the industry',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Challenging Projects',
      desc: 'Solve complex problems with cutting-edge tech',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      desc: 'Flexible working arrangements and remote options',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const coreValues = [
    { value: 'Innovation', description: 'Drive change with cutting-edge solutions', icon: Rocket },
    { value: 'Trustworthiness', description: 'Build lasting relationships through integrity', icon: Award },
    { value: 'Agility', description: 'Adapt quickly to evolving challenges', icon: Zap },
    { value: 'Fun', description: 'Enjoy the journey and celebrate success', icon: Heart },
    { value: 'Customer Satisfaction', description: 'Exceed expectations consistently', icon: Target },
    { value: 'Professionalism', description: 'Maintain excellence in all we do', icon: Award },
    { value: 'Quality over Quantity', description: 'Focus on impactful outcomes', icon: TrendingUp },
    { value: 'Creativity', description: 'Think differently and innovate boldly', icon: Lightbulb },
    { value: 'Learning', description: 'Grow continuously through experience', icon: Users }
  ];

  const openPositions = [
    { role: 'Senior Data Engineer', dept: 'Engineering', location: 'Hyderabad, India / Remote', type: 'Full-time', color: 'blue' },
    { role: 'Machine Learning Engineer', dept: 'AI/ML', location: 'Spring, Texas / Remote', type: 'Full-time', color: 'emerald' },
    { role: 'Cloud Solutions Architect', dept: 'Cloud Services', location: 'Kitchener, Canada / Remote', type: 'Full-time', color: 'purple' },
    { role: 'Frontend Developer', dept: 'Engineering', location: 'Remote', type: 'Full-time', color: 'cyan' },
    { role: 'DevOps Engineer', dept: 'Infrastructure', location: 'Any Location', type: 'Full-time', color: 'orange' },
    { role: 'Product Manager', dept: 'Product', location: 'Spring, Texas', type: 'Full-time', color: 'pink' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-blue-700 font-semibold text-sm">WE'RE HIRING</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              The MHK TEAM
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-12">
              Join our team of innovators and problem-solvers and be a part of our future
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </button>
              <button
                onClick={() => document.getElementById('core-values')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Learn About Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              At MHK Tech Inc, we believe in creating an environment where talent thrives, innovation flourishes, and every team member contributes to our shared success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl border-2 border-slate-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-white transition-colors">{benefit.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 transition-colors">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="core-values" className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Our Core Values</h2>
            <p className="text-xl text-slate-600">The principles that guide our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((item, i) => (
              <div
                key={i}
                onClick={() => setActiveValue(i)}
                className={`cursor-pointer bg-white p-6 rounded-xl transition-all duration-300 ${activeValue === i
                    ? 'shadow-2xl scale-105 ring-2 ring-blue-500'
                    : 'shadow-md hover:shadow-xl'
                  }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg transition-all duration-300 ${activeValue === i ? 'bg-blue-600' : 'bg-blue-100'
                    }`}>
                    <item.icon className={`w-6 h-6 transition-colors ${activeValue === i ? 'text-white' : 'text-blue-600'
                      }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{item.value}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 px-6 bg-white scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Open Positions</h2>
            <p className="text-xl text-slate-600 mb-8">Explore opportunities across our teams</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['All', 'Engineering', 'AI/ML', 'Cloud Services', 'Product'].map((filter, i) => (
                <button
                  key={i}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${i === 0
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openPositions.map((job, i) => (
              <div
                key={i}
                className="group bg-white border-2 border-slate-100 p-6 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`bg-${job.color}-100 text-${job.color}-700 px-3 py-1 rounded-full text-xs font-medium`}>
                        {job.dept}
                      </span>
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all transform group-hover:scale-110">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm text-slate-500">{job.type}</span>
                  <button className="text-blue-600 font-semibold text-sm hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Don't see a perfect fit?</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Join us in shaping the future of enterprise technology. Your journey starts here.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
              TAKE THE LEAD
            </button>
            <button className="bg-transparent text-white px-10 py-5 rounded-xl text-lg font-bold border-2 border-white hover:bg-white/10 transition-all transform hover:scale-105">
              Contact HR Team
            </button>
          </div>
          <p className="mt-12 text-blue-100 text-lg font-medium">Innovate. Accelerate. Transform.</p>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;