const B = "#1F5AA6", S = "#F2A93B", N = "#0F1C33", K = "#F3F7FC", L = "#cfd9e8", D = "#1b2f55";

const Notch = ({ c = N }) => <rect x="72" y="8" width="56" height="9" rx="4.5" fill={c} />;

const kinds = {
  phoneDark: { h: 380, r: 24, bg: N, art: <>
    <Notch c="#000" />
    <rect x="16" y="36" width="90" height="12" rx="4" fill="#fff" /><rect x="16" y="56" width="60" height="8" rx="4" fill="#5b7bb0" />
    <rect x="16" y="80" width="82" height="60" rx="12" fill={D} /><rect x="102" y="80" width="82" height="60" rx="12" fill={D} />
    <circle className="dot" cx="38" cy="102" r="10" fill={S} /><rect x="26" y="120" width="50" height="7" rx="3" fill="#8fa8d0" />
    <circle className="dot" cx="124" cy="102" r="10" fill={B} /><rect x="112" y="120" width="50" height="7" rx="3" fill="#8fa8d0" />
    <rect x="16" y="156" width="168" height="40" rx="12" fill={D} /><rect x="16" y="204" width="168" height="40" rx="12" fill={D} /><rect x="16" y="252" width="168" height="40" rx="12" fill={D} />
    <rect x="28" y="170" width="70" height="7" rx="3" fill="#fff" /><rect x="28" y="218" width="90" height="7" rx="3" fill="#fff" /><rect x="28" y="266" width="60" height="7" rx="3" fill="#fff" />
    <rect className="grow-x" x="16" y="316" width="168" height="40" rx="20" fill={B} /></> },
  phoneBlue: { h: 350, r: 24, bg: B, art: <>
    <Notch c="#fff" />
    <rect x="16" y="40" width="120" height="14" rx="5" fill="#fff" /><rect x="16" y="62" width="80" height="14" rx="5" fill="#9cc0ee" />
    <rect x="16" y="94" width="168" height="110" rx="14" fill="#fff" />
    <rect className="float" x="28" y="108" width="70" height="10" rx="4" fill={N} /><rect x="28" y="128" width="110" height="7" rx="3" fill={L} /><rect x="28" y="142" width="90" height="7" rx="3" fill={L} />
    <circle className="dot" cx="156" cy="120" r="14" fill={S} />
    <rect x="28" y="166" width="144" height="24" rx="8" fill={K} />
    <rect x="16" y="218" width="80" height="60" rx="12" fill="#2f6dbd" /><rect x="104" y="218" width="80" height="60" rx="12" fill="#2f6dbd" />
    <rect className="grow-x" x="16" y="296" width="168" height="38" rx="19" fill="#fff" /></> },
  phoneLight: { h: 410, r: 24, bg: "#fff", art: <>
    <Notch />
    <rect x="16" y="36" width="100" height="12" rx="4" fill={N} /><circle cx="170" cy="42" r="12" fill={S} />
    <rect x="16" y="64" width="52" height="34" rx="9" fill={L} /><rect x="74" y="64" width="52" height="34" rx="9" fill={B} /><rect x="132" y="64" width="52" height="34" rx="9" fill={K} />
    <rect x="16" y="112" width="168" height="110" rx="14" fill={K} />
    <rect className="bar" x="34" y="170" width="16" height="40" rx="3" fill={L} /><rect className="bar" x="62" y="148" width="16" height="62" rx="3" fill={B} /><rect className="bar" x="90" y="160" width="16" height="50" rx="3" fill={L} /><rect className="bar" x="118" y="132" width="16" height="78" rx="3" fill={B} /><rect className="bar" x="146" y="152" width="16" height="58" rx="3" fill={B} />
    <rect x="16" y="238" width="168" height="38" rx="10" fill={K} /><rect x="16" y="284" width="168" height="38" rx="10" fill={K} /><rect x="16" y="330" width="168" height="38" rx="10" fill={K} />
    <circle cx="36" cy="257" r="9" fill={B} /><circle cx="36" cy="303" r="9" fill={S} /><circle cx="36" cy="349" r="9" fill={N} />
    <rect x="54" y="253" width="80" height="7" rx="3" fill={N} /><rect x="54" y="299" width="64" height="7" rx="3" fill={N} /><rect x="54" y="345" width="90" height="7" rx="3" fill={N} /></> },
  phoneShop: { h: 340, r: 24, bg: K, art: <>
    <Notch />
    <rect x="16" y="36" width="168" height="26" rx="13" fill="#fff" />
    <rect x="16" y="76" width="80" height="96" rx="12" fill="#fff" /><rect x="104" y="76" width="80" height="96" rx="12" fill="#fff" />
    <circle className="dot" cx="56" cy="110" r="20" fill={S} /><circle className="dot" cx="144" cy="110" r="20" fill={B} />
    <rect x="26" y="142" width="50" height="7" rx="3" fill={N} /><rect x="114" y="142" width="50" height="7" rx="3" fill={N} /><rect x="26" y="156" width="28" height="7" rx="3" fill={B} /><rect x="114" y="156" width="28" height="7" rx="3" fill={B} />
    <rect x="16" y="184" width="80" height="96" rx="12" fill="#fff" /><rect x="104" y="184" width="80" height="96" rx="12" fill="#fff" />
    <rect x="30" y="198" width="52" height="46" rx="8" fill={L} /><rect x="118" y="198" width="52" height="46" rx="8" fill={L} />
    <rect className="grow-x" x="16" y="294" width="168" height="30" rx="15" fill={B} /></> },
  panelCal: { h: 190, r: 16, bg: "#fff", art: <>
    <rect x="14" y="14" width="80" height="10" rx="4" fill={N} />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => <circle key={"a" + i} cx={22 + i * 26} cy="50" r="9" fill={i === 3 ? S : K} />)}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => <circle key={"b" + i} cx={22 + i * 26} cy="82" r="9" fill={i === 5 ? B : K} />)}
    <rect x="14" y="108" width="172" height="30" rx="9" fill={K} /><rect className="grow-x" x="14" y="148" width="172" height="28" rx="14" fill={B} /></> },
  panelTour: { h: 220, r: 16, bg: N, art: <g className="spin" fill="none" stroke="#3a5a8f" strokeWidth="1.5">
    <path d="M30 150l70 35 70-35V80l-70-35-70 35z" /><path d="M100 45v140M30 80l70 35 70-35" /><path d="M80 60V30h40v30" stroke={S} /><circle cx="100" cy="115" r="6" fill={S} stroke="none" /></g> },
  panelSaf: { h: 160, r: 16, bg: "#fff", art: <>
    <rect x="16" y="20" width="110" height="16" rx="5" fill={N} /><rect x="16" y="44" width="80" height="16" rx="5" fill={B} />
    <rect x="16" y="76" width="140" height="7" rx="3" fill={L} /><rect x="16" y="90" width="110" height="7" rx="3" fill={L} />
    <rect className="grow-x" x="16" y="114" width="90" height="28" rx="14" fill={B} /><circle className="dot" cx="164" cy="42" r="9" fill={S} /></> },
};

