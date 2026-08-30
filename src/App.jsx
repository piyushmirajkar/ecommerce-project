import { useState } from 'react'
import Home from './Home'
import Men from './Men'
import Women from './Women'
import Shoes from './Shoes'
import Sales from './Sales'
import About from './About'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'men', label: 'Men' },
  { id: 'women', label: 'Women' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'sales', label: 'Sales' },
  { id: 'about', label: 'About' },
]

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <img
            className="brand-logo"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
            alt="PM storefront logo"
          />
          <span className="brand-name">PM</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button type="button" className="nav-button">Cart (2)</button>
      </header>

      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'men' && <Men setPage={setPage} />}
        {page === 'women' && <Women setPage={setPage} />}
        {page === 'shoes' && <Shoes setPage={setPage} />}
        {page === 'sales' && <Sales setPage={setPage} />}
        {page === 'about' && <About />}
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img
            className="brand-logo"
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80"
            alt="PM storefront logo"
          />
          <span>PM</span>
        </div>
        <p>© 2026 PM Store. All rights reserved.</p>
        <div className="footer-links">
          <span>Shipping</span>
          <span>Returns</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  )
}
