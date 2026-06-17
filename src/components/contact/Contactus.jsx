import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../context/ThemeContext";

// ─── EmailJS Setup ──────────────────────────────────────────────────────────
// 1. emailjs.com → Sign up → Email Services → Add Gmail → copy Service ID
// 2. Email Templates → Create → Subject: {{subject}}, Body: From: {{from_email}}\n{{message}}
//    Set "To email" to: ptksafalpathak@gmail.com → copy Template ID
// 3. Account → API Keys → copy Public Key
// 4. Replace the three values below.
// ────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "service_f9gezu7";
const EMAILJS_TEMPLATE_ID = "template_kpx7wht";
const EMAILJS_PUBLIC_KEY  = "MWHikgIVmE630RM-X";

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/safal45",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.9,2C6.3,2,2.6,5.7,2.6,10.3c0,3.7,2.4,6.8,5.7,7.9c0.4,0.1,0.5-0.2,0.5-0.4c0-0.2,0-0.8,0-1.6c-2.3,0.5-2.8-1-2.8-1C5.4,14.3,5,13.9,5,13.9c-0.8-0.5,0.1-0.5,0.1-0.5c0.9,0.1,1.4,0.9,1.4,0.9c0.8,1.4,2,1,2.5,0.8c0.1-0.6,0.3-1,0.6-1.2c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.2C6.6,7.7,6.4,6.7,6.9,5.4c0,0,0.7-0.2,2.3,0.8c0.7-0.2,1.5-0.3,2.3-0.3c0.8,0,1.6,0.1,2.3,0.3c1.6-1,2.3-0.8,2.3-0.8c0.5,1.3,0.3,2.3,0.2,2.5c0.5,0.6,0.8,1.3,0.8,2.2c0,3.1-1.9,3.8-3.6,4c0.3,0.3,0.6,0.9,0.6,1.8c0,1.3,0,2.3,0,2.6c0,0.2,0.2,0.5,0.6,0.4c3.3-1.1,5.7-4.2,5.7-7.9C19.2,5.7,15.5,2,10.9,2z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/safal-pathak/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 50 50">
        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 13.894531 20.509766 C 11.127812 20.509766 10 22.539702 10 25.117188 L 10 37.011719 L 17 37.011719 L 17 25.117188 C 17 22.539702 15.872188 20.509766 13.105469 20.509766 L 13.894531 20.509766 z M 22 20.509766 L 22 37.300781 L 25 37.300781 L 25 31.798828 C 25 30.845714 25.7245 30.15625 26.525391 30.15625 C 27.326282 30.15625 28 30.845714 28 31.798828 L 28 37.300781 L 30 37.300781 L 30 31.798828 C 30 30.845714 30.7245 30.15625 31.525391 30.15625 C 32.326282 30.15625 33 30.845714 33 31.798828 L 33 37.300781 L 35 37.300781 L 35 27.935547 C 35 24.522095 32.120358 22.509766 29.554688 22.509766 C 27.899473 22.509766 26.526486 23.324673 25.78125 24.513672 C 25.035973 23.324673 23.644527 22.509766 22 22.509766 z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/safal45/",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 1.441c-3.163 0-3.535.012-4.787.069-2.877.131-4.214 1.47-4.345 4.345-.057 1.252-.07 1.623-.07 4.787 0 3.163.013 3.535.07 4.787.131 2.873 1.466 4.214 4.345 4.345 1.252.057 1.623.07 4.787.07 3.164 0 3.535-.013 4.788-.07 2.873-.131 4.214-1.467 4.345-4.345.057-1.252.07-1.624.07-4.787 0-3.164-.013-3.535-.07-4.787-.131-2.878-1.473-4.214-4.345-4.345-1.253-.057-1.624-.069-4.788-.069zm0 2.441a5.955 5.955 0 100 11.91 5.955 5.955 0 000-11.91zm0 9.824a3.869 3.869 0 110-7.738 3.869 3.869 0 010 7.738zm6.162-10.063a1.392 1.392 0 100 2.784 1.392 1.392 0 000-2.784z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:ptksafalpathak@gmail.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.95,4H4.05C3.25,4,2.6,4.65,2.6,5.45v13.1C2.6,19.35,3.25,20,4.05,20h15.9c0.8,0,1.45-0.65,1.45-1.45V5.45C21.4,4.65,20.75,4,19.95,4z M18.8,8.4l-6.09,3.8c-0.21,0.13-0.45,0.2-0.71,0.2s-0.5-0.07-0.71-0.2L5.2,8.4C5.07,8.32,5,8.18,5,8.03c0-0.25,0.2-0.45,0.45-0.45h13.1c0.25,0,0.45,0.2,0.45,0.45C19,8.18,18.93,8.32,18.8,8.4z"/>
      </svg>
    ),
  },
];

