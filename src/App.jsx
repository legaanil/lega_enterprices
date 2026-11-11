import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home.jsx";
import Service from "./Service.jsx";
import { Privacy, NotFound } from "./Pages.jsx";
import { site } from "./data.jsx";

const nav = [["services", "Services"], ["industries", "Industries"], ["walkthroughs", "3D Walkthroughs"], ["work", "Work"], ["about", "About"], ["faq", "FAQ"]];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header>
      <div className={"wrap nav" + (scrolled ? " scrolled" : "")}>
        <Link className="logo" to="/" aria-label="Lega Enterprises home">
          <img src="/logo-mark.svg" alt="" width="34" height="40" />
          <span><b>Lega</b><small>ENTERPRISES</small></span>
        </Link>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span></span></button>
        <nav className={"menu" + (open ? " open" : "")} onClick={() => setOpen(false)}>
          {nav.map(([id, label]) => <Link key={id} to={{ pathname: "/", hash: id }}>{label}</Link>)}
          <Link className="btn btn-saf" to={{ pathname: "/", hash: "contact" }}>Get a quote &rarr;</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <div>
            <Link className="logo" to="/"><img src="/favicon.svg" alt="" width="40" height="40" /><span><b style={{ color: "#fff" }}>Lega</b><small>ENTERPRISES</small></span></Link>
            <p style={{ marginTop: 16, maxWidth: "34ch" }}>Websites, mobile apps and 3D walkthroughs for growing businesses.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to={{ pathname: "/", hash: "industries" }}>Industries</Link></li>
              <li><Link to={{ pathname: "/", hash: "walkthroughs" }}>3D walkthroughs</Link></li>
              <li><Link to={{ pathname: "/", hash: "work" }}>Our clients</Link></li>
              <li><Link to={{ pathname: "/", hash: "about" }}>About</Link></li>
              <li><Link to={{ pathname: "/", hash: "faq" }}>FAQ</Link></li>
              <li><Link to={{ pathname: "/", hash: "contact" }}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/web">Web development</Link></li>
              <li><Link to="/services/mobile">Mobile apps</Link></li>
              <li><Link to="/services/maintenance">Upgrades &amp; maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit &amp; call</h4>
            <address style={{ fontStyle: "normal" }}>270B, Street No. 30, BJS Colony,<br />Jodhpur, Rajasthan 342006<br />
              <a href="tel:+918302752145">+91 83027 52145</a> &middot; <a href="https://wa.me/918302752145" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              {site.email && <><br /><a href={`mailto:${site.email}`}>{site.email}</a></>}
              {site.hours && <><br />{site.hours}</>}</address>
            {Object.values(site.social).some(Boolean) && (
              <p className="social">{Object.entries(site.social).filter(([, u]) => u).map(([n, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer">{n}</a>)}</p>
            )}
            <iframe className="map" title="Lega Enterprises on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=270B+Street+No+30+BJS+Colony+Jodhpur+342006&output=embed" />
          </div>
        </div>
        <p className="copy">&copy; 2026 Lega Enterprises &middot; legaent.in &middot; <Link to="/privacy">Privacy policy</Link></p>
      </div>
    </footer>
  );
}

function Reveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll("main > section:not(.hero) > .wrap > *, main > .stats .wrap > *").forEach((el, i) => {
      el.classList.add("rv");
      el.style.animationDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Reveal />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<Service />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <a className="wa" href="https://wa.me/918302752145?text=Hi%20Lega%20Enterprises" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.8.9c.3.1.5.2.5.3.1.2.1.8-.2 1.4z" /></svg>
      </a>
    </>
  );
}
