import React from 'react';
import { 
  Globe2, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Users2, 
  Building,
  Target,
  Sparkles
} from 'lucide-react';
import hqImg from '../assets/headquarters.jpg';

export default function CorporateVision() {
  const globalHubs = [
    { city: 'Chennai, India', role: 'Group Headquarters & Engineering Center', address: 'Zayrath Tower, OMR IT Corridor' },
    { city: 'Dubai, UAE', role: 'Middle East & GCC Enterprise Hub', address: 'DIFC Gate Precinct 4' },
    { city: 'Singapore', role: 'Asia-Pacific AI Research Labs', address: 'Marina Bay Financial Centre Tower 1' },
    { city: 'London, UK', role: 'European Partnerships & Investor Desk', address: '1 Canada Square, Canary Wharf' }
  ];

  return (
    <section id="corporate-vision" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Ambient background glow */}
      <div 
        className="gold-glow-orb" 
        style={{ top: '10%', right: '5%', width: '500px', height: '500px', opacity: 0.12 }} 
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold section-tag">
            <Globe2 size={14} style={{ color: 'var(--brand-primary)' }} />
            <span>Corporate Philosophy & Vision</span>
          </div>
          <h2 className="section-title">
            The Zayrath Conglomerate Standard: <br />
            <span className="text-gold-gradient">Global Vision • Greater Tomorrows</span>
          </h2>
          <p className="section-desc">
            Founded on the pillars of uncompromising engineering excellence, visionary governance, and unyielding customer commitment across the globe.
          </p>
        </div>

        {/* Global HQ Showcase Banner */}
        <div 
          className="glass-card"
          style={{
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '4rem',
            border: '1px solid var(--border-gold)'
          }}
        >
          <div style={{ position: 'relative', height: '380px' }}>
            <img 
              src={hqImg} 
              alt="Zayrath Group Global Headquarters"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(8, 20, 45, 0.94) 0%, rgba(8, 25, 55, 0.78) 50%, rgba(8, 25, 55, 0.45) 100%)'
              }}
            />

            {/* Floating Message on Banner */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '3rem',
                transform: 'translateY(-50%)',
                maxWidth: '540px'
              }}
              className="hq-banner-text"
            >
              <div className="badge-gold" style={{ marginBottom: '1rem', background: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFFFFF' }}>
                <Building size={14} style={{ color: '#38BDF8' }} />
                <span>Multinational Corporate Command</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: '#FFF', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
                Engineering Sovereignty in Every Venture
              </h3>
              <p style={{ color: '#E2E8F0', fontSize: '0.98rem', lineHeight: 1.6 }}>
                "We do not merely supply technology; we construct the enduring foundations upon which contemporary global commerce thrives."
              </p>
              <div style={{ marginTop: '1.25rem', fontFamily: 'var(--font-heading)', color: '#38BDF8', fontWeight: 700, fontSize: '0.9rem' }}>
                — Executive Board, Zayrath Group
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            marginBottom: '4.5rem'
          }}
          className="pillars-grid"
        >
          {[
            {
              icon: Target,
              title: 'Strategic Precision',
              desc: 'Relentless focus on mission-critical execution across both hardware distribution and complex software systems.'
            },
            {
              icon: ShieldCheck,
              title: 'Uncompromised Integrity',
              desc: 'Every hardware server and software deployment adheres strictly to military-grade compliance and global standards.'
            },
            {
              icon: TrendingUp,
              title: 'Sustained Value Creation',
              desc: 'Building sustainable competitive moats for our clients, partners, and institutional stakeholders worldwide.'
            },
            {
              icon: Sparkles,
              title: 'Frontier Innovation',
              desc: 'Active investment in deep-tech, autonomous artificial intelligence, and next-generation compute paradigms.'
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  padding: '2rem 1.5rem',
                  textAlign: 'center',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-gold)',
                  boxShadow: '0 4px 20px rgba(10, 88, 202, 0.05)'
                }}
              >
                <div 
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(10, 88, 202, 0.08)',
                    border: '1px solid rgba(10, 88, 202, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--brand-primary)',
                    margin: '0 auto 1.25rem'
                  }}
                >
                  <Icon size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.65rem' }}>
                  {pillar.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Global Locations Hub */}
        <div 
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 8px 30px rgba(10, 88, 202, 0.06)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--brand-primary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em' }}>
                Worldwide Operations Network
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--text-primary)', fontWeight: 800 }}>
                Zayrath Group Global Presence
              </h3>
            </div>
            <div className="badge-gold">
              <Globe2 size={14} style={{ color: 'var(--brand-primary)' }} />
              <span>Multi-Region Active NOCs</span>
            </div>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem'
            }}
            className="locations-grid"
          >
            {globalHubs.map((hub, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '10px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <MapPin size={16} style={{ color: 'var(--brand-primary)' }} />
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>{hub.city}</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
                  {hub.role}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {hub.address}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .pillars-grid, .locations-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .pillars-grid, .locations-grid {
            grid-template-columns: 1fr !important;
          }
          .hq-banner-text {
            left: 1.5rem !important;
            right: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
