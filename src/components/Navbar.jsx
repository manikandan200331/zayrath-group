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
  Layers,
  Sparkles
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ activeView, setActiveView, onOpenRfq, rfqCount }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
        transition: 'all 0.3s ease',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.97)' 
          : 'rgba(255, 255, 255, 0.93)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-gold)',
        boxShadow: isScrolled ? '0 6px 25px rgba(10, 88, 202, 0.08)' : 'none'
      }}
    >
      {/* Top Corporate Ticker Bar */}
      <div 
        className="top-corporate-ticker"
        style={{
          borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
          background: '#F8FAFC',
          fontSize: '0.72rem',
          padding: '0.3rem 0',
          color: 'var(--text-secondary)'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--brand-primary)', fontWeight: 600 }}>
              <Globe2 size={12} /> Global Vision • Greater Tomorrows
            </span>
            <span style={{ opacity: 0.35 }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={12} style={{ color: 'var(--brand-primary)' }} /> ISO 9001 & 27001 Certified
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Enterprise Desk: +91 44 8200 9000</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem clamp(1rem, 2vw, 1.5rem)' }}>
        
        {/* Brand Logo & Title */}
        <div 
          onClick={() => handleNavClick('group', null)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem', 
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div 
            style={{
              position: 'relative',
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1.5px solid var(--border-gold)',
              boxShadow: '0 2px 10px rgba(10, 88, 202, 0.15)',
              background: '#FFFFFF',
              flexShrink: 0
            }}
            className="navbar-brand-badge"
          >
            <BrandLogo size="100%" alt="Zayrath Group Emblem" />
          </div>

          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.38rem', 
              fontWeight: 900, 
              lineHeight: 1.05,
              letterSpacing: '0.05em',
              background: 'var(--gold-gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }} className="navbar-brand-title">
              ZAYRATH
            </div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '0.62rem', 
              fontWeight: 800, 
              letterSpacing: '0.35em', 
              color: 'var(--text-secondary)',
              textTransform: 'uppercase'
            }}>
              G R O U P
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('group', null)}
            style={{
              background: 'none',
              border: 'none',
              color: activeView === 'group' ? 'var(--brand-primary)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: activeView === 'group' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0',
              borderBottom: activeView === 'group' ? '2px solid var(--brand-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Building2 size={15} style={{ color: activeView === 'group' ? 'var(--brand-primary)' : 'var(--text-muted)' }} />
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
                background: (activeView === 'hardware' || activeView === 'software') ? 'rgba(10, 88, 202, 0.08)' : 'none',
                border: (activeView === 'hardware' || activeView === 'software') ? '1px solid rgba(10, 88, 202, 0.25)' : '1px solid transparent',
                borderRadius: '6px',
                color: (activeView === 'hardware' || activeView === 'software') ? 'var(--brand-primary)' : 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.45rem 0.75rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Layers size={15} style={{ color: 'var(--brand-primary)' }} />
              Companies
              <ChevronDown size={13} style={{ transform: isCompaniesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            {isCompaniesOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-15px',
                  width: '310px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  border: '1px solid var(--border-gold)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '12px',
                  padding: '0.65rem',
                  boxShadow: '0 16px 40px rgba(10, 88, 202, 0.12), 0 0 25px rgba(10, 88, 202, 0.08)',
                  zIndex: 1100,
                  animation: 'fadeIn 0.2s ease'
                }}
              >
                <div style={{ fontSize: '0.68rem', color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0.35rem 0.65rem', fontWeight: 700 }}>
                  Zayrath Corporate Subsidiaries
                </div>

                {/* Sub 1: Tech Systems (IT Products) */}
                <div 
                  onClick={() => handleNavClick('hardware', null)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    background: activeView === 'hardware' ? 'rgba(10, 88, 202, 0.08)' : 'transparent',
                    border: activeView === 'hardware' ? '1px solid rgba(10, 88, 202, 0.22)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(10, 88, 202, 0.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = activeView === 'hardware' ? 'rgba(10, 88, 202, 0.08)' : 'transparent'}
                >
                  <div style={{ background: 'rgba(10, 88, 202, 0.1)', padding: '0.45rem', borderRadius: '6px', color: 'var(--brand-primary)', flexShrink: 0 }}>
                    <Server size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.88rem' }}>Zayrath Tech Systems</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
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
                    gap: '0.65rem',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: '0.35rem',
                    background: activeView === 'software' ? 'rgba(10, 88, 202, 0.08)' : 'transparent',
                    border: activeView === 'software' ? '1px solid rgba(10, 88, 202, 0.22)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(10, 88, 202, 0.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = activeView === 'software' ? 'rgba(10, 88, 202, 0.08)' : 'transparent'}
                >
                  <div style={{ background: 'rgba(10, 88, 202, 0.1)', padding: '0.45rem', borderRadius: '6px', color: 'var(--brand-primary)', flexShrink: 0 }}>
                    <Code2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.88rem' }}>Zayrath Software Solutions</div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
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
              color: activeView === 'hardware' ? 'var(--brand-primary)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: activeView === 'hardware' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0',
              borderBottom: activeView === 'hardware' ? '2px solid var(--brand-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Server size={15} style={{ color: 'var(--brand-primary)' }} />
            IT Products
          </button>

          <button
            onClick={() => handleNavClick('software', null)}
            style={{
              background: 'none',
              border: 'none',
              color: activeView === 'software' ? 'var(--brand-primary)' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: activeView === 'software' ? 800 : 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0',
              borderBottom: activeView === 'software' ? '2px solid var(--brand-primary)' : '2px solid transparent',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
          >
            <Code2 size={15} style={{ color: 'var(--brand-primary)' }} />
            Software Solutions
          </button>

          <button
            onClick={() => handleNavClick('group', 'corporate-vision')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-primary)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            Vision & Leadership
          </button>
        </nav>

        {/* Action Button: RFQ / Enterprise Inquiry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenRfq}
            className="btn-gold-primary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.82rem'
            }}
          >
            <FileText size={15} />
            <span>Request Quote</span>
            {rfqCount > 0 && (
              <span 
                style={{
                  background: '#FFFFFF',
                  color: 'var(--brand-primary)',
                  borderRadius: '999px',
                  padding: '0.1rem 0.4rem',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  marginLeft: '0.15rem'
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
              border: '1px solid var(--border-gold)',
              borderRadius: '8px',
              color: 'var(--brand-primary)',
              padding: '0.5rem',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.08)'
            }}
            className="mobile-hamburger"
            aria-label="Toggle menu"
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
            borderTop: '1px solid var(--border-gold)',
            padding: '1.25rem 1.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)'
          }}
        >
          <button
            onClick={() => handleNavClick('group', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'group' ? 'rgba(10, 88, 202, 0.08)' : 'none',
              border: 'none',
              color: '#0F172A',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            <Building2 size={18} style={{ color: 'var(--brand-primary)' }} />
            Zayrath Group Overview
          </button>

          <div style={{ padding: '0.4rem 0.75rem', fontSize: '0.72rem', color: 'var(--brand-primary)', fontWeight: 700, letterSpacing: '0.06em' }}>
            SUBSIDIARY ENTERPRISES:
          </div>

          <button
            onClick={() => handleNavClick('hardware', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'hardware' ? 'rgba(10, 88, 202, 0.08)' : 'rgba(15, 23, 42, 0.03)',
              border: '1px solid var(--border-gold)',
              color: '#0F172A',
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
          >
            <Server size={18} style={{ color: 'var(--brand-primary)' }} />
            <div>
              <div>Zayrath Tech Systems</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 400 }}>IT Products & Server Sales</div>
            </div>
          </button>

          <button
            onClick={() => handleNavClick('software', null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: activeView === 'software' ? 'rgba(10, 88, 202, 0.08)' : 'rgba(15, 23, 42, 0.03)',
              border: '1px solid var(--border-gold)',
              color: '#0F172A',
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.92rem'
            }}
          >
            <Code2 size={18} style={{ color: 'var(--brand-primary)' }} />
            <div>
              <div>Zayrath Software Solutions</div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', fontWeight: 400 }}>Full-Cycle Software & AI Engineering</div>
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
              fontSize: '0.92rem'
            }}
          >
            <Globe2 size={18} style={{ color: 'var(--brand-primary)' }} />
            Corporate Vision & Global Presence
          </button>
        </div>
      )}

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: inline-flex !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-brand-badge {
            width: 38px !important;
            height: 38px !important;
          }
          .navbar-brand-title {
            font-size: 1.18rem !important;
          }
        }
      `}</style>
    </header>
  );
}
