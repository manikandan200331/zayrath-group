import React, { useState } from 'react';
import { 
  Code2, 
  Bot, 
  Cloud, 
  Smartphone, 
  ShieldCheck, 
  Database, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Sliders, 
  Calendar, 
  Calculator, 
  Send, 
  ChevronRight,
  Sparkles,
  Lock,
  Cpu
} from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'ai-eng',
    title: 'Autonomous AI & LLM Systems',
    subtitle: 'Custom Private Models & Neural Agents',
    description: 'We develop self-hosted LLM pipelines, autonomous agentic workflows, multi-modal vision systems, and intelligent business process automation with zero data leakage.',
    tags: ['Private LLMs', 'LangChain', 'RAG Architecture', 'Vector DBs', 'PyTorch'],
    icon: Bot
  },
  {
    id: 'ent-software',
    title: 'Custom Enterprise ERP & SaaS',
    subtitle: 'High-Throughput Distributed Architecture',
    description: 'Bespoke enterprise applications tailored specifically to your corporate workflows. Built with clean domain-driven architecture, event streaming, and ultra-high reliability.',
    tags: ['Microservices', 'GraphQL', 'Next.js', 'Go / Rust', 'Kafka'],
    icon: Code2
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Transformation & DevSecOps',
    subtitle: 'AWS, Azure & Hybrid Kubernetes Orchestration',
    description: 'Modernize legacy monolithic workloads into resilient cloud-native Kubernetes clusters. Automated CI/CD pipelines, GitOps, and real-time observability.',
    tags: ['Terraform', 'Kubernetes', 'AWS EKS', 'CI/CD Pipelines', 'Zero-Downtime'],
    icon: Cloud
  },
  {
    id: 'mobile-web',
    title: 'Mission-Critical Mobile & Web Apps',
    subtitle: 'Ultra-Fluid 60FPS Cross-Platform Experiences',
    description: 'World-class native and hybrid applications for iOS and Android. Seamless offline synchronization, bank-grade encryption, and intuitive human-centric UI/UX design.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'WebSockets'],
    icon: Smartphone
  },
  {
    id: 'cyber-audit',
    title: 'Zero-Trust Cybersecurity & Audits',
    subtitle: 'Defense-Grade Penetration & Compliance',
    description: 'End-to-end vulnerability assessments, smart contract security audits, compliance preparation (SOC2, ISO 27001, HIPAA), and cryptographic hardening.',
    tags: ['Pen Testing', 'SOC2 Readiness', 'Data Encryption', 'SIEM Integration'],
    icon: ShieldCheck
  },
  {
    id: 'fintech-data',
    title: 'FinTech & Real-Time Data Streaming',
    subtitle: 'Sub-Millisecond Financial Engines',
    description: 'Algorithmic trading infrastructure, high-volume payment gateway integrations, fraud detection pipelines, and distributed ledger systems.',
    tags: ['Payment APIs', 'Event Sourcing', 'PostgreSQL', 'Redis Clusters'],
    icon: Database
  }
];

