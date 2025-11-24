import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-primary)'
        }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
                    &copy; {new Date().getFullYear()} Chase Addison. All rights reserved.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}>Twitter</a>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'var(--color-text-secondary)' }}>GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
