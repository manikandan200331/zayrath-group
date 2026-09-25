import React from 'react';
import { 
  ArrowRight, 
  Server, 
  Code2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Sparkles,
  ChevronRight,
  Globe2
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function HeroSection({ setActiveView, onOpenRfq }) {
  return (
    <section 
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(6.5rem, 8vh + 2rem, 8rem)',
        paddingBottom: 'clamp(2.5rem, 5vh, 4.5rem)',
        overflow: 'hidden'
      }}
      className="hero-section"
    >
      {/* Ambient background glow orbs */}
      <div 
        className="gold-glow-orb" 
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '500px', opacity: 0.16 }}
      />
      <div 
        className="gold-glow-orb" 
        style={{ top: '60%', right: '-10%', width: '450px', height: '450px', opacity: 0.12 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.2fr 0.8fr', 
            gap: 'clamp(2rem, 3.5vw, 3.5rem)', 
            alignItems: 'center' 
          }} 
          className="hero-grid"
        >
          
          {/* Left Hero Content */}
          <div>
            {/* Top Royal Pill */}
            <div style={{ marginBottom: '1rem' }}>
              <div className="badge-gold badge-glow">
                <Globe2 size={13} style={{ color: 'var(--brand-primary)' }} />
                <span>Premier Multinational Technology Conglomerate</span>
              </div>
            </div>

            {/* Slogan & Group Name */}
            <h1 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: 'var(--title-hero)', 
                fontWeight: 900, 
                lineHeight: 1.15,
                marginBottom: '1rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }} 
              className="hero-title"
            >
              Global Vision for <br />
              <span className="text-gold-gradient">Greater Tomorrows</span>
            </h1>

            <p 
              style={{ 
                fontSize: 'var(--body-lead)', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.65, 
                marginBottom: '1.85rem',
                maxWidth: '560px'
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>Zayrath Group</strong> is an avant-garde enterprise conglomerate shaping the digital horizons of international business. Through specialized frontier subsidiaries, we deliver enterprise-grade <strong style={{ color: 'var(--brand-primary)' }}>IT Hardware & Infrastructure Products</strong> alongside bespoke <strong style={{ color: 'var(--brand-primary)' }}>Full-Cycle Software & Autonomous AI Solutions</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginBottom: '2.25rem' }}>
              <button 
                onClick={() => {
                  const el = document.getElementById('companies-hub');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold-primary"
              >
                <span>Explore Companies</span>
                <ArrowRight size={16} />
              </button>

              <button 
                onClick={onOpenRfq}
                className="btn-gold-outline"
              >
                <span>Request Enterprise RFQ</span>
              </button>
            </div>

            {/* Corporate Highlights Strip */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                borderTop: '1px solid var(--border-gold)',
                paddingTop: '1.35rem'
              }}
              className="hero-stats"
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, color: 'var(--brand-primary)' }}>
                  10,000+
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  IT Products Supplied
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, color: 'var(--brand-primary)' }}>
                  150+
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Platforms Delivered
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)', fontWeight: 800, color: 'var(--brand-primary)' }}>
                  99.99%
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  High-Availability SLA
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero: Emblem Showcase & Interactive Subsidiary Gateways */}
          <div style={{ position: 'relative' }}>
            
            {/* Ambient Logo Card */}
            <div 
              className="glass-card"
              style={{
                padding: 'clamp(1.5rem, 2.5vw, 2.25rem) clamp(1.25rem, 2vw, 1.85rem)',
                textAlign: 'center',
                background: '#FFFFFF',
                borderColor: 'var(--border-gold)',
                boxShadow: '0 16px 40px rgba(10, 88, 202, 0.08), 0 0 25px rgba(10, 88, 202, 0.08)'
              }}
            >
              {/* Brand Emblem Frame */}
              <div 
                style={{
                  width: 'clamp(120px, 14vw, 155px)',
                  height: 'clamp(120px, 14vw, 155px)',
                  margin: '0 auto 1rem',
                  borderRadius: '20px',
                  padding: '4px',
                  background: 'linear-gradient(135deg, #0284C7 0%, rgba(10, 88, 202, 0.3) 50%, #002D62 100%)',
                  boxShadow: '0 8px 24px rgba(10, 88, 202, 0.2)'
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px'
                  }}
                >
                  <BrandLogo size="100%" alt="Zayrath Group Emblem" />
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.3rem, 1.8vw, 1.6rem)', fontWeight: 900, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                ZAYRATH GROUP
              </div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: 'var(--brand-primary)', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 800 }}>
                GLOBAL VISION • GREATER TOMORROWS
              </div>

              {/* Direct Subsidiary Gateway Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
                
                {/* Gateway 1 */}
                <div 
                  onClick={() => setActiveView('hardware')}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.background = 'rgba(10, 88, 202, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                    e.currentTarget.style.background = '#F8FAFC';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(10, 88, 202, 0.1)', padding: '0.55rem', borderRadius: '8px', color: 'var(--brand-primary)', flexShrink: 0 }}>
                      <Server size={19} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Zayrath Tech Systems</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--brand-primary)', fontWeight: 600 }}>Open IT Products Page →</div>
                    </div>
                  </div>
                  <ChevronRight size={17} style={{ color: 'var(--brand-primary)' }} />
                </div>

                {/* Gateway 2 */}
                <div 
                  onClick={() => setActiveView('software')}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: '#F8FAFC',
                    border: '1px solid var(--border-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--brand-primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                    e.currentTarget.style.background = 'rgba(10, 88, 202, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-gold)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                    e.currentTarget.style.background = '#F8FAFC';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ background: 'rgba(10, 88, 202, 0.1)', padding: '0.55rem', borderRadius: '8px', color: 'var(--brand-primary)', flexShrink: 0 }}>
                      <Code2 size={19} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Zayrath Software Solutions</div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--brand-primary)', fontWeight: 600 }}>Open Software Solutions Page →</div>
                    </div>
                  </div>
                  <ChevronRight size={17} style={{ color: 'var(--brand-primary)' }} />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.25rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
