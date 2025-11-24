import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: 'var(--color-text-primary)'
                }}>
                    About Me
                </h2>

                <div className="grid-cols-2">
                    <div>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                            I am a passionate B2B Marketing Manager with a strong technical background in web development. I bridge the gap between marketing strategy and technical implementation.
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.125rem' }}>
                            With experience in both creative campaigns and full-stack development, I build digital experiences that not only look great but also drive real business results.
                        </p>
                    </div>
                    <div style={{
                        backgroundColor: 'var(--color-bg-tertiary)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '2rem',
                        border: '1px solid var(--color-border)'
                    }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>My Approach</h3>
                        <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-accent-primary)' }}>•</span> Data-Driven Strategy
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-accent-primary)' }}>•</span> User-Centric Design
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--color-accent-primary)' }}>•</span> Clean, Scalable Code
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
