import React, { useState, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const skills = [
  { name: "React.js",   level: 85, cat: "Frontend", color: "#61DAFB", icon: `${BASE}/react/react-original.svg` },
  { name: "JavaScript", level: 88, cat: "Frontend", color: "#F7DF1E", icon: `${BASE}/javascript/javascript-original.svg` },
  { name: "TypeScript", level: 75, cat: "Frontend", color: "#3178C6", icon: `${BASE}/typescript/typescript-original.svg` },
  { name: "HTML5",      level: 92, cat: "Frontend", color: "#E34F26", icon: `${BASE}/html5/html5-original.svg` },
  { name: "CSS3",       level: 90, cat: "Frontend", color: "#1572B6", icon: `${BASE}/css3/css3-original.svg` },
  { name: "Tailwind",   level: 88, cat: "Frontend", color: "#06B6D4", icon: `${BASE}/tailwindcss/tailwindcss-original.svg` },
  { name: "Python",     level: 90, cat: "Backend",  color: "#FFD43B", icon: `${BASE}/python/python-original.svg` },
  { name: "Flask",      level: 88, cat: "Backend",  color: "#CCCCCC", icon: `${BASE}/flask/flask-original.svg` },
  { name: "Django",     level: 80, cat: "Backend",  color: "#44B78B", icon: `${BASE}/django/django-plain.svg` },
  { name: "Node.js",    level: 70, cat: "Backend",  color: "#68A063", icon: `${BASE}/nodejs/nodejs-original.svg` },
  { name: "Express",    level: 70, cat: "Backend",  color: "#CCCCCC", icon: `${BASE}/express/express-original.svg` },
  { name: "PostgreSQL", level: 78, cat: "Database", color: "#336791", icon: `${BASE}/postgresql/postgresql-original.svg` },
  { name: "MySQL",      level: 72, cat: "Database", color: "#4479A1", icon: `${BASE}/mysql/mysql-original.svg` },
  { name: "MongoDB",    level: 65, cat: "Database", color: "#47A248", icon: `${BASE}/mongodb/mongodb-original.svg` },
  { name: "Git",        level: 88, cat: "Tools",    color: "#F05032", icon: `${BASE}/git/git-original.svg` },
  { name: "Docker",     level: 60, cat: "Tools",    color: "#2496ED", icon: `${BASE}/docker/docker-original.svg` },
  { name: "Postman",    level: 80, cat: "Tools",    color: "#FF6C37", icon: `${BASE}/postman/postman-original.svg` },
  { name: "VS Code",    level: 90, cat: "Tools",    color: "#007ACC", icon: `${BASE}/vscode/vscode-original.svg` },
];

const CATS = ["All", "Frontend", "Backend", "Database", "Tools"];

const CAT_COLOR = {
  All:      "#a855f7",
  Frontend: "#61DAFB",
  Backend:  "#FFD43B",
  Database: "#47A248",
  Tools:    "#FF6C37",
};

const levelLabel = (v) =>
  v >= 88 ? "Expert" : v >= 78 ? "Advanced" : v >= 65 ? "Proficient" : "Learning";

function Ring({ value, size = 76 }) {
  const r      = (size - 10) / 2;
  const circ   = 2 * Math.PI * r;
  const offset = circ * (1 - value / 100);
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)", display: "block" }}>
      <circle cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth={6}/>
      <circle cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke="#a855f7" strokeWidth={6}
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ filter: "drop-shadow(0 0 6px rgba(168,85,247,0.75))" }}
      />
    </svg>
  );
}

