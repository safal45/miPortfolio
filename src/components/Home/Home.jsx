import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";

/* ─── Bulb SVG ─────────────────────────────────────────────── */
function BulbSVG({ isDark }) {
  return (
    <svg width="42" height="68" viewBox="0 0 42 68" fill="none">
      {/* screw base */}
      <rect x="13" y="0"  width="16" height="5" rx="1.5"
        fill={isDark ? "#6b7280" : "#9ca3af"}/>
      <rect x="11" y="5"  width="20" height="4"
        fill={isDark ? "#4b5563" : "#6b7280"}/>
      <rect x="13" y="9"  width="16" height="4"
        fill={isDark ? "#6b7280" : "#9ca3af"}/>
      <rect x="11" y="13" width="20" height="4"
        fill={isDark ? "#4b5563" : "#6b7280"}/>
      {/* glass */}
      <path
        d="M13 17 L13 23 C13 31 2 37 2 49 C2 61 10 68 21 68 C32 68 40 61 40 49 C40 37 29 31 29 23 L29 17 Z"
        fill={isDark ? "rgba(200,220,255,0.05)" : "rgba(255,235,140,0.78)"}
        stroke={isDark ? "rgba(200,220,255,0.2)" : "rgba(255,185,0,0.85)"}
        strokeWidth="1.5"
        style={!isDark ? { filter: "drop-shadow(0 0 10px rgba(255,200,0,0.65))" } : {}}
      />
      {!isDark && (
        <ellipse cx="21" cy="50" rx="13" ry="15"
          fill="rgba(255,230,100,0.2)"/>
      )}
      {/* filament */}
      <path d="M15 45 Q18 36 21 45 Q24 36 27 45"
        stroke={isDark ? "#374151" : "#d97706"}
        strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

/* ─── Hanging bulb (inline, above photo) ───────────────────── */
function HangingBulb() {
  const { isDark, toggle } = useTheme();
  const [pulling, setPulling] = useState(false);

  const click = () => {
    if (pulling) return;
    setPulling(true);
    setTimeout(() => { toggle(); setPulling(false); }, 500);
  };

  return (
    <div
      onClick={click}
      title={isDark ? "Turn light on" : "Turn light off"}
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        transformOrigin: "top center",
        animation: pulling
          ? "pullBulb 0.7s cubic-bezier(0.22,1,0.36,1) forwards"
          : "gentleSwing 3.8s ease-in-out infinite",
        cursor: "pointer",
        userSelect: "none",
        flexShrink: 0,
      }}
    >
      {/* rope */}
      <div style={{
        width: 2, height: 72,
        background: "linear-gradient(to bottom, rgba(80,80,80,0.3), #5b6472)",
        borderRadius: 1,
      }}/>
      {/* glow */}
      <div style={{ position: "relative" }}>
        {!isDark && (
          <div style={{
            position: "absolute", top: "55%", left: "50%",
            transform: "translateX(-50%)",
            width: 120, height: 120, borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,220,80,0.4) 0%,transparent 72%)",
            filter: "blur(12px)", pointerEvents: "none",
            animation: "glowPulse 2.2s ease-in-out infinite",
          }}/>
        )}
        <BulbSVG isDark={isDark}/>
      </div>
      <span style={{
        marginTop: 5, fontFamily: "monospace", fontSize: 7,
        letterSpacing: "0.14em",
        color: isDark ? "rgba(168,85,247,0.45)" : "rgba(217,119,6,0.7)",
      }}>{isDark ? "DARK" : "LIGHT"}</span>
    </div>
  );
}

