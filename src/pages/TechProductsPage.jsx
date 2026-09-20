import React from 'react';
import TechProductsSection from '../components/TechProductsSection';
import { 
  ArrowLeft, 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Award, 
  CheckCircle2, 
  Layers,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import datacenterImg from '../assets/datacenter.jpg';

export default function TechProductsPage({ setActiveView, onAddToRfq, rfqItems, onOpenRfq }) {
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

          {/* Quick Switch to Subsidiary 2 */}
          <button
            onClick={() => setActiveView('software')}
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
            <span>Switch to Zayrath Software Solutions</span>
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
                <Server size={14} style={{ color: 'var(--gold-primary)' }} />
                <span>Subsidiary 01 • Hardware Engineering & Sales</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', color: '#FFF', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem' }}>
                Zayrath Tech Systems <br />
                <span className="text-gold-gradient">Enterprise IT Products Sales</span>
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '580px' }}>
                Direct enterprise supply chain for mission-critical IT infrastructure. Supplying high-density servers, GPU clusters, engineering workstations, and data center core switches to corporate enterprises worldwide.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    const el = document.getElementById('hardware-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold-primary"
                  style={{ padding: '0.85rem 1.85rem' }}
                >
                  <span>Browse Products Catalog</span>
                  <ArrowRight size={16} />
                </button>

                <button 
                  onClick={onOpenRfq}
                  className="btn-gold-outline"
                  style={{ padding: '0.85rem 1.75rem' }}
                >
                  <span>Open RFQ Cart ({rfqItems.length})</span>
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
                src={datacenterImg} 
                alt="Zayrath Data Center Hardware" 
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
                <div style={{ color: '#FFF', fontWeight: 700, fontSize: '1rem' }}>Tier-4 Data Center Certified</div>
                <div style={{ color: 'var(--gold-light)', fontSize: '0.78rem' }}>Direct Global OEM Distribution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full IT Products Catalog */}
      <TechProductsSection 
        onAddToRfq={onAddToRfq} 
        rfqItems={rfqItems}
        onOpenRfq={onOpenRfq}
      />

      {/* Enterprise Procurement SLA & Terms */}
      <section className="section-padding" style={{ background: 'rgba(10, 13, 19, 0.8)', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-gold section-tag">
              <ShieldCheck size={14} style={{ color: 'var(--gold-primary)' }} />
              <span>Enterprise Procurement Assurance</span>
            </div>
            <h2 className="section-title">
              Why Global Enterprises Choose <br />
              <span className="text-gold-gradient">Zayrath Tech Systems</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }} className="assurance-grid">
            
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.15)', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
                <Clock size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#FFF', fontWeight: 700, marginBottom: '0.5rem' }}>
                4-Hour Onsite Mission Critical SLA
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Every server and SAN array comes with certified onsite enterprise engineering support, redundant parts stockpiling, and instant telemetry alerts.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.15)', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
                <Truck size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#FFF', fontWeight: 700, marginBottom: '0.5rem' }}>
                Fully Insured Global Freight
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Temperature-controlled and shock-monitored logistics delivering directly to data centers and corporate offices across India, GCC, and Southeast Asia.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.15)', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
                <FileCheck size={24} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', color: '#FFF', fontWeight: 700, marginBottom: '0.5rem' }}>
                Custom Build-To-Order Rigs
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                Tailored CPU, RAM, and GPU cluster combinations benchmarked with 72-hour burn-in stress tests before leaving our assembly facility.
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
          .page-hero-grid, .assurance-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
