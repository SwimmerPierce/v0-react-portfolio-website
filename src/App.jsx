import React from 'react';

function App() {
  return (
    <div className="uc-page">
      <div className="uc-glow" aria-hidden="true" />

      <main className="uc-main animate-fade-in">
        <div className="uc-brand">Chase Addison</div>

        <div className="uc-badge">
          <span className="uc-dot" aria-hidden="true" />
          <span>Under Construction</span>
        </div>

        <h1 className="uc-title">
          This site is <span className="text-gradient">under construction.</span>
        </h1>

        <p className="uc-subtitle">
          A new version of this site is currently being built. Please check back soon.
        </p>

        <div className="uc-progress-wrap" aria-label="Site rebuild in progress">
          <div className="uc-progress-track">
            <div className="uc-progress-bar" />
          </div>
          <span className="uc-progress-label">Work in progress</span>
        </div>
      </main>

      <footer className="uc-footer">
        <p>&copy; {new Date().getFullYear()} Chase Addison. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
