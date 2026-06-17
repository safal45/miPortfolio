import React, { useState, useCallback } from "react";
import { useTheme } from "../../context/ThemeContext";

const projects = [
  {
    name: "Vaccine Supply Chain Optimizer",
    stack: ["Python", "Genetic Algorithm", "NSGA-II", "Pandas"],
    about:
      "Modelled a 615-node, 15-state, 3-tier perishable vaccine supply chain. Achieved zero unmet demand in 40s and 86 Pareto-optimal solutions balancing cost, waste & emissions.",
    repo: "https://github.com/safal45",
    accent: "linear-gradient(90deg,#a855f7,#ec4899)",
    num: "01",
  },
  {
    name: "PropertyDeal",
    stack: ["React", "Flask", "PostgreSQL", "JWT", "Render", "Vercel"],
    about:
      "Full-stack real estate platform — 100/100 Lighthouse, 0.4s FCP, 100/100 SEO. 6-entity schema with composite indexes and 3-role RBAC (Owner, Builder, Agent).",
    repo: "https://github.com/safal45/PropertyDeal",
    deploy: "https://property-deal-oik5.vercel.app/",
    accent: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
    num: "02",
  },
  {
    name: "StudyBuddy",
    stack: ["Django", "Python", "Gunicorn", "WhiteNoise", "SQLite", "Railway"],
    about:
      "Discussion platform with 91/100 Lighthouse, 1.3s FCP and 0ms TBT. Topic-based study rooms, messaging & keyword search deployed on Railway.",
    repo: "https://github.com/safal45/StudyBuddy",
    deploy: "https://web-production-82ee1.up.railway.app/",
    accent: "linear-gradient(90deg,#10b981,#3b82f6)",
    num: "03",
  },
  {
    name: "Career Web",
    stack: ["HTML", "CSS", "JavaScript", "Flask", "MySQL", "Bootstrap"],
    about:
      "Dynamic career platform with Flask and MySQL backend. Smooth job listing UX with clean Bootstrap UI and real-time data from a relational database.",
    repo: "https://github.com/safal45/Loco",
    deploy: "https://loco-minds-website.onrender.com",
    accent: "linear-gradient(90deg,#f59e0b,#ef4444)",
    num: "04",
  },
  {
    name: "my_Blog",
    stack: ["Flask", "SQLAlchemy", "SQLite", "Bootstrap"],
    about:
      "Full-featured blog platform with user auth, post creation, secure password reset via email tokens, and editable user profiles.",
    repo: "https://github.com/safal45/my_Blog",
    deploy: "https://blog-app-v6vs.onrender.com",
    accent: "linear-gradient(90deg,#6366f1,#a855f7)",
    num: "05",
  },
  {
    name: "Currency Converter",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    about:
      "Real-time currency conversion app with support for all major world currencies. Clean responsive UI built entirely with React hooks and Tailwind.",
    repo: "https://github.com/safal45/Currency_Converter",
    accent: "linear-gradient(90deg,#06b6d4,#3b82f6)",
    num: "06",
  },
  {
    name: "Password Generator",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    about:
      "Secure password generator with configurable length and character sets — uppercase, lowercase, numbers and symbols. Copy-to-clipboard built in.",
    repo: "https://github.com/safal45/passGenerator",
    accent: "linear-gradient(90deg,#ec4899,#8b5cf6)",
    num: "07",
  },
  {
    name: "To-do List",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    about:
      "Task management app with add, complete, and delete actions. Persistent state via localStorage, clean dark UI and smooth toggle animations.",
    repo: "https://github.com/safal45/Todo_app",
    accent: "linear-gradient(90deg,#f59e0b,#10b981)",
    num: "08",
  },
];

const TOTAL = projects.length;