const TECH = [
  { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg" },
  { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/html5/html5-original.svg" },
  { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/css3/css3-original.svg" },
  { name: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/python/python-original.svg" },
  { name: "Flask",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/flask/flask-original.svg" },
  { name: "Django",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/django/django-plain.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg" },
  { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/safal45/", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.441c-3.163 0-3.535.012-4.787.069-2.877.131-4.214 1.47-4.345 4.345-.057 1.252-.07 1.623-.07 4.787 0 3.163.013 3.535.07 4.787.131 2.873 1.466 4.214 4.345 4.345 1.252.057 1.623.07 4.787.07 3.164 0 3.535-.013 4.788-.07 2.873-.131 4.214-1.467 4.345-4.345.057-1.252.07-1.624.07-4.787 0-3.164-.013-3.535-.07-4.787-.131-2.878-1.473-4.214-4.345-4.345-1.253-.057-1.624-.069-4.788-.069zm0 2.441a5.955 5.955 0 100 11.91 5.955 5.955 0 000-11.91zm0 9.824a3.869 3.869 0 110-7.738 3.869 3.869 0 010 7.738zm6.162-10.063a1.392 1.392 0 100 2.784 1.392 1.392 0 000-2.784z", vb: "0 0 24 24" },
  { href: "https://www.linkedin.com/in/safal-pathak/", d: "M9 4C6.25 4 4 6.25 4 9v32c0 2.75 2.25 5 5 5h32c2.75 0 5-2.25 5-5V9c0-2.75-2.25-5-5-5H9zm5 7c2.27 0 3.99 1.52 3.99 3.47C17.99 16.4 16.27 18 14 18c-2.27 0-3.99-1.6-3.99-3.53C10.01 12.52 11.73 11 14 11zm-3.5 9.5h7v17h-7v-17zm11 0h6.5v2.3h.1c.9-1.7 3.1-3.5 6.4-3.5 6.8 0 8 4.5 8 10.3V37h-7v-6.7c0-2.5-.05-5.8-3.5-5.8-3.5 0-4 2.7-4 5.6V37h-6.5V20.5z", vb: "0 0 50 50" },
  { href: "https://github.com/safal45", d: "M10.9 2C6.3 2 2.6 5.7 2.6 10.3c0 3.7 2.4 6.8 5.7 7.9.4.1.5-.2.5-.4 0-.2 0-.8 0-1.6-2.3.5-2.8-1-2.8-1-.4-.9-.8-1.3-.8-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2 1 2.5.8.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.3-1.2.2-2.5 0 0 .7-.2 2.3.8.7-.2 1.5-.3 2.3-.3.8 0 1.6.1 2.3.3 1.6-1 2.3-.8 2.3-.8.5 1.3.3 2.3.2 2.5.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.3.6.9.6 1.8 0 1.3 0 2.3 0 2.6 0 .2.2.5.6.4 3.3-1.1 5.7-4.2 5.7-7.9C19.2 5.7 15.5 2 10.9 2z", vb: "0 0 24 24" },
  { href: "mailto:ptksafalpathak@gmail.com", d: "M20 4H4c-.8 0-1.4.65-1.4 1.45v13.1C2.6 19.35 3.25 20 4.05 20h15.9c.8 0 1.45-.65 1.45-1.45V5.45C21.4 4.65 20.75 4 19.95 4zM18.8 8.4l-6.09 3.8c-.21.13-.45.2-.71.2s-.5-.07-.71-.2L5.2 8.4C5.07 8.32 5 8.18 5 8.03c0-.25.2-.45.45-.45h13.1c.25 0 .45.2.45.45 0 .15-.07.29-.2.37z", vb: "0 0 24 24" },
];

/* ─── Home ──────────────────────────────────────────────────── */
export default function Home() {
  const { isDark } = useTheme();

  const bg      = isDark ? "#000"    : "#f5f3ff";
  const textPri = isDark ? "#f1f5f9" : "#1e1b4b";
  const textSec = isDark ? "#c4cdd8" : "#4c1d95";
  const accent  = isDark ? "#a855f7" : "#7c3aed";
  const accent2 = isDark ? "#6d28d9" : "#a855f7";
  const iconClr = isDark ? "#6b7280" : "#7c3aed";
  const gridLn  = isDark ? "rgba(168,85,247,0.06)" : "rgba(109,40,217,0.05)";
  const marqueeBorder = isDark ? "rgba(168,85,247,0.14)" : "rgba(109,40,217,0.14)";

  return (
    <section
      id="home"
      style={{
        height: "100vh",
        background: bg,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.4s ease",
      }}
    >
      {/* grid texture */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${gridLn} 1px, transparent 1px), linear-gradient(90deg, ${gridLn} 1px, transparent 1px)`,
        backgroundSize: "44px 44px",
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 0%, transparent 80%)",
      }}/>

      {/* ambient blobs */}
      <div style={{
        position: "absolute", top: "8%", right: "8%",
        width: 460, height: 460, borderRadius: "50%",
        background: `radial-gradient(circle,${isDark?"rgba(168,85,247,0.08)":"rgba(109,40,217,0.06)"} 0%,transparent 70%)`,
        filter: "blur(70px)", pointerEvents: "none",
        animation: "floatBlob 9s ease-in-out infinite",
      }}/>
      <div style={{
        position: "absolute", bottom: "6%", left: "6%",
        width: 380, height: 380, borderRadius: "50%",
        background: `radial-gradient(circle,${isDark?"rgba(109,40,217,0.09)":"rgba(168,85,247,0.06)"} 0%,transparent 70%)`,
        filter: "blur(60px)", pointerEvents: "none",
        animation: "floatBlob 11s ease-in-out infinite reverse",
      }}/>

      {/* giant watermark */}
      <h2 aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Anton', sans-serif",
        fontSize: "clamp(120px, 22vw, 300px)",
        letterSpacing: "0.02em",
        margin: 0, whiteSpace: "nowrap",
        color: "transparent",
        WebkitTextStroke: `1.5px ${isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.07)"}`,
        pointerEvents: "none",
        userSelect: "none",
      }}>SAFAL</h2>

      {/* header spacer */}
      <div style={{ height: 64, flexShrink: 0 }}/>

      {/* bulb: hangs in the top-left corner */}
      <div style={{
        position: "absolute", top: 64, left: "2cm",
        zIndex: 2,
        animation: "fadeUp 0.6s ease-out both",
      }}>
        <HangingBulb/>
      </div>

      {/* ── Main centered content ── */}
      <div style={{
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 1,
        padding: "0 24px",
        minHeight: 0,
      }}>
        {/* typewriter */}
        <div style={{
          fontFamily: "monospace", fontWeight: 800,
          fontSize: "clamp(16px, 2.4vw, 24px)",
          color: textPri, marginTop: 6, marginBottom: 8,
          animation: "fadeUp 0.6s ease-out 0.05s both",
        }}>
          <Typewriter options={{ strings: ["Hello There!!!", "नमस्ते!!!"], autoStart: true, loop: true }}/>
        </div>

        {/* name */}
        <h1 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(40px, 8vw, 96px)",
          lineHeight: 1, margin: "0 0 14px",
          textAlign: "center",
          animation: "fadeUp 0.6s ease-out 0.12s both",
        }}>
          <span style={{ color: textPri }}>I AM </span>
          <span style={{
            backgroundImage: `linear-gradient(90deg, ${accent}, ${accent2}, ${accent})`,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: "gradientFlow 4s linear infinite alternate",
          }}>SAFAL PATHAK</span>
        </h1>

        {/* sub-label */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          margin: "0 0 18px",
          animation: "fadeUp 0.6s ease-out 0.18s both",
        }}>
          <span style={{ width: 28, height: 1, background: accent, opacity: 0.5 }}/>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            fontFamily: "monospace", fontSize: 11,
            color: accent, letterSpacing: "0.22em", opacity: 0.9,
          }}>
            <span className="animate-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: accent }}/>
            FULL STACK DEVELOPER
          </span>
          <span style={{ width: 28, height: 1, background: accent, opacity: 0.5 }}/>
        </div>

        {/* bio */}
        <p style={{
          color: textSec,
          fontSize: "clamp(13px, 1.3vw, 15px)",
          lineHeight: 1.85,
          maxWidth: 600,
          textAlign: "center",
          marginBottom: 30,
          animation: "fadeUp 0.6s ease-out 0.24s both",
        }}>
          Full Stack Developer graduating May&nbsp;2026 — building production-grade
          apps with React.js, Flask, Django&nbsp;&amp;&nbsp;PostgreSQL. JWT auth,
          3-role RBAC, 250+&nbsp;DSA solved. Open source contributor
          (GSSOC&nbsp;2024).&nbsp;🚀
        </p>

        {/* CTA row */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 18, flexWrap: "wrap",
          marginBottom: 36,
          animation: "fadeUp 0.6s ease-out 0.3s both",
        }}>
          <a
            href="https://drive.google.com/file/d/1oAHyFm8IRIgsXQSicedBiBNh1i-Ft9vV/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "11px 28px", borderRadius: 999,
              background: accent, color: "#fff",
              fontFamily: "'Anton', sans-serif", fontSize: 13,
              letterSpacing: "0.1em", textDecoration: "none",
              boxShadow: `0 0 24px ${isDark?"rgba(168,85,247,0.4)":"rgba(109,40,217,0.3)"}`,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <svg style={{ width: 14, height: 14, fill: "#fff" }} viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
            </svg>
            RESUME
          </a>

          {/* social icons */}
          {SOCIALS.map(({ href, d, vb }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: iconClr, transition: "color 0.2s", display: "flex" }}
              onMouseEnter={e => e.currentTarget.style.color = accent}
              onMouseLeave={e => e.currentTarget.style.color = iconClr}
            >
              <svg style={{ width: 22, height: 22 }} fill="currentColor" viewBox={vb}>
                <path d={d} fillRule="evenodd" clipRule="evenodd"/>
              </svg>
            </a>
          ))}
        </div>

        {/* tech marquee */}
        <div style={{
          width: "100%", maxWidth: 760,
          borderTop: `1px solid ${marqueeBorder}`,
          paddingTop: 18,
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          animation: "fadeUp 0.6s ease-out 0.36s both",
        }}>
          <div style={{
            display: "flex", gap: 36, width: "max-content",
            animation: "marquee 22s linear infinite",
          }}>
            {[...TECH, ...TECH].map(({ name, icon }, i) => (
              <span key={i} style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "monospace", fontSize: 12,
                color: textSec, opacity: 0.8, whiteSpace: "nowrap",
              }}>
                <img src={icon} alt="" width="16" height="16" style={{ display: "block" }}/>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
