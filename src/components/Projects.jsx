import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Global SaaS Launch',
            category: 'Marketing Campaign',
            description: 'Led the go-to-market strategy for a new enterprise SaaS product, resulting in 500+ qualified leads in the first month.',
            tags: ['Strategy', 'PPC', 'Content']
        },
        {
            title: 'Tech Conference 2024',
            category: 'Event Marketing',
            description: 'Managed digital promotion for a major tech conference, increasing attendance by 40% YoY through targeted social ads.',
            tags: ['Social Media', 'Email Marketing']
        },
        {
            title: 'E-commerce Redesign',
            category: 'Web Development',
            description: 'Redesigned the checkout flow for a D2C brand, improving conversion rates by 15% and reducing cart abandonment.',
            tags: ['UX/UI', 'React', 'Shopify']
        }
    ];

    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: 'var(--color-text-primary)'
                }}>
                    Featured Projects
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'var(--color-bg-primary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-lg)',
                                padding: '2rem',
                                transition: 'transform 0.2s, border-color 0.2s',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--color-border)';
                            }}
                        >
                            <div style={{
                                fontSize: '0.875rem',
                                color: 'var(--color-accent-primary)',
                                fontWeight: '600',
                                marginBottom: '0.5rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                {project.category}
                            </div>
                            <h3 style={{
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                                marginBottom: '1rem',
                                color: 'var(--color-text-primary)'
                            }}>
                                {project.title}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-secondary)',
                                marginBottom: '1.5rem',
                                lineHeight: 1.6
                            }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-text-tertiary)',
                                        backgroundColor: 'var(--color-bg-tertiary)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: 'var(--radius-sm)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
