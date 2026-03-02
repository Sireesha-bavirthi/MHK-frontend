import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatWeDoOpen, setIsWhatWeDoOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatWeDoLinks = [
    { name: 'Data Engineering', path: '/data-engineering' },
    { name: 'IT Solutions', path: '/it-solutions' },
    { name: 'Data Science & AI', path: '/data-science-ai' },
    { name: 'Cloud Solutions', path: '/cloud-solutions' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/MHK logo1_new.svg"
              alt="MHK Tech Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/' ? 'text-emerald-600' : 'text-slate-700'
                }`}
            >
              HOME
            </Link>
            <Link
              to="/who-we-are"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/who-we-are' ? 'text-emerald-600' : 'text-slate-700'
                }`}
            >
              WHO WE ARE
            </Link>

            {/* What We Do Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsWhatWeDoOpen(true)}
              onMouseLeave={() => setIsWhatWeDoOpen(false)}
            >
              <button className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors flex items-center py-2">
                WHAT WE DO
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isWhatWeDoOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isWhatWeDoOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg py-2 border border-slate-200">
                    {whatWeDoLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/our-products"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/our-products' ? 'text-emerald-600' : 'text-slate-700'
                }`}
            >
              Our Products
            </Link>
            <Link
              to="/join-us"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/join-us' ? 'text-emerald-600' : 'text-slate-700'
                }`}
            >
              Join Us
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === '/contact' ? 'text-emerald-600' : 'text-slate-700'
                }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              TAKE THE LEAD
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-sm font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/who-we-are" className="text-sm font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
                Who We Are
              </Link>
              <div className="space-y-2">
                <div className="text-sm font-medium text-slate-700">What We Do</div>
                {whatWeDoLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block pl-4 text-sm text-slate-600 hover:text-emerald-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/our-products" className="text-sm font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
                Our Products
              </Link>
              <Link to="/join-us" className="text-sm font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
                Join Us
              </Link>
              <Link to="/contact" className="text-sm font-medium text-slate-700 hover:text-emerald-600" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>

              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                TAKE THE LEAD
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;