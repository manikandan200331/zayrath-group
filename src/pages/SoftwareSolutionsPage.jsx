import React from 'react';
import SoftwareSolutionsSection from '../components/SoftwareSolutionsSection';
import { 
  ArrowLeft, 
  ArrowRight, 
  Code2, 
  Bot, 
  Cloud, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Zap,
  Terminal,
  Cpu,
  Layers
} from 'lucide-react';

export default function SoftwareSolutionsPage({ setActiveView, onOpenConsultation }) {
  return (
    <div style={{ paddingTop: '5.5rem' }}>
      
      {/* Top Page Breadcrumbs & Subsidiary Navigation Bar */}
      <div 
        style={{
          background: 'rgba(10, 13, 19, 0.95)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
          padding: '0.85rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          
          {/* Back to Group Home */}
          <button
            onClick={() => setActiveView('group')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--gold-light)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
          >
            <ArrowLeft size={16} />
            <span>← Back to Zayrath Group Home</span>
          </button>

          {/* Quick Switch to Subsidiary 1 */}
          <button
            onClick={() => setActiveView('hardware')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#FFF',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              padding: '0.45rem 1rem',
              borderRadius: '8px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
            }}
          >
            <span>Switch to Zayrath Tech Systems (IT Products)</span>
            <ArrowRight size={15} style={{ color: 'var(--gold-primary)' }} />
          </button>

        </div>
      </div>

      {/* Dedicated Page Hero Banner */}
      <section 
        style={{
          position: 'relative',
          padding: '4.5rem 0 3.5rem',
          background: 'linear-gradient(180deg, rgba(14, 18, 27, 0.95) 0%, rgba(8, 10, 15, 0.98) 100%)',
          borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'center' }} className="page-hero-grid">
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <Code2 size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>Subsidiary 02 • Enterprise Digital & AI Engineering</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FFF', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
                Zayrath Software Solutions <br />
                <span className="text-gold-gradient">Custom Enterprise AI & Cloud</span>
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
                Architecting intelligent software backbones for global enterprises. We specialize in bespoke ERP/CRM development, autonomous agentic LLM pipelines, microservices, and bank-grade cybersecurity.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    const el = document.getElementById('cost-estimator');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold-primary"
                  style={{ padding: '0.85rem 1.85rem' }}
                >
                  <span>Interactive Cost Estimator</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  onClick={onOpenConsultation}
                  className="btn-gold-outline"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  <span>Book Technical Discovery Call</span>
                </button>
              </div>
            </div>

            {/* Banner Image Preview */}
            <div 
              className="glass-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.35)',
                height: '280px',
                position: 'relative'
              }}
            >
              <img 
                src="/assets/software_ai.jpg" 
                alt="Zayrath Software Solutions AI Interface" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(8, 10, 15, 0.9) 100%)'
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <div style={{ color: '#FFF', fontWeight: 700, fontSize: '1rem' }}>Enterprise AI & Neural Architectures</div>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.78rem' }}>100% Client Intellectual Property Rights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Software Solutions & Cost Estimator Component */}
      <SoftwareSolutionsSection 
        onOpenConsultation={onOpenConsultation}
      />

      {/* Software Architecture & Engineering Standards */}
      <section className="section-padding" style={{ background: 'rgba(10, 13, 19, 0.8)', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-gold section-tag">
              <ShieldCheck size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>Engineering Governance</span>
            </div>
            <h2 className="section-title">
              Our 4-Stage Architectural <br />
              <span className="text-gold-gradient">Delivery Lifecycle</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="lifecycle-grid">
            
            <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Phase 01
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                Domain Discovery & Architecture
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                Deep-dive architectural sprint defining event models, data pipelines, API contracts, and security compliance boundaries.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Phase 02
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                Agile Squad Execution
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                Bi-weekly sprint releases with continuous CI/CD staging deployments, automated unit tests, and live client demo walkthroughs.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Phase 03
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                Zero-Trust Hardening
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                Penetration testing, cryptographic key rotation, load stress testing to 50,000 req/sec, and disaster recovery drill.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Phase 04
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: '#FFF', fontWeight: 700, marginBottom: '0.75rem' }}>
                Global Multi-Region Launch
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                Zero-downtime blue/green rollout with 24/7 SRE telemetry monitoring and full codebase IP handover to client legal teams.
              </p>
            </div>

          </div>

          {/* Bottom Back Button */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => setActiveView('group')}
              className="btn-gold-outline"
              style={{ padding: '0.85rem 2.2rem' }}
            >
              <ArrowLeft size={16} />
              <span>Return to Zayrath Group Home</span>
            </button>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .page-hero-grid, .lifecycle-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
