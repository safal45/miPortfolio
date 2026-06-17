import React from "react";
import { useTheme } from "../../context/ThemeContext";

const education = [
  { period: "2022 – 2026", title: "B.Tech Mechanical Engineering", sub: "Minor in AI & Machine Learning", place: "KNIT, Sultanpur" },
  { period: "2020 – 2021", title: "Higher Secondary (12th)", place: "SGIC, Auraiya" },
  { period: "2018 – 2019", title: "Secondary School (10th)", place: "SGIC, Auraiya" },
];

const stats = [
  { n: "250+", l: "DSA Solved" },
  { n: "8+",   l: "Projects" },
  { n: "23pt", l: "Lighthouse" },
  { n: "3",    l: "Platforms" },
];

const interests = ["🏐 Volleyball", "💻 250+ DSA", "🌟 Open Source", "⚡ Full Stack"];

export default function About() {
  const { isDark } = useTheme();

  const bg       = isDark ? "#000"                   : "#f5f3ff";
  const surface  = isDark ? "rgba(12,4,26,0.88)"     : "rgba(255,255,255,0.95)";
  const border   = isDark ? "rgba(168,85,247,0.18)"  : "rgba(109,40,217,0.2)";
  const divider  = isDark ? "rgba(168,85,247,0.12)"  : "rgba(109,40,217,0.14)";
  const textPri  = isDark ? "#f1f5f9"                : "#1e1b4b";
  const textSec  = isDark ? "#94a3b8"                : "#4c1d95";
  const textMuted= isDark ? "#6b7280"                : "#7c3aed";
  const accent   = isDark ? "#a855f7"                : "#7c3aed";
  const chipBg   = isDark ? "rgba(168,85,247,0.07)"  : "rgba(109,40,217,0.08)";
  const chipClr  = isDark ? "#c4b5fd"                : "#6d28d9";

  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "100vh",
        background: bg,
        boxSizing: "border-box",
        transition: "background 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Heading ── */}
        <div style={{ marginBottom: 36 }}>
          <p style={{ color: accent, fontFamily: "monospace", fontSize: 10, letterSpacing: "0.28em", margin: "0 0 8px", opacity: 0.8 }}>
            ✦ WHO I AM ✦
          </p>
          <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(42px, 6vw, 72px)", lineHeight: 1, margin: 0 }}>
            <span style={{ color: textPri }}>ABOUT </span>
            <span style={{ WebkitTextStroke: `2px ${accent}`, color: "transparent" }}>ME</span>
          </h2>
        </div>

        {/* ── Two column grid (stacked on mobile, sidebar from desktop up) ── */}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gap: 48,
            alignItems: "start",
          }}
        >

          {/* ═══ LEFT: identity card ═══ */}
          <div style={{
            background: surface,
            border: `1px solid ${border}`,
            borderRadius: 20,
            padding: "28px 20px",
            textAlign: "center",
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: 80,
          }}>
            {/* Photo */}
            <div style={{
              width: 160, height: 160,
              borderRadius: "50%",
              padding: 4,
              background: `linear-gradient(135deg,${accent},#6d28d9,${accent})`,
              margin: "0 auto 16px",
            }}>
              <img
                src="/mipic.jpg"
                alt="Safal Pathak"
                style={{
                  width: "100%", height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                  border: `3px solid ${bg}`,
                  display: "block",
                }}
              />
            </div>

            <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: 20, color: textPri, margin: "0 0 4px", letterSpacing: "0.05em" }}>
              SAFAL PATHAK
            </h3>
            <p style={{ fontFamily: "monospace", fontSize: 10, color: accent, letterSpacing: "0.16em", margin: "0 0 14px" }}>
              FULL STACK DEVELOPER
            </p>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 14px", borderRadius: 999,
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.28)",
              marginBottom: 20,
            }}>
              <span className="animate-pulse" style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }}/>
              <span style={{ color: "#10b981", fontFamily: "monospace", fontSize: 9, letterSpacing: "0.12em" }}>OPEN TO WORK</span>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: divider, marginBottom: 18 }}/>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {stats.map(({ n, l }) => (
                <div key={l} style={{
                  background: chipBg, border: `1px solid ${border}`,
                  borderRadius: 12, padding: "10px 4px",
                }}>
                  <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: accent }}>{n}</div>
                  <div style={{ fontFamily: "monospace", fontSize: 8, color: textMuted, letterSpacing: "0.05em", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ RIGHT: content ═══ */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Bio */}
            <div style={{
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: 16,
              padding: "22px 24px",
              backdropFilter: "blur(10px)",
            }}>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: accent, marginBottom: 12 }}>
                SUMMARY
              </p>
              <p style={{ color: textSec, fontSize: 14, lineHeight: 1.9, margin: 0 }}>
                A Full Stack Developer graduating in May 2026 with experience in several projects and
                applications using React.js, Flask, Django and PostgreSQL. I have developed JWT-based
                authentication with 3-role RBAC, normalised relational schemas and cloud-deployed
                services (Render, Vercel and Railway). Open source contributor (GSSOC&nbsp;2024) with
                a measurable Lighthouse score improvement of 23 points (61→84). Solved over 250 DSA
                problems on LeetCode and GeeksforGeeks. Targeting SDE-1 at a product-focused company.
              </p>
            </div>

            {/* Education */}
            <div style={{
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: 16,
              padding: "22px 24px",
              backdropFilter: "blur(10px)",
            }}>
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: accent, marginBottom: 18 }}>
                EDUCATION
              </p>
              {education.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < education.length - 1 ? 18 : 0 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 9, height: 9, borderRadius: "50%",
                      background: accent, flexShrink: 0, marginTop: 4,
                      boxShadow: `0 0 8px ${accent}88`,
                    }}/>
                    {i < education.length - 1 && (
                      <div style={{ width: 1, flexGrow: 1, minHeight: 14, background: divider, marginTop: 4 }}/>
                    )}
                  </div>
                  <div style={{ paddingBottom: i < education.length - 1 ? 4 : 0 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 9, color: textMuted, letterSpacing: "0.1em", display: "block", marginBottom: 3 }}>
                      {item.period}
                    </span>
                    <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 15, color: textPri, margin: "0 0 2px" }}>{item.title}</p>
                    {item.sub && <p style={{ fontFamily: "monospace", fontSize: 10, color: accent, margin: "0 0 2px" }}>{item.sub}</p>}
                    <p style={{ fontFamily: "monospace", fontSize: 10, color: textMuted, margin: 0 }}>{item.place}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience + Interests row */}
            <div className="about-card-row" style={{ display: "grid", gap: 16 }}>
              {/* Experience */}
              <div style={{
                background: surface, border: `1px solid ${border}`,
                borderRadius: 16, padding: "22px 24px",
                backdropFilter: "blur(10px)",
              }}>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: accent, marginBottom: 16 }}>
                  EXPERIENCE
                </p>
                <div>
                  <span style={{ fontFamily: "monospace", fontSize: 9, color: textMuted, letterSpacing: "0.1em", display: "block", marginBottom: 4 }}>
                    Oct – Nov 2024
                  </span>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 14, color: textPri, margin: "0 0 3px" }}>Open Source Contributor</p>
                  <p style={{ fontFamily: "monospace", fontSize: 10, color: accent, margin: 0 }}>GSSOC 2024 — ElectiveHub</p>
                  <p style={{ fontFamily: "monospace", fontSize: 10, color: textMuted, margin: 0 }}>Remote</p>
                </div>
              </div>

              {/* Interests */}
              <div style={{
                background: surface, border: `1px solid ${border}`,
                borderRadius: 16, padding: "22px 24px",
                backdropFilter: "blur(10px)",
              }}>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 10, letterSpacing: "0.25em", color: accent, marginBottom: 16 }}>
                  OUTSIDE CODING
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {interests.map(item => (
                    <span key={item} style={{
                      padding: "6px 14px", borderRadius: 999,
                      background: chipBg, border: `1px solid ${border}`,
                      color: chipClr, fontFamily: "monospace", fontSize: 11,
                    }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
