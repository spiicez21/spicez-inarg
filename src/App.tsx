import './App.css'

function App() {
  return (
    <div className="dev-page">
      <div className="noise" />

      <div className="grid-lines">
        <div className="gl-h gl-h1"><span className="gl-box"/><span className="gl-box gl-inner"/><span className="gl-box gl-inner"/><span className="gl-box"/></div>
        <div className="gl-h gl-h2"><span className="gl-box"/><span className="gl-box gl-inner"/><span className="gl-box gl-inner"/><span className="gl-box"/></div>
        <div className="gl-v gl-v-left"/>
        <div className="gl-v gl-v-right"/>
      </div>

      <main className="content">
        <div className="logo-wrap">
          <img src="/logopeel.png" alt="Peel" className="peel-logo" />
          <div className="logo-glow" />
        </div>

        <div className="text-block">
          <h1 className="heading">
            Something's <span className="heading-accent">Brewing.</span>
          </h1>
<p className="sub">
            We're crafting something worth the wait — bold, intentional, and built to last. Check back soon.
          </p>
        </div>

        <div className="status-badge">
          <span className="dot" />
          Under Development
        </div>
      </main>

      <footer className="footer">
        <span>© 2026 Spicez Inarg</span>
        <span className="divider">·</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  )
}

export default App
