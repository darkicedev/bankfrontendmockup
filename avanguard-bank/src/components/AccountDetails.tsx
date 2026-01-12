import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AccountDetails: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Simulate initial data
    const [balance, setBalance] = useState(124592.00);
    const [transactions, setTransactions] = useState([
        { date: 'Oct 24, 2024', desc: 'Wire Transfer - Investment Corp', status: 'Completed', amount: 12500.00, isPos: true },
        { date: 'Oct 22, 2024', desc: 'Luxury Motors Dealership', status: 'Pending', amount: 4200.00, isPos: false },
        { date: 'Oct 20, 2024', desc: 'Inter-Account Transfer', status: 'Completed', amount: 1000.00, isPos: false },
        { date: 'Oct 15, 2024', desc: 'Salary Deposit', status: 'Completed', amount: 8400.00, isPos: true },
    ]);

    // Transfer Form State
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [statusColor, setStatusColor] = useState('#888');
    const [isProcessing, setIsProcessing] = useState(false);

    const formatCurrency = (num: number) => {
        return '$ ' + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    const handleTransfer = () => {
        const amt = parseFloat(amount);
        if (!recipient || !amt || amt <= 0) {
            setStatusColor('var(--danger-color)');
            setStatusMsg("Please enter valid details.");
            return;
        }

        if (amt > balance) {
            setStatusColor('var(--danger-color)');
            setStatusMsg("Insufficient funds.");
            return;
        }

        setIsProcessing(true);
        setStatusMsg("Processing...");
        setStatusColor('#888');

        setTimeout(() => {
            setBalance(prev => prev - amt);
            const date = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            const newTx = {
                date,
                desc: `Transfer to ${recipient}`,
                status: 'Completed',
                amount: amt,
                isPos: false
            };

            setTransactions(prev => [newTx, ...prev]);

            setIsProcessing(false);
            setAmount('');
            setRecipient('');
            setStatusColor('var(--success-color)');
            setStatusMsg("Transfer successful.");

            setTimeout(() => setStatusMsg(""), 3000);
        }, 1500);
    };

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
                <div onClick={() => navigate('/dashboard')} style={{
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                }}>Avanguard<span style={{ color: 'var(--accent-color)' }}>.</span></div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{ color: '#888', textDecoration: 'none' }}>LOGOUT</a>
                    <span style={{ width: '40px', height: '40px', display: 'inline-block', background: '#333', borderRadius: '50%', border: '2px solid var(--accent-color)', verticalAlign: 'middle', marginLeft: '20px' }}></span>
                </div>
            </nav>

            <div style={{
                padding: '50px',
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '40px'
            }}>

                <div style={{
                    marginBottom: '30px',
                    gridColumn: '1 / -1',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '20px'
                }}>
                    <div>
                        <div onClick={() => navigate('/dashboard')} style={{
                            color: '#888',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            marginRight: '20px',
                            cursor: 'pointer',
                            display: 'inline-block',
                            marginBottom: '10px'
                        }}>← Back to Dashboard</div>
                        <h1 style={{ margin: '10px 0 0 0', fontWeight: 300 }}>{id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Account'} Details</h1>
                        <p style={{ color: '#888', margin: '5px 0' }}>**** **** **** 4291</p>
                    </div>
                    <div style={{
                        fontSize: '3rem',
                        fontWeight: 600,
                        background: 'linear-gradient(90deg, #fff, #aebacf)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>{formatCurrency(balance)}</div>
                </div>

                {/* Transactions */}
                <div style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '15px',
                    padding: '30px'
                }}>
                    <h3 style={{ marginTop: 0, fontWeight: 600, borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', marginBottom: '20px' }}>Recent Activity</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                        <thead>
                            <tr>
                                <Th>Date</Th>
                                <Th>Description</Th>
                                <Th>Status</Th>
                                <Th align="right">Amount</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, idx) => (
                                <tr key={idx}>
                                    <Td>{tx.date}</Td>
                                    <Td>{tx.desc}</Td>
                                    <Td>{tx.status}</Td>
                                    <Td align="right" style={{ color: tx.isPos ? 'var(--success-color)' : 'var(--text-color)' }}>
                                        {tx.isPos ? '+' : '-'} {formatCurrency(tx.amount)}
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Transfer Actions */}
                <div style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '15px',
                    padding: '30px',
                    height: 'fit-content'
                }}>
                    <h3 style={{ marginTop: 0, fontWeight: 600, borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', marginBottom: '20px' }}>Quick Transfer</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', color: '#ccc' }}>Recipient Account / Name</label>
                        <input
                            type="text"
                            placeholder="Enter name or number"
                            value={recipient}
                            onChange={(e) => setRecipient(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', color: '#ccc' }}>Amount ($)</label>
                        <input
                            type="number"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            style={inputStyle}
                        />
                    </div>
                    <button
                        onClick={handleTransfer}
                        disabled={isProcessing}
                        style={{
                            width: '100%',
                            padding: '15px',
                            background: 'var(--accent-color)',
                            color: '#000',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            cursor: isProcessing ? 'default' : 'pointer',
                            textTransform: 'uppercase',
                            transition: '0.3s',
                            opacity: isProcessing ? 0.7 : 1
                        }}
                    >
                        {isProcessing ? 'Processing...' : 'Send Funds'}
                    </button>
                    <p style={{ fontSize: '0.8rem', marginTop: '15px', color: statusColor, textAlign: 'center', height: '1.2em' }}>{statusMsg}</p>
                </div>

            </div>
        </div>
    );
};

const Th = ({ children, align = 'left' }: any) => (
    <th style={{ textAlign: align as any, padding: '15px 0', color: '#888', fontWeight: 400, textTransform: 'uppercase', fontSize: '0.75rem', borderBottom: '1px solid var(--glass-border)' }}>{children}</th>
);

const Td = ({ children, align = 'left', style = {} }: any) => (
    <td style={{ padding: '20px 0', borderBottom: '1px solid var(--glass-border)', textAlign: align as any, ...style }}>{children}</td>
);

const inputStyle = {
    width: '100%',
    padding: '12px',
    background: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid var(--glass-border)',
    borderRadius: '8px',
    color: 'white',
    boxSizing: 'border-box' as const,
    outline: 'none',
    fontFamily: 'inherit'
};

export default AccountDetails;