const order = ["phoneDark", "panelCal", "phoneLight", "panelSaf", "phoneBlue", "panelTour", "phoneShop"];
const take = (start) => Array.from({ length: 8 }, (_, i) => order[(start + i * 3) % order.length]);

const cols = [
  { dir: "up", dur: 70, delay: 0 }, { dir: "down", dur: 78, delay: 21 }, { dir: "up", dur: 84, delay: 40 }, { dir: "down", dur: 72, delay: 13 },
  { dir: "up", dur: 80, delay: 33 }, { dir: "down", dur: 76, delay: 5 }, { dir: "up", dur: 88, delay: 27 },
].map((c, i) => ({ ...c, cards: take(i) }));

export default function Masonry() {
  return (
    <div className="masonry-wrap" aria-hidden="true">
      <div className="masonry-stage">
        {cols.map((c, i) => (
          <div className="m-col" key={i}>
            <div className={"m-inner m-" + c.dir} style={{ animationDuration: c.dur + "s", animationDelay: -c.delay + "s" }}>
              {[...c.cards, ...c.cards].map((k, j) => (
                <div className="m-card" key={j} style={{ aspectRatio: `200 / ${kinds[k].h}`, background: kinds[k].bg, borderRadius: kinds[k].r }}>
                  <svg viewBox={`0 0 200 ${kinds[k].h}`}>{kinds[k].art}</svg>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
