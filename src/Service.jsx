import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { servicePages, steps, wa } from "./data.jsx";
import { setMeta } from "./meta.js";
import { NotFound } from "./Pages.jsx";

export default function Service() {
  const { slug } = useParams();
  const p = servicePages[slug];
  useEffect(() => {
    if (p) setMeta({ title: `${p.title} | Lega Enterprises`, description: p.description, path: `/services/${slug}` });
  }, [p, slug]);
  if (!p) return <NotFound />;
  return (
    <main>
      <section className="hero" style={{ padding: "128px 0 72px" }}>
        <div className="wrap">
          <div className="hero-copy" style={{ maxWidth: 760 }}>
            <p className="eyebrow">{p.eyebrow} &middot; Jodhpur</p>
            <h1>{p.h}</h1>
            <p className="lead">{p.lead}</p>
            <div className="cta">
              <a className="btn btn-saf" href={wa(`Hi Lega Enterprises, I need ${slug} help.`)} target="_blank" rel="noopener noreferrer">Get a free consultation</a>
              <Link className="btn btn-line" to={{ pathname: "/", hash: "contact" }}>Send an enquiry</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">What is included</p>
          <h2 style={{ marginBottom: 36 }}>What you get.</h2>
          <div className="svc" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {p.items.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap two">
          <div><p className="eyebrow">Who it is for</p><h2>Built for your kind of business.</h2></div>
          <div><p className="lead" style={{ marginTop: 0 }}>{p.who}</p><p className="lead">{p.local}</p></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 style={{ marginBottom: 40 }}>Four steps, no mystery.</h2>
          <div className="steps">{steps.map(([h, t]) => <div className="step" key={h}><h3>{h}</h3><p>{t}</p></div>)}</div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap faq">
          <p className="eyebrow">Questions</p>
          <h2 style={{ marginBottom: 28 }}>Common questions.</h2>
          {p.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </div>
      </section>

      <section style={{ paddingTop: 0 }} className="alt">
        <div className="wrap">
          <div className="cta-band">
            <div><h2>Ready to start?</h2><p>Tell us what you need. We reply within a working day.</p></div>
            <a className="btn btn-saf btn-lg" style={{ width: "auto" }} href={wa(`Hi Lega Enterprises, I need ${slug} help.`)} target="_blank" rel="noopener noreferrer">Message us on WhatsApp &rarr;</a>
          </div>
        </div>
      </section>
    </main>
  );
}
