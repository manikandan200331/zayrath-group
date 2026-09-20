import React, { useState } from 'react';
import { 
  Building2, 
  Server, 
  Code2, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Check, 
  ShieldCheck, 
  Globe2 
} from 'lucide-react';
import logoImg from '../assets/zayrath-logo.jpg';

export default function Footer({ setActiveView, onOpenRfq }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: 'linear-gradient(180deg, #090B0F 0%, #050608 100%)',
        borderTop: '1px solid rgba(212, 175, 55, 0.25)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
            gap: '3rem',
            marginBottom: '4rem'
          }}
          className="footer-grid"
        >
          
          {/* Col 1: Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.4)'
                }}
              >
                <img 
                  src={logoImg} 
                  alt="Zayrath Group Logo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 800, background: 'var(--gold-gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ZAYRATH
                </div>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.3em', color: 'var(--gold-light)', textTransform: 'uppercase', fontWeight: 700 }}>
                  G R O U P
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--gold-light)', fontStyle: 'italic', fontSize: '0.92rem', marginBottom: '1rem', fontWeight: 600 }}>
              "A Distinctive Path to Progress"
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Premier multinational conglomerate operating frontier subsidiaries in physical IT hardware engineering and custom enterprise software intelligence.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', fontSize: '0.82rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--gold-primary)' }} />
              <span>Registered Enterprise Conglomerate</span>
            </div>
          </div>

          {/* Col 2: Subsidiary 01 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Server size={18} style={{ color: 'var(--gold-primary)' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>
                Zayrath Tech Systems
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('hardware');
                    setTimeout(() => {
                      const el = document.getElementById('hardware-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Enterprise Rack Servers
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('hardware');
                    setTimeout(() => {
                      const el = document.getElementById('hardware-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  AI & GPU Compute Clusters
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('hardware');
                    setTimeout(() => {
                      const el = document.getElementById('hardware-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  High-End Workstations
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('hardware');
                    setTimeout(() => {
                      const el = document.getElementById('hardware-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Core Spine & PoE Switches
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('hardware');
                    setTimeout(() => {
                      const el = document.getElementById('hardware-catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  All-Flash SAN Storage Arrays
                </a>
              </li>
              <li>
                <a 
                  onClick={onOpenRfq}
                  style={{ color: 'var(--gold-primary)', fontWeight: 600, cursor: 'pointer' }}
                >
                  Request Hardware RFQ →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Subsidiary 02 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Code2 size={18} style={{ color: 'var(--gold-primary)' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#FFF' }}>
                Zayrath Software Solutions
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.86rem' }}>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('software');
                    setTimeout(() => {
                      const el = document.getElementById('software-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Private LLMs & AI Agents
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('software');
                    setTimeout(() => {
                      const el = document.getElementById('software-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Custom Enterprise ERP & CRM
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('software');
                    setTimeout(() => {
                      const el = document.getElementById('software-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Multi-Cloud DevOps & K8s
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('software');
                    setTimeout(() => {
                      const el = document.getElementById('software-services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--text-secondary)', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--gold-light)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Mobile iOS & Android Apps
                </a>
              </li>
              <li>
                <a 
                  onClick={() => {
                    setActiveView('software');
                    setTimeout(() => {
                      const el = document.getElementById('cost-estimator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--gold-primary)', fontWeight: 600, cursor: 'pointer' }}
                >
                  Cost & Timeline Estimator →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Newsletter */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#FFF', marginBottom: '1.25rem' }}>
              Corporate Intelligence
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe to executive briefings on enterprise IT procurement shifts and AI architectural developments.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <input 
                type="email" 
                required
                placeholder="exec@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(17, 21, 30, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '8px',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn-gold-primary" 
                style={{ padding: '0.75rem', fontSize: '0.85rem' }}
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe to Briefings'}
              </button>
            </form>

            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Chennai HQ • Dubai • Singapore • London
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 <strong style={{ color: 'var(--gold-light)' }}>ZAYRATH GROUP</strong>. All Rights Reserved. A Distinctive Path to Progress.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Governance</span>
            <span>Enterprise Terms</span>
            <span>Security Compliance</span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)',
                cursor: 'pointer',
                marginLeft: '0.5rem'
              }}
              title="Return to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
