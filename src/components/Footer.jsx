import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'Data Engineering', href: '/data-engineering' },
      { label: 'IT Solutions', href: '/it-solutions' },
      { label: 'Data Science & AI', href: '/data-science-ai' },
      { label: 'Cloud Solutions', href: '/cloud-solutions' }
    ],
    company: [
      { label: 'Home', href: '/' },
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Our Products', href: '/our-products' },
      { label: 'Join Us', href: '/join-us' },
      { label: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/mhktech', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/mhktech', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/mhktech', label: 'GitHub' },
    { icon: Mail, href: 'mailto:contact@mhktech.com', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-slate-900 mb-6 block hover:text-emerald-600 transition-colors">
              MHK <span className="text-emerald-600">Tech</span>
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
              Empowering global enterprises with next-generation digital infrastructure and intelligent automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-white rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 shadow-sm border border-slate-100"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors text-sm block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} MHK Tech Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
              Systems Operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;