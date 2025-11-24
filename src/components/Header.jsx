import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '1rem 0',
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(3, 7, 18, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(12px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '-0.025em' }}>
                    Chase Addison
                </a>

                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {['About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                fontSize: '0.875rem',
                                color: 'var(--color-text-secondary)',
                                fontWeight: '500'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
