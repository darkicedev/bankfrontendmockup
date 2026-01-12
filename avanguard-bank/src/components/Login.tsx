import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <>
            <ParticleBackground />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                padding: '40px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(15px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '20px',
                boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
                zIndex: 10,
                textAlign: 'center',
                animation: 'fadeIn 1s ease-out',
            }}>
                <div style={{
                    fontWeight: 800,
                    fontSize: '1.5rem',
                    letterSpacing: '2px',
                    marginBottom: '30px',
                    textTransform: 'uppercase',
                }}>
                    Avanguard<span style={{ color: 'var(--accent-color)' }}>.</span>
                </div>
                <h2 style={{
                    fontWeight: 300,
                    marginBottom: '30px',
                    letterSpacing: '1px',
                    fontSize: '1.2rem',
                }}>Client Access</h2>

                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#ccc', marginLeft: '10px' }}>Client ID</label>
                        <input type="text" placeholder="Enter your ID" required style={{
                            width: '100%',
                            padding: '12px 20px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '30px',
                            color: 'white',
                            fontFamily: 'Montserrat, sans-serif',
                            boxSizing: 'border-box',
                            outline: 'none',
                            transition: '0.3s',
                        }} />
                    </div>
                    <div style={{ marginBottom: '20px', textAlign: 'left' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.8rem', color: '#ccc', marginLeft: '10px' }}>Password</label>
                        <input type="password" placeholder="Enter password" required style={{
                            width: '100%',
                            padding: '12px 20px',
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '30px',
                            color: 'white',
                            fontFamily: 'Montserrat, sans-serif',
                            boxSizing: 'border-box',
                            outline: 'none',
                            transition: '0.3s',
                        }} />
                    </div>
                    <button type="submit" style={{
                        width: '100%',
                        padding: '12px',
                        marginTop: '10px',
                        background: isLoading ? 'var(--accent-color)' : 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: isLoading ? '#000' : 'var(--accent-color)',
                        borderRadius: '30px',
                        cursor: 'pointer',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        transition: 'all 0.3s ease',
                        opacity: isLoading ? 0.7 : 1
                    }}>
                        {isLoading ? 'Authenticating...' : 'Secure Login'}
                    </button>
                </form>

                <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#888' }}>
                    <a href="#" style={{ color: '#aaa', textDecoration: 'none', transition: '0.3s' }}>Forgot Credentials?</a>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -40%); }
                    to { opacity: 1; transform: translate(-50%, -50%); }
                }
            `}</style>
        </>
    );
};

export default Login;
