import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const DataEngineering = () => {
  const [activeSection, setActiveSection] = useState(0);

  const masteryContent = [
    {
      title: 'Assessment & Strategy Planning',
      content: "MHK Tech Inc identifies client business needs. MHK Tech Inc works with the client's current infrastructure. MHK Tech Inc creates custom strategies aligned with client infrastructure. MHK Tech Inc identifies gaps in client data processes. MHK Tech Inc designs plans to elevate the use of client data."
    },
    {
      title: 'Integration & Aggregation',
      content: "MHK Tech Inc uses cutting-edge technology for data integration. MHK Tech Inc uses industry best practices for data aggregation. MHK Tech Inc ensures data accuracy, consistency, and completeness. MHK Tech Inc aggregates data in client data stores for a holistic view."
    },
    {
      title: "Data Lake",
      content: "MHK Tech Inc builds Data Lakes. A Data Lake is a cost-effective storage solution. A Data Lake is scalable, secure, and flexible. A Data Lake stores unstructured and unprocessed data. MHK Tech Inc designs data architectures optimizing storage and retrieval speed. MHK Tech Inc reduces latency and ensures high availability."
    },
    {
      title: 'Data Pipelines',
      content: "MHK Tech Inc designs data pipelines. MHK Tech Inc implements data pipelines. MHK Tech Inc manages data pipelines. MHK Tech Inc enables seamless collection, processing, and analysis of large volumes of data. MHK Tech Inc ensures pipelines are scalable and optimized."
    },
    {
      title: 'Data Visualization & Reporting',
      content: "MHK Tech Inc creates insightful reports and dashboards. MHK Tech Inc enables clients to interpret complex data easily. MHK Tech Inc uses best-in-class visualization tools. MHK Tech Inc converts complex data into interactive visualizations."
    }
  ];

  const technologies = [
    {
      name: 'Apache Hadoop',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg'
    },
    {
      name: 'PySpark Apache',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg'
    },
    {
      name: 'Snowflake',
      logo: 'https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg'
    },
    {
      name: 'Azure',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
    },
    {
      name: 'Databricks',
      logo: 'https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg'
    },
    {
      name: 'Apache Airflow',
      logo: 'https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg'
    },
    {
      name: 'Talend',
      logo: 'https://www.vectorlogo.zone/logos/talend/talend-icon.svg'
    }
  ];

  const faqs = [
    {
      question: 'What is Data Engineering?',
      answer: 'Data Engineering is a field of study that deals with the design, building, and maintenance of data systems. It involves various processes, including collecting, storing, processing, and analyzing data to provide insights and support business decisions.'
    },
    {
      question: 'What are the Benefits of Data Engineering Solutions for Businesses?',
      answer: 'Data Engineering Solutions provide businesses with the ability to collect, process, and analyze vast amounts of data to gain insights into their operations, customers, and market trends. This enables companies to make data-driven decisions that can improve efficiency, reduce costs, and increase revenue.'
    },
    {
      question: 'What Skills are Required to Become a Data Engineer?',
      answer: 'To become a Data Engineer, you need to have a strong foundation in computer science and programming languages like Python, Java, and SQL. You should also be familiar with data warehousing and data modeling techniques, as well as have knowledge of big data platforms like Hadoop and Spark.'
    },
    {
      question: 'How Can Data Engineering Solutions Help Businesses to Improve their Data Quality?',
      answer: 'Data Engineering Solutions can help businesses to improve their data quality by providing data cleansing and data enrichment services. These solutions can help to identify and remove errors and inconsistencies in the data, as well as fill in missing data points to ensure that the data is accurate and complete.'
    },
    {
      question: 'What is the Role of Data Engineering in Machine Learning?',
      answer: 'Data Engineering plays a crucial role in Machine Learning by providing the necessary data preparation and processing steps. Data Engineers are responsible for preparing the data sets that Machine Learning models use for training and validation, as well as ensuring that the data is properly cleaned and formatted.'
    },
    {
      question: 'How Can Data Engineering Solutions Help Businesses to Improve their Operational Efficiency?',
      answer: 'Data Engineering Solutions can help businesses to improve their operational efficiency by automating repetitive data-related tasks and providing real-time data analysis. This allows businesses to make faster, more informed decisions and reduces the risk of errors and delays.'
    },
    {
      question: 'What Are Some Common Data Engineering Tools and Technologies?',
      answer: 'Some common Data Engineering tools and technologies include Apache Hadoop, Apache Spark, SQL databases like MySQL and PostgreSQL, and cloud-based platforms like Amazon Web Services (AWS) and Microsoft Azure.'
    },
    {
      question: 'What is the Role of Data Governance in Data Engineering?',
      answer: 'Data Governance is the process of managing the availability, usability, integrity, and security of the data used by an organization. Data Engineering plays a critical role in implementing Data Governance policies and procedures, as well as ensuring that the data is properly managed and secured.'
    },
    {
      question: 'How Can Data Engineering Solutions Help Businesses to Improve their Customer Experience?',
      answer: 'Data Engineering Solutions can help businesses to improve their customer experience by providing insights into customer behavior, preferences, and needs. This allows businesses to personalize their products and services, as well as improve their marketing and sales strategies.'
    },
    {
      question: 'What is the Future of Data Engineering?',
      answer: 'The future of Data Engineering is bright, with new technologies and tools emerging every day to improve data processing and analysis capabilities. As businesses continue to rely more heavily on data-driven decision-making, the demand for skilled Data Engineers will only continue to grow.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-100">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center text-slate-900">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Data Engineering</h1>
            <p className="text-xl md:text-2xl text-emerald-800 max-w-3xl mx-auto">
              Maximize the potential of your organizational data with enterprise-level solutions
            </p>
          </div>
        </div>
      </section>

      {/* MHK Mastery Section with Accordion */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Data Engineering Services</h2>

              {/* Accordion */}
              <div className="space-y-4">
                {masteryContent.map((item, index) => (
                  <div
                    key={index}
                    className="border-2 border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500"
                  >
                    <button
                      onClick={() => setActiveSection(activeSection === index ? -1 : index)}
                      className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
                    >
                      <span className={`font-bold text-lg transition-colors ${activeSection === index ? 'text-emerald-600' : 'text-slate-900'
                        }`}>
                        {item.title}
                      </span>
                      {activeSection === index ? (
                        <ChevronDown className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-slate-400 flex-shrink-0" />
                      )}
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${activeSection === index ? 'max-h-96' : 'max-h-0'
                      }`}>
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl sticky top-24">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data Engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Data Needs Our Solution */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Your Data Needs Our Solution</h2>
            <p className="text-xl text-slate-600">Comprehensive data engineering services tailored to your business</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ETL & Data Integration',
                description: 'Seamlessly extract, transform, and load data from diverse sources into unified data warehouses, ensuring consistency and reliability.',
                icon: '🔄'
              },
              {
                title: 'Real-time Data Pipelines',
                description: 'Build streaming data pipelines that process millions of events per second, enabling instant insights and rapid response.',
                icon: '⚡'
              },
              {
                title: 'Data Quality & Governance',
                description: 'Implement comprehensive data quality frameworks and governance policies to ensure accuracy, compliance, and trust.',
                icon: '✓'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Pipelines */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Data Pipelines"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Data Pipelines</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our data pipeline solutions are designed for scalability and performance. We build both batch and streaming pipelines using cutting-edge technologies like Apache Spark, Kafka, and cloud-native services.
              </p>
              <ul className="space-y-4">
                {[
                  'Automated data ingestion from multiple sources',
                  'Real-time transformation and enrichment',
                  'Fault-tolerant and self-healing architectures',
                  'Monitoring and alerting for pipeline health',
                  'Cost-optimized data storage strategies'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud-based Data Solutions */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Cloud-based Data Solutions</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Leverage the power of cloud computing for your data infrastructure. We design and implement cloud-native data platforms on AWS, Azure, and GCP that offer unmatched scalability, flexibility, and cost-efficiency.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                From data lakes to modern data warehouses, we architect solutions that grow with your business while maintaining optimal performance and security.
              </p>
              <div className="mt-8">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
                  Explore Cloud Solutions
                </button>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Cloud Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Tools & Technologies</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-12">
              From data integration and ETL to data warehousing, data pipelines and machine learning, companies want to partner with expert solution providers in the area. When you want to stay ahead of the curve, today's businesses are looking to optimize the data infrastructure, streamline the data workflows and build advanced analytics capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-32 h-32 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center mb-4 hover:border-emerald-500 hover:shadow-lg transition-all p-6">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center group-hover:text-emerald-600 transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-500"
              >
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-50 to-teal-50 text-slate-900 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="text-xl mb-8 text-emerald-800">
            Let's discuss how our data engineering expertise can drive your business forward.
          </p>
          <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
            TAKE THE LEAD
          </button>
          <p className="mt-6 text-emerald-700 text-lg">
            Innovate. Accelerate. Transform.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DataEngineering;