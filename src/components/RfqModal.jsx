import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  CheckCircle, 
  Send, 
  ShieldCheck, 
  Server, 
  Code2, 
  FileText,
  Building,
  Phone,
  Mail,
  User,
  Sparkles
} from 'lucide-react';

export default function RfqModal({ isOpen, onClose, rfqItems, onUpdateQty, onRemoveItem, defaultTab = 'hardware' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    deliveryLocation: 'Chennai / PAN India',
    requirements: '',
    ndaRequired: true
  });
  const [submittedRefId, setSubmittedRefId] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = 'ZYR-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedRefId(ref);
  };

  const handleResetAndClose = () => {
    setSubmittedRefId(null);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="glass-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          background: 'linear-gradient(145deg, rgba(16, 21, 30, 0.98) 0%, rgba(8, 10, 15, 0.99) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.25)',
          position: 'relative',
          animation: 'fadeIn 0.25s ease'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold-light)',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
        >
          <X size={18} />
        </button>

        {submittedRefId ? (
          /* Submission Success State */
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div 
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.15)',
                border: '2px solid var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)',
                margin: '0 auto 1.5rem',
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)'
              }}
            >
              <CheckCircle size={38} />
            </div>

            <div className="badge-gold" style={{ marginBottom: '0.75rem' }}>
              <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
              <span>Inquiry Dispatched to Executive Desk</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#FFF', fontWeight: 800, marginBottom: '0.5rem' }}>
              Request Received Successfully
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.75rem' }}>
              Thank you, <strong style={{ color: '#FFF' }}>{formData.fullName || 'Valued Partner'}</strong>. A dedicated Zayrath Group enterprise procurement specialist is reviewing your requirements.
            </p>

            <div 
              style={{
                background: 'rgba(8, 10, 15, 0.85)',
                border: '1px dashed var(--gold-primary)',
                borderRadius: '10px',
                padding: '1.25rem',
                display: 'inline-block',
                marginBottom: '2rem'
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Enterprise Tracking Reference
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--gold-light)', letterSpacing: '0.1em' }}>
                {submittedRefId}
              </div>
            </div>

            <div>
              <button 
                onClick={handleResetAndClose}
                className="btn-gold-primary"
                style={{ padding: '0.85rem 2rem' }}
              >
                Close & Return to Portal
              </button>
            </div>
          </div>
        ) : (
          /* Main RFQ / Consultation Form */
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212, 175, 55, 0.4)'
                }}
              >
                <img src="/zayrath-logo.jpg" alt="Zayrath Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#FFF', fontWeight: 800 }}>
                  Enterprise Engagement Desk
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              Official procurement and engineering consultation gateway for Zayrath Group subsidiaries.
            </p>

            {/* Tab Switcher */}
            <div 
              style={{
                display: 'flex',
                background: 'rgba(9, 11, 16, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '10px',
                padding: '0.3rem',
                gap: '0.3rem',
                marginBottom: '1.75rem'
              }}
            >
              <button
                type="button"
                onClick={() => setActiveTab('hardware')}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: activeTab === 'hardware' ? 700 : 500,
                  cursor: 'pointer',
                  background: activeTab === 'hardware' ? 'var(--gold-gradient)' : 'transparent',
                  color: activeTab === 'hardware' ? '#090B0E' : 'var(--text-secondary)',
                  transition: 'all 0.2s'
                }}
              >
                <Server size={15} />
                <span>IT Hardware RFQ ({rfqItems.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('software')}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: activeTab === 'software' ? 700 : 500,
                  cursor: 'pointer',
                  background: activeTab === 'software' ? 'var(--gold-gradient)' : 'transparent',
                  color: activeTab === 'software' ? '#090B0E' : 'var(--text-secondary)',
                  transition: 'all 0.2s'
                }}
              >
                <Code2 size={15} />
                <span>Software Solutions Inquiry</span>
              </button>
            </div>

            {/* TAB 1: Selected Hardware List */}
            {activeTab === 'hardware' && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Selected IT Products for Quotation
                </div>

                {rfqItems.length === 0 ? (
                  <div 
                    style={{
                      background: 'rgba(8, 10, 15, 0.6)',
                      border: '1px dashed rgba(212, 175, 55, 0.25)',
                      borderRadius: '10px',
                      padding: '1.75rem',
                      textAlign: 'center',
                      color: 'var(--text-muted)',
                      fontSize: '0.88rem'
                    }}
                  >
                    No products added yet. You can browse the IT Products Catalog and click "Add to RFQ", or describe your hardware needs in the form below!
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxHeight: '180px', overflowY: 'auto' }}>
                    {rfqItems.map((item) => (
                      <div 
                        key={item.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'rgba(8, 10, 15, 0.7)',
                          border: '1px solid rgba(212, 175, 55, 0.15)',
                          borderRadius: '8px',
                          padding: '0.65rem 1rem'
                        }}
                      >
                        <div>
                          <div style={{ color: '#FFF', fontWeight: 600, fontSize: '0.88rem' }}>{item.name}</div>
                          <div style={{ color: 'var(--gold-light)', fontSize: '0.78rem' }}>{item.priceEstimate} est.</div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          {/* Qty Stepper */}
                          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', overflow: 'hidden' }}>
                            <button
                              type="button"
                              onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                              style={{ background: 'none', border: 'none', color: '#FFF', padding: '0.35rem 0.6rem', cursor: 'pointer' }}
                            >
                              <Minus size={12} />
                            </button>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, padding: '0 0.5rem', color: 'var(--gold-light)' }}>
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQty(item.id, item.qty + 1)}
                              style={{ background: 'none', border: 'none', color: '#FFF', padding: '0.35rem 0.6rem', cursor: 'pointer' }}
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {/* Delete */}
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '0.35rem' }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Enterprise Form */}
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Full Name / Designation *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Manikandan, CTO"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                        background: 'rgba(8, 10, 15, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Enterprise / Company Name *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Apex Global Tech"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                        background: 'rgba(8, 10, 15, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Corporate Email Address *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input 
                      type="email" 
                      required
                      placeholder="exec@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                        background: 'rgba(8, 10, 15, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Direct Phone / WhatsApp *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--gold-primary)' }} />
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem 0.75rem 2.4rem',
                        background: 'rgba(8, 10, 15, 0.7)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        borderRadius: '8px',
                        color: '#FFF',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Requirement Notes */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  {activeTab === 'hardware' ? 'Custom Hardware Specifications / Delivery Deadlines' : 'Software Project Scope & Architectural Requirements'}
                </label>
                <textarea 
                  rows={3}
                  placeholder={activeTab === 'hardware' ? "e.g. Need 4x 2U Rack Servers with 512GB RAM dispatched to Chennai Data Center by next week..." : "e.g. Looking to engineer a bespoke AI-powered ERP platform with iOS and Android native companion apps..."}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(8, 10, 15, 0.7)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    borderRadius: '8px',
                    color: '#FFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* NDA Checkbox */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <input 
                    type="checkbox" 
                    checked={formData.ndaRequired} 
                    onChange={(e) => setFormData({ ...formData, ndaRequired: e.target.checked })}
                    style={{ accentColor: 'var(--gold-primary)' }}
                  />
                  <span>Require Mutual Non-Disclosure Agreement (NDA)</span>
                </label>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--gold-light)' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--gold-primary)' }} />
                  <span>256-Bit Encrypted Transmission</span>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-gold-primary"
                style={{ width: '100%', padding: '0.95rem' }}
              >
                <Send size={16} />
                <span>Submit to Zayrath Group Enterprise Desk</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
