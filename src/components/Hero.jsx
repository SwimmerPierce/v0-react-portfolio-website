import React from 'react';

const Hero = () => {
    return (
        <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
            <div className="container animate-fade-in">
                <h1 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: '800',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.025em',
                    maxWidth: '900px'
                }}>
                    Building digital <br />
                    <span className="text-gradient">experiences that matter.</span>
                </h1>

                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--color-text-secondary)',
                    maxWidth: '600px',
                    marginBottom: '3rem',
                    lineHeight: 1.6
                }}>
                    I'm a B2B Marketing Manager and Web Developer based in San Francisco. I specialize in building high-converting websites and digital campaigns.
                </p>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
