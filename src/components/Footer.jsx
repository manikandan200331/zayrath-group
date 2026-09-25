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
import BrandLogo from './BrandLogo';

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
        background: '#F8FAFC',
        borderTop: '1px solid var(--border-gold)',
        paddingTop: 'clamp(3.5rem, 5vw, 4.5rem)',
        paddingBottom: '2rem',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr 1fr 1.1fr',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '3rem'
          }}
          className="footer-grid"
        >
          
          {/* Col 1: Brand & Slogan */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: '1.5px solid var(--border-gold)',
                  boxShadow: '0 2px 10px rgba(10, 88, 202, 0.12)',
                  background: '#FFFFFF',
                  flexShrink: 0
                }}
              >
                <BrandLogo size="100%" alt="Zayrath Group Emblem" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, background: 'var(--gold-gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '0.04em', lineHeight: 1 }}>
                  ZAYRATH
                </div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.3em', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 800 }}>
                  G R O U P
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--brand-primary)', fontStyle: 'normal', fontSize: '0.84rem', letterSpacing: '0.06em', marginBottom: '0.85rem', fontWeight: 800, textTransform: 'uppercase' }}>
              "Global Vision • Greater Tomorrows"
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Premier multinational conglomerate operating frontier subsidiaries in physical IT hardware engineering and custom enterprise software intelligence.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--brand-primary)', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={15} style={{ color: 'var(--brand-primary)' }} />
              <span>Registered Enterprise Conglomerate</span>
            </div>
          </div>

          {/* Col 2: Subsidiary 01 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
              <Server size={17} style={{ color: 'var(--brand-primary)' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Zayrath Tech Systems
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem' }}>
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  Core Spine & PoE Switches
                </a>
              </li>
              <li>
                <a 
                  onClick={onOpenRfq}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700, cursor: 'pointer' }}
                >
                  Request Hardware RFQ →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Subsidiary 02 */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '1rem' }}>
              <Code2 size={17} style={{ color: 'var(--brand-primary)' }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Zayrath Software Solutions
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.84rem' }}>
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                  onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
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
                      const el = document.getElementById('cost-estimator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  style={{ color: 'var(--brand-primary)', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cost & Timeline Estimator →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance & Newsletter */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Corporate Intelligence
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', marginBottom: '0.85rem' }}>
              Subscribe to executive briefings on enterprise IT procurement shifts and AI architectural developments.
            </p>

            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.25rem' }}>
              <input 
                type="email" 
                required
                placeholder="exec@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '0.65rem 0.85rem',
                  background: '#FFFFFF',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '8px',
                  color: 'var(--text-primary)',
                  fontSize: '0.84rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit" 
                className="btn-gold-primary" 
                style={{ padding: '0.65rem', fontSize: '0.82rem' }}
              >
                {subscribed ? 'Subscribed ✓' : 'Subscribe to Briefings'}
              </button>
            </form>

            <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Chennai HQ • Dubai • Singapore • London
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid rgba(10, 88, 202, 0.15)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.85rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © 2026 <strong style={{ color: 'var(--brand-primary)' }}>ZAYRATH GROUP</strong>. All Rights Reserved. Global Vision • Greater Tomorrows.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span>Privacy Governance</span>
            <span>Enterprise Terms</span>
            <span>Security Compliance</span>
            <button
              onClick={scrollToTop}
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-gold)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--brand-primary)',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(10, 88, 202, 0.12)'
              }}
              title="Return to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.75rem !important;
          }
        }
        @media (max-width: 520px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
