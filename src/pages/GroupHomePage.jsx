import React from 'react';
import HeroSection from '../components/HeroSection';
import CompanyHub from '../components/CompanyHub';
import CorporateVision from '../components/CorporateVision';
import { Server, Code2, ArrowRight, ShieldCheck, Sparkles, Globe2 } from 'lucide-react';

export default function GroupHomePage({ setActiveView, onOpenRfq }) {
  return (
    <div>
      {/* Cinematic Conglomerate Hero */}
      <HeroSection 
        setActiveView={setActiveView} 
        onOpenRfq={onOpenRfq} 
      />

      {/* Subsidiaries Command Hub (Companies Switcher & Overview) */}
      <CompanyHub 
        activeView="group" 
        setActiveView={setActiveView} 
        onOpenRfq={onOpenRfq} 
      />

      {/* Conglomerate Vision, Governance & Global Hubs */}
      <CorporateVision />

      {/* Direct Subsidiary Gateway Banner */}
      <section className="section-padding" style={{ background: '#F8FAFC', borderTop: '1px solid rgba(184, 134, 11, 0.2)' }}>
        <div className="container">
          <div 
            className="glass-card"
            style={{
              padding: '3rem 2.5rem',
              background: '#FFFFFF',
              border: '1px solid rgba(184, 134, 11, 0.3)',
              boxShadow: '0 10px 35px rgba(15, 23, 42, 0.06)',
              textAlign: 'center'
            }}
          >
            <div className="badge-gold" style={{ marginBottom: '1rem' }}>
              <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>Dedicated Enterprise Subsidiaries</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.75rem' }}>
              Select a Company to Enter Its Dedicated Portal
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
              Choose between our physical IT hardware procurement division or full-lifecycle software and autonomous AI engineering division.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }} className="portal-gate-grid">
              
              {/* Gate 1: Hardware */}
              <div 
                onClick={() => setActiveView('hardware')}
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  background: '#F8FAFC',
                  border: '1px solid rgba(184, 134, 11, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 23, 42, 0.08), 0 0 20px rgba(184, 134, 11, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(184, 134, 11, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(184, 134, 11, 0.12)', padding: '0.75rem', borderRadius: '10px', color: 'var(--text-gold)' }}>
                    <Server size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-gold)', textTransform: 'uppercase', fontWeight: 700 }}>Subsidiary 01</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Zayrath Tech Systems</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Browse our full catalog of high-density rack servers, GPU clusters, CAD workstations, core spine switches, and all-flash SAN storage arrays.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>Open IT Products Separate Page</span>
                  <ArrowRight size={17} />
                </div>
              </div>

              {/* Gate 2: Software */}
              <div 
                onClick={() => setActiveView('software')}
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  background: '#F8FAFC',
                  border: '1px solid rgba(184, 134, 11, 0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(15, 23, 42, 0.08), 0 0 20px rgba(184, 134, 11, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(184, 134, 11, 0.25)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(184, 134, 11, 0.12)', padding: '0.75rem', borderRadius: '10px', color: 'var(--text-gold)' }}>
                    <Code2 size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-gold)', textTransform: 'uppercase', fontWeight: 700 }}>Subsidiary 02</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>Zayrath Software Solutions</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Explore bespoke enterprise ERP engineering, private LLM and AI agent development, multi-cloud DevOps, and interactive project cost estimator.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-gold)', fontWeight: 700, fontSize: '0.95rem' }}>
                  <span>Open Software Solutions Separate Page</span>
                  <ArrowRight size={17} />
                </div>
              </div>

            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .portal-gate-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
