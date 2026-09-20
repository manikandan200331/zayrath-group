import React, { useState } from 'react';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Wifi, 
  ShieldCheck, 
  Search, 
  Plus, 
  Check, 
  Filter, 
  Zap, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  Info,
  Clock,
  Truck
} from 'lucide-react';

const IT_PRODUCTS_DATA = [
  {
    id: 'srv-01',
    category: 'servers',
    name: 'Zayrath Apex Pro 2U Rack Server',
    tagline: 'High-Density Dual-Socket Enterprise Compute',
    specs: {
      cpu: 'Dual Intel Xeon Platinum 8480+ (112 Cores)',
      ram: '512GB DDR5 4800MHz ECC (Expandable to 4TB)',
      storage: '8x 3.84TB Enterprise NVMe U.2 SSDs (RAID 10)',
      network: 'Quad 25GbE SFP28 + Dual 10GbE RJ45',
      power: 'Dual 1600W Titanium Redundant Hot-Swap'
    },
    warranty: '5-Year 24/7 Mission-Critical Onsite SLA',
    status: 'Ready for Dispatch',
    categoryLabel: 'Enterprise Servers',
    priceEstimate: '$12,450',
    popular: true
  },
  {
    id: 'srv-02',
    category: 'servers',
    name: 'Zayrath NeuralCluster 4U AI Workhorse',
    tagline: 'Deep Learning & LLM Inference / Training Rig',
    specs: {
      cpu: 'Dual AMD EPYC 9654 (192 Cores Total)',
      ram: '1TB DDR5 ECC Registered',
      storage: '4x 15.36TB Enterprise NVMe Gen5 U.3',
      gpu: '8x NVIDIA H100 80GB SXM5 Interconnect',
      power: 'Quad 3000W Redundant Titanium PSU'
    },
    warranty: '5-Year Enterprise Gold Support',
    status: 'Custom Build-to-Order',
    categoryLabel: 'AI & GPU Compute',
    priceEstimate: '$89,000',
    popular: true
  },
  {
    id: 'ws-01',
    category: 'workstations',
    name: 'Zayrath ProTitan 9000 CAD Workstation',
    tagline: 'Extreme 3D Simulation & Engineering Station',
    specs: {
      cpu: 'AMD Ryzen Threadripper PRO 7995WX (96 Cores)',
      ram: '256GB Octa-Channel DDR5 ECC',
      storage: '2x 4TB Gen5 M.2 NVMe (14,000 MB/s)',
      gpu: 'Dual NVIDIA RTX 6000 Ada Generation 48GB',
      chassis: 'Acoustic-Dampened Gold-Accented Tower'
    },
    warranty: '3-Year Next-Business-Day Replacement',
    status: 'In Stock',
    categoryLabel: 'Workstations',
    priceEstimate: '$16,800',
    popular: false
  },
  {
    id: 'ws-02',
    category: 'workstations',
    name: 'Zayrath StealthBook Pro 16" Executive',
    tagline: 'Mil-Spec Tested Enterprise Executive Laptop',
    specs: {
      cpu: 'Intel Core Ultra 9 185H with Integrated NPU',
      ram: '64GB LPDDR5X 7467MHz',
      storage: '2TB PCIe 4.0 NVMe SSD',
      display: '16-inch 3.2K 165Hz OLED Color-Calibrated',
      security: 'Hardware TPM 2.0 & FIDO2 Biometric Key'
    },
    warranty: '3-Year Global International Warranty',
    status: 'In Stock (Bulk Units Available)',
    categoryLabel: 'Corporate Laptops',
    priceEstimate: '$2,850',
    popular: true
  },
  {
    id: 'net-01',
    category: 'networking',
    name: 'Zayrath Nexus 100G 32-Port Core Spine',
    tagline: 'Ultra-Low Latency Data Center Core Switch',
    specs: {
      ports: '32x 100GbE QSFP28 + 2x 10GbE SFP+ Mgmt',
      switching: '6.4 Tbps Non-blocking Fabric',
      latency: '< 450ns Port-to-Port Cut-Through',
      features: 'BGP, EVPN-VXLAN, OpenFlow & Telemetry',
      cooling: 'Front-to-Back Redundant Hot-Swap Fans'
    },
    warranty: 'Lifetime Enterprise Hardware Warranty',
    status: 'In Stock',
    categoryLabel: 'Enterprise Networking',
    priceEstimate: '$9,200',
    popular: false
  },
  {
    id: 'net-02',
    category: 'networking',
    name: 'Zayrath EdgeGate 48-Port PoE++ Managed Switch',
    tagline: 'Campus & Office Smart Building Backbone',
    specs: {
      ports: '48x Gigabit RJ45 (PoE++ 90W) + 4x 10G SFP+',
      poeBudget: '1440W Dynamic PoE Allocation',
      management: 'Cloud Centralized Dashboard + CLI',
      security: '802.1X, Dynamic VLAN, ACL Filtering'
    },
    warranty: '5-Year Advance Hardware Replacement',
    status: 'In Stock',
    categoryLabel: 'Enterprise Networking',
    priceEstimate: '$3,400',
    popular: true
  },
  {
    id: 'stor-01',
    category: 'storage',
    name: 'Zayrath VaultGrid All-Flash SAN Array',
    tagline: 'Sub-Millisecond Multi-Petabyte Tier-0 Storage',
    specs: {
      rawCapacity: '184TB Raw NVMe Flash (Expandable to 2.4PB)',
      controllers: 'Active-Active Dual Hot-Swap Storage Nodes',
      connectivity: '8x 32Gb Fibre Channel + 4x 25Gb iSCSI',
      resilience: '99.9999% (Six-Nines) Uptime Architecture',
      compression: 'Hardware-Assisted 4:1 Inline Deduplication'
    },
    warranty: '5-Year 24/7 Dedicated Support Engineer',
    status: 'In Stock',
    categoryLabel: 'Storage & SAN',
    priceEstimate: '$34,000',
    popular: false
  },
  {
    id: 'sec-01',
    category: 'security',
    name: 'Zayrath CyberShield 40G Hardware Firewall',
    tagline: 'AI-Powered Deep Packet Inspection & Threat Guard',
    specs: {
      throughput: '42 Gbps Firewall / 14 Gbps Threat Prevention',
      connections: '12 Million Concurrent Sessions',
      interfaces: '4x 25GbE SFP28 + 8x 10GbE SFP+ + 8x 1GbE',
      protection: 'Zero-Day Sandboxing, SSL Decryption, DDoS Deflector'
    },
    warranty: '3-Year Threat Intelligence Subscription & Hardware',
    status: 'In Stock',
    categoryLabel: 'Cybersecurity Appliances',
    priceEstimate: '$14,500',
    popular: true
  }
];

