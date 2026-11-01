import React, { useState } from 'react';
import { Sparkles, Bell, ArrowRight, Flame, Heart, CheckCircle2 } from 'lucide-react';

interface BlogPageProps {
  navigate?: (route: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <div className="secondary-page blog-page">
      <section className="container" style={{ padding: '70px 24px 100px 24px', display: 'flex', justifyContent: 'center' }}>
        <div 
          style={{
            maxWidth: '920px',
            width: '100%',
            borderRadius: '36px',
            background: 'linear-gradient(135deg, #FFDE59 0%, #FAC921 50%, #E5A800 100%)',
            padding: '72px 36px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(248, 181, 4, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle ambient radial glow */}
          <div 
            style={{
              position: 'absolute',
              top: '-25%',
              right: '-15%',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} 
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-15%',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 0, 0, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} 
          />

          {/* Top Pill Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 24px',
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.18)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              color: '#181B20',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}
          >
            <Sparkles size={14} style={{ fill: '#FFFFFF' }} />
            <span>Feazto Kitchen Chronicles</span>
          </div>

          {/* Main Headings */}
          <h1 
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 900,
              color: '#181B20',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.16)'
            }}
          >
            We are cooking something special.
          </h1>

          <p 
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '640px',
              margin: '0 0 32px 0',
              lineHeight: 1.65,
              fontWeight: 500
            }}
          >
            We don’t have any published blogs right now. Our team is fully engaged across real home kitchens, documenting forgotten recipes, recording home-cook legacies, and curating authentic food stories for you.
          </p>

          {/* Feature Highlights Pills */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.22)',
                color: '#181B20',
                fontSize: '0.85rem',
                fontWeight: 700,
                backdropFilter: 'blur(8px)'
              }}
            >
              <Flame size={15} style={{ fill: '#FFFFFF' }} /> Generational Masala Secrets
            </span>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.22)',
                color: '#181B20',
                fontSize: '0.85rem',
                fontWeight: 700,
                backdropFilter: 'blur(8px)'
              }}
            >
              <Heart size={15} style={{ fill: '#FFFFFF' }} /> FoodPreneur Journeys
            </span>
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.22)',
                color: '#181B20',
                fontSize: '0.85rem',
                fontWeight: 700,
                backdropFilter: 'blur(8px)'
              }}
            >
              <Sparkles size={15} style={{ fill: '#FFFFFF' }} /> Zero-Palm-Oil Purity
            </span>
          </div>

          {/* Waitlist / Notify Box */}
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px 32px',
              maxWidth: '560px',
              width: '100%',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18)',
              boxSizing: 'border-box'
            }}
          >
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#047857', padding: '10px 0' }}>
                <CheckCircle2 size={24} style={{ fill: '#10B981', color: '#181B20' }} />
                <span style={{ fontWeight: 800, fontSize: '1rem', color: '#111827' }}>
                  You're on the list! We'll notify you the moment our first story drops.
                </span>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ fontSize: '0.88rem', fontWeight: 800, color: '#111827', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Bell size={15} style={{ color: '#D97706', fill: '#D97706' }} />
                  Be the first to read when we launch:
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: '1 1 240px',
                      padding: '12px 18px',
                      borderRadius: '9999px',
                      border: '1px solid #D1D5DB',
                      fontSize: '0.92rem',
                      outline: 'none',
                      color: '#111827',
                      background: '#F9FAFB'
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '12px 26px',
                      borderRadius: '9999px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #FFDE59 0%, #FAC921 100%)',
                      color: '#111827',
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(248, 181, 4, 0.4)'
                    }}
                  >
                    Notify Me <ArrowRight size={15} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Back to Explore Link */}
          {navigate && (
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{
                marginTop: '32px',
                background: 'transparent',
                border: 'none',
                color: '#181B20',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
                opacity: 0.95
              }}
            >
              ← Back to Home
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