export default function SoftwareSolutionsSection({ onOpenConsultation }) {
  // Interactive Project Cost Estimator State
  const [platform, setPlatform] = useState('fullstack'); // web | mobile | ai | fullstack
  const [tier, setTier] = useState('enterprise'); // mvp | growth | enterprise
  const [includeAI, setIncludeAI] = useState(true);
  const [includeCompliance, setIncludeCompliance] = useState(true);
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);

  // Compute dynamically
  const calculateEstimate = () => {
    let base = 25000;
    let weeks = 8;

    if (platform === 'web') { base = 18000; weeks = 6; }
    if (platform === 'mobile') { base = 22000; weeks = 7; }
    if (platform === 'ai') { base = 35000; weeks = 10; }
    if (platform === 'fullstack') { base = 42000; weeks = 12; }

    if (tier === 'mvp') { base *= 0.65; weeks = Math.round(weeks * 0.7); }
    if (tier === 'growth') { base *= 1.0; }
    if (tier === 'enterprise') { base *= 1.6; weeks = Math.round(weeks * 1.4); }

    if (includeAI && platform !== 'ai') base += 12000;
    if (includeCompliance) base += 8000;

    return {
      priceRange: `$${Math.round(base / 1000)}k – $${Math.round((base * 1.3) / 1000)}k`,
      timeline: `${weeks} - ${weeks + 3} Weeks`,
      teamComposition: tier === 'enterprise' ? '6-8 Senior Engineers + AI Architect' : '3-4 Fullstack Engineers'
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="software-services" className="section-padding" style={{ position: 'relative', background: 'transparent' }}>
      
      {/* Ambient Glow */}
      <div 
        className="gold-glow-orb" 
        style={{ top: '35%', right: '-10%', width: '550px', height: '550px', opacity: 0.15 }} 
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold section-tag">
            <Code2 size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Zayrath Software Solutions • Subsidiary 02</span>
          </div>
          <h2 className="section-title">
            Full-Lifecycle Digital Engineering & <br />
            <span className="text-gold-gradient">Enterprise AI Solutions</span>
          </h2>
          <p className="section-desc">
            From greenfield architecture to mission-critical enterprise scaling. We build the software backbones that give industry leaders an unassailable technological advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
          className="services-grid"
        >
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  border: '1px solid rgba(184, 134, 11, 0.25)',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)'
                }}
              >
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'rgba(184, 134, 11, 0.12)',
                    border: '1px solid rgba(184, 134, 11, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-gold)',
                    marginBottom: '1.5rem',
                    boxShadow: '0 4px 15px rgba(184, 134, 11, 0.15)'
                  }}
                >
                  <Icon size={26} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.4rem' }}>
                  {service.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-gold)', marginBottom: '1.1rem', fontWeight: 600 }}>
                  {service.subtitle}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '1.75rem', flexGrow: 1 }}>
                  {service.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {service.tags.map((tag) => (
                    <span 
                      key={tag}
                      style={{
                        fontSize: '0.74rem',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '4px',
                        background: '#F1F5F9',
                        border: '1px solid rgba(184, 134, 11, 0.15)',
                        color: 'var(--text-secondary)',
                        fontWeight: 500
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE SOFTWARE SCOPE & COST ESTIMATOR */}
        <div 
          id="cost-estimator"
          className="glass-card"
          style={{
            padding: '3rem',
            border: '1px solid rgba(184, 134, 11, 0.35)',
            background: '#FFFFFF',
            boxShadow: '0 20px 45px rgba(15, 23, 42, 0.08), 0 0 30px rgba(184, 134, 11, 0.1)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }} className="estimator-grid">
            
            {/* Left Controls */}
            <div>
              <div className="badge-gold" style={{ marginBottom: '1rem' }}>
                <Calculator size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>Interactive Architecture & Cost Estimator</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--text-primary)', fontWeight: 800, marginBottom: '0.75rem' }}>
                Configure Your Software Solution
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Select your engineering parameters below to receive an instant timeline and budgetary scope projection curated by Zayrath Group senior software architects.
              </p>

              {/* Step 1: Solution Platform */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                  1. Target Software Scope
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.65rem' }}>
                  {[
                    { id: 'fullstack', label: 'Full-Stack Enterprise Suite' },
                    { id: 'ai', label: 'Autonomous AI & LLM Core' },
                    { id: 'web', label: 'High-Scale Cloud Web App' },
                    { id: 'mobile', label: 'Native iOS & Android Apps' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.86rem',
                        fontWeight: platform === item.id ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        background: platform === item.id ? 'rgba(184, 134, 11, 0.12)' : '#F8FAFC',
                        border: platform === item.id ? '1.5px solid var(--gold-primary)' : '1px solid rgba(184, 134, 11, 0.2)',
                        color: platform === item.id ? '#713F12' : 'var(--text-secondary)',
                        transition: 'all 0.2s'
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Deployment Scale */}
              <div style={{ marginBottom: '1.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                  2. Architectural Scale
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.65rem' }}>
                  {[
                    { id: 'mvp', title: 'Agile MVP', desc: 'Fast time-to-market' },
                    { id: 'growth', title: 'Growth Tier', desc: 'High concurrency' },
                    { id: 'enterprise', title: 'Global Enterprise', desc: 'Six-9s mission-critical' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id)}
                      style={{
                        padding: '0.75rem 0.65rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        background: tier === t.id ? 'rgba(184, 134, 11, 0.12)' : '#F8FAFC',
                        border: tier === t.id ? '1.5px solid var(--gold-primary)' : '1px solid rgba(184, 134, 11, 0.2)',
                        color: tier === t.id ? '#713F12' : 'var(--text-secondary)',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{t.title}</div>
                      <div style={{ fontSize: '0.72rem', opacity: 0.85 }}>{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Capabilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-gold)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                  3. Critical Enhancements
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <label 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      cursor: 'pointer', 
                      fontSize: '0.88rem',
                      color: includeAI ? 'var(--text-gold)' : 'var(--text-secondary)',
                      fontWeight: includeAI ? 700 : 500
                    }}
                  >
                    <input 
                      type="checkbox" 
                      checked={includeAI} 
                      onChange={(e) => setIncludeAI(e.target.checked)}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <span>Private AI / LLM Agent Integration</span>
                  </label>

                  <label 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.5rem', 
                      cursor: 'pointer', 
                      fontSize: '0.88rem',
                      color: includeCompliance ? 'var(--text-gold)' : 'var(--text-secondary)',
                      fontWeight: includeCompliance ? 700 : 500
                    }}
                  >
                    <input 
                      type="checkbox" 
                      checked={includeCompliance} 
                      onChange={(e) => setIncludeCompliance(e.target.checked)}
                      style={{ accentColor: 'var(--gold-primary)' }}
                    />
                    <span>SOC2 & Enterprise ISO Hardening</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Projected Output Card */}
            <div 
              style={{
                background: '#F8FAFC',
                border: '1px solid rgba(184, 134, 11, 0.3)',
                borderRadius: '16px',
                padding: '2.25rem',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-gold)', fontWeight: 700, letterSpacing: '0.08em' }}>
                  Project Scope Synthesis
                </span>
                <span className="badge-gold">
                  Ready to Build
                </span>
              </div>

              {/* Price Tier */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Budgetary Investment Range
                </div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-gold)', lineHeight: 1.1 }}>
                  {estimate.priceRange}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '0.35rem' }}>
                  Fixed-scope milestone deliverables or dedicated squad model.
                </div>
              </div>

              <div className="gold-divider" style={{ margin: '1.25rem 0' }} />

              {/* Delivery Speed & Team */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={15} style={{ color: 'var(--gold-primary)' }} /> Target Delivery:
                  </span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{estimate.timeline}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Cpu size={15} style={{ color: 'var(--gold-primary)' }} /> Assigned Squad:
                  </span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{estimate.teamComposition}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                  <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <ShieldCheck size={15} style={{ color: 'var(--gold-primary)' }} /> Code Ownership:
                  </span>
                  <span style={{ color: 'var(--text-gold)', fontWeight: 700 }}>100% Client IP Assignment</span>
                </div>
              </div>

              {/* CTA Action */}
              <button
                onClick={onOpenConsultation}
                className="btn-gold-primary"
                style={{ width: '100%', padding: '0.9rem' }}
              >
                <span>Book Technical Architecture Call</span>
                <ArrowRight size={17} />
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.85rem' }}>
                No obligation • Strict NDA signed prior to code/spec review
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .estimator-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
