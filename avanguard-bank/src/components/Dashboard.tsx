import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ paddingBottom: '50px' }}>
            <nav style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 50px',
                background: 'rgba(5, 11, 20, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--glass-border)',
                position: 'sticky',
                top: 0,
                zIndex: 100
            }}>
                <div style={{
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                }}>Avanguard<span style={{ color: 'var(--accent-color)' }}>.</span></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{
                        textDecoration: 'none',
                        color: '#888',
                        fontSize: '0.9rem',
                        marginRight: '20px',
                        cursor: 'pointer',
                        transition: '0.3s'
                    }}>LOGOUT</a>
                    <span style={{
                        width: '40px',
                        height: '40px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        border: '2px solid var(--accent-color)',
                        background: '#333'
                    }}></span>
                </div>
            </nav>

            <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '40px', animation: 'slideDown 0.8s ease-out' }}>
                    <h1 style={{ fontWeight: 300, fontSize: '2.5rem', margin: 0 }}>Welcome back, Alexander</h1>
                    <p style={{ color: '#888', marginTop: '10px' }}>Here is your financial overview.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    marginBottom: '50px',
                    animation: 'fadeIn 1s ease-out'
                }}>
                    <AccountCard
                        type="Priority Checking"
                        balance="$ 124,592.00"
                        number="**** **** **** 4291"
                        color="var(--accent-color)"
                        onClick={() => navigate('/account/checking')}
                    />
                    <AccountCard
                        type="High Yield Savings"
                        balance="$ 850,000.00"
                        number="**** **** **** 8821"
                        color="#9d00ff"
                        onClick={() => navigate('/account/savings')}
                    />
                    <AccountCard
                        type="Obsidian Credit"
                        balance="$ 4,200.00"
                        number="**** **** **** 1002"
                        color="#ff3232"
                        onClick={() => navigate('/account/credit')}
                    />
                </div>

                <h3>Quick Actions</h3>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <ActionButton icon="➤" text="Transfer Funds" />
                    <ActionButton icon="★" text="Pay Bills" />
                    <ActionButton icon="⟳" text="Exchange" />
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

const AccountCard = ({ type, balance, number, color, onClick }: any) => (
    <div onClick={onClick} style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '15px',
        padding: '30px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '200px',
        transition: 'all 0.3s ease'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.borderColor = 'rgba(0, 210, 255, 0.3)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--glass-bg)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = 'none';
        }}
    >
        <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
            borderRadius: '50%'
        }}></div>
        <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{type}</div>
        <div style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            margin: '20px 0',
            background: 'linear-gradient(90deg, #fff, #aebacf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>{balance}</div>
        <div style={{ fontFamily: 'monospace', color: '#555', letterSpacing: '2px' }}>{number}</div>
    </div >
);

const ActionButton = ({ icon, text }: any) => (
    <button style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        padding: '15px 30px',
        color: 'white',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: '0.3s',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    }}
        onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.background = 'rgba(0, 210, 255, 0.05)';
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.background = 'var(--glass-bg)';
        }}
    >
        <span style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>{icon}</span> {text}
    </button>
);

export default Dashboard;