function SkillCard({ skill, idx, isDark }) {
  const ref = useRef(null);

  const cardBg = isDark ? "rgba(12,4,26,0.90)" : "rgba(255,255,255,0.92)";
  const cardBorder = isDark ? "rgba(168,85,247,0.18)" : "rgba(109,40,217,0.2)";
  const textColor = isDark ? "#e2e8f0" : "#1e1b4b";

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const rx = ((e.clientY - top)  / height - 0.5) * -18;
    const ry = ((e.clientX - left) / width  - 0.5) *  18;
    el.style.transform = `perspective(480px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.06)`;
    el.style.boxShadow = `0 0 24px ${skill.color}44, 0 16px 36px rgba(0,0,0,0.55)`;
    el.style.borderColor = `${skill.color}80`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(480px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.boxShadow = isDark ? "0 2px 12px rgba(0,0,0,0.35)" : "0 2px 12px rgba(0,0,0,0.08)";
    el.style.borderColor = cardBorder;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        overflow: "hidden",
        background: cardBg,
        border: `1px solid ${cardBorder}`,
        backdropFilter: "blur(12px)",
        borderRadius: 14,
        padding: "14px 8px 12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        transition: "transform 0.14s ease, box-shadow 0.18s ease, border-color 0.18s ease",
        cursor: "default",
        animation: "skillIn 0.38s ease both",
        animationDelay: `${idx * 0.05}s`,
        boxShadow: isDark ? "0 2px 12px rgba(0,0,0,0.35)" : "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Colour splash behind icon — now properly clipped by overflow:hidden */}
      <div style={{
        position: "absolute", top: 10, left: "50%",
        transform: "translateX(-50%)",
        width: 60, height: 60,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${skill.color}22 0%, transparent 70%)`,
        filter: "blur(8px)",
        pointerEvents: "none",
      }} />

      {/* Ring + icon */}
      <div style={{ position: "relative", width: 62, height: 62, flexShrink: 0 }}>
        <Ring value={skill.level} size={62} />
        <img
          src={skill.icon}
          alt={skill.name}
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: 24, height: 24, objectFit: "contain",
          }}
          onError={(e) => { e.currentTarget.style.opacity = "0"; }}
        />
      </div>

      <p style={{
        color: textColor,
        fontFamily: "'Anton', sans-serif",
        fontSize: 12, textAlign: "center",
        lineHeight: 1.2, letterSpacing: "0.03em", margin: 0,
      }}>{skill.name}</p>

      <span style={{ color: skill.color, fontFamily: "monospace", fontSize: 14, fontWeight: 700 }}>
        {skill.level}%
      </span>

      <span style={{
        fontSize: 9, padding: "2px 8px", borderRadius: 20,
        background: `${skill.color}18`,
        color: skill.color,
        border: `1px solid ${skill.color}38`,
        fontFamily: "monospace", letterSpacing: "0.05em",
      }}>
        {levelLabel(skill.level)}
      </span>
    </div>
  );
}

export default function TechStack() {
  const { isDark } = useTheme();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? skills : skills.filter((s) => s.cat === active);

  const bg       = isDark ? "#000"     : "#f5f3ff";
  const textPri  = isDark ? "#fff"     : "#1e1b4b";
  const accent   = isDark ? "#a855f7"  : "#7c3aed";

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "80px 20px 32px",
        position: "relative",
        overflowX: "hidden",
        overflowY: "visible",
        background: bg,
        transition: "background 0.4s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      {/* Background glow blobs — clipped via overflowX:hidden on section */}
      <div style={{
        position: "absolute", top: "-5%", left: "-8%",
        width: 520, height: 520,
        background: `radial-gradient(circle, ${isDark ? "rgba(168,85,247,0.07)" : "rgba(109,40,217,0.05)"} 0%, transparent 68%)`,
        borderRadius: "50%", filter: "blur(55px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "0%", right: "-8%",
        width: 440, height: 440,
        background: `radial-gradient(circle, ${isDark ? "rgba(99,102,241,0.06)" : "rgba(109,40,217,0.04)"} 0%, transparent 68%)`,
        borderRadius: "50%", filter: "blur(55px)", pointerEvents: "none",
      }} />

      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <p style={{
          color: accent, fontFamily: "monospace",
          fontSize: 10, letterSpacing: "0.32em",
          marginBottom: 8, opacity: 0.85,
        }}>✦ WHAT I BUILD WITH ✦</p>
        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(38px, 7vw, 72px)",
          lineHeight: 1, margin: "0 0 12px", letterSpacing: "-0.01em",
        }}>
          <span style={{ color: textPri }}>TECH </span>
          <span style={{
            WebkitTextStroke: `2px ${accent}`,
            color: "transparent",
            textShadow: `0 0 45px ${isDark ? "rgba(168,85,247,0.35)" : "rgba(109,40,217,0.25)"}`,
          }}>ARSENAL</span>
        </h2>
        <div style={{
          height: 2, width: 72,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          margin: "0 auto",
        }} />
      </div>

      {/* Category filter tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 22 }}>
        {CATS.map((cat) => {
          const on = active === cat;
          const c  = CAT_COLOR[cat];
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 13, letterSpacing: "0.09em",
                padding: "8px 24px", borderRadius: 999,
                border: `1.5px solid ${on ? c : "rgba(75,85,99,0.45)"}`,
                background: on ? `${c}1c` : "transparent",
                color: on ? c : (isDark ? "#9ca3af" : "#6b7280"),
                cursor: "pointer",
                transition: "all 0.22s ease",
                boxShadow: on ? `0 0 20px ${c}35` : "none",
              }}
            >{cat}</button>
          );
        })}
      </div>

      {/* Grid — 9 cols forces exactly 2 rows for 18 skills (or fewer for filtered) */}
      <div
        key={active}
        style={{
          display: "grid",
          gridTemplateColumns: active === "All"
            ? "repeat(9, 1fr)"
            : "repeat(auto-fill, minmax(108px, 1fr))",
          gap: 12,
          maxWidth: 1000,
          margin: "0 auto",
          position: "relative",
          width: "100%",
        }}
      >
        {filtered.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} idx={i} isDark={isDark} />
        ))}
      </div>
    </section>
  );
}