export default function TechProductsSection({ onAddToRfq, rfqItems, onOpenRfq }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  const categories = [
    { id: 'all', label: 'All IT Products', icon: Layers },
    { id: 'servers', label: 'Enterprise Servers', icon: Server },
    { id: 'workstations', label: 'Workstations & Laptops', icon: Cpu },
    { id: 'networking', label: 'Networking & Core Switches', icon: Wifi },
    { id: 'storage', label: 'SAN/NAS Flash Storage', icon: HardDrive },
    { id: 'security', label: 'Cybersecurity Firewalls', icon: ShieldCheck }
  ];

  const filteredProducts = IT_PRODUCTS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (item) => {
    onAddToRfq(item);
    setAddedItemNotice(item.name);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 3000);
  };

  return (
    <section id="hardware-catalog" className="section-padding" style={{ position: 'relative' }}>
      
      {/* Background Glow */}
      <div 
        className="gold-glow-orb" 
        style={{ top: '25%', left: '-15%', width: '500px', height: '500px', opacity: 0.12 }} 
      />

      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-gold section-tag">
            <Server size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Zayrath Tech Systems • Subsidiary 01</span>
          </div>
          <h2 className="section-title">
            Enterprise IT Products & <br />
            <span className="text-gold-gradient">Hardware Sales Catalog</span>
          </h2>
          <p className="section-desc">
            Direct enterprise procurement for Tier-1 compute infrastructure, specialized AI acceleration racks, ultra-low latency networking, and defense-grade cybersecurity appliances.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '3rem'
          }}
        >
          {/* Top Bar: Search and RFQ Cart Status */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            {/* Search Input */}
            <div 
              style={{
                position: 'relative',
                flexGrow: 1,
                maxWidth: '480px'
              }}
            >
              <Search 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  left: '1rem', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  color: 'var(--gold-primary)' 
                }} 
              />
              <input 
                type="text"
                placeholder="Search servers, workstations, switches, firewalls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.85rem',
                  background: 'rgba(17, 21, 30, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '10px',
                  color: '#FFF',
                  fontSize: '0.92rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'}
              />
            </div>

            {/* Quick Delivery Guarantee Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Truck size={16} style={{ color: 'var(--gold-primary)' }} /> Global Insured Freight
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} style={{ color: 'var(--gold-primary)' }} /> 48-Hour Rapid Dispatch
              </span>
            </div>
          </div>

          {/* Category Pills */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem'
            }}
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: isSelected ? 700 : 500,
                    cursor: 'pointer',
                    background: isSelected ? 'var(--gold-gradient)' : 'rgba(16, 21, 30, 0.7)',
                    color: isSelected ? '#090B0E' : 'var(--text-secondary)',
                    border: isSelected ? 'none' : '1px solid rgba(212, 175, 55, 0.25)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Icon size={16} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Added to RFQ Floating Toast */}
        {addedItemNotice && (
          <div 
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              background: 'rgba(11, 14, 20, 0.95)',
              border: '1px solid var(--gold-primary)',
              borderRadius: '12px',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 10px 30px rgba(0,0,0,0.85), 0 0 20px rgba(212, 175, 55, 0.3)',
              zIndex: 9999,
              animation: 'slideUp 0.3s ease'
            }}
          >
            <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '0.5rem', borderRadius: '50%', color: 'var(--gold-light)' }}>
              <Check size={20} />
            </div>
            <div>
              <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.9rem' }}>Added to Enterprise RFQ!</div>
              <div style={{ color: 'var(--gold-light)', fontSize: '0.8rem' }}>{addedItemNotice}</div>
            </div>
            <button 
              onClick={onOpenRfq}
              className="btn-gold-primary" 
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem', marginLeft: '0.5rem' }}
            >
              View RFQ Cart
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem'
          }}
          className="products-grid"
        >
          {filteredProducts.map((product) => {
            const isAlreadyInRfq = rfqItems.some((item) => item.id === product.id);

            return (
              <div 
                key={product.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.75rem',
                  background: 'linear-gradient(180deg, rgba(18, 23, 34, 0.85) 0%, rgba(11, 14, 20, 0.95) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.25)'
                }}
              >
                {/* Product Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <span className="badge-gold">
                    {product.categoryLabel}
                  </span>
                  {product.popular && (
                    <span 
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: '#07090C',
                        background: 'var(--gold-gradient)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Enterprise Choice
                    </span>
                  )}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.28rem', color: '#FFF', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {product.name}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--gold-light)', marginBottom: '1.25rem' }}>
                  {product.tagline}
                </div>

                {/* Technical Specs Sheet */}
                <div 
                  style={{
                    background: 'rgba(8, 10, 15, 0.75)',
                    borderRadius: '8px',
                    padding: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}
                >
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.65rem', fontWeight: 700 }}>
                    Technical Specifications
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <span style={{ color: 'var(--text-secondary)', textTransform: 'capitalize', flexShrink: 0 }}>
                          {key}:
                        </span>
                        <span style={{ color: '#E2E8F0', textAlign: 'right', fontWeight: 500 }}>
                          {val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Warranty & SLA */}
                  <div 
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      marginTop: '0.85rem',
                      paddingTop: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--gold-light)',
                      fontSize: '0.78rem'
                    }}
                  >
                    <ShieldCheck size={14} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    <span>{product.warranty}</span>
                  </div>
                </div>

                {/* Footer Pricing & Action */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(212, 175, 55, 0.15)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Pricing Tier
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                      {product.priceEstimate} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ unit</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={isAlreadyInRfq ? "btn-gold-outline" : "btn-gold-primary"}
                    style={{
                      padding: '0.65rem 1.15rem',
                      fontSize: '0.84rem'
                    }}
                  >
                    {isAlreadyInRfq ? (
                      <>
                        <Check size={15} />
                        <span>In RFQ ({rfqItems.find(i => i.id === product.id)?.qty || 1})</span>
                      </>
                    ) : (
                      <>
                        <Plus size={15} />
                        <span>Add to RFQ</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
