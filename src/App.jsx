import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GoldParticleBackground from './components/GoldParticleBackground';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';

// Dedicated Separate Pages
import GroupHomePage from './pages/GroupHomePage';
import TechProductsPage from './pages/TechProductsPage';
import SoftwareSolutionsPage from './pages/SoftwareSolutionsPage';

export default function App() {
  // Page routing state: 'group' | 'hardware' | 'software'
  const [activeView, setActiveView] = useState('group');
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [rfqModalTab, setRfqModalTab] = useState('hardware');
  
  const [rfqItems, setRfqItems] = useState([
    {
      id: 'srv-01',
      name: 'Zayrath Apex Pro 2U Rack Server',
      priceEstimate: '$12,450',
      qty: 2
    }
  ]);

  // Sync with URL hash for browser history & direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('it-products') || hash.includes('hardware')) {
        setActiveView('hardware');
      } else if (hash.includes('software')) {
        setActiveView('software');
      } else {
        setActiveView('group');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activeView changes
  const handleNavigate = (view) => {
    setActiveView(view);
    if (view === 'hardware') {
      window.location.hash = '#it-products';
    } else if (view === 'software') {
      window.location.hash = '#software-solutions';
    } else {
      window.location.hash = '#group';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // RFQ handlers
  const handleAddToRfq = (product) => {
    setRfqItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { id: product.id, name: product.name, priceEstimate: product.priceEstimate, qty: 1 }];
      }
    });
  };

  const handleUpdateQty = (id, newQty) => {
    setRfqItems((prev) => 
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const handleRemoveFromRfq = (id) => {
    setRfqItems((prev) => prev.filter((item) => item.id !== id));
  };

  const openRfqWithTab = (tab = 'hardware') => {
    setRfqModalTab(tab);
    setRfqModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-deep)' }}>
      {/* Dynamic Gold Particle Canvas Engine */}
      <GoldParticleBackground />

      {/* Luxury Conglomerate Top Navbar */}
      <Navbar 
        activeView={activeView} 
        setActiveView={handleNavigate} 
        onOpenRfq={() => openRfqWithTab('hardware')}
        rfqCount={rfqItems.reduce((acc, curr) => acc + curr.qty, 0)}
      />

      {/* Main Content: Completely Dedicated Separate Pages */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        
        {/* PAGE 1: GROUP CONGLOMERATE PARENT HOME */}
        {activeView === 'group' && (
          <GroupHomePage 
            setActiveView={handleNavigate} 
            onOpenRfq={() => openRfqWithTab('hardware')} 
          />
        )}

        {/* PAGE 2: SEPARATE DEDICATED PAGE FOR ZAYRATH TECH SYSTEMS (IT PRODUCTS) */}
        {activeView === 'hardware' && (
          <TechProductsPage 
            setActiveView={handleNavigate} 
            onAddToRfq={handleAddToRfq} 
            rfqItems={rfqItems}
            onOpenRfq={() => openRfqWithTab('hardware')}
          />
        )}

        {/* PAGE 3: SEPARATE DEDICATED PAGE FOR ZAYRATH SOFTWARE SOLUTIONS */}
        {activeView === 'software' && (
          <SoftwareSolutionsPage 
            setActiveView={handleNavigate} 
            onOpenConsultation={() => openRfqWithTab('software')}
          />
        )}

      </main>

      {/* Executive Conglomerate Footer */}
      <Footer 
        setActiveView={handleNavigate} 
        onOpenRfq={() => openRfqWithTab('hardware')} 
      />

      {/* Interactive Enterprise RFQ & Technical Consultation Modal */}
      <RfqModal 
        isOpen={rfqModalOpen} 
        onClose={() => setRfqModalOpen(false)}
        rfqItems={rfqItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveFromRfq}
        defaultTab={rfqModalTab}
      />
    </div>
  );
}
