import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Star, 
  ShoppingBag, 
  CheckCircle2 
} from 'lucide-react';

interface FeaztoSurplusSectionProps {
  navigate: (route: string) => void;
}

export const FeaztoSurplusSection: React.FC<FeaztoSurplusSectionProps> = ({ navigate }) => {
  return (
    <section className="feazto-surplus-section" id="surplus">
      <div className="surplus-container">
        
        {/* Left Column: Bold Value Proposition */}
        <div className="surplus-content-col">
          <div className="surplus-pill-tag">
            <Sparkles size={13} className="sparkle-icon" />
            <span>Join for free</span>
          </div>

          <h2 className="surplus-headline">
            Sell out instead<br />of throwing out
          </h2>

          <p className="surplus-description">
            Join hundreds of home cooks, heirloom kitchen custodians, and regional culinary creators across India turning daily regional batch surplus into real income — and new hungry neighbors to your doorstep. Free to join. No commissions. Zero food waste.
          </p>

          <div className="surplus-benefits-pills">
            <div className="benefit-pill">
              <CheckCircle2 size={15} />
              <span>100% Regional Home Food</span>
            </div>
            <div className="benefit-pill">
              <CheckCircle2 size={15} />
              <span>Zero Commission Fees</span>
            </div>
            <div className="benefit-pill">
              <CheckCircle2 size={15} />
              <span>Calibrated Thermal Delivery</span>
            </div>
          </div>

          <div className="surplus-cta-row">
            <button 
              type="button" 
              onClick={() => navigate('/partners')}
              className="surplus-signup-btn"
            >
              <span>Signup your kitchen</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Stage with Slanted Device and Sunset Clouds Sky */}
        <div className="surplus-visual-col">
          <div className="surplus-stage-card">
            
            {/* Ambient Background Sunset Sky Gradient */}
            <div className="sunset-atmosphere-bg">
              <div className="sunset-sun-glow" />
              <div className="cloud-layer-soft cloud-one" />
              <div className="cloud-layer-soft cloud-two" />
            </div>

            {/* Slanted 3D Phone Mockup Container */}
            <div className="surplus-phone-perspective-wrapper">
              <div className="feazto-dashboard-phone">
                
                {/* Phone Speaker & Dynamic Island */}
                <div className="phone-dynamic-island">
                  <div className="island-camera" />
                </div>

                {/* Status Bar */}
                <div className="phone-status-bar">
                  <span className="status-time">2:54</span>
                  <div className="status-icons">
                    <span className="status-pill-user">feazto OS</span>
                  </div>
                </div>

                {/* Dashboard Header Bar */}
                <div className="dashboard-app-header">
                  <div className="app-brand-pill">
                    <img 
                      src="/brand/feazto-brand-logo-yellow.jpg" 
                      alt="FEAZTO" 
                      className="dashboard-header-brand-logo" 
                    />
                  </div>
                  <div className="app-greeting-pill">
                    <span>Active Lunch Batch</span>
                  </div>
                </div>

                {/* Screen Content Scrollable Area */}
                <div className="dashboard-inner-scroll">
                  <div className="dashboard-title-row">
                    <h3>My Dashboard</h3>
                    <span className="live-dot-tag">
                      <span className="green-ping" />
                      Live Orders
                    </span>
                  </div>

                  {/* 3 Metric Cards Row (Liquid Glass Styled) */}
                  <div className="dashboard-metrics-grid">
                    <div className="metric-glass-box">
                      <div className="metric-star-row">
                        <Star size={14} fill="#FAC921" stroke="#FAC921" />
                        <span className="metric-num-bold">4.92</span>
                      </div>
                      <span className="metric-sublabel">Cook Rating</span>
                      <span className="metric-trend green">+0.4 from last week</span>
                    </div>

                    <div className="metric-glass-box">
                      <div className="metric-icon-num">
                        <ShoppingBag size={14} className="metric-icon-accent" />
                        <span className="metric-num-bold">18</span>
                      </div>
                      <span className="metric-sublabel">Surplus Meals</span>
                      <span className="metric-action-link">View batches &gt;</span>
                    </div>

                    <div className="metric-glass-box">
                      <div className="metric-icon-num">
                        <TrendingUp size={14} className="metric-icon-accent" />
                        <span className="metric-num-bold">64</span>
                      </div>
                      <span className="metric-sublabel">Total Orders</span>
                      <span className="metric-action-link">Completed &gt;</span>
                    </div>
                  </div>

                  {/* Revenue Chart Section */}
                  <div className="dashboard-revenue-card">
                    <div className="revenue-card-header">
                      <div>
                        <span className="rev-card-title">Rescued Revenue</span>
                        <div className="rev-amount-row">
                          <span className="rev-amount">₹8,736.00</span>
                          <span className="rev-currency">INR</span>
                        </div>
                      </div>
                      <div className="revenue-time-toggle">
                        <span className="toggle-chip active">Daily</span>
                        <span className="toggle-chip">Monthly</span>
                      </div>
                    </div>

                    {/* Chart Visualization */}
                    <div className="chart-bars-container">
                      <div className="chart-bar-col">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: '35%' }} />
                        </div>
                        <span className="bar-day">M</span>
                      </div>
                      <div className="chart-bar-col">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: '55%' }} />
                        </div>
                        <span className="bar-day">T</span>
                      </div>
                      <div className="chart-bar-col">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: '40%' }} />
                        </div>
                        <span className="bar-day">W</span>
                      </div>
                      <div className="chart-bar-col">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: '70%' }} />
                        </div>
                        <span className="bar-day">T</span>
                      </div>
                      <div className="chart-bar-col">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ height: '60%' }} />
                        </div>
                        <span className="bar-day">F</span>
                      </div>
                      <div className="chart-bar-col active-day">
                        <div className="bar-track">
                          <div className="bar-fill brand-highlight" style={{ height: '92%' }}>
                            <span className="bar-tooltip">₹8,736</span>
                          </div>
                        </div>
                        <span className="bar-day">Today</span>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .feazto-surplus-section {
          width: 100%;
          padding: 80px 24px 100px 24px;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .surplus-container {
          max-width: 1180px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Column */
        .surplus-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .surplus-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: #F3F4F6;
          border: 1px solid rgba(0, 0, 0, 0.08);
          font-size: 0.82rem;
          font-weight: 700;
          color: #374151;
          margin-bottom: 22px;
          letter-spacing: -0.01em;
        }

        .sparkle-icon {
          color: #FAC921;
        }

        .surplus-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: clamp(2.4rem, 4.2vw, 3.6rem);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.035em;
          color: #111827;
          margin: 0 0 20px 0;
        }

        .surplus-description {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4B5563;
          margin: 0 0 28px 0;
          max-width: 480px;
        }

        .surplus-benefits-pills {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 32px;
        }

        .benefit-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #1F2937;
        }

        .benefit-pill svg {
          color: #10B981;
          flex-shrink: 0;
        }

        .surplus-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .surplus-signup-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: #111827;
          color: #FFFFFF;
          font-size: 0.96rem;
          font-weight: 700;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.22s ease;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.2);
        }

        .surplus-signup-btn:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
        }

        .surplus-signup-btn svg {
          transition: transform 0.2s ease;
        }

        .surplus-signup-btn:hover svg {
          transform: translateX(4px);
        }

        /* Right Column Stage Card */
        .surplus-visual-col {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        .surplus-stage-card {
          position: relative;
          width: 100%;
          min-height: 520px;
          border-radius: 36px;
          overflow: hidden;
          background: #FFF4C4;
          box-shadow: 0 24px 60px rgba(245, 183, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 30px 40px 0 30px;
        }

        /* Warm Golden Yellow Gradient Atmosphere Background */
        .sunset-atmosphere-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(145deg, #FFF8DB 0%, #FFE98A 35%, #FDC830 75%, #F39C12 100%);
          z-index: 1;
          overflow: hidden;
        }

        .sunset-sun-glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(254, 219, 90, 0.6) 45%, transparent 70%);
          filter: blur(40px);
        }

        .cloud-layer-soft {
          position: absolute;
          border-radius: 50%;
          filter: blur(35px);
          pointer-events: none;
        }

        .cloud-one {
          bottom: 20px;
          left: -40px;
          width: 340px;
          height: 240px;
          background: rgba(255, 255, 255, 0.75);
        }

        .cloud-two {
          bottom: -20px;
          right: 40px;
          width: 280px;
          height: 200px;
          background: rgba(255, 240, 180, 0.85);
        }

        /* 3D Slanted Phone Perspective */
        .surplus-phone-perspective-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 380px;
          perspective: 1100px;
          margin-bottom: -40px;
        }

        .feazto-dashboard-phone {
          width: 100%;
          background: #FFFFFF;
          border-radius: 50px 50px 0 0;
          border: 11px solid #1C1D21;
          border-bottom: none;
          box-shadow: -18px 28px 70px rgba(0, 0, 0, 0.32), 0 0 0 1.5px rgba(255, 255, 255, 0.18) inset, 0 8px 24px rgba(0, 0, 0, 0.2);
          transform: rotate(-3.5deg) translateY(8px);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        /* Realistic iPhone outer antenna & matte bevel accents */
        .feazto-dashboard-phone::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 39px 39px 0 0;
          border: 1px solid rgba(0, 0, 0, 0.08);
          pointer-events: none;
          z-index: 10;
        }

        .feazto-dashboard-phone:hover {
          transform: rotate(-2deg) translateY(0);
        }

        /* Dynamic Island */
        .phone-dynamic-island {
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 4px;
          background: #FFFFFF;
        }

        .island-camera {
          width: 98px;
          height: 25px;
          background: #000000;
          border-radius: 9999px;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06), inset 0 1px 3px rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 14px;
        }

        .island-camera::after {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: radial-gradient(circle, #101c38 40%, #050b14 100%);
          box-shadow: 0 0 2px rgba(45, 90, 180, 0.6);
        }

        /* Status Bar */
        .phone-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 4px 22px 10px 22px;
          font-size: 0.76rem;
          font-weight: 700;
          color: #111827;
        }

        .status-pill-user {
          font-size: 0.68rem;
          padding: 2px 8px;
          border-radius: 9999px;
          background: #F3F4F6;
          color: #4B5563;
        }

        /* App Header */
        .dashboard-app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 18px;
          background: #FAC921;
          color: #181B20;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .app-brand-pill {
          display: inline-flex;
          align-items: center;
          height: 32px;
        }

        .dashboard-header-brand-logo {
          height: 24px;
          width: auto;
          max-width: 115px;
          object-fit: contain;
          border-radius: 3px;
        }

        .app-greeting-pill {
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.12);
        }

        /* Inner Dashboard Body */
        .dashboard-inner-scroll {
          padding: 18px 20px 40px 20px;
          background: #FAFAFA;
          text-align: left;
        }

        .dashboard-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .dashboard-title-row h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #111827;
          margin: 0;
        }

        .live-dot-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #059669;
          background: #ECFDF5;
          padding: 3px 8px;
          border-radius: 9999px;
        }

        .green-ping {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }

        /* Metrics Grid */
        .dashboard-metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 18px;
        }

        .metric-glass-box {
          padding: 12px 10px;
          border-radius: 14px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
        }

        .metric-star-row,
        .metric-icon-num {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 4px;
        }

        .metric-num-bold {
          font-size: 1.05rem;
          font-weight: 900;
          color: #111827;
        }

        .metric-icon-accent {
          color: #FAC921;
        }

        .metric-sublabel {
          font-size: 0.68rem;
          font-weight: 600;
          color: #6B7280;
          margin-bottom: 4px;
        }

        .metric-trend {
          font-size: 0.62rem;
          font-weight: 700;
        }

        .metric-trend.green {
          color: #059669;
        }

        .metric-action-link {
          font-size: 0.62rem;
          font-weight: 700;
          color: #6366F1;
        }

        /* Revenue Card */
        .dashboard-revenue-card {
          padding: 16px 18px;
          border-radius: 18px;
          background: #FFFFFF;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .revenue-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .rev-card-title {
          font-size: 0.72rem;
          font-weight: 600;
          color: #6B7280;
        }

        .rev-amount-row {
          display: flex;
          align-items: baseline;
          gap: 5px;
          margin-top: 2px;
        }

        .rev-amount {
          font-size: 1.35rem;
          font-weight: 900;
          color: #111827;
          letter-spacing: -0.02em;
        }

        .rev-currency {
          font-size: 0.7rem;
          font-weight: 700;
          color: #9CA3AF;
        }

        .revenue-time-toggle {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px;
          border-radius: 9999px;
          background: #F3F4F6;
        }

        .toggle-chip {
          font-size: 0.66rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 9999px;
          color: #6B7280;
          cursor: pointer;
        }

        .toggle-chip.active {
          background: #111827;
          color: #FFFFFF;
        }

        /* Bar Chart */
        .chart-bars-container {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          height: 100px;
          padding-top: 14px;
          border-top: 1px solid #F3F4F6;
        }

        .chart-bar-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex: 1;
        }

        .bar-track {
          width: 14px;
          height: 70px;
          background: #F3F4F6;
          border-radius: 9999px;
          display: flex;
          align-items: flex-end;
          position: relative;
        }

        .bar-fill {
          width: 100%;
          border-radius: 9999px;
          background: #D1D5DB;
          transition: height 0.3s ease;
        }

        .bar-fill.brand-highlight {
          background: #FAC921;
          position: relative;
        }

        .bar-tooltip {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.58rem;
          font-weight: 800;
          background: #111827;
          color: #FFFFFF;
          padding: 2px 4px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .bar-day {
          font-size: 0.66rem;
          font-weight: 700;
          color: #9CA3AF;
        }

        .chart-bar-col.active-day .bar-day {
          color: #111827;
          font-weight: 800;
        }

        @media (max-width: 960px) {
          .surplus-container {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .surplus-stage-card {
            min-height: 440px;
            padding: 24px 20px 0 20px;
          }

          .surplus-phone-perspective-wrapper {
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaztoSurplusSection;