export default function Projects() {
  const { isDark } = useTheme();
  const [idx, setIdx]         = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const go = useCallback((newIdx) => {
    setIdx(newIdx);
    setAnimKey((k) => k + 1);
  }, []);

  const prev = () => go(idx === 0 ? TOTAL - 1 : idx - 1);
  const next = () => go(idx === TOTAL - 1 ? 0 : idx + 1);

  const project = projects[idx];

  const bg      = isDark ? "#000"                  : "#f5f3ff";
  const surface = isDark ? "rgba(10,3,22,0.95)"    : "rgba(255,255,255,0.95)";
  const border  = isDark ? "rgba(168,85,247,0.14)" : "rgba(109,40,217,0.2)";
  const textPri = isDark ? "#f1f5f9"               : "#1e1b4b";
  const textSec = isDark ? "#94a3b8"               : "#4c1d95";
  const accent  = isDark ? "#a855f7"               : "#7c3aed";
  const chipBg  = isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.08)";
  const chipClr = isDark ? "#c4b5fd"               : "#6d28d9";
  const btnBdr  = isDark ? "rgba(100,116,139,0.35)": "rgba(109,40,217,0.25)";
  const btnClr  = isDark ? "#94a3b8"               : "#4c1d95";

  return (
    <section
      id="project"
      style={{
        height: "100vh",
        minHeight: 600,
        background: bg,
        display: "flex",
        flexDirection: "column",
        padding: "72px 24px 24px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.4s ease",
      }}
    >
      {/* bg glow */}
      <div style={{
        position: "absolute", top: "20%", right: "-8%",
        width: 420, height: 420,
        background: `radial-gradient(circle, ${isDark ? "rgba(168,85,247,0.06)" : "rgba(109,40,217,0.05)"} 0%, transparent 70%)`,
        borderRadius: "50%", filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 860, margin: "0 auto", width: "100%",
        display: "flex", flexDirection: "column",
        height: "100%", gap: 0,
      }}>

        {/* Heading row */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between",
          flexShrink: 0, marginBottom: 20,
        }}>
          <div>
            <p style={{ color: accent, fontFamily: "monospace", fontSize: 10, letterSpacing: "0.28em", margin: "0 0 4px", opacity: 0.8 }}>
              ✦ FEATURED WORK ✦
            </p>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(32px,5vw,56px)", lineHeight: 1, margin: 0 }}>
              <span style={{ color: textPri }}>MY </span>
              <span style={{ WebkitTextStroke: `2px ${accent}`, color: "transparent" }}>PROJECTS</span>
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6, paddingBottom: 4 }}>
            <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 28, color: accent, lineHeight: 1 }}>
              {project.num}
            </span>
            <span style={{ fontFamily: "monospace", fontSize: 11, color: textSec }}>/ {String(TOTAL).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Project card */}
        <div style={{ flexGrow: 1, display: "flex", alignItems: "center", minHeight: 0 }}>
          <div
            key={animKey}
            style={{
              width: "100%",
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: 22,
              overflow: "hidden",
              animation: "slideIn 0.35s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Top accent bar */}
            <div style={{ height: 4, background: project.accent }} />

            <div style={{ padding: "32px 40px 36px" }}>
              {/* Top row: LIVE badge or label + faded number */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                {project.deploy ? (
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 5,
                    padding: "4px 12px", borderRadius: 999,
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.28)",
                    color: "#10b981",
                    fontFamily: "monospace", fontSize: 9, letterSpacing: "0.12em",
                  }}>
                    <span className="animate-pulse" style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#10b981", display: "inline-block",
                    }}/>
                    LIVE
                  </span>
                ) : (
                <span style={{
                  fontFamily: "monospace", fontSize: 9,
                  color: isDark ? "rgba(168,85,247,0.35)" : "rgba(109,40,217,0.4)",
                  letterSpacing: "0.15em",
                }}>OPEN SOURCE</span>
                )}
                <span style={{
                  fontFamily: "'Anton', sans-serif", fontSize: 72, lineHeight: 1,
                  color: isDark ? "rgba(168,85,247,0.05)" : "rgba(109,40,217,0.06)",
                  userSelect: "none", letterSpacing: "-0.02em",
                }}>{project.num}</span>
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(22px,4vw,34px)",
                color: textPri, margin: "0 0 14px", lineHeight: 1.1,
              }}>{project.name}</h3>

              {/* Stack chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{
                    fontSize: 10, padding: "4px 11px", borderRadius: 20,
                    background: chipBg, color: chipClr,
                    border: `1px solid ${isDark ? "rgba(168,85,247,0.18)" : "rgba(109,40,217,0.2)"}`,
                    fontFamily: "monospace",
                  }}>{tech}</span>
                ))}
              </div>

              {/* Description */}
              <p style={{ color: textSec, fontSize: 15, lineHeight: 1.85, margin: "0 0 28px" }}>
                {project.about}
              </p>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 12 }}>
              {project.deploy && (
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "10px 22px", borderRadius: 10,
                    background: project.accent,
                    color: "#fff", fontSize: 12,
                    fontFamily: "'Anton', sans-serif",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "opacity 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.3)"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  LIVE ↗
                </a>
              )}

              {/* GitHub button */}
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "10px 22px", borderRadius: 10,
                  background: "transparent",
                  color: btnClr, fontSize: 12,
                  fontFamily: "'Anton', sans-serif",
                  textDecoration: "none",
                  border: `1px solid ${btnBdr}`,
                  letterSpacing: "0.06em",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = chipClr;
                  e.currentTarget.style.borderColor = isDark ? "rgba(168,85,247,0.45)" : "rgba(109,40,217,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = btnClr;
                  e.currentTarget.style.borderColor = btnBdr;
                }}
              >
                GITHUB ↗
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div style={{
          flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 20, paddingTop: 18,
        }}>
          <button
            onClick={prev}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              background: isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.08)",
              border: `1px solid ${isDark ? "rgba(168,85,247,0.25)" : "rgba(109,40,217,0.25)"}`,
              color: accent, fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", fontFamily: "monospace",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? "rgba(168,85,247,0.2)" : "rgba(109,40,217,0.15)"; e.currentTarget.style.boxShadow = `0 0 14px ${isDark ? "rgba(168,85,247,0.3)" : "rgba(109,40,217,0.25)"}`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
          >←</button>

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === idx ? 22 : 7, height: 7,
                  borderRadius: 999,
                  background: i === idx ? accent : (isDark ? "rgba(168,85,247,0.22)" : "rgba(109,40,217,0.2)"),
                  border: "none", cursor: "pointer", padding: 0,
                  transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
                  boxShadow: i === idx ? `0 0 10px ${isDark ? "rgba(168,85,247,0.5)" : "rgba(109,40,217,0.4)"}` : "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: 44, height: 44, borderRadius: "50%",
              background: isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.08)",
              border: `1px solid ${isDark ? "rgba(168,85,247,0.25)" : "rgba(109,40,217,0.25)"}`,
              color: accent, fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s", fontFamily: "monospace",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? "rgba(168,85,247,0.2)" : "rgba(109,40,217,0.15)"; e.currentTarget.style.boxShadow = `0 0 14px ${isDark ? "rgba(168,85,247,0.3)" : "rgba(109,40,217,0.25)"}`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = isDark ? "rgba(168,85,247,0.08)" : "rgba(109,40,217,0.08)"; e.currentTarget.style.boxShadow = "none"; }}
          >→</button>
        </div>
      </div>
    </section>
  );
}
