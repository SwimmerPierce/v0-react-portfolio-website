import React from 'react';

const Technologies = () => {
    const skills = [
        'React', 'JavaScript', 'TypeScript', 'Node.js',
        'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Git',
        'Marketing Automation', 'SEO', 'Analytics', 'Content Strategy'
    ];

    return (
        <section id="technologies" className="section">
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: 'var(--color-text-primary)'
                }}>
                    Technologies & Skills
                </h2>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            style={{
                                backgroundColor: 'var(--color-bg-tertiary)',
                                color: 'var(--color-text-secondary)',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                border: '1px solid var(--color-border)',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.borderColor = 'var(--color-accent-primary)';
                                e.target.style.color = 'var(--color-text-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.borderColor = 'var(--color-border)';
                                e.target.style.color = 'var(--color-text-secondary)';
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
