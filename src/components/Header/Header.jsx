import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

const NAV = [
  { label: "HOME",     id: "home" },
  { label: "ABOUT",    id: "about" },
  { label: "SKILLS",   id: "skills" },
  { label: "PROJECTS", id: "project" },
  { label: "CONTACT",  id: "contactus" },
];

export default function Header() {
  const { isDark } = useTheme();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const headerBg = isDark
    ? (scrolled ? "rgba(0,0,0,0.92)"    : "rgba(0,0,0,0.55)")
    : (scrolled ? "rgba(245,243,255,0.96)" : "rgba(245,243,255,0.75)");
  const headerBorder = scrolled
    ? (isDark ? "1px solid rgba(168,85,247,0.2)" : "1px solid rgba(109,40,217,0.2)")
    : "1px solid transparent";
  const navColor = isDark ? "#9ca3af" : "#6b7280";
  const mobileBg = isDark ? "rgba(4,0,12,0.97)" : "rgba(245,243,255,0.98)";
  const mobileText = isDark ? "#d1d5db" : "#1e1b4b";

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: headerBg,
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: headerBorder,
      transition: "background 0.4s ease, border-color 0.4s ease",
    }}>
      {/* ── Main bar ── */}
      <div style={{
        maxWidth: 1140, margin: "0 auto",
        padding: "0 24px",
        height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Brand */}
        <button
          onClick={() => goto("home")}
          style={{ display: "flex", alignItems: "center", gap: 10,
                   background: "none", border: "none", cursor: "pointer" }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(168,85,247,0.12)",
            border: "1.5px solid rgba(168,85,247,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Anton', sans-serif", fontSize: 13, color: "#a855f7",
            flexShrink: 0,
          }}>SP</div>
          <span style={{
            fontFamily: "'Anton', sans-serif",
            fontWeight: 900,
            fontSize: 16, letterSpacing: "0.12em",
            color: isDark ? "#a855f7" : "#4c1d95",
          }}>SAFAL PATHAK</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex" style={{ gap: 32, alignItems: "center" }}>
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => goto(id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Anton', sans-serif",
                fontSize: 12, letterSpacing: "0.14em",
                color: navColor, padding: 0,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = isDark ? "#a855f7" : "#7c3aed"}
              onMouseLeave={e => e.currentTarget.style.color = navColor}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => goto("contactus")}
            style={{
              fontFamily: "'Anton', sans-serif", fontSize: 12,
              letterSpacing: "0.1em", padding: "8px 20px",
              borderRadius: 999,
              border: "1.5px solid rgba(168,85,247,0.55)",
              color: "#a855f7",
              background: "rgba(168,85,247,0.08)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(168,85,247,0.2)";
              e.currentTarget.style.boxShadow = "0 0 18px rgba(168,85,247,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(168,85,247,0.08)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            HIRE ME
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2,
              background: "#a855f7",
              margin: "5px 0", borderRadius: 2,
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform:
                open && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                open && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* ── Mobile slide-down menu ── */}
      <div style={{
        maxHeight: open ? 360 : 0,
        overflow: "hidden",
        transition: "max-height 0.3s ease",
        background: mobileBg,
        borderBottom: open ? `1px solid ${isDark ? "rgba(168,85,247,0.15)" : "rgba(109,40,217,0.15)"}` : "none",
      }}>
        <div style={{ padding: "8px 28px 28px" }}>
          {NAV.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => goto(id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Anton', sans-serif",
                fontSize: 22, letterSpacing: "0.1em", color: mobileText,
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => e.currentTarget.style.color = isDark ? "#a855f7" : "#7c3aed"}
              onMouseLeave={e => e.currentTarget.style.color = mobileText}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
