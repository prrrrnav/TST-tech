import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Fingerprint, ChevronDown } from 'lucide-react';
import { getAllCategories } from '../data/productsDatabase';
import { getProductRoute } from '../utils/routeMapping';
import './SimplifiedHeader.css';

const iconMap = {
  Fingerprint: Fingerprint,
};

export default function SimplifiedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const categories = getAllCategories();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  // Add a timer to prevent accidental closing
  let closeTimer = null;

  const handleMouseEnter = (categoryId) => {
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
    setOpenDropdown(categoryId);
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 200ms delay before closing
  };

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-content">
            <div className="contact-info">
              <a href="mailto:sales@timewatchindia.com" className="contact-link">
                <Mail size={14} />
                <span className="contact-text">sales@timewatchindia.com</span>
              </a>
              <a href="tel:+919599953923" className="contact-link">
                <Phone size={14} />
                <span className="contact-text">+91-95999 53923</span>
              </a>
              <div className="location-info">
                <MapPin size={14} />
                <span className="contact-text">Gurugram, India</span>
              </div>
            </div>
            <div className="top-bar-actions">
              <button className="partner-btn">
                Become Partner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`main-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div onClick={() => navigate('/')} className="logo-wrapper">
              <div className="logo-icon">
                <Fingerprint className="text-white" size={24} />
              </div>
              <span className="logo-text">TST Technologies</span>
            </div>

            {/* Desktop Menu */}
            <div className="desktop-menu">
              <button 
                onClick={() => navigate('/')} 
                className={`menu-link ${isActive('/home') || location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </button>

              {/* Category Dropdowns */}
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className="dropdown-wrapper"
                  onMouseEnter={() => handleMouseEnter(category.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`menu-link dropdown-trigger ${isActive(`/category/${category.id}`) ? 'active' : ''}`}>
                    {category.name}
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-icon ${openDropdown === category.id ? 'rotate' : ''}`}
                    />
                  </button>

                  {openDropdown === category.id && (
                    <div className="dropdown-menu">
                      <div className="dropdown-content">
                        {category.productTypes.map((productType) => {
                          const IconComponent = iconMap[productType.icon] || Fingerprint;
                          return (
                            <button
                              key={productType.id}
                              onClick={() => {
                                const route = getProductRoute(category.id, productType.id);
                                navigate(route);
                                setOpenDropdown(null);
                                if (closeTimer) {
                                  clearTimeout(closeTimer);
                                  closeTimer = null;
                                }
                              }}
                              className="dropdown-item"
                            >
                              <div className="dropdown-item-icon">
                                <IconComponent size={20} />
                              </div>
                              <div className="dropdown-item-text">
                                <div className="dropdown-item-name">{productType.name}</div>
                                <div className="dropdown-item-desc">{productType.description}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <button 
                onClick={() => navigate('/about')} 
                className={`menu-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </button>

              <button 
                onClick={() => navigate('/contact')} 
                className="contact-button"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu-panel">
            <div className="mobile-menu-container">
              <button 
                onClick={() => { navigate('/'); setMobileMenuOpen(false); }} 
                className={`mobile-link ${isActive('/home') || location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </button>

              {/* Mobile Category Accordions */}
              {categories.map((category) => (
                <div key={category.id} className="mobile-dropdown">
                  <button 
                    onClick={() => setOpenDropdown(openDropdown === category.id ? null : category.id)}
                    className="mobile-dropdown-trigger"
                  >
                    {category.name}
                    <ChevronDown 
                      size={16} 
                      className={`dropdown-icon ${openDropdown === category.id ? 'rotate' : ''}`}
                    />
                  </button>
                  
                  {openDropdown === category.id && (
                    <div className="mobile-dropdown-content">
                      {category.productTypes.map((productType) => (
                        <button
                          key={productType.id}
                          onClick={() => {
                            const route = getProductRoute(category.id, productType.id);
                            navigate(route);
                            setMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          className="mobile-dropdown-item"
                        >
                          {productType.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button 
                onClick={() => { navigate('/about'); setMobileMenuOpen(false); }} 
                className={`mobile-link ${isActive('/about') ? 'active' : ''}`}
              >
                About
              </button>

              <button 
                onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }} 
                className="mobile-contact-button"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}