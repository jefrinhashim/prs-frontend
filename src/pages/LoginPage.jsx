import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LOGIN_CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --dark-bg: #2a2118;
    --accent-red: #ff4500;
    --accent-orange: #ff7b00;
    --white: #ffffff;
    --text-muted: rgba(255,255,255,0.5);
    --border-light: #e8e8e8;
    --input-bg: #f9f9f9;
    --ring: rgba(255,255,255,0.08);
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    font-family: 'DM Sans', Arial, sans-serif;
    background: var(--dark-bg);
    overflow: hidden;
  }

  .login-shell {
    min-height: 100vh;
    background: var(--dark-bg);
    font-family: 'DM Sans', Arial, sans-serif;
  }

  .card {
    width: 100vw;
    height: 100vh;
    display: flex;
    border-radius: 0;
    overflow: hidden;
    animation: fadeUp 0.65s cubic-bezier(0.16,1,0.3,1) both;
    margin: 0;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(36px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .left {
    flex: 0 0 52%;
    background: var(--dark-bg);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
    animation: slideInLeft 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .left::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 75% 65% at 45% 48%, rgba(255,80,0,0.1) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 15% 90%, rgba(255,50,0,0.06) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .ring-outer {
    position: absolute;
    top: 48%;
    left: 44%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 420px;
    border-radius: 50%;
    border: 1px solid var(--ring);
    z-index: 1;
    pointer-events: none;
  }

  .ring-outer::after {
    content: '';
    position: absolute;
    inset: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.04);
  }

  .left-tag {
    position: relative;
    z-index: 3;
    padding: 28px 40px;
    font-size: 12.5px;
    color: var(--text-muted);
    letter-spacing: 0.01em;
    font-weight: 400;
    animation: slideInLeft 0.8s 0.12s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 48px;
    transform: translateY(-68%);
    z-index: 4;
    line-height: 1.08;
    font-family: Georgia, serif;
    animation: heroSlideIn 0.95s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .hero-text h1 {
    font-size: 40px;
    font-weight: 800;
    color: rgb(56, 80, 53);
    letter-spacing: -0.03em;
    padding-bottom: 100px;
  }

  .hero-text .wheat-text {
    color: rgb(8, 8, 8);
    font-size: 30px;
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-54px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes heroSlideIn {
    from { opacity: 0; transform: translate(-54px, -68%); }
    to { opacity: 1; transform: translate(0, -68%); }
  }

  .phone-wrap {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-22%);
    z-index: 5;
    width: 220px;
    animation: phoneFloat 4.5s ease-in-out infinite;
    display: none;
  }

  @keyframes phoneFloat {
    0%, 100% { transform: translateX(-22%) translateY(0); }
    50% { transform: translateX(-22%) translateY(-14px); }
  }

  .phone-svg {
    width: 100%;
    filter: drop-shadow(0 30px 60px rgba(0,0,0,0.7));
  }

  .a11y-icon {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 6;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 2px solid rgba(255,165,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .a11y-icon:hover { opacity: 1; }
  .a11y-icon svg { width: 16px; height: 16px; }

  .right {
    flex: 1;
    background: #fffffe;
    display: flex;
    flex-direction: column;
    border-radius: 0 26px 26px 0;
    position: relative;
  }

  .right-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 44px;
    animation: fadeUp 0.65s 0.1s cubic-bezier(0.16,1,0.3,1) both;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;
  }

  .logo-icon { width: 30px; height: 30px; }

  .logo-text-wrap {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .logo-text {
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 1.18rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: #1a1a1a;
  }

  .logo-green { color: #1f5b3a; }

  .logo-powered {
    display: block;
    font-family: 'DM Sans', Arial, sans-serif;
    font-size: 10px;
    font-weight: 500;
    color: #888;
    letter-spacing: 0.04em;
    margin-top: 1px;
  }

  .logo-dna {
    color: #4ead72;
    font-weight: 700;
  }

  .signup-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: color 0.2s;
  }

  .signup-btn:hover { color: var(--accent-red); }
  .signup-btn svg { width: 18px; height: 18px; }

  .form-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 60px;
    animation: fadeUp 0.65s 0.2s cubic-bezier(0.16,1,0.3,1) both;
  }

  .form-title {
    font-size: 44px;
    font-weight: 800;
    color: #1a1a1a;
    letter-spacing: -0.03em;
    margin-bottom: 32px;
  }

  .field {
    position: relative;
    margin-bottom: 14px;
  }

  .field input {
    width: 100%;
    height: 58px;
    border-radius: 40px;
    border: 1.5px solid var(--border-light);
    background: var(--input-bg);
    padding: 0 22px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    color: #1a1a1a;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    -webkit-appearance: none;
  }

  .field input::placeholder { color: #9ca3af; font-weight: 400; }

  .field input:focus {
    border-color: #d1d5db;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(255,69,0,0.06);
  }

  .toggle-pw {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    display: flex;
    align-items: center;
    padding: 4px;
    transition: color 0.2s;
  }

  .toggle-pw:hover { color: #4b5563; }
  .toggle-pw svg { width: 20px; height: 20px; }

  .forgot {
    display: inline-block;
    font-size: 13.5px;
    font-weight: 600;
    color: black;
    text-decoration: none;
    margin: 6px 4px 20px;
    transition: opacity 0.2s;
  }

  .forgot:hover { opacity: 0.75; }

  .btn-signin {
    width: 80%;
    height: 60px;
    border: none;
    border-radius: 40px;
    background: rgba(39, 39, 66, 0.562);
    color: var(--white);
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.01em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    margin-left: 85px;
  }

  .btn-signin::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(95deg, rgba(255,255,255,0.12) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .btn-signin:hover { transform: translateY(-1px); }
  .btn-signin:hover::before { opacity: 1; }
  .btn-signin:active { transform: translateY(0); }
  .btn-signin:disabled { cursor: default; opacity: 0.92; }

  .btn-signin .arrow-icon {
    width: 20px;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .btn-signin .arrow-icon svg { width: 12px; height: 12px; }

  .right-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 44px;
    animation: fadeUp 0.65s 0.3s cubic-bezier(0.16,1,0.3,1) both;
  }

  .footer-copy { font-size: 12px; color: #9ca3af; font-weight: 400; }

  .footer-links {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .footer-links a {
    font-size: 12.5px;
    font-weight: 500;
    color: #374151;
    text-decoration: none;
    transition: color 0.2s;
  }

  .footer-links a:hover { color: var(--accent-red); }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12.5px;
    font-weight: 500;
    color: #374151;
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: color 0.2s;
  }

  .lang-btn:hover { color: var(--accent-red); }
  .lang-btn svg { width: 12px; height: 12px; }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }

  .shake { animation: shake 0.4s ease-out; }
  .field input.error { border-color: #ef4444 !important; background: #fff5f5 !important; }
  .error-msg { font-size: 12px; color: #ef4444; margin: 4px 6px 0; font-weight: 500; display: none; }
  .error-msg.show { display: block; }

  .spinner {
    width: 18px;
    height: 18px;
    border: 2.5px solid rgba(255,255,255,0.4);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: none;
  }

  .spinner.show { display: block; }

  @keyframes spin { to { transform: rotate(360deg); } }

  @media (max-width: 760px) {
    .card { flex-direction: column; height: 100vh; border-radius: 0; }
    .left { display: none; }
    .right { border-radius: 20px; }
    .form-area { padding: 0 28px 20px; }
    .right-nav { padding: 22px 28px; }
    .right-footer { padding: 16px 28px; }
    .form-title { font-size: 34px; }
    .btn-signin { width: 100%; margin-left: 0; }
  }
`;

function createUserId(email) {
  const cleaned = email.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
  const suffix = cleaned || "USER0001";
  return `USR-${suffix}`;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (document.getElementById("login-page-styles")) return;
    const style = document.createElement("style");
    style.id = "login-page-styles";
    style.textContent = LOGIN_CSS;
    document.head.appendChild(style);
    return () => document.getElementById("login-page-styles")?.remove();
  }, []);

  const clearFieldError = (field) => {
    if (field === "email") setEmailError(false);
    if (field === "password") setPasswordError(false);
  };

  const handleSignin = () => {
    setEmailError(false);
    setPasswordError(false);

    const trimmedEmail = email.trim();
    let valid = true;

    if (!trimmedEmail) {
      setEmailError(true);
      valid = false;
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    }

    if (!valid) {
      setShake(true);
      window.setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);

    window.setTimeout(() => {
      const userId = createUserId(trimmedEmail);
      const categories = ["Health", "Nutrition", "Other", "Physical Characteristics"];
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("userCategories", JSON.stringify(categories));
      navigate("/profile");
    }, 1800);
  };

  const handleForgot = (event) => {
    event.preventDefault();
    window.alert("A reset link will be sent to your email.");
  };

  const handleSignup = () => {
    window.alert("Redirecting to Sign Up...");
  };

  return (
    <div className="login-shell">
      <div className={`card${shake ? " shake" : ""}`}>
        <div className="left">
          <img src="/images/loginpic.jpg" className="bg-img loginpicture" alt="Background" />
          <div className="ring-outer"></div>
          <span className="left-tag">Global payments made simple - online payment solutions for you.</span>

          <div className="hero-text">
            <h1><span className="wheat-text">Personalized Health</span><br />Begins in Your DNA.</h1>
          </div>

          <div className="phone-wrap">
            <svg className="phone-svg" viewBox="0 0 220 440" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradPhone" x1="96" y1="381" x2="124" y2="409" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ff4500" />
                  <stop offset="50%" stopColor="#ffaa00" />
                  <stop offset="100%" stopColor="#00c853" />
                </linearGradient>
              </defs>
              <rect x="4" y="4" width="212" height="432" rx="32" fill="#111111" />
              <rect x="4" y="4" width="212" height="432" rx="32" stroke="#2e2e2e" strokeWidth="6" />
              <rect x="12" y="12" width="196" height="416" rx="27" fill="#0e0e0e" />
              <rect x="72" y="20" width="76" height="22" rx="11" fill="#0e0e0e" />
              <text x="22" y="72" fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">Week 4-10 July</text>
              <text x="22" y="100" fontFamily="DM Sans,sans-serif" fontSize="30" fontWeight="800" fill="white">897.00</text>
              <text x="155" y="84" fontFamily="DM Sans,sans-serif" fontSize="10" fill="rgba(255,255,255,0.4)">€</text>
              <rect x="22" y="148" width="18" height="50" rx="5" fill="#ff4500" opacity="0.7" />
              <rect x="46" y="135" width="18" height="63" rx="5" fill="#ff4500" opacity="0.85" />
              <rect x="70" y="120" width="18" height="78" rx="5" fill="#ff4500" />
              <rect x="94" y="142" width="18" height="56" rx="5" fill="#ff4500" opacity="0.75" />
              <rect x="118" y="128" width="18" height="70" rx="5" fill="#ff4500" opacity="0.9" />
              <rect x="142" y="155" width="18" height="43" rx="5" fill="#ff4500" opacity="0.6" />
              <rect x="166" y="140" width="18" height="58" rx="5" fill="#ff4500" opacity="0.8" />
              <text x="22" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Mon</text>
              <text x="46" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Tue</text>
              <text x="70" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Wed</text>
              <text x="94" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Thu</text>
              <text x="118" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Fri</text>
              <text x="142" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Sat</text>
              <text x="166" y="212" fontFamily="DM Sans,sans-serif" fontSize="7.5" fill="rgba(255,255,255,0.35)">Sun</text>
              <text x="22" y="238" fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(255,255,255,0.4)">Category</text>
              <rect x="22" y="246" width="82" height="46" rx="10" fill="#1a1a1a" />
              <text x="34" y="264" fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(255,255,255,0.5)">Travel</text>
              <text x="34" y="280" fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="700" fill="white">950.00</text>
              <rect x="112" y="246" width="82" height="46" rx="10" fill="#1a1a1a" />
              <text x="122" y="264" fontFamily="DM Sans,sans-serif" fontSize="9" fill="rgba(255,255,255,0.5)">Shopping</text>
              <text x="122" y="280" fontFamily="DM Sans,sans-serif" fontSize="11" fontWeight="700" fill="white">785.00</text>
              <rect x="22" y="302" width="56" height="14" rx="4" fill="#1e1e1e" />
              <text x="30" y="313" fontFamily="DM Sans,sans-serif" fontSize="7" fill="rgba(255,255,255,0.3)">50.00</text>
              <rect x="12" y="368" width="196" height="60" rx="0" fill="#111111" />
              <rect x="12" y="368" width="196" height="1" fill="rgba(255,255,255,0.06)" />
              <rect x="30" y="384" width="16" height="14" rx="3" fill="rgba(255,255,255,0.15)" />
              <rect x="58" y="384" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.25)" />
              <rect x="67" y="384" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.25)" />
              <rect x="58" y="393" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.25)" />
              <rect x="67" y="393" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.25)" />
              <circle cx="110" cy="393" r="13" fill="#0e0e0e" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="110" cy="393" r="8" fill="none" stroke="url(#logoGradPhone)" strokeWidth="2.5" />
              <circle cx="144" cy="390" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="152" cy="390" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="160" cy="390" r="3" fill="rgba(255,255,255,0.25)" />
              <circle cx="178" cy="384" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="184" cy="384" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="178" cy="390" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="184" cy="390" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="178" cy="396" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="184" cy="396" r="2" fill="rgba(255,255,255,0.2)" />
              <rect x="80" y="430" width="60" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
            </svg>
          </div>

          <div className="a11y-icon" title="Accessibility">
            <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,165,0,0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v6m-4-4 4 1 4-1M10 17l-2 4m4-4v4m2-4 2 4" />
            </svg>
          </div>
        </div>

        <div className="right">
          <nav className="right-nav">
            <Link className="logo" to="/">
              <svg className="logo-icon" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="payGrad" x1="3" y1="3" x2="27" y2="27" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ff4500" />
                    <stop offset="33%" stopColor="#ffaa00" />
                    <stop offset="66%" stopColor="#00cc66" />
                    <stop offset="100%" stopColor="#0099ff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="logo-text-wrap">
                <span className="logo-text"><span className="logo-green">Polygenic</span> RiskScore</span>
                <span className="logo-powered">powered by <span className="logo-dna">DNA GTx</span></span>
              </div>
            </Link>
            <button className="signup-btn" type="button" onClick={handleSignup}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Sign Up
            </button>
          </nav>

          <div className="form-area">
            <h2 className="form-title">Sign In</h2>

            <div className="field" id="emailField">
              <input
                type="text"
                id="emailInput"
                placeholder="Email or Username"
                autoComplete="username"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearFieldError("email");
                }}
                onKeyDown={(event) => event.key === "Enter" && handleSignin()}
                className={emailError ? "error" : ""}
              />
              <span className={`error-msg${emailError ? " show" : ""}`} id="emailError">Please enter your email or username.</span>
            </div>

            <div className="field" id="passField">
              <input
                type={showPassword ? "text" : "password"}
                id="passInput"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  clearFieldError("password");
                }}
                onKeyDown={(event) => event.key === "Enter" && handleSignin()}
                className={passwordError ? "error" : ""}
              />
              <button className="toggle-pw" id="togglePw" type="button" aria-label="Toggle password visibility" onClick={() => setShowPassword((prev) => !prev)}>
                <svg id="eyeOff" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: showPassword ? "none" : "block" }}>
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
                <svg id="eyeOn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: showPassword ? "block" : "none" }}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <span className={`error-msg${passwordError ? " show" : ""}`} id="passError">Please enter your password.</span>
            </div>

            <a href="#" className="forgot" onClick={handleForgot}>Forgot password?</a>

            <button className="btn-signin" id="signinBtn" type="button" onClick={handleSignin} disabled={loading}>
              <span className="arrow-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </span>
              <span id="btnText">{loading ? "Signing in..." : "Sign In"}</span>
              <div className={`spinner${loading ? " show" : ""}`} id="spinner"></div>
            </button>
          </div>

          <footer className="right-footer">
            <span className="footer-copy">© Prs Inc.</span>
            <div className="footer-links">
              <a href="#">Contact Us</a>
              <button className="lang-btn" type="button">
                English
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