function GlassInput({ as: Tag = "input", label, colors, style, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={{
        display: "block", marginBottom: 8,
        fontFamily: "monospace", fontSize: 11,
        letterSpacing: "0.12em", color: colors.labelClr,
      }}>
        {label.toUpperCase()}
      </label>
      <Tag
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          display: "block", width: "100%",
          padding: "12px 16px",
          background: colors.inputBg,
          border: `1px solid ${focused ? colors.inputBorderFocus : colors.inputBorder}`,
          borderRadius: 10,
          color: colors.inputText,
          fontSize: 14,
          fontFamily: "sans-serif",
          outline: "none",
          transition: "border-color 0.2s ease, box-shadow 0.2s ease",
          boxSizing: "border-box",
          boxShadow: focused ? colors.focusShadow : "none",
          ...style,
        }}
      />
    </div>
  );
}

export default function Contactus() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const bg        = isDark ? "#000"                  : "#f5f3ff";
  const surface   = isDark ? "rgba(12,4,26,0.88)"     : "rgba(255,255,255,0.95)";
  const border    = isDark ? "rgba(168,85,247,0.18)"  : "rgba(109,40,217,0.2)";
  const textPri   = isDark ? "#f1f5f9"                : "#1e1b4b";
  const textSec   = isDark ? "#9ca3af"                : "#4c1d95";
  const textMuted = isDark ? "#6b7280"                : "#7c3aed";
  const accent    = isDark ? "#a855f7"                : "#7c3aed";
  const chipBg    = isDark ? "rgba(168,85,247,0.06)"  : "rgba(109,40,217,0.08)";
  const chipClr   = isDark ? "#c4b5fd"                : "#6d28d9";

  const inputColors = {
    labelClr: textMuted,
    inputBg: isDark ? "rgba(255,255,255,0.04)" : "rgba(109,40,217,0.04)",
    inputBorder: border,
    inputBorderFocus: accent,
    inputText: textPri,
    focusShadow: isDark ? "0 0 0 3px rgba(168,85,247,0.1)" : "0 0 0 3px rgba(109,40,217,0.12)",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_email: formData.email, subject: formData.subject, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contactus" style={{ padding: "88px 24px 100px", background: bg, position: "relative", overflow: "hidden", transition: "background 0.4s ease" }}>
      {/* bg glow */}
      <div style={{
        position: "absolute", bottom: "10%", left: "-8%",
        width: 460, height: 460,
        background: `radial-gradient(circle, ${isDark ? "rgba(168,85,247,0.06)" : "rgba(109,40,217,0.05)"} 0%, transparent 70%)`,
        borderRadius: "50%", filter: "blur(55px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Heading */}
        <p style={{
          color: accent, fontFamily: "monospace",
          fontSize: 11, letterSpacing: "0.3em",
          marginBottom: 12, opacity: 0.8,
        }}>✦ LET'S TALK ✦</p>

        <h2 style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(44px, 8vw, 82px)",
          lineHeight: 1, margin: "0 0 60px",
        }}>
          <span style={{ color: textPri }}>GET IN </span>
          <span style={{ WebkitTextStroke: `2px ${accent}`, color: "transparent" }}>TOUCH</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20" style={{ alignItems: "start" }}>

          {/* ── Left: Info panel ── */}
          <div>
            <p style={{
              color: textSec, fontSize: 15,
              lineHeight: 1.8, marginBottom: 40,
              fontFamily: "sans-serif",
            }}>
              I'm always open to new opportunities, collaborations, or just a friendly chat
              about tech. Drop me a message and I'll get back to you within{" "}
              <strong style={{ color: textPri }}>24 hours</strong>.
            </p>

            {/* Email card */}
            <a href="mailto:ptksafalpathak@gmail.com" style={{
              display: "flex", alignItems: "center", gap: 14,
              padding: "18px 20px",
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: 14,
              textDecoration: "none",
              marginBottom: 40,
              transition: "border-color 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = accent;
              e.currentTarget.style.boxShadow = `0 0 20px ${isDark ? "rgba(168,85,247,0.1)" : "rgba(109,40,217,0.1)"}`;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = border;
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: "50%",
                background: chipBg,
                border: `1px solid ${border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: accent, flexShrink: 0,
              }}>
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.95,4H4.05C3.25,4,2.6,4.65,2.6,5.45v13.1C2.6,19.35,3.25,20,4.05,20h15.9c0.8,0,1.45-0.65,1.45-1.45V5.45C21.4,4.65,20.75,4,19.95,4z M18.8,8.4l-6.09,3.8c-0.21,0.13-0.45,0.2-0.71,0.2s-0.5-0.07-0.71-0.2L5.2,8.4C5.07,8.32,5,8.18,5,8.03c0-0.25,0.2-0.45,0.45-0.45h13.1c0.25,0,0.45,0.2,0.45,0.45C19,8.18,18.93,8.32,18.8,8.4z"/>
                </svg>
              </div>
              <div>
                <p style={{ fontFamily: "monospace", fontSize: 10, color: textMuted, letterSpacing: "0.1em", margin: "0 0 3px" }}>EMAIL</p>
                <p style={{ fontFamily: "monospace", fontSize: 13, color: chipClr, margin: 0 }}>ptksafalpathak@gmail.com</p>
              </div>
            </a>

            {/* Social links */}
            <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 11, letterSpacing: "0.25em", color: accent, marginBottom: 16 }}>
              FIND ME ON
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {SOCIAL.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "9px 16px",
                    background: chipBg,
                    border: `1px solid ${border}`,
                    borderRadius: 10,
                    color: textSec,
                    textDecoration: "none",
                    fontFamily: "monospace", fontSize: 12,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = chipClr;
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.background = isDark ? "rgba(168,85,247,0.12)" : "rgba(109,40,217,0.12)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = textSec;
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.background = chipBg;
                  }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div style={{
            background: surface,
            border: `1px solid ${border}`,
            borderRadius: 20,
            padding: 32,
            backdropFilter: "blur(10px)",
          }}>
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: 22, color: "#10b981", marginBottom: 8 }}>
                  Message sent!
                </p>
                <p style={{ fontFamily: "monospace", fontSize: 13, color: textMuted, marginBottom: 32 }}>
                  I'll reply as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    padding: "10px 24px", borderRadius: 8,
                    border: `1px solid ${accent}`,
                    background: "transparent", color: chipClr,
                    fontFamily: "'Anton', sans-serif", fontSize: 13,
                    letterSpacing: "0.08em", cursor: "pointer",
                  }}
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <GlassInput
                  label="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  colors={inputColors}
                />
                <GlassInput
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  colors={inputColors}
                />
                <GlassInput
                  as="textarea"
                  label="Description"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  colors={inputColors}
                  style={{ resize: "vertical", minHeight: 120 }}
                />

                {status === "error" && (
                  <p style={{ fontFamily: "monospace", fontSize: 12, color: "#f87171" }}>
                    Failed to send. Please complete EmailJS setup or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    padding: "14px 0", borderRadius: 10,
                    background: status === "sending"
                      ? (isDark ? "rgba(168,85,247,0.3)" : "rgba(109,40,217,0.3)")
                      : accent,
                    border: "none", color: "#fff",
                    fontFamily: "'Anton', sans-serif", fontSize: 15,
                    letterSpacing: "0.1em", cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background 0.2s ease, box-shadow 0.2s ease",
                    opacity: status === "sending" ? 0.7 : 1,
                  }}
                  onMouseEnter={e => {
                    if (status !== "sending") {
                      e.currentTarget.style.boxShadow = `0 0 24px ${isDark ? "rgba(168,85,247,0.4)" : "rgba(109,40,217,0.3)"}`;
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {status === "sending" ? "SENDING…" : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
