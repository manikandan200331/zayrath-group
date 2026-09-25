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
import datacenterImg from '../assets/datacenter.jpg';
import softwareAiImg from '../assets/software_ai.jpg';

export default function CompanyHub({ activeView, setActiveView, onOpenRfq }) {
  const [selectedSubTab, setSelectedSubTab] = useState('both'); // 'both' | 'hardware' | 'software'

  return (
    <section id="companies-hub" className="section-padding" style={{ position: 'relative', background: 'transparent' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold section-tag">
            <Layers size={13} style={{ color: 'var(--brand-primary)' }} />
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
              flexWrap: 'wrap',
              justifyContent: 'center',
              background: '#F1F5F9',
              border: '1px solid var(--border-gold)',
              borderRadius: '12px',
              padding: '0.3rem',
              marginTop: '1.5rem',
              gap: '0.3rem',
              maxWidth: '100%'
            }}
          >
            <button
              onClick={() => setSelectedSubTab('both')}
              style={{
                background: selectedSubTab === 'both' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'both' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.55rem clamp(0.85rem, 1.5vw, 1.25rem)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.84rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              All Subsidiaries
            </button>

            <button
              onClick={() => setSelectedSubTab('hardware')}
              style={{
                background: selectedSubTab === 'hardware' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'hardware' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.55rem clamp(0.85rem, 1.5vw, 1.25rem)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.84rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Server size={14} />
              IT Products & Hardware
            </button>

            <button
              onClick={() => setSelectedSubTab('software')}
              style={{
                background: selectedSubTab === 'software' ? 'var(--gold-gradient)' : 'transparent',
                color: selectedSubTab === 'software' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: 700,
                border: 'none',
                padding: '0.55rem clamp(0.85rem, 1.5vw, 1.25rem)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.84rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              <Code2 size={14} />
              Full Software Solutions
            </button>
          </div>
        </div>

        {/* Subsidiaries Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: (selectedSubTab === 'both') ? 'repeat(auto-fit, minmax(320px, 1fr))' : '1fr',
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)'
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
                border: '1px solid var(--border-gold)',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(10, 88, 202, 0.06)'
              }}
            >
              {/* Card Banner Image */}
              <div style={{ position: 'relative', height: 'clamp(180px, 20vw, 220px)', overflow: 'hidden' }}>
                <img 
                  src={datacenterImg} 
                  alt="Zayrath Tech Systems Data Center & Servers"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(8, 20, 45, 0.95) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className="badge-gold badge-glow" style={{ background: 'rgba(255, 255, 255, 0.94)' }}>
                    <Server size={13} style={{ color: 'var(--brand-primary)' }} />
                    Subsidiary 01 • Hardware Division
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: 'clamp(1.25rem, 2vw, 1.85rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.35rem, 1.8vw, 1.65rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
                    Zayrath Tech Systems
                  </h3>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
                  Enterprise IT Products & Critical Hardware Sales
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Supplying Tier-1 enterprise hardware solutions to corporations, data centers, government institutions, and fast-scaling tech companies. Direct distribution, wholesale pricing, and full enterprise warranty.
                </p>

                {/* Key Offerings List */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>High-Density Rack Servers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>AI & GPU Compute Clusters</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>CAD & Executive Workstations</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Enterprise Switches & Routers</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>SAN & High-Speed NVMe Storage</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Next-Gen Hardware Firewalls</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => setActiveView('hardware')}
                    className="btn-gold-primary"
                    style={{ flex: 1, minWidth: '160px' }}
                  >
                    <span>Open IT Products Page</span>
                    <ArrowRight size={15} />
                  </button>
                  <button 
                    onClick={onOpenRfq}
                    className="btn-gold-outline"
                    style={{ minWidth: '100px' }}
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
                border: '1px solid var(--border-gold)',
                background: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(10, 88, 202, 0.06)'
              }}
            >
              {/* Card Banner Image */}
              <div style={{ position: 'relative', height: 'clamp(180px, 20vw, 220px)', overflow: 'hidden' }}>
                <img 
                  src={softwareAiImg} 
                  alt="Zayrath Software Solutions Enterprise Architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(8, 20, 45, 0.85) 100%)'
                  }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                  <span className="badge-gold badge-glow" style={{ background: 'rgba(255, 255, 255, 0.94)' }}>
                    <Code2 size={13} style={{ color: 'var(--brand-primary)' }} />
                    Subsidiary 02 • Digital Division
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: 'clamp(1.25rem, 2vw, 1.85rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.35rem, 1.8vw, 1.65rem)', color: 'var(--text-primary)', fontWeight: 800 }}>
                    Zayrath Software Solutions
                  </h3>
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--brand-primary)', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
                  Full-Cycle Digital Solutions & Enterprise AI Engineering
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Architecting custom software ecosystems from scratch. We engineer high-throughput cloud platforms, autonomous AI agents, enterprise ERPs, and ultra-secure mobile applications that scale effortlessly.
                </p>

                {/* Key Offerings List */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Custom Enterprise ERP & CRM</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Generative AI & LLM Pipelines</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Cloud Native (AWS, Azure, GCP)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>iOS & Android Native Ecosystems</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>DevSecOps & Microservices</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.84rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                    <span>Zero-Trust Cybersecurity Audits</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => setActiveView('software')}
                    className="btn-gold-primary"
                    style={{ flex: 1, minWidth: '160px' }}
                  >
                    <span>Open Software Solutions Page</span>
                    <ArrowRight size={15} />
                  </button>
                  <button 
                    onClick={onOpenRfq}
                    className="btn-gold-outline"
                    style={{ minWidth: '100px' }}
                  >
                    Estimate Cost
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
