import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PROFILE_CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream: #F7F3EE;
  --cream2: #EFE9DF;
  --sand: #D9CEBD;
  --sand-l: #E8E0D3;
  --sage: #7B9E87;
  --sage-l: #A8C4B0;
  --sage-d: #4A7055;
  --forest: #1E3A2F;
  --terra: #C1634A;
  --terra-l: #E8907A;
  --gold: #D4A853;
  --sky: #6BAED6;
  --ink: #1A1A1A;
  --muted: #6B6357;
  --muted-l: #9E9589;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04);
  --r-sm: 8px;
  --r-md: 14px;
  --r-lg: 20px;
}

html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--cream);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  font-size: 14px;
  line-height: 1.55;
}

.profile-page { min-height: 100vh; background: var(--cream); color: var(--ink); }
.mono { font-family: 'JetBrains Mono', monospace; }
.mono-sm { font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--muted-l); }

.hero-banner {
  height: 180px;
  background: var(--cream2) url("/images/profilebanner.png") center / cover no-repeat;
  position: relative;
  overflow: hidden;
}
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
  z-index: 0;
}
.hero-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px);
  pointer-events: none;
  opacity: 0.8;
}
.b1 {
  width: 360px;
  height: 260px;
  top: -120px;
  left: 6%;
  background: radial-gradient(circle, rgba(123,158,135,0.55) 0%, transparent 70%);
  animation: drift 11s ease-in-out infinite alternate;
}
.b2 {
  width: 280px;
  height: 220px;
  top: -100px;
  right: 10%;
  background: radial-gradient(circle, rgba(212,168,83,0.45) 0%, transparent 70%);
  animation: drift 14s ease-in-out infinite alternate-reverse;
}
.b3 {
  width: 220px;
  height: 200px;
  top: -80px;
  left: 48%;
  background: radial-gradient(circle, rgba(107,174,214,0.4) 0%, transparent 70%);
  animation: drift 9s ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: translateX(-18px) scale(1); }
  to { transform: translateX(18px) scale(1.07); }
}

