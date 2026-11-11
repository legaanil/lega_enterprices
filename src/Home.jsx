import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "./Masonry.jsx";
import { wa, tech, services, more, industries, why, steps, projects, tours, stats, faqs, site } from "./data.jsx";
import { setMeta } from "./meta.js";

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1200, 1);
        setV(Math.round(to * k));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{v}{suffix}</b>;
}

function Chip({ type = "checkbox", name, value, checked, onChange, children }) {
  return (
    <label>
      <input type={type} name={name} value={value} checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  );
}

function LeadForm() {
  const [types, setTypes] = useState([]);
  const toggle = (v) => setTypes((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const t = `Hi Lega Enterprises,
Name: ${f.get("name")}
Phone: ${f.get("phone")}
Project: ${types.join(", ") || "-"}
Budget: ${f.get("budget")}
${f.get("msg") || ""}`;
    window.open(wa(t), "_blank", "noopener");
  };
  return (
    <form className="form-card" onSubmit={submit}>
      <div className="row2">
        <div className="field"><label className="l" htmlFor="n">Your name</label><input id="n" name="name" type="text" required autoComplete="name" /></div>
        <div className="field"><label className="l" htmlFor="p">Phone number</label><input id="p" name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9+ ]{10,15}" /></div>
      </div>
      <fieldset>
        <legend>What do you need?</legend>
        <div className="chips">
          {["Website", "Online store", "Mobile app", "3D video", "Upgrade", "Not sure"].map((o) => <Chip key={o} name="type" value={o} checked={types.includes(o)} onChange={() => toggle(o)}>{o}</Chip>)}
        </div>
      </fieldset>
      <div className="field"><label className="l" htmlFor="b">Estimated budget</label>
        <select id="b" name="budget"><option>Not sure yet</option><option>Under ₹25,000</option><option>₹25,000 – ₹75,000</option><option>₹75,000 – ₹2,00,000</option><option>₹2,00,000+</option></select></div>
      <div className="field"><label className="l" htmlFor="m">Anything else? (optional)</label><textarea id="m" name="msg" rows="3" /></div>
      <button className="btn btn-saf btn-lg">Send on WhatsApp &rarr;</button>
      {site.email && <p className="alt-contact">Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a></p>}
    </form>
  );
}

