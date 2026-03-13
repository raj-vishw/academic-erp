import { useState } from 'react';
import { Coffee, Utensils, QrCode } from 'lucide-react';

export default function Cafeteria() {
  const [activeTab, setActiveTab] = useState('All');
  const [bookedTokens, setBookedTokens] = useState({});

  const menu = [
    { name: 'Breakfast Combo', category: 'Breakfast', price: 150, icon: <Coffee size={24} /> },
    { name: 'Veg Lunch Thali', category: 'Lunch', price: 120, icon: <Utensils size={24} /> },
    { name: 'Non-Veg Lunch Thali', category: 'Lunch', price: 180, icon: <Utensils size={24} /> },
    { name: 'Sandwich', category: 'Snacks', price: 80, icon: <Utensils size={24} /> },
    { name: 'Tea/Coffee', category: 'Beverage', price: 20, icon: <Coffee size={24} /> },
    { name: 'Cookies & Snacks', category: 'Snacks', price: 40, icon: <Coffee size={24} /> },
  ];

  const handleBookToken = (item) => {
    setBookedTokens(prev => ({
      ...prev,
      [item.name]: !prev[item.name]
    }));
  };

  const handleScan = () => {
    alert("Scanning feature not implemented purely via web right now dummy scan started.");
  };

  return (
    <div className="cafeteria-page">
      <div className="page-header">
        <h2>Cafeteria</h2>
        <p>Book your meal tokens and manage food preferences</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-left">
          <div className="card menu-card">
            <h3 className="section-title">Today's Menu</h3>
            
            <div className="menu-tabs">
              {['All', 'Breakfast', 'Lunch', 'Snacks', 'Beverage'].map(tab => (
                <button 
                  key={tab} 
                  className={`menu-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="menu-list">
              {menu.filter(m => activeTab === 'All' || m.category === activeTab).map((item, idx) => (
                <div key={idx} className="menu-item">
                  <div className="menu-item-left">
                    <div className="menu-icon">{item.icon}</div>
                    <div className="menu-details">
                      <div className="m-name">{item.name}</div>
                      <div className="m-category">{item.category}</div>
                    </div>
                  </div>
                  <div className="menu-item-right">
                    <div className="m-price">₹{item.price}</div>
                    <button 
                      className="primary-btn sm" 
                        style={{ 
                          background: bookedTokens[item.name] ? 'var(--success-color)' : '', 
                          opacity: bookedTokens[item.name] ? 0.9 : 1
                        }}
                      onClick={() => handleBookToken(item)}
                    >
                      {bookedTokens[item.name] ? 'Token Booked' : 'Book Token'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="card qr-card" style={{ background: '#586c99', color: 'white', textAlign: 'center' }}>
            <h3 className="section-title" style={{ color: '#e2e8f0', marginBottom: '2rem' }}>QR Scanner</h3>
            <div className="qr-container" style={{ background: 'white', padding: '1rem', borderRadius: '8px', display: 'inline-block', marginBottom: '2rem' }}>
              <QrCode size={120} color="#1f2937" />
            </div>
            <button className="primary-btn" style={{ background: 'white', color: '#586c99', width: '100%', marginBottom: '1rem' }} onClick={handleScan}>Scan Code</button>
            <p style={{ fontSize: '0.75rem', color: '#a8b2d1' }}>For cafeteria staff to verify student tokens</p>
          </div>
        </div>
      </div>
    </div>
  );
}
