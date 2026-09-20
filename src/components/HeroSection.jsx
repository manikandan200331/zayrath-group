import React from 'react';
import { 
  ArrowRight, 
  Server, 
  Code2, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import logoImg from '../assets/zayrath-logo.jpg';

export default function HeroSection({ setActiveView, onOpenRfq }) {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
        paddingBottom: '5rem',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow orbs */}
      <div 
        className="gold-glow-orb" 
        style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '600px', opacity: 0.2 }}
      />
      <div 
        className="gold-glow-orb" 
        style={{ top: '60%', right: '-10%', width: '500px', height: '500px', opacity: 0.15 }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Content */}
          <div>
            {/* Top Royal Pill */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="badge-gold badge-glow">
                <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>Premier Multinational Technology Conglomerate</span>
              </div>
            </div>

            {/* Slogan & Group Name */}
            <h1 style={{ 
              fontFamily: 'var(--font-serif)', 
              fontSize: '3.5rem', 
              fontWeight: 800, 
              lineHeight: 1.15,
              marginBottom: '1.25rem',
              color: '#FFFFFF'
            }} className="hero-title">
              A Distinctive Path to <br />
              <span className="text-gold-gradient">Progress & Technology</span>
            </h1>

            <p style={{ 
              fontSize: '1.15rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.7, 
              marginBottom: '2.5rem',
              maxWidth: '560px'
            }}>
              <strong style={{ color: '#FFF' }}>Zayrath Group</strong> is an avant-garde enterprise conglomerate shaping the future of global commerce. Through dedicated powerhouse subsidiaries, we deliver world-class <strong style={{ color: 'var(--gold-light)' }}>IT Hardware & Enterprise Products</strong> alongside tailored <strong style={{ color: 'var(--gold-light)' }}>Full-Cycle Software & AI Solutions</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <button 
                onClick={() => {
                  const el = document.getElementById('companies-hub');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gold-primary"
                style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}
              >
                <span>Explore Companies</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={onOpenRfq}
                className="btn-gold-outline"
                style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
              >
                <span>Request Enterprise RFQ</span>
              </button>
            </div>

            {/* Corporate Highlights Strip */}
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '1.5rem',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)',
                paddingTop: '1.75rem'
              }}
              className="hero-stats"
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                  10,000+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  IT Products Supplied
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                  150+
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Enterprise Software Delivered
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 800, color: 'var(--gold-light)' }}>
                  99.99%
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  High-Availability SLA
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero: 3D Logo Showcase & Interactive Subsidiary Fast-Gateways */}
          <div style={{ position: 'relative' }}>
            
            {/* Ambient Logo Card */}
            <div 
              className="glass-card"
              style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                background: 'linear-gradient(145deg, rgba(16, 20, 29, 0.9) 0%, rgba(9, 11, 16, 0.95) 100%)',
                borderColor: 'rgba(212, 175, 55, 0.35)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(212, 175, 55, 0.2)'
              }}
            >
              {/* Brand Emblem Frame */}
              <div 
                style={{
                  width: '180px',
                  height: '180px',
                  margin: '0 auto 1.5rem',
                  borderRadius: '24px',
                  padding: '6px',
                  background: 'linear-gradient(135deg, #D4AF37 0%, rgba(212, 175, 55, 0.15) 50%, #D4AF37 100%)',
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#07090C'
                  }}
                >
                  <img 
                    src={logoImg} 
                    alt="Zayrath Group Official Emblem" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '0.08em', color: '#FFF' }}>
                ZAYRATH GROUP
              </div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--gold-light)', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>
                A Distinctive Path to Progress
              </div>

              {/* Direct Subsidiary Gateway Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', textAlign: 'left' }}>
                
                {/* Gateway 1 */}
                <div 
                  onClick={() => setActiveView('hardware')}
                  style={{
                    padding: '1rem',
                    borderRadius: '10px',
                    background: 'rgba(25, 31, 44, 0.65)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                    e.currentTarget.style.background = 'rgba(25, 31, 44, 0.65)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ background: 'rgba(212, 175, 55, 0.18)', padding: '0.65rem', borderRadius: '8px', color: 'var(--gold-light)' }}>
                      <Server size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>Zayrath Tech Systems</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>Open IT Products Page →</div>
                    </div>
                  </div>
                  <ChevronRight size={18} style={{ color: 'var(--gold-primary)' }} />
                </div>

                {/* Gateway 2 */}
                <div 
                  onClick={() => setActiveView('software')}
                  style={{
                    padding: '1rem',
                    borderRadius: '10px',
                    background: 'rgba(25, 31, 44, 0.65)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                    e.currentTarget.style.transform = 'translateX(0px)';
                    e.currentTarget.style.background = 'rgba(25, 31, 44, 0.65)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div style={{ background: 'rgba(212, 175, 55, 0.18)', padding: '0.65rem', borderRadius: '8px', color: 'var(--gold-light)' }}>
                      <Code2 size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFF' }}>Zayrath Software Solutions</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>Open Software Solutions Page →</div>
                    </div>
                  </div>
                  <ChevronRight size={18} style={{ color: 'var(--gold-primary)' }} />
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
        }
        @media (max-width: 576px) {
          .hero-stats {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