function Work() {
  return (
    <section id="work" className="work-sec">
      <div className="wrap">
        <div className="head" style={{ marginBottom: 28 }}>
          <div><p className="eyebrow">Our clients</p><h2>Products we have shipped.</h2></div>
        </div>
        <div className="work">
          {projects.map((p) => (
            <article className="proj" key={p.name}>
              <div className="body">
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <a className="btn btn-line" href={p.url} target="_blank" rel="noopener noreferrer">{p.cta}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => setMeta({ title: "Lega Enterprises | Website & Mobile App Development Company in Jodhpur", description: "Lega Enterprises builds custom websites, mobile apps and 3D walkthrough videos for growing businesses in Jodhpur and across India. Get a free consultation.", path: "/" }), []);
  return (
    <main id="top">
      <section className="hero">
        <Masonry />
        <div className="wrap">
          <div className="hero-copy">
            <h1>Websites &amp; mobile apps for businesses that are <em>ready to grow.</em></h1>
            <p className="lead">We design and build custom websites, Android and iOS apps, and 3D walkthrough videos. One small team in Jodhpur, one person to talk to, and you own everything we build.</p>
            <div className="cta">
              <a className="btn btn-saf" href={wa("Hi Lega Enterprises, I want a free consultation.")} target="_blank" rel="noopener noreferrer">Get a free consultation</a>
              <a className="btn btn-line" href="#work">See our work</a>
            </div>
            <ul><li>Reply on WhatsApp</li><li>Fixed scope, no surprises</li><li>You own the code</li></ul>
          </div>
          <div className="techbar" aria-label="Technologies we build with">
            <span className="tb-label">Technologies we use to build scalable solutions</span>
            <div className="tb-view"><div className="track">
              {[...tech, ...tech].map((t, i) => <span key={i} aria-hidden={i >= tech.length}>{t}</span>)}
            </div></div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="head">
            <div><p className="eyebrow">Services</p><h2>Three things, done properly.</h2></div>
            <p className="lead">Pick one, or let us handle all of it. Every project starts with a short call and a written scope.</p>
          </div>
          <div className="svc">
            {services.map((s, i) => (
              <article className="card" key={s.slug}>
                <div className="n">0{i + 1}</div>
                <h3><Link to={`/services/${s.slug}`} style={{ textDecoration: "none" }}>{s.title} &rarr;</Link></h3>
                <p>{s.blurb}</p>
                <ul>{s.list.map((l) => <li key={l}>{l}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="more">
            <h3>Also available</h3>
            <ul>{more.map(([b, d]) => <li key={b}><b>{b}</b> {d}</li>)}</ul>
          </div>
        </div>
      </section>

      <section id="industries" className="alt">
        <div className="wrap">
          <div className="head">
            <div><p className="eyebrow">Industries</p><h2>Built around how your business works.</h2></div>
            <p className="lead">Local shops to growing companies. These are the sectors we get asked about most.</p>
          </div>
          <ul className="ind">{industries.map(([b, d]) => <li key={b}><b>{b}</b>{d}</li>)}</ul>
        </div>
      </section>

      <section id="walkthroughs" className="dark">
        <div className="wrap">
          <div className="head">
            <div><p className="eyebrow">3D walkthrough videos</p><h2>Show the place before it exists.</h2></div>
            <p className="lead">Cinematic 3D motion videos for hospitals, real estate projects, factories and workshops. Embedded on your website, ready for WhatsApp and social.</p>
          </div>
          <div className="tour">
            {tours.map(([t, s, art], i) => (
              <div className="tile" key={t}>
                <img src={`/img/${["hospital", "realestate", "factory", "hotel"][i]}.jpg`} alt="" loading="lazy" />
                <span>{t}<small>{s}</small></span>
              </div>
            ))}
          </div>
          <div className="cta" style={{ marginTop: 36 }}>
            <a className="btn btn-saf" href={wa("Hi, I need a 3D walkthrough video.")} target="_blank" rel="noopener noreferrer">Ask about a 3D video</a>
          </div>
        </div>
      </section>

      <Work />

      <div className="stats">
        <div className="wrap">
          {stats.map(([n, s, label]) => <div key={label}><Counter to={n} suffix={s} /><span>{label}</span></div>)}
        </div>
      </div>

      <section id="about" className="alt">
        <div className="wrap">
          <div className="head">
            <div><p className="eyebrow">About Lega</p><h2>Clear talk. Clean code. Your property.</h2></div>
            <p className="lead">Lega Enterprises is a small web and app studio in Jodhpur, Rajasthan. We build websites, mobile apps and 3D walkthrough videos for businesses here and across India.</p>
          </div>
          <div className="why">{why.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
          {site.team.length > 0 && (
            <div className="team">
              {site.team.map((m) => (
                <div className="member" key={m.name}>
                  {m.photo && <img src={m.photo} alt={m.name} width="96" height="96" loading="lazy" />}
                  <b>{m.name}</b><span>{m.role}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {site.reviews.length > 0 && (
        <section id="reviews">
          <div className="wrap">
            <div className="head"><div><p className="eyebrow">Clients</p><h2>What clients say.</h2></div></div>
            <div className="reviews">
              {site.reviews.map((r) => (
                <figure className="review" key={r.name}>
                  <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption><b>{r.name}</b>, {r.role}, {r.business}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="process">
        <div className="wrap">
          <div className="head"><div><p className="eyebrow">How we work</p><h2>Four steps, no mystery.</h2></div></div>
          <div className="steps">{steps.map(([h, p]) => <div className="step" key={h}><h3>{h}</h3><p>{p}</p></div>)}</div>
        </div>
      </section>

      <section id="contact" className="contact alt">
        <div className="wrap contact-grid">
          <aside className="contact-info">
            <p className="eyebrow">Contact</p>
            <h2>Let&rsquo;s talk about your project.</h2>
            <p className="lead">Tell us what you need. We call you back within a working day.</p>
            <ul className="c-list">
              <li><span>Call</span><a href="tel:+918302752145">+91 83027 52145</a></li>
              <li><span>WhatsApp</span><a href={wa("Hi Lega Enterprises")} target="_blank" rel="noopener noreferrer">Chat with us</a></li>
              <li><span>Visit</span><address>270B, Street No. 30, BJS Colony, Jodhpur, Rajasthan 342006</address></li>
            </ul>
            <h4>What happens next</h4>
            <ol className="next">
              <li>We read your message</li>
              <li>We call you within a working day</li>
              <li>You get a written scope and timeline</li>
            </ol>
          </aside>
          <LeadForm />
        </div>
      </section>

      <section id="faq">
        <div className="wrap faq">
          <p className="eyebrow">Questions</p>
          <h2 style={{ marginBottom: 28 }}>Before you hire us.</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>
    </main>
  );
}
