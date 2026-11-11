import { useEffect } from "react";
import { Link } from "react-router-dom";
import { setMeta } from "./meta.js";
import { site } from "./data.jsx";

export function NotFound() {
  useEffect(() => setMeta({ title: "Page not found | Lega Enterprises", description: "This page does not exist.", path: "/404", noindex: true }), []);
  return (
    <section className="hero" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <div className="hero-copy">
          <h1>That page <em>doesn&rsquo;t exist.</em></h1>
          <p className="lead">The link may be old or mistyped. Head back to the homepage or talk to us directly.</p>
          <div className="cta">
            <Link className="btn btn-saf" to="/">Back to homepage</Link>
            <a className="btn btn-line" href="https://wa.me/918302752145" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Privacy() {
  useEffect(() => setMeta({ title: "Privacy Policy | Lega Enterprises", description: "How Lega Enterprises handles the details you share through this website.", path: "/privacy" }), []);
  return (
    <section style={{ paddingTop: 128 }}>
      <div className="wrap faq">
        <p className="eyebrow">Legal</p>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 8 }}>Privacy Policy</h1>
        <p className="lead">Last updated: 11 November 2026</p>
        <div className="prose">
          <h3>Who we are</h3>
          <p>Lega Enterprises, 270B, Street No. 30, BJS Colony, Jodhpur, Rajasthan 342006, India. Phone and WhatsApp: +91 83027 52145.</p>
          <h3>What we collect</h3>
          <p>When you use the contact form, you give us your name, phone number, the type of project you need, your budget range and an optional message. The form does not send this to our servers. It opens WhatsApp with your message ready to send, and the message reaches us only when you press send in WhatsApp.</p>
          <h3>How we use it</h3>
          <p>We use your details only to reply to your enquiry, discuss your project and send a quote. We do not sell your details or share them with advertisers.</p>
          <h3>Third-party services</h3>
          <p>This site loads fonts from Google Fonts and an embedded map from Google Maps, and links to WhatsApp. These services may receive your IP address and device information under their own privacy policies.</p>
          <h3>Your choices</h3>
          <p>You can ask us to delete any enquiry details we hold by contacting us on the number above{site.email ? <> or at <a href={`mailto:${site.email}`}>{site.email}</a></> : null}.</p>
          <h3>Changes</h3>
          <p>We may update this policy and will change the date above when we do.</p>
        </div>
      </div>
    </section>
  );
}