.profile-wrap {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 36px 64px;
}
.identity-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: -52px;
  padding-bottom: 28px;
  border-bottom: 1px solid var(--sand);
}
.identity-left { display: flex; align-items: flex-end; gap: 20px; flex-wrap: wrap; }
.avatar-wrap { position: relative; flex-shrink: 0; }
.avatar-circle {
  width: 104px;
  height: 104px;
  border-radius: 50%;
  border: 4px solid var(--cream);
  overflow: hidden;
  background: linear-gradient(135deg, var(--sage-l), var(--gold));
  box-shadow: var(--shadow-md);
  position: relative;
}
.avatar-circle img { width: 100%; height: 100%; object-fit: cover; display: block; }
.avatar-circle { cursor: pointer; }
.avatar-menu {
  position: absolute;
  top: calc(100% + 14px);
  left: 0;
  width: 210px;
  padding: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(247,243,238,0.98));
  border: 1px solid rgba(201, 184, 161, 0.42);
  border-radius: 20px;
  box-shadow: 0 16px 38px rgba(30,58,47,0.16);
  backdrop-filter: blur(12px);
  z-index: 50;
}
.avatar-menu::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 24px;
  width: 14px;
  height: 14px;
  background: rgba(255,255,255,0.95);
  border-left: 1px solid rgba(201, 184, 161, 0.42);
  border-top: 1px solid rgba(201, 184, 161, 0.42);
  transform: rotate(45deg);
}
.avatar-menu-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.avatar-menu-header-icon {
  width: 32px;
  height: 32px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(107,174,214,0.14);
  color: var(--sky);
}
.avatar-menu-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--forest);
  margin-bottom: 2px;
}
.avatar-menu-subtitle {
  font-size: 11px;
  color: var(--muted);
  line-height: 1.35;
}
.avatar-menu-item {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  width: 100%;
  text-align: left;
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(196,177,153,0.55);
  color: var(--forest);
  font-size: 13px;
  padding: 11px 12px;
  border-radius: 14px;
  cursor: pointer;
  transition: transform .18s, background .18s, border-color .18s;
  align-items: center;
}
.avatar-menu-item:not(:last-child) { margin-bottom: 8px; }
.avatar-menu-item:hover {
  background: #fff;
  border-color: rgba(123,158,135,0.35);
  transform: translateY(-1px);
}
.avatar-menu-item-icon {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(123,158,135,0.1);
  color: var(--sage-d);
}
.avatar-menu-item-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.avatar-menu-item-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--forest);
}
.avatar-menu-item-note {
  font-size: 11px;
  color: var(--muted);
}
.avatar-menu-item-chevron {
  font-size: 16px;
  color: var(--muted-l);
}
.avatar-menu-item:focus-visible {
  outline: 2px solid rgba(107,174,214,0.6);
  outline-offset: 2px;
}
.av-fallback {
  display: flex;
  position: absolute;
  inset: 0;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  color: var(--forest);
}
.av-online {
  position: absolute;
  bottom: 5px;
  right: 3px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--sage);
  border: 2.5px solid var(--cream);
  box-shadow: 0 0 0 2px rgba(123,158,135,0.3);
}
.name-block { padding-bottom: 4px; }
.name-row { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
.pname {
  font-family: 'Lora', serif;
  font-size: 26px;
  font-weight: 600;
  color: var(--forest);
  letter-spacing: -0.3px;
  line-height: 1.2;
}
  .
.pro-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--forest);
  color: var(--sage-l);
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 3px 9px;
  border-radius: 100px;
  box-shadow: 0 2px 8px rgba(30,58,47,0.25);
}
.prole { font-size: 13px; color: var(--muted); margin-bottom: 4px; }
.pid { font-size: 11px; color: var(--muted-l); margin-top: 4px; margin-bottom: 14px; }
.pactions { display: flex; gap: 9px; flex-wrap: wrap; }
.btn-dark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--forest);
  color: #fff;
  border: none;
  border-radius: 100px;
  padding: 9px 22px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
  box-shadow: 0 2px 10px rgba(30,58,47,0.2);
}
.btn-dark:hover {
  background: #2a4a38;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(30,58,47,0.25);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--cream);
  color: var(--ink);
  border: 1.5px solid var(--sand);
  border-radius: 100px;
  padding: 9px 20px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all .2s;
}
.btn-ghost:hover { border-color: var(--sage-l); color: var(--forest); transform: translateY(-1px); }
.identity-stats { display: none; }
.ptabs {
  display: flex;
  align-items: center;
  gap: 2px;
  border-bottom: 1.5px solid var(--sand);
  margin-bottom: 24px;
  padding-top: 4px;
}
.ptab {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--muted);
  cursor: pointer;
  border-bottom: 2.5px solid transparent;
  margin-bottom: -1.5px;
  transition: color .15s, border-color .15s;
}
.ptab:hover { color: var(--forest); }
.ptab.active { color: var(--forest); font-weight: 700; border-bottom-color: var(--sage); }
.ptab-pill {
  background: var(--cream2);
  color: var(--muted);
  font-size: 10px;
  font-weight: 700;
  padding: 1px 7px;
  border-radius: 100px;
}
.ptab.active .ptab-pill { background: var(--forest); color: var(--sage-l); }
.tab-panel { display: none; animation: panelIn .3s cubic-bezier(0.22,1,0.36,1); }
.tab-panel.active { display: block; }
@keyframes panelIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.ov-strip {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  background: var(--cream2);
  border: 1px solid var(--sand);
  border-radius: var(--r-md);
  padding: 12px 18px;
  font-size: 12.5px;
  color: var(--muted);
  margin-bottom: 16px;
}
.ov-strip-item { display: flex; align-items: center; gap: 6px; }
.ov-strip-item strong { color: var(--forest); font-weight: 600; }
.ov-amber { color: var(--gold) !important; font-weight: 700; }
.ov-div { width: 1px; height: 16px; background: var(--sand); flex-shrink: 0; }
.sec-label { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.sec-label-text { font-size: 15px; font-weight: 700; color: var(--forest); }
.sec-label-count { font-size: 12px; color: var(--muted-l); font-weight: 500; }
.reports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  gap: 20px;
}
.rcard {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform .22s, box-shadow .22s, border-color .22s;
  animation: cardIn .4s cubic-bezier(0.22,1,0.36,1) both;
}
@keyframes cardIn {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
.reports-grid .rcard:nth-child(1) { animation-delay: 0.04s; }
.reports-grid .rcard:nth-child(2) { animation-delay: 0.10s; }
.reports-grid .rcard:nth-child(3) { animation-delay: 0.16s; }
.reports-grid .rcard:nth-child(4) { animation-delay: 0.22s; }
.rcard--active { cursor: pointer; }
.rcard--active:hover {
  transform: translateY(-5px);
  box-shadow: 0 14px 36px rgba(30,58,47,0.13);
  border-color: var(--sage-l);
}
.rcard--locked { opacity: 0.65; filter: grayscale(0.25); cursor: default; }
.rcard-img {
  position: relative;
  height: 172px;
  background: var(--cream2);
  overflow: hidden;
}
.rcard-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s;
}
.rcard--active:hover .rcard-img img { transform: scale(1.05); }
.rcard-img--dim img { filter: grayscale(0.4) brightness(0.82); }
.rcard-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.5) 100%);
}
.rcard-lockicon {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.15);
}
.rcard-body { padding: 14px 16px 16px; }
.rcard-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.rcard-icon {
  width: 34px;
  height: 34px;
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ri-blue { background: rgba(74,112,85,0.12); color: var(--sage-d); }
.ri-gray { background: var(--cream2); color: var(--muted); }
.rcard-arrow {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--forest);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  transition: transform .2s, background .2s;
}
.rcard--active:hover .rcard-arrow { background: var(--sage-d); transform: translate(2px,-2px); }
.rcard-title { font-size: 15px; font-weight: 700; color: var(--forest); margin-bottom: 3px; }
.rc-muted { color: var(--muted); }
.rcard-sub { font-size: 11.5px; color: var(--muted-l); margin-bottom: 10px; }
.rcard-pills { display: flex; gap: 5px; flex-wrap: wrap; }
.rpill { font-size: 10.5px; font-weight: 700; padding: 3px 9px; border-radius: 100px; }
.rp-red { background: rgba(193,99,74,0.1); color: #8a3220; }
.rp-amber { background: rgba(212,168,83,0.13); color: #8b6914; }
.rp-blue { background: rgba(107,174,214,0.13); color: #2e6fa3; }
.rp-green { background: rgba(74,112,85,0.1); color: var(--sage-d); }
.rcard-unlock {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--muted-l);
  background: var(--cream2);
  border: 1px dashed var(--sand);
  border-radius: var(--r-sm);
  padding: 7px 10px;
  text-align: center;
  margin-top: 4px;
}
.history-list, .settings-list {
  background: var(--cream);
  border: 1px solid var(--sand);
  border-radius: var(--r-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.hitem, .srow {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--sand-l);
  transition: background .15s;
}
.hitem:last-child, .srow:last-child { border-bottom: none; }
.hitem:hover, .srow:hover { background: var(--cream2); }
.hdot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.hdot--green { background: var(--sage); }
.hdot--amber { background: var(--gold); }
.hdot--blue { background: var(--sky); }
.hbody { flex: 1; }
.htitle, .stitle { font-size: 13.5px; font-weight: 600; color: var(--forest); }
.hdate, .ssub { font-size: 12px; color: var(--muted-l); margin-top: 2px; }
.htag { font-size: 10.5px; font-weight: 700; padding: 3px 10px; border-radius: 100px; }
.htag--green { background: rgba(74,112,85,0.1); color: var(--sage-d); }
.htag--amber { background: rgba(212,168,83,0.13); color: #8b6914; }
.htag--blue { background: rgba(107,174,214,0.13); color: #2e6fa3; }
.srow { justify-content: space-between; gap: 16px; }
.stoggle {
  width: 42px;
  height: 24px;
  border-radius: 100px;
  background: var(--sand);
  border: 1.5px solid var(--sand);
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  transition: background .2s, border-color .2s;
}
.stoggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--muted-l);
  transition: transform .2s, background .2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}
.stoggle--on { background: var(--sage); border-color: var(--sage-d); }
.stoggle--on::after { background: #fff; transform: translateX(18px); }
@media (max-width: 768px) {
  .profile-wrap { padding: 0 16px 40px; }
  .identity-row { flex-direction: column; align-items: flex-start; margin-top: -42px; }
  .reports-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .reports-grid { grid-template-columns: 1fr; }
  .pname { font-size: 22px; }
}
`;

const HISTORY_ITEMS = [
  { dot: "hdot--green", title: "Skin Health Report generated", date: "Jan 15, 2026 � 09:42 AM", tag: "Complete", tagClass: "htag--green" },
  { dot: "hdot--amber", title: "Profile created", date: "Jan 14, 2026 � 03:17 PM", tag: "Setup", tagClass: "htag--amber" },
  { dot: "hdot--blue", title: "DNA sample submitted", date: "Jan 10, 2026 � 11:00 AM", tag: "Lab", tagClass: "htag--blue" },
];

const INITIAL_SETTINGS = [
  { title: "Email Notifications", sub: "Receive report updates via email", on: true },
  { title: "Data Sharing", sub: "Allow anonymized research use", on: false },
  { title: "Two-Factor Auth", sub: "Secure your account with 2FA", on: true },
];

const REPORTS = [
  {
    title: "Health",
    sub: "Genetic Risk Analysis � 34 traits",
    pills: [
      { label: "2 Very High", className: "rp-red" },
      { label: "6 High", className: "rp-amber" },
      { label: "11 Protective", className: "rp-green" },
    ],
    image: "/images/meditation.png",
    active: true,
    iconClass: "ri-blue",
    href: "/reports/skin",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm-1 14.93V17a1 1 0 112 0v-.07A8 8 0 0019.93 11H19a1 1 0 110-2h.93A8 8 0 0013 4.07V5a1 1 0 11-2 0v-.93A8 8 0 004.07 11H5a1 1 0 110 2h-.93A8 8 0 0011 16.93z"/></svg>
    ),
  },
  {
    title: "Nutrition",
    sub: "Metabolic & Nutrition Traits � 36 traits",
    pills: [
      { label: "3 Very High", className: "rp-red" },
      { label: "12 High", className: "rp-amber" },
      { label: "20 Medium", className: "rp-blue" },
      { label: "1 Low", className: "rp-green" },
    ],
    image: "https://images.unsplash.com/photo-1557985776-a2838c6fa1e6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",
    active: true,
    iconClass: "ri-blue",
    href: "/reports/nutrition",
    overlay: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm1 13H9v-2h3v-2H9V8h4l2 3-2 4z"/></svg>
    ),
  },
  {
    title: "Physical Traits",
    sub: "Body Characteristics",
    image: "https://images.unsplash.com/photo-1765728617086-5d16a7bac916?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",
    active: false,
    iconClass: "ri-gray",
    overlay: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a5 5 0 015 5v1h2a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v1h6V7a3 3 0 00-3-3z"/></svg>
    ),
  },
  {
    title: "Other Traits",
    sub: "Additional Analysis",
    image: "https://images.unsplash.com/photo-1660846194618-bbd5ac3825a6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1600",
    active: false,
    iconClass: "ri-gray",
    overlay: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
    ),
  },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("main");
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [userId, setUserId] = useState("USR-USER0001");
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (document.getElementById("profile-page-styles")) return;
    const style = document.createElement("style");
    style.id = "profile-page-styles";
    style.textContent = PROFILE_CSS;
    document.head.appendChild(style);
    return () => document.getElementById("profile-page-styles")?.remove();
  }, []);

  useEffect(() => {
    if (!showAvatarMenu) return;
    const handleOutsideClick = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setShowAvatarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [showAvatarMenu]);

  useEffect(() => {
    setUserId(sessionStorage.getItem("userId") || "USR-USER0001");
  }, []);

  return (
    <div className="profile-page">
      <div className="hero-banner">
        <img src="/images/profilebanner.png" alt="Profile Banner" className="hero-bg" />
        <div className="hero-blob b1"></div>
        <div className="hero-blob b2"></div>
        <div className="hero-blob b3"></div>
      </div>

      <div className="profile-wrap">
        <div className="identity-row">
          <div className="identity-left">
            <div className="avatar-wrap" ref={avatarRef}>
              <div className="avatar-circle" onClick={() => setShowAvatarMenu((value) => !value)}>
                <img src="/images/avatarpic.jpg" alt="Profile" className="profilepic" />
                <div className="av-fallback">AL</div>
              </div>
              <span className="av-online"></span>
              {showAvatarMenu ? (
                <div className="avatar-menu">
                  <div className="avatar-menu-header">
                    <div className="avatar-menu-header-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <div className="avatar-menu-title">Quick actions</div>
                      <div className="avatar-menu-subtitle">Open your activity and account controls</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="avatar-menu-item"
                    onClick={() => {
                      setActiveTab("history");
                      setShowAvatarMenu(false);
                    }}
                  >
                    <span className="avatar-menu-item-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 8v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12a9 9 0 11-9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="avatar-menu-item-copy">
                      <span className="avatar-menu-item-label">History</span>
                      <span className="avatar-menu-item-note">Review recent activity</span>
                    </span>
                    <span className="avatar-menu-item-chevron">›</span>
                  </button>

                  <button
                    type="button"
                    className="avatar-menu-item"
                    onClick={() => {
                      setActiveTab("settings");
                      setShowAvatarMenu(false);
                    }}
                  >
                    <span className="avatar-menu-item-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .55.22 1.08.61 1.47z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span className="avatar-menu-item-copy">
                      <span className="avatar-menu-item-label">Settings</span>
                      <span className="avatar-menu-item-note">Manage notifications and privacy</span>
                    </span>
                    <span className="avatar-menu-item-chevron">›</span>
                  </button>
                </div>
              ) : null}
            </div>
            <div className="name-block">
              <div className="name-row">
                
               
              </div>
           
              <p className="pid mono" id="userId">{userId}</p>
              <div className="pactions">
                
                
              </div>
            </div>
          </div>
        </div>

        <div className="ptabs">
          <button className={`ptab${activeTab === "main" ? " active" : ""}`} type="button" onClick={() => setActiveTab("main")}>Reports &amp; Overview <span className="ptab-pill">4</span></button>
        </div>

        <div className={`tab-panel${activeTab === "main" ? " active" : ""}`} id="tab-main">
          <div className="ov-strip">
            <div className="ov-strip-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              Generated <strong>Jan 15, 2026</strong>
            </div>
            <span className="ov-div"></span>
            <div className="ov-strip-item">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              Gender <strong className="ov-amber">Male</strong>
            </div>
            <span className="ov-div"></span>
            <div className="ov-strip-item mono-sm" id="ovId">{userId}</div>
            <span className="ov-div"></span>
          </div>

          <div className="sec-label">
            <span className="sec-label-text">Your Reports</span>
            <span className="sec-label-count">4 categories</span>
          </div>

          <div className="reports-grid" id="categoryList">
            {REPORTS.map((report) => (
              <div
                key={report.title}
                className={`rcard ${report.active ? "rcard--active" : "rcard--locked"}`}
                onClick={() => report.active && report.href ? navigate(report.href) : undefined}
              >
                <div className={`rcard-img${report.active ? "" : " rcard-img--dim"}`}>
                  <img src={report.image} alt={report.title} />
                  {report.overlay ? <div className="rcard-overlay"></div> : null}
                  {!report.active ? (
                    <div className="rcard-lockicon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  ) : null}
                </div>
                <div className="rcard-body">
                  <div className="rcard-row">
                    <div className={`rcard-icon ${report.iconClass}`}>{report.icon}</div>
                    {report.active ? <div className="rcard-arrow">?</div> : null}
                  </div>
                  <h3 className={`rcard-title${report.active ? "" : " rc-muted"}`}>{report.title}</h3>
                  <p className="rcard-sub">{report.sub}</p>
                  {report.active ? (
                    <div className="rcard-pills">
                      {report.pills.map((pill) => <span key={pill.label} className={`rpill ${pill.className}`}>{pill.label}</span>)}
                    </div>
                  ) : (
                    <div className="rcard-unlock"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-panel${activeTab === "history" ? " active" : ""}`} id="tab-history">
          <div className="history-list">
            {HISTORY_ITEMS.map((item) => (
              <div key={item.title} className="hitem">
                <div className={`hdot ${item.dot}`}></div>
                <div className="hbody">
                  <div className="htitle">{item.title}</div>
                  <div className="hdate mono">{item.date}</div>
                </div>
                <span className={`htag ${item.tagClass}`}>{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`tab-panel${activeTab === "settings" ? " active" : ""}`} id="tab-settings">
          <div className="settings-list">
            {settings.map((item, index) => (
              <div key={item.title} className="srow">
                <div>
                  <div className="stitle">{item.title}</div>
                  <div className="ssub">{item.sub}</div>
                </div>
                <div className={`stoggle${item.on ? " stoggle--on" : ""}`} onClick={() => setSettings((current) => current.map((entry, i) => i === index ? { ...entry, on: !entry.on } : entry))}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
