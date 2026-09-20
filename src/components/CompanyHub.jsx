import React, { useState } from 'react';
import { 
  Server, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  ShieldAlert, 
  Database, 
  Cloud, 
  Bot, 
  Smartphone, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function CompanyHub({ activeView, setActiveView, onOpenRfq }) {
  const [selectedSubTab, setSelectedSubTab] = useState('both'); // 'both' | 'hardware' | 'software'

  return (
    <section id="companies-hub" className="section-padding" style={{ position: 'relative', background: 'rgba(9, 11, 15, 0.7)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold section-tag">
            <Layers size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Corporate Subsidiaries Architecture</span>
          </div>
          <h2 className="section-title">
            Two Strategic Powerhouses. <br />
            <span className="text-gold-gradient">One Unified Conglomerate Standard.</span>
          </h2>
          <p className="section-desc">
            Zayrath Group orchestrates dual industrial engines designed to meet every digital imperative—from mission-critical physical IT hardware to intelligent custom software architectures.
          </p>

          {/* Interactive Switcher Segmented Control */}
          <div 
            style={{
              display: 'inline-flex',
              background: 'rgba(16, 21, 30, 0.85)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '12px',
              padding: '0.35rem',
              marginTop: '2rem',
              gap: '0.35rem'
            }}
          >
            <button
              onClick={() => setSelectedSubTab('both')}
              style={{
                background: selectedSubTab === 'both' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'both' ? '#090B0E' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                transition: 'all 0.2s ease'
              }}
            >
              All Subsidiaries
            </button>

            <button
              onClick={() => setSelectedSubTab('hardware')}
              style={{
                background: selectedSubTab === 'hardware' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'hardware' ? '#090B0E' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Server size={15} />
              IT Products & Hardware
            </button>

            <button
              onClick={() => setSelectedSubTab('software')}
              style={{
                background: selectedSubTab === 'software' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'software' ? '#090B0E' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.65rem 1.4rem',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Code2 size={15} />
              Full Software Solutions
            </button>
          </div>
        </div>

        {/* Subsidiaries Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: (selectedSubTab === 'both') ? 'repeat(2, 1fr)' : '1fr',
            gap: '2.5rem'
          }}
          className="subsidiary-cards-grid"
        >

          {/* SUBSIDIARY 1: ZAYRATH TECH SYSTEMS */}
          {(selectedSubTab === 'both' || selectedSubTab === 'hardware') && (
            <div 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                background: 'linear-gradient(180deg, rgba(17, 22, 33, 0.95) 0%, rgba(10, 13, 19, 0.98) 100%)'
              }}
            >
              {/* Card Banner Image */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src="/assets/datacenter.jpg" 
                  alt="Zayrath Tech Systems Data Center & Servers"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(10, 13, 19, 0.95) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <span className="badge-gold badge-glow">
                    <Server size={14} style={{ color: 'var(--gold-primary)' }} />
                    Subsidiary 01 • Hardware Division
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#FFF', fontWeight: 800 }}>
                    Zayrath Tech Systems
                  </h3>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Enterprise IT Products & Critical Hardware Sales
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Supplying Tier-1 enterprise hardware solutions to corporations, data centers, government institutions, and fast-scaling tech companies. Direct distribution, wholesale pricing, and full enterprise warranty.
                </p>

                {/* Key Offerings List */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>High-Density Rack Servers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>AI & GPU Compute Clusters</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>CAD & Executive Workstations</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Enterprise Switches & Routers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>SAN & High-Speed NVMe Storage</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Next-Gen Hardware Firewalls</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.85rem' }}>
                  <button 
                    onClick={() => setActiveView('hardware')}
                    className="btn-gold-primary"
                    style={{ flex: 1, padding: '0.85rem 1rem' }}
                  >
                    <span>Open IT Products Page</span>
                    <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={onOpenRfq}
                    className="btn-gold-outline"
                    style={{ padding: '0.85rem 1.25rem' }}
                  >
                    Get RFQ
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SUBSIDIARY 2: ZAYRATH SOFTWARE SOLUTIONS */}
          {(selectedSubTab === 'both' || selectedSubTab === 'software') && (
            <div 
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                background: 'linear-gradient(180deg, rgba(17, 22, 33, 0.95) 0%, rgba(10, 13, 19, 0.98) 100%)'
              }}
            >
              {/* Card Banner Image */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img 
                  src="/assets/software_ai.jpg" 
                  alt="Zayrath Software Solutions Enterprise Architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(10, 13, 19, 0.95) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <span className="badge-gold badge-glow">
                    <Code2 size={14} style={{ color: 'var(--gold-primary)' }} />
                    Subsidiary 02 • Digital Division
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: '#FFF', fontWeight: 800 }}>
                    Zayrath Software Solutions
                  </h3>
                </div>

                <div style={{ fontSize: '0.9rem', color: 'var(--gold-light)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  Full-Cycle Digital Solutions & Enterprise AI Engineering
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  Architecting custom software ecosystems from scratch. We engineer high-throughput cloud platforms, autonomous AI agents, enterprise ERPs, and ultra-secure mobile applications that scale effortlessly.
                </p>

                {/* Key Offerings List */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Custom Enterprise ERP & CRM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Generative AI & LLM Pipelines</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Cloud Native (AWS, Azure, GCP)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>iOS & Android Native Ecosystems</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>DevSecOps & Microservices</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#E2E8F0' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>Zero-Trust Cybersecurity Audits</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.85rem' }}>
                  <button 
                    onClick={() => setActiveView('software')}
                    className="btn-gold-primary"
                    style={{ flex: 1, padding: '0.85rem 1rem' }}
                  >
                    <span>Open Software Solutions Page</span>
                    <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={onOpenRfq}
                    className="btn-gold-outline"
                    style={{ padding: '0.85rem 1.25rem' }}
                  >
                    Estimate Cost
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .subsidiary-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
