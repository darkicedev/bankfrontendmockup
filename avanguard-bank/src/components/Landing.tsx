import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingAnimation from './LandingAnimation';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <LandingAnimation />

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 2,
                pointerEvents: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <nav style={{
                    position: 'absolute',
                    top: 0,
                    width: '90%',
                    padding: '30px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pointerEvents: 'auto'
                }}>
                    <div style={{
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        letterSpacing: '2px',
                        color: 'var(--text-color)',
                        textTransform: 'uppercase'
                    }}>
                        Avanguard<span style={{ color: 'var(--accent-color)' }}>.</span>
                    </div>
                    <a onClick={(e) => { e.preventDefault(); navigate('/login'); }} style={btnStyle} href="/login">Client Login</a>
                </nav>

                <div style={{
                    textAlign: 'center',
                    marginTop: '250px',
                    opacity: 0,
                    animation: 'fadeUp 1.5s ease-out forwards',
                    animationDelay: '1s'
                }}>
                    <h2 style={{
                        fontSize: '1rem',
                        fontWeight: 300,
                        letterSpacing: '8px',
                        textTransform: 'uppercase',
                        marginTop: '10px',
                        color: 'var(--accent-color)'
                    }}>Avanguard Bank</h2>
                    <h1 style={{
                        fontSize: '4rem',
                        fontWeight: 300,
                        margin: 0,
                        letterSpacing: '-2px',
                        background: 'linear-gradient(90deg, #fff, #aebacf)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Wealth Beyond Borders</h1>
                    <div style={{ marginTop: '30px', pointerEvents: 'auto' }}>
                        <a href="#" style={{ ...btnStyle, borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}>Open Account</a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

const btnStyle: React.CSSProperties = {
    padding: '12px 30px',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(5px)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 600,
    cursor: 'pointer'
};

export default Landing;
