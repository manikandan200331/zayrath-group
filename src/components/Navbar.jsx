import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Server, 
  Code2, 
  ChevronDown, 
  Menu, 
  X, 
  FileText, 
  PhoneCall, 
  Globe2, 
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';
import logoImg from '../assets/zayrath-logo.jpg';

export default function Navbar({ activeView, setActiveView, onOpenRfq, rfqCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (viewId, elementId) => {
    setActiveView(viewId);
    setMobileMenuOpen(false);
    setIsCompaniesOpen(false);
    if (elementId) {
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)' 
          : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(184, 134, 11, 0.25)',
        boxShadow: isScrolled ? '0 8px 30px rgba(15, 23, 42, 0.08)' : 'none'
      }}
    >
      {/* Top Corporate Ticker Bar */}
      <div 
        className="top-corporate-ticker"
        style={{
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
          background: '#F8FAFC',
          fontSize: '0.75rem',
          padding: '0.35rem 0',
          color: 'var(--text-secondary)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--gold-light)' }}>
              <Globe2 size={13} /> Global Conglomerate HQ & Innovation Hubs
            </span>
            <span style={{ display: 'none', md: 'inline', opacity: 0.6 }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={13} style={{ color: 'var(--gold-primary)' }} /> ISO 9001 & 27001 Certified Enterprise Quality
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--gold-light)' }}>24/7 Corporate Desk: +91 44 8200 9000</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.5rem' }}>
        
        {/* Brand Logo & Slogan */}
        <div 
          onClick={() => handleNavClick('group', null)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div 
            style={{
              position: 'relative',
              width: '52px',
              height: '52px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid rgba(184, 134, 11, 0.35)',
              boxShadow: '0 2px 10px rgba(184, 134, 11, 0.2)',
              background: '#FFFFFF'
            }}
          >
            <img 
              src={logoImg} 
              alt="Zayrath Group Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '1.45rem', 
              fontWeight: 800, 
              lineHeight: 1.1,
              letterSpacing: '0.08em',
              background: 'var(--gold-gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              ZAYRATH
            </div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '0.68rem', 
              fontWeight: 800, 
              letterSpacing: '0.35em', 
              color: 'var(--text-gold)',
              textTransform: 'uppercase'
            }}>
              G R O U P
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('group', null)}
            style={{
              background: 'none',
              border: 'none',
              color: activeView === 'group' ? 'var(--text-gold)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: activeView === 'group' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0',
              borderBottom: activeView === 'group' ? '2px solid var(--gold-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            <Building2 size={16} style={{ color: activeView === 'group' ? 'var(--gold-primary)' : 'var(--text-muted)' }} />
            Group Home
          </button>

          {/* Companies Dropdown Menu */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsCompaniesOpen(true)}
            onMouseLeave={() => setIsCompaniesOpen(false)}
          >
            <button
              onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
              style={{
                background: (activeView === 'hardware' || activeView === 'software') ? 'rgba(184, 134, 11, 0.1)' : 'none',
                border: (activeView === 'hardware' || activeView === 'software') ? '1px solid rgba(184, 134, 11, 0.3)' : '1px solid transparent',
                borderRadius: '6px',
                color: (activeView === 'hardware' || activeView === 'software') ? 'var(--text-gold)' : 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.5rem 0.85rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Layers size={16} style={{ color: 'var(--gold-primary)' }} />
              Companies
              <ChevronDown size={14} style={{ transform: isCompaniesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {isCompaniesOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-15px',
                  width: '320px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  border: '1px solid rgba(184, 134, 11, 0.35)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  padding: '0.75rem',
                  boxShadow: '0 16px 40px rgba(15, 23, 42, 0.12), 0 0 25px rgba(184, 134, 11, 0.1)',
                  zIndex: 1100,
                  animation: 'fadeIn 0.2s ease'
                }}
              >
                <div style={{ fontSize: '0.7rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.4rem 0.75rem', fontWeight: 700 }}>
                  Zayrath Corporate Subsidiaries
                </div>

                {/* Sub 1: Tech Systems (IT Products) */}
                <div 
                  onClick={() => handleNavClick('hardware', null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: activeView === 'hardware' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                    border: activeView === 'hardware' ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = activeView === 'hardware' ? 'rgba(212, 175, 55, 0.12)' : 'transparent'}
                >
                  <div style={{ background: 'rgba(212, 175, 55, 0.15)', padding: '0.5rem', borderRadius: '6px', color: 'var(--gold-light)' }}>
                    <Server size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem' }}>Zayrath Tech Systems</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      IT Products & Servers (Dedicated Page →)
                    </div>
                  </div>
                </div>

                {/* Sub 2: Software Solutions */}
                <div 
                  onClick={() => handleNavClick('software', null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '0.4rem',
                    background: activeView === 'software' ? 'rgba(212, 175, 55, 0.12)' : 'transparent',
                    border: activeView === 'software' ? '1px solid rgba(212, 175, 55, 0.25)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = activeView === 'software' ? 'rgba(212, 175, 55, 0.12)' : 'transparent'}
                >
                  <div style={{ background: 'rgba(212, 175, 55, 0.15)', padding: '0.5rem', borderRadius: '6px', color: 'var(--gold-light)' }}>
                    <Code2 size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem' }}>Zayrath Software Solutions</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                      Custom Software & AI (Dedicated Page →)
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('hardware', null)}
            style={{
              background: 'none',
              border: 'none',
              color: activeView === 'hardware' ? 'var(--text-gold)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: activeView === 'hardware' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0',
              borderBottom: activeView === 'hardware' ? '2px solid var(--gold-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            <Server size={15} style={{ color: 'var(--gold-primary)' }} />
            IT Products
          </button>

          <button
            onClick={() => handleNavClick('software', null)}
            style={{
              background: 'none',
              border: 'none',
              color: activeView === 'software' ? 'var(--text-gold)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: activeView === 'software' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 0',
              borderBottom: activeView === 'software' ? '2px solid var(--gold-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease'
            }}
          >
            <Code2 size={15} style={{ color: 'var(--gold-primary)' }} />
            Software Solutions
          </button>

          <button
            onClick={() => handleNavClick('group', 'corporate-vision')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-gold)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Vision & Leadership
          </button>
        </nav>

        {/* Action Button: RFQ / Enterprise Inquiry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={onOpenRfq}
            className="btn-gold-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.85rem'
            }}
          >
            <FileText size={16} />
            <span>Request Quote</span>
            {rfqCount > 0 && (
              <span 
                style={{
                  background: '#FFFFFF',
                  color: 'var(--text-gold)',
                  borderRadius: '999px',
                  padding: '0.1rem 0.45rem',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  marginLeft: '0.2rem'
                }}
              >
                {rfqCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: '#FFFFFF',
              border: '1px solid rgba(184, 134, 11, 0.3)',
              borderRadius: '8px',
              color: 'var(--text-gold)',
              padding: '0.6rem',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.08)'
            }}
            className="mobile-hamburger"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            borderTop: '1px solid rgba(184, 134, 11, 0.25)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)'
          }}
        >
          <button
            onClick={() => handleNavClick('group', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'group' ? 'rgba(184, 134, 11, 0.12)' : 'none',
              border: 'none',
              color: '#0F172A',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            <Building2 size={18} style={{ color: 'var(--gold-primary)' }} />
            Zayrath Group Overview
          </button>

          <div style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: 'var(--gold-light)', fontWeight: 700, letterSpacing: '0.05em' }}>
            SUBSIDIARY ENTERPRISES:
          </div>

          <button
            onClick={() => handleNavClick('hardware', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'hardware' ? 'rgba(184, 134, 11, 0.12)' : 'rgba(15, 23, 42, 0.03)',
              border: '1px solid rgba(184, 134, 11, 0.25)',
              color: '#0F172A',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            <Server size={18} style={{ color: 'var(--gold-primary)' }} />
            <div>
              <div>Zayrath Tech Systems</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400 }}>IT Products & Server Sales</div>
            </div>
          </button>

          <button
            onClick={() => handleNavClick('software', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'software' ? 'rgba(184, 134, 11, 0.12)' : 'rgba(15, 23, 42, 0.03)',
              border: '1px solid rgba(184, 134, 11, 0.25)',
              color: '#0F172A',
              padding: '0.85rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            <Code2 size={18} style={{ color: 'var(--gold-primary)' }} />
            <div>
              <div>Zayrath Software Solutions</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Full-Cycle Software & AI Engineering</div>
            </div>
          </button>

          <button
            onClick={() => handleNavClick('group', 'corporate-vision')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              padding: '0.75rem 1rem',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.95rem'
            }}
          >
            <Globe2 size={18} style={{ color: 'var(--gold-primary)' }} />
            Corporate Vision & Global Presence
          </button>
        </div>
      )}

      {/* Responsive CSS for Mobile */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
