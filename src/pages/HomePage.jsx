/**
 * GeneSkin â€” Full React Conversion
 * Exact replica of the original HTML/CSS/JS
 * Single-file SPA using useState-based page routing
 *
 * Usage: drop this file into your React project as a page/component.
 * Add the Google Fonts link to your index.html <head>:
 *   <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
 */

import { useEffect, useRef, useState, useCallback, useMemo } from "react";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   GLOBAL STYLES injected once into <head>
   (mirrors style.css exactly)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream:   #f5f1eb;
    --white:   #ffffff;
    --dark:    #1a1a1a;
    --mid:     #3d3d3d;
    --light:   #8a8a8a;
    --accent:  #3d6b5e;
    --accent2: #a8c5bd;
    --warm:    #e8e0d5;
    --line:    #d9d3cb;
    --c-vh: #E65100;
    --c-hi: #F2A65A;
    --c-md: #BDBDBD;
    --c-lo: #9B8FBF;
    --c-vl: #6A4AA3;
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--dark); overflow-x: hidden; }

  /* NAV */
  .gs-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 1.2rem 8vw;
    background: rgba(245,241,235,0.92);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
    transition: all .3s ease;
  }
  .gs-nav.nav-transparent {
    background: transparent; backdrop-filter: none;
    box-shadow: none; border-bottom-color: transparent;
  }
  .gs-nav.nav-transparent .nav-logo,
  .gs-nav.nav-transparent .nav-logo span,
  .gs-nav.nav-transparent .nav-links a,
  .gs-nav.nav-transparent .btn-outline { color: #fff; border-color: rgba(255,255,255,0.7); }
  .gs-nav.nav-transparent .nav-hamburger span { background: #fff; }

  .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.45rem; font-weight: 500; color: var(--dark); text-decoration: none; cursor: pointer; }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    font-size: 0.78rem; font-weight: 400; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--mid);
    text-decoration: none; position: relative; transition: color .25s; cursor: pointer;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
    height: 1px; background: var(--accent); transform: scaleX(0); transition: transform .3s ease;
  }
  .nav-links a:hover { color: var(--accent); }
  .nav-links a:hover::after { transform: scaleX(1); }

  .btn-outline {
    background: transparent; color: var(--dark);
    border: 1px solid rgba(29,28,28,0.5); padding: 0.9rem 2rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.8rem;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; transition: all .25s;
  }
  .btn-outline:hover { border-color: var(--accent2); color: var(--accent2); }
  .btn-outline.sm { font-size: 0.78rem; padding: 0.5rem 1.2rem; }

  .nav-cta {
    background: var(--accent); color: #fff;
    border: none; padding: 0.65rem 1.5rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.78rem;
    letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer;
    transition: background .25s, transform .2s;
  }
  .nav-cta:hover { background: #2e5245; transform: translateY(-1px); }

  /* HAMBURGER */
  .nav-hamburger {
    display: none; flex-direction: column; gap: 5px;
    cursor: pointer; padding: 4px; background: none; border: none; z-index: 200;
  }
  .nav-hamburger span { display: block; width: 24px; height: 2px; background: var(--dark); transition: all .3s ease; }
  .nav-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
  .nav-hamburger.open span:nth-child(2) { opacity: 0; }
  .nav-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

  /* MOBILE MENU */
  .mobile-menu {
    display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: var(--cream); z-index: 150;
    flex-direction: column; align-items: center; justify-content: center;
    gap: 2.5rem; opacity: 0; pointer-events: none; transition: opacity .3s ease;
  }
  .mobile-menu.open { opacity: 1; pointer-events: all; }
  .mobile-menu a {
    font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300;
    color: var(--dark); text-decoration: none; letter-spacing: 0.05em; transition: color .2s; cursor: pointer;
  }
  .mobile-menu a:hover { color: var(--accent); }
  .mobile-menu-cta { margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem; width: 80%; align-items: center; }

  /* HERO */
  .hero { min-height: 100vh; padding-top: 80px; position: relative; overflow: hidden; }
  .hero-slideshow { position: absolute; inset: 0; z-index: 0; }
  .hero-slide {
    position: absolute; inset: 0;
    background-size: cover; background-position: center;
    opacity: 0; transition: opacity 1.2s ease;
  }
  .hero-slide.active { opacity: 1; }
  .hero-overlay { position: absolute; inset: 0; }
  .hero-content {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
    padding: 6rem 8vw; min-height: 100vh;
    animation: fadeUp .9s ease both;
  }
  .hero-tag {
    display: inline-flex; align-items: center; gap: 0.6rem;
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent2); margin-bottom: 1.8rem;
  }
  .hero-tag::before { content: ''; display: block; width: 28px; height: 1px; background: var(--accent2); }
  .hero h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem,5.5vw,5.2rem); font-weight: 300; line-height: 1.12;
    letter-spacing: -0.01em; color: #fff; margin-bottom: 1.8rem;
  }
  .hero h1 em { font-style: italic; color: var(--accent2); }
  .hero-desc { font-size: 1rem; font-weight: 300; line-height: 1.75; color: rgba(255,255,255,0.75); max-width: 520px; margin-bottom: 2.8rem; }
  .hero-btns { display: flex; gap: 1rem; align-items: center; }
  .hero-dots { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.6rem; z-index: 10; }
  .hero-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.35); cursor: pointer; transition: background .3s; }
  .hero-dot.active { background: #fff; }

  .slide-overlay-text {
    position: absolute; z-index: 2; bottom: 12vh; right: 8vw;
    max-width: 360px; text-align: right;
    opacity: 0; transform: translateY(18px);
    transition: opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s;
    pointer-events: none;
  }
  .hero-slide.active .slide-overlay-text { opacity: 1; transform: translateY(0); }
  .slide-tag {
    display: inline-block; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent2); margin-bottom: 0.75rem;
    border: 1px solid rgba(168,197,189,0.6); padding: 0.3rem 0.8rem;
  }
  .slide-headline {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem,2.8vw,2.8rem); font-weight: 300; line-height: 1.18; color: #fff; margin-bottom: 0.8rem;
  }
  .slide-headline em { font-style: italic; color: var(--accent2); }
  .slide-body { font-size: 0.82rem; font-weight: 300; line-height: 1.7; color: rgba(255,255,255,0.72); }

  /* STATS STRIP */
  .stats-strip { background: var(--dark); display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid rgba(255,255,255,0.08); }
  .stat-item { padding: 2.2rem 2rem; text-align: center; border-right: 1px solid rgba(255,255,255,0.08); }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 2.5rem; font-weight: 300; color: var(--accent2); line-height: 1; }
  .stat-label { font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.45); margin-top: 0.5rem; }
  .stat-item.stat-tagline .stat-num,
  .stat-item.stat-tagline .stat-label {
    font-family: 'DM Sans', sans-serif; font-size: 0.72rem;
    letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent2); line-height: 1.4;
  }
  .stat-item.stat-tagline .stat-label { margin-top: 0.35rem; }

  /* SECTION COMMONS */
  section { padding: 7rem 8vw; }
  .section-tag {
    display: inline-flex; align-items: center; gap: 0.6rem;
    font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--accent); margin-bottom: 1.2rem;
  }
  .section-tag::before { content: ''; display: block; width: 28px; height: 1px; background: var(--accent); }
  h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.4rem,3.8vw,3.8rem); font-weight: 300; line-height: 1.15; color: var(--dark); }
  h2 em { font-style: italic; color: var(--accent); }

  /* ABOUT */
  .about { background: var(--white); }
  .about-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
  .about-img-wrap { position: relative; aspect-ratio: 3/4; overflow: hidden; }
  .hosiptalin { transform: scale(0.7); object-position: right; width: 100%; }
  .about-content { padding-right: 2rem; }
  .about-content h2 { margin-bottom: 1.5rem; }
  .about-content p { font-size: 0.95rem; font-weight: 300; line-height: 1.85; color: var(--mid); margin-bottom: 1.2rem; }
  .credentials { display: flex; flex-direction: column; gap: 0.8rem; margin: 2rem 0; }
  .credential { display: flex; align-items: center; gap: 1rem; font-size: 0.85rem; color: var(--mid); }
  .credential::before { content: ''; flex-shrink: 0; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }

  /* BOOKING */
  .booking { background: var(--accent); display: grid; grid-template-columns: 1fr 1fr; padding: 0; overflow: hidden; }
  .booking-left { padding: 6rem 8vw; display: flex; flex-direction: column; justify-content: center; }
  .booking-left .section-tag { color: var(--accent2); }
  .booking-left .section-tag::before { background: var(--accent2); }
  .booking-left h2 { color: #fff; margin-bottom: 1.5rem; }
  .booking-left p { font-size: 0.95rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.7); max-width: 380px; margin-bottom: 2.5rem; }
  .btn-light {
    background: #fff; color: var(--dark); border: none; padding: 1rem 2.2rem;
    font-family: 'DM Sans', sans-serif; font-size: 0.8rem; letter-spacing: 0.1em;
    text-transform: uppercase; cursor: pointer; transition: all .25s; display: inline-block; width: fit-content;
  }
  .btn-light:hover { background: var(--dark); color: #fff; transform: translateY(-2px); }
  .booking-form { background: var(--cream); padding: 5rem 4rem; display: flex; flex-direction: column; gap: 1.2rem; }
  .booking-form h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: var(--dark); margin-bottom: 0.5rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
  .form-group label { font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--light); }
  .form-group input, .form-group select {
    background: var(--white); border: 1px solid var(--line);
    padding: 0.8rem 1rem; font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; color: var(--dark); outline: none; transition: border-color .2s;
    appearance: none; -webkit-appearance: none;
  }
  .form-group input:focus, .form-group select:focus { border-color: var(--accent); }
  .form-group.full { grid-column: span 2; }
  .submit-btn {
    grid-column: span 2; background: var(--dark); color: #fff; border: none;
    padding: 1rem; font-family: 'DM Sans', sans-serif; font-size: 0.8rem;
    letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; margin-top: 0.5rem; transition: background .25s;
  }
  .submit-btn:hover { background: var(--accent); }

  /* CINEMA */
  .prs-cinema-scroll-wrapper { position: relative; height: 260vh; }
  .prs-cinema-scroll-wrapper { position: relative; height: 260vh; }
  .prs-cinema { position: sticky; top: 0; height: 120vh; width: 100%; overflow: hidden; }
  .prs-cinema-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.2s linear; will-change: transform; }
  .prs-cinema-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.85) 100%);
  }
  .prs-cinema-scroll-hint {
    position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
    text-align: center; z-index: 3; pointer-events: none; transition: opacity 0.5s ease;
  }
  .prs-hint-text { display: block; font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 0.6rem; }
  .prs-cinema-progress-track { width: 120px; height: 2px; background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden; margin: 0 auto; }
  .prs-cinema-progress-bar { height: 100%; background: rgba(255,255,255,0.7); border-radius: 2px; transition: width 0.1s linear; }
  .prs-cinema-content {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
    z-index: 2; text-align: center; padding: 0 8vw 10vh; max-width: 880px; width: 100%;
    display: flex; flex-direction: column; gap: 18px; transition: transform 0.2s linear; will-change: transform;
  }
  .prs-cinema-line {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.35rem,2.8vw,2.5rem); font-weight: 300; color: #fff;
    line-height: 1.25; letter-spacing: 0.04em; text-transform: uppercase;
    opacity: 0; transform: translateY(36px); filter: blur(4px);
    transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1), filter 0.8s ease;
  }
  .prs-cinema-line--sub {
    font-family: 'DM Sans', sans-serif; font-size: clamp(0.9rem,1.25vw,1rem);
    font-weight: 300; color: rgba(255,255,255,0.72); line-height: 1.8;
    letter-spacing: 0.03em; text-transform: none; max-width: 620px; margin: 0 auto;
  }
  .prs-cinema-message-stage {
    min-height: 9.5rem; display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .prs-cinema-message-shell {
    width: 100%; animation: prsCinemaMessageIn 0.55s cubic-bezier(0.22,1,0.36,1);
  }
  .prs-cinema-line--step,
  .prs-cinema-line--final { max-width: 560px; }
  .prs-cinema-line--final {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(1rem,1.5vw,1.3rem);
    letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.92);
  }
  .prs-cinema-line.in-view { opacity: 1; transform: translateY(0); filter: blur(0); }
  @keyframes prsCinemaMessageIn {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* TESTIMONIALS */
  .testimonials { background: var(--dark); padding: 7rem 8vw; }
  .test-head { text-align: center; margin-bottom: 4rem; }
  .test-head .section-tag { justify-content: center; color: var(--accent2); }
  .test-head .section-tag::before { background: var(--accent2); }
  .test-head h2 { color: #fff; }
  .testimonials-marquee {
    overflow: hidden; position: relative;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .testimonials-track {
    display: flex; gap: 12px; width: max-content;
    animation: testimonialsScroll 34s linear infinite;
  }
  .testimonials-marquee:hover .testimonials-track { animation-play-state: paused; }
  .test-card {
    background: rgba(255,255,255,0.04); padding: 3rem 2.5rem;
    border: 1px solid rgba(255,255,255,0.07);
    transition: background .3s, border-color .3s;
    gap: 0.75rem; display: flex; flex-direction: column; justify-content: space-between;
    flex: 0 0 360px; min-height: 100%;
  }
  .test-card:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.15); }
  .test-stars { color: var(--accent2); font-size: 0.8rem; letter-spacing: 0.15em; margin-bottom: 1.5rem; }
  .test-text { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 300; font-style: italic; line-height: 1.7; color: rgba(255,255,255,0.85); margin-bottom: 2rem; }
  .test-author { display: flex; align-items: center; gap: 1rem; }
  .test-avatar { width: 42px; height: 42px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 500; color: #fff; flex-shrink: 0; }
  .test-name { font-size: 0.85rem; font-weight: 500; color: rgba(255,255,255,0.9); }
  .test-role { font-size: 0.72rem; color: rgba(255,255,255,0.4); margin-top: 0.15rem; }
  @keyframes testimonialsScroll { from { transform: translateX(0); } to { transform: translateX(calc(-50% - 6px)); } }

  /* TEAM */
  .team { background: var(--white); }
  .team-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 4rem; }
  .team-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2rem; }
  .team-card { position: relative; overflow: hidden; }
  .team-photo {
    aspect-ratio: 3/4; overflow: hidden;
    background: linear-gradient(150deg,#a8c5bd 0%,#2e5245 100%);
    display: flex; align-items: center; justify-content: center;
    font-size: 4rem; color: rgba(255,255,255,0.3);
  }
  .team-overlay {
    position: absolute; inset: 0; background: var(--accent); opacity: 0;
    display: flex; align-items: center; justify-content: center; gap: 1.2rem; transition: opacity .3s;
  }
  .team-card:hover .team-overlay { opacity: 0.92; }
  .team-social {
    width: 38px; height: 38px; border: 1px solid rgba(255,255,255,0.5);
    display: flex; align-items: center; justify-content: center;
    color: #fff; font-size: 0.8rem; cursor: pointer; transition: background .2s;
  }
  .team-social:hover { background: rgba(255,255,255,0.2); }
  .team-info { padding: 1.2rem 0 0; }
  .team-name { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: var(--dark); }
  .team-specialty { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-top: 0.3rem; }

  /* FOOTER */
  .gs-footer { background: #111; padding: 5rem 8vw 2.5rem; display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr; gap: 4rem; }
  .foot-brand .nav-logo { color: #fff; font-size: 1.6rem; display: block; margin-bottom: 1.2rem; }
  .foot-brand p { font-size: 0.85rem; font-weight: 300; line-height: 1.8; color: rgba(255,255,255,0.4); max-width: 260px; margin-bottom: 2rem; }
  .foot-col h4 { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 1.5rem; }
  .foot-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .foot-col ul a { font-size: 0.85rem; font-weight: 300; color: rgba(255,255,255,0.6); text-decoration: none; transition: color .2s; cursor: pointer; }
  .foot-col ul a:hover { color: var(--accent2); }
  .foot-bottom {
    grid-column: span 4; margin-top: 3rem; padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.08);
    display: flex; justify-content: space-between; align-items: center;
  }
  .foot-bottom p { font-size: 0.75rem; color: rgba(255,255,255,0.3); }
  .foot-socials { display: flex; gap: 1rem; }
  .foot-social {
    width: 34px; height: 34px; border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    color: rgba(255,255,255,0.4); font-size: 0.8rem; cursor: pointer; transition: all .2s;
  }
  .foot-social:hover { border-color: var(--accent2); color: var(--accent2); }

  /* ALLERGIES */
  .allergies-section { background: var(--cream); padding-top: 0; }
  .allergy-head {
    display: flex; justify-content: space-between; align-items: flex-end;
    margin-bottom: 4rem; min-height: 300px; padding: 7.5rem 3rem 3rem;
    width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw);
    background: url('/images/sthescope.png') center 72%/cover no-repeat;
    border: 1px solid var(--line);
  }
  .traits-layout { display: grid; grid-template-columns: minmax(220px,300px) minmax(0,1fr); gap: 2rem; align-items: start; }
  .jump-menu-container {
    width: 100%; max-width: 300px; font-family: sans-serif;
    border: 1px solid #887a87; border-radius: 4px; overflow: hidden;
    background: #969280ce; position: sticky; top: 100px;
  }
  .jump-menu-header { background-color: #204e08; color: #fff; padding: 15px 20px; font-weight: 700; font-size: 1.1rem; }
  .jump-menu-list { list-style: none; padding: 0; margin: 0; background: var(--warm); }
  .jump-menu-list li { border-left: 5px solid transparent; transition: all 0.2s ease; }
  .jump-menu-list li.active { border-left-color: #204e08; }
  .jump-menu-list li.active a { color: #000; font-weight: 700; }
  .jump-menu-list li a { display: block; padding: 12px 20px; text-decoration: none; color: #767676; font-size: 0.95rem; cursor: pointer; }
  .jump-menu-list li a:hover { background-color: #f9f9f9; color: #333; }
  .traits-list { display: flex; flex-direction: column; gap: 1px; background: var(--line); }
  .trait-row {
    background: var(--cream); padding: 2rem 2.5rem;
    display: grid; grid-template-columns: auto 1fr auto; gap: 2rem; align-items: center;
    position: relative; overflow: hidden; cursor: pointer; transition: background .3s; width: 100%;
  }
  .trait-row::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; }
  .trait-row.vh::before { background: var(--c-vh); }
  .trait-row.hi::before { background: var(--c-hi); }
  .trait-row.md::before { background: var(--c-md); }
  .trait-row.lo::before { background: var(--c-lo); }
  .trait-row.vl::before { background: var(--c-vl); }
  .trait-row:hover { background: var(--white); }
  .rbadge { padding: 0.4rem 1rem; font-size: 0.68rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500; color: white; min-width: 110px; text-align: center; white-space: nowrap; }
  .b-vh { background: var(--c-vh); }
  .b-hi { background: var(--c-hi); }
  .b-md { background: var(--c-md); }
  .b-lo { background: var(--c-lo); }
  .b-vl { background: var(--c-vl); }
  .tname { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 400; color: var(--dark); margin-bottom: 0.35rem; }
  .tdesc { font-size: 0.85rem; font-weight: 300; color: var(--light); line-height: 1.7; }
  .tarrow { font-size: 1.2rem; color: var(--light); transition: transform .3s, color .3s; }
  .trait-row:hover .tarrow { transform: translateX(5px); color: var(--accent); }

  /* TRAIT DETAIL */
  .detail-section { background: var(--white); }
  .detail-inner { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; margin-top: 3rem; }
  .detail-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem,3.5vw,3rem); font-weight: 300; color: var(--dark); margin-bottom: 1.2rem; line-height: 1.2; }
  .detail-sub { font-size: 0.95rem; font-weight: 300; color: var(--mid); line-height: 1.85; max-width: 700px; margin-bottom: 1.8rem; }
  .risk-pill { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.55rem 1.4rem; font-size: 0.72rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 500; color: white; background: var(--c-vh); margin-bottom: 0.5rem; }
  .card { background: var(--cream); padding: 2.5rem; margin-bottom: 1.8rem; }
  .card-title { font-family: 'Cormorant Garamond', serif; font-size: 1.55rem; font-weight: 400; color: var(--dark); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.6rem; }
  .recs { display: flex; flex-direction: column; gap: 1.2rem; }
  .rec { padding-left: 1.4rem; position: relative; line-height: 1.85; font-size: 0.9rem; font-weight: 300; color: var(--mid); }
  .rec::before { content: ''; position: absolute; left: 0; top: 0.65rem; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
  .gtable { width: 100%; border-collapse: collapse; margin-top: 0.8rem; }
  .gtable th, .gtable td { padding: 0.85rem 1rem; text-align: left; border-bottom: 1px solid var(--line); }
  .gtable th { background: var(--warm); font-weight: 500; color: var(--mid); font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; }
  .gtable td { font-family: 'DM Mono', monospace; font-size: 0.81rem; color: var(--mid); }
  .gtable tr:hover td { background: var(--white); }
  .gbadge { display: inline-block; background: var(--accent); color: white; padding: 0.15rem 0.55rem; font-size: 0.72rem; font-weight: 500; letter-spacing: 0.05em; }
  .pop-card { background: var(--cream); padding: 2rem 2.2rem; margin-bottom: 1.8rem; }
  .pop-title { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 400; color: var(--dark); margin-bottom: 0.4rem; }
  .pop-sub { font-size: 0.83rem; font-weight: 300; color: var(--light); margin-bottom: 1.5rem; }
  .pop-bars { display: flex; flex-direction: column; gap: 0.9rem; }
  .pop-row { display: flex; align-items: center; gap: 0.9rem; }
  .pop-lbl { min-width: 88px; font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--light); }
  .pop-track { flex: 1; height: 26px; background: var(--warm); overflow: hidden; }
  .pop-fill { height: 100%; background: var(--c-vh); display: flex; align-items: center; justify-content: flex-end; padding-right: 0.7rem; color: white; font-weight: 500; font-size: 0.78rem; }
  .pop-fill.you { background: var(--accent); }
  .insight { background: #f0f7f5; padding: 1.5rem 1.6rem; border-left: 3px solid var(--accent); font-size: 0.88rem; font-weight: 300; line-height: 1.75; color: var(--mid); }
  .insight strong { color: var(--dark); font-weight: 500; }
  .res-block { background: var(--cream); padding: 1.5rem 1.6rem; border-left: 3px solid var(--line); }
  .res-ttl { font-weight: 500; color: var(--dark); margin-bottom: 0.3rem; font-size: 0.9rem; line-height: 1.5; }
  .res-doi { font-size: 0.75rem; color: var(--light); margin-bottom: 0.9rem; letter-spacing: 0.08em; }
  .res-body { font-size: 0.85rem; font-weight: 300; line-height: 1.8; color: var(--mid); margin-bottom: 0.9rem; }
  .res-link { display: inline-block; color: var(--accent); font-size: 0.85rem; font-weight: 500; text-decoration: none; }
  .res-link:hover { text-decoration: underline; }

  /* COMPARISON */
  .comparison-section { background: var(--cream); padding-top: 6.5rem; }
  .category-detail { padding: 0 8vw 3rem; min-height: 320vh; position: relative; }
  .category-hero {
    position: sticky;
    top: 5.75rem;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 2rem;
    align-items: center;
    min-height: calc(100vh - 7rem);
  }
  .category-copy { padding: 2rem 0; }
  .category-copy h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 5vw, 5rem);
    font-weight: 300;
    line-height: 0.95;
    margin-bottom: 1.2rem;
    color: var(--dark);
  }
  .category-copy h1 em { font-style: italic; color: var(--accent); }
  .category-copy p { font-size: 1rem; line-height: 1.9; color: rgba(26,26,26,0.72); max-width: 640px; }
  .category-copy-note {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 1.4rem;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    background: rgba(61,107,94,0.08);
    color: var(--accent);
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .category-copy-note::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: currentColor;
    box-shadow: 0 0 0 6px rgba(61,107,94,0.12);
  }
  .category-panel {
    position: relative;
    background: rgba(255,255,255,0.82);
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 28px;
    padding: 0;
    min-height: clamp(360px, 72vh, 720px);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 40px rgba(30,34,28,0.08);
    overflow: hidden;
  }
  .category-sequence-shell {
    position: relative;
    width: 100%;
    min-height: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(160deg, #25312d 0%, #161d1a 100%);
  }
  .category-sequence-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .category-sequence-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    color: #fff;
  }
  .category-sequence-meta strong {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .category-sequence-meta span {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.65);
  }
  .category-sequence-progress {
    height: 3px;
    border-radius: 999px;
    overflow: hidden;
    background: rgba(255,255,255,0.16);
  }
  .category-sequence-progress span {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(168,197,189,0.7), #ffffff);
    transform-origin: left center;
  }
  .category-sequence-ui p {
    font-size: 0.82rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.72);
  }
  .category-section { padding: 0 8vw 5rem; }
  .auto-tabs-page-wrapper {
    background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,244,239,0.98));
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 30px;
    box-shadow: 0 18px 40px rgba(30,34,28,0.07);
    overflow: hidden;
  }
  .auto-tabs-nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: rgba(245, 239, 231, 0.8);
    border-bottom: 1px solid rgba(31,48,42,0.08);
  }
  .auto-tab-btn {
    border: 0;
    background: rgb(207, 206, 183);
    color: rgba(26,26,26,0.7);
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 170px;
    padding: 0.95rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.45;
    cursor: pointer;
    transition: all 0.35s ease;
  }
  .auto-tab-btn.is-active {
    background: #1f302a;
    color: #fff;
    box-shadow: 0 12px 24px rgba(31,48,42,0.18);
  }
  .auto-tabs-body { position: relative; min-height: 320px; padding: 2rem; }
  .auto-tabs-controls { display: flex; justify-content: center; padding: 0 0 1.4rem; }
  .auto-tabs-progress { position: relative; width: 54px; height: 54px; display: grid; place-items: center; }
  .auto-tabs-progress svg {
    position: absolute;
    inset: 0;
    width: 54px;
    height: 54px;
    transform: rotate(-90deg);
    pointer-events: none;
  }
  .auto-tabs-progress-track { fill: none; stroke: rgba(31,48,42,0.12); stroke-width: 3; }
  .auto-tabs-progress-ring {
    fill: none;
    stroke: #1f302a;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: 157;
    transition: stroke-dashoffset 0.18s linear, stroke 0.25s ease;
  }
  .auto-tabs-progress.is-paused .auto-tabs-progress-ring { stroke: rgba(31,48,42,0.38); }
  .auto-tabs-pause {
    position: relative;
    z-index: 1;
    border: 1px solid rgba(31,48,42,0.12);
    background: rgba(255,255,255,0.92);
    color: #1f302a;
    border-radius: 999px;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .auto-tabs-pause:hover { background: #1f302a; color: #fff; }
  .auto-tab-panel { display: grid; grid-template-columns: 1fr 1.08fr; gap: 2rem; align-items: start; }
  .auto-tab-copy h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    font-weight: 400;
    margin-bottom: 0.9rem;
    line-height: 0.98;
    color: var(--dark);
  }
  .auto-tab-copy p,
  .auto-tab-copy li { font-size: 0.96rem; line-height: 1.9; color: rgba(26,26,26,0.74); }
  .auto-tab-copy p + p { margin-top: 0.85rem; }
  .auto-tab-copy ul { margin: 0; padding-left: 1.15rem; }
  .auto-tab-copy-meta { margin-top: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.65rem; }
  .auto-tab-copy-meta span {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 0.5rem 0.85rem;
    background: rgba(245, 239, 231, 0.92);
    border: 1px solid rgba(31,48,42,0.08);
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: rgba(31,48,42,0.72);
  }
  .auto-tab-aside {
    background: rgba(245, 239, 231, 0.88);
    border: 1px solid rgba(31,48,42,0.08);
    border-radius: 24px;
    padding: 1.4rem;
  }
  .auto-tab-aside img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 18px;
    display: block;
    margin-bottom: 1rem;
  }
  .auto-tab-aside strong {
    display: block;
    margin-bottom: 0.7rem;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(31,48,42,0.62);
  }
  .auto-tab-aside p { margin: 0; font-size: 0.92rem; line-height: 1.85; color: rgba(26,26,26,0.72); }
  .happyhealth {
    position: relative;
    margin: 0 0 4rem;
    border-radius: 28px;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    min-height: 420px;
    box-shadow: 0 18px 40px rgba(30,34,28,0.08);
  }
  .happyhealth img { width: 100%; height: 100%; min-height: 420px; object-fit: cover; display: block; }
  .happyhealth::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 26, 22, 0.08) 10%, rgba(17, 26, 22, 0.64) 100%);
  }
  .happyhealth-copy {
    position: absolute;
    left: 2.2rem;
    right: 2.2rem;
    bottom: 2.2rem;
    z-index: 1;
    max-width: none;
    color: #fff;
    opacity: 0;
    transform: translateY(26px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .happyhealth.reveal.in-view .happyhealth-copy { opacity: 1; transform: translateY(0); }
  .happyhealth-copy strong {
    display: inline-block;
    margin-bottom: 0.8rem;
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(220, 235, 224, 0.9);
  }
  .happyhealth-copy h2 {
    margin: 0 0 0.8rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.2rem, 4vw, 4rem);
    font-weight: 300;
    line-height: 0.95;
    color: #fff;
  }
  .happyhealth-copy p {
    margin: 0;
    font-size: 0.98rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.82);
    max-width: 500px;
  }

  /* CATEGORIES PAGE */
  .categories-page { background: var(--cream); min-height: 100vh; padding: 7.5rem 0 6rem; }
  .categories-page-header { padding: 0 8vw 2.5rem; max-width: 760px; }
  .categories-page-header h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 5.3vw, 4.4rem);
    font-weight: 300;
    line-height: 0.98;
    letter-spacing: -0.03em;
    color: var(--dark);
    margin-bottom: 1rem;
  }
  .categories-page-header h1 em { font-style: italic; color: var(--accent); }
  .categories-page-header p {
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.75;
    color: var(--light);
    max-width: 620px;
  }
  .portfolio-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; padding: 0 8vw; }
  .portfolio-card { position: relative; background: var(--warm); overflow: hidden; cursor: pointer; border: 1px solid var(--line); border-radius: 22px; min-height: 460px; display: flex; flex-direction: column; }
  .portfolio-card:hover .portfolio-card-arrow { background: var(--accent); color: #fff; border-color: var(--accent); transform: rotate(45deg); }
  .portfolio-card:hover .portfolio-card-img { transform: scale(1.04); }
  .portfolio-card-img-wrap { width: 100%; aspect-ratio: 4 / 5; overflow: hidden; background: var(--warm); display: flex; align-items: center; justify-content: center; flex: 1 1 auto; }
  .portfolio-card-img { width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1); transform-origin: center; transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); display: block; }
  .portfolio-card-footer { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem 1.2rem; border-top: 1px solid var(--line); background: rgba(245,241,235,0.96); margin-top: auto; }
  .portfolio-card-meta { display: flex; flex-direction: column; gap: 0.28rem; }
  .portfolio-card-name { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--dark); }
  .portfolio-card-tag { font-family: 'DM Sans', sans-serif; font-size: 0.72rem; font-weight: 300; letter-spacing: 0.04em; color: var(--light); text-transform: uppercase; }
  .portfolio-card-arrow { width: 36px; height: 36px; border-radius: 50%; border: 1.2px solid rgba(26,26,26,0.65); display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.3s ease; color: var(--dark); }
  .illus-health { background: linear-gradient(135deg,#d9ede8 0%,#b5d5cc 100%); }
  .illus-physical { background: linear-gradient(135deg,#e8e0d5 0%,#c9b89e 100%); }
  .illus-nutrition { background: linear-gradient(135deg,#dde8d9 0%,#b0cba6 100%); }
  .illus-other { background: linear-gradient(135deg,#e2dced 0%,#c0b4d4 100%); }

  /* SCROLL REVEAL */
  .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease, transform .7s ease; }
  .reveal.in-view { opacity: 1; transform: translateY(0); }

  /* ANIMATIONS */
  @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
  @keyframes slideRight { from { opacity:0; transform:translateX(-30px); } to { opacity:1; transform:translateX(0); } }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    .about-inner { grid-template-columns: 1fr; gap: 3rem; }
    .about-img-wrap { aspect-ratio: 16/9; }
    .about-content { padding-right: 0; }
    .booking { grid-template-columns: 1fr; }
    .team-grid { grid-template-columns: repeat(2,1fr); }
    .gs-footer { grid-template-columns: 1fr 1fr; }
    .foot-bottom { grid-column: span 2; }
    .detail-inner { grid-template-columns: 1fr; }
    .category-detail { min-height: 260vh; }
    .category-hero { grid-template-columns: 1fr; top: 5.25rem; }
    .auto-tab-panel { grid-template-columns: 1fr; }
    .categories-page { padding-top: 7rem; }
    .categories-page-header { padding: 0 5vw 2.25rem; }
    .portfolio-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0 5vw; }
  }
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    nav > div:last-child .btn-outline,
    nav > div:last-child .nav-cta { display: none; }
    .mobile-menu { display: flex; }
    section { padding: 4rem 5vw; }
    .hero-content { padding: 5rem 5vw 4rem; }
    .hero-btns { flex-direction: column; align-items: stretch; width: 100%; }
    .stats-strip { grid-template-columns: 1fr; }
    .stat-item { padding: 1.3rem 1rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
    .stat-item:last-child { border-bottom: none; }
    .traits-layout { grid-template-columns: 1fr; }
    .jump-menu-container { max-width: 100%; position: static; }
    .trait-row { grid-template-columns: 1fr; gap: 0.8rem; padding: 1.5rem; }
    .tarrow { display: none; }
    .team-head { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
    .team-grid { grid-template-columns: 1fr 1fr; }
    .gs-footer { grid-template-columns: 1fr; gap: 2.5rem; }
    .foot-bottom { grid-column: span 1; flex-direction: column; gap: 1.5rem; align-items: flex-start; }
    .booking { grid-template-columns: 1fr; }
    .booking-left { padding: 4rem 5vw; }
    .booking-form { padding: 3rem 5vw; }
    .form-row { grid-template-columns: 1fr; }
    .form-group.full { grid-column: span 1; }
    .submit-btn { grid-column: span 1; }
    .detail-inner { grid-template-columns: 1fr; gap: 2rem; }
    .categories-page { padding-top: 6.5rem; }
    .categories-page-header { padding: 0 5vw 2rem; }
    .categories-page-header h1 { font-size: clamp(2.6rem, 14vw, 3.7rem); line-height: 1; }
    .portfolio-grid { grid-template-columns: 1fr; gap: 1.1rem; padding: 0 5vw; }
    .portfolio-card { min-height: 0; }
    .portfolio-card-img-wrap { aspect-ratio: 4 / 3; }
    .category-detail { padding: 0 5vw 2.5rem; min-height: 220vh; }
    .category-hero { position: sticky; top: 5rem; min-height: calc(100vh - 6.5rem); }
    .category-section { padding: 0 5vw 4rem; }
    .category-copy-note { letter-spacing: 0.12em; }
    .category-panel { min-height: 420px; }
    .category-sequence-ui { left: 1rem; right: 1rem; bottom: 1rem; }
    .category-sequence-ui p { font-size: 0.76rem; }
    .happyhealth { margin: 0 0 3rem; width: 100vw; margin-left: calc(50% - 50vw); margin-right: calc(50% - 50vw); min-height: 320px; }
    .happyhealth img { min-height: 320px; }
    .happyhealth-copy { left: 1.4rem; right: 1.4rem; bottom: 1.5rem; }
    .auto-tabs-nav { justify-content: center; }
    .auto-tabs-body { padding: 1.35rem; }
    .auto-tab-panel { grid-template-columns: 1fr; }
    .prs-cinema-scroll-wrapper { height: 220vh; }
    .slide-overlay-text { bottom: 14vh; right: 5vw; max-width: 260px; }
    .slide-headline { font-size: 1.6rem; }
  }
  @media (max-width: 480px) {
    .hero h1 { font-size: 2.4rem; }
    h2 { font-size: 2rem; }
    .team-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .category-detail { min-height: 180vh; }
    .category-hero { min-height: auto; }
    .category-panel { min-height: 340px; }
    .category-sequence-meta { align-items: flex-start; flex-direction: column; }
  }
`;

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   DATA
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const HERO_SLIDES = [
  {
    bg: "url('/images/patient.webp')",
    main: true,
  },
  {
    bg: "url('/images/running.png')",
    tag: "Athletic Performance",
    headline: ["Train Smarter,", <em key="e">Not Harder</em>],
    body: "Your genetics reveal injury risk, recovery rate & muscle composition.",
  },
  {
    bg: "url('/images/happyfamily.jpg')",
    tag: "Family Wellness",
    headline: ["Protect What", <><br key="br" /><em key="e">Matters Most</em></>],
    body: "Understand inherited skin risks â€” for you and those you love.",
  },
  {
    bg: "url('/images/running.png')",
    tag: "Nutrition & Diet",
    headline: ["Eat for Your", <><br key="br" /><em key="e">Genetic Type</em></>],
    body: "Discover how your body metabolises fats, carbs & key nutrients.",
  },
];

const TESTIMONIALS = [
  { stars: "â˜…â˜…â˜…â˜…â˜…", text: "My GeneSkin report helped me finally understand why my skin reacts so intensely to certain environments. The recommendations were practical and the science was clear.", author: "Michael Johnson", role: "GeneSkin patient since 2023", avatar: "MJ" },
  { stars: "â˜…â˜…â˜…â˜…â˜…", text: "Understanding my genetic predispositions for dermatological conditions has completely changed my skincare approach. I now work with my dermatologist much more effectively.", author: "Sarah Lee", role: "GeneSkin patient since 2022", avatar: "SL" },
  { stars: "â˜…â˜…â˜…â˜…â˜…", text: "The ancestry comparison was fascinating â€” seeing how my risk profile compares to different populations helped me understand the science behind my results so much better.", author: "Robert Kim", role: "GeneSkin patient since 2021", avatar: "RK" },
  { stars: "*****", text: "I used to guess which products were breaking my skin barrier. After the report, my routine became much simpler and my flare-ups are far less frequent.", author: "Amira Patel", role: "GeneSkin patient since 2024", avatar: "AP" },
  { stars: "*****", text: "What stood out most was how easy the report made complex genetics feel. It gave me a clear plan to discuss with my specialist instead of just more questions.", author: "Daniel Novak", role: "GeneSkin patient since 2023", avatar: "DN" },
];

const GENE_VARIANTS = [
  { chr: 22, pos: 37251028, ref: "C / T", geno: "CC", gene: "RAC2" },
  { chr: 11, pos: 81190800, ref: "A / C", geno: "AA", gene: "near COX6A1P4" },
  { chr: 2,  pos: 47971006, ref: "C / T", geno: "CC", gene: "near VN1R18P" },
  { chr: 2,  pos: 48191180, ref: "A / G", geno: "AA", gene: "near RN7SKP224" },
  { chr: 4,  pos: 122806140, ref: "G / T", geno: "GG", gene: "near FGF2" },
  { chr: 1,  pos: 152206676, ref: "C / T", geno: "CC", gene: "CCDST" },
  { chr: 3,  pos: 106156699, ref: "A / C", geno: "AA", gene: "near CBLB" },
  { chr: 13, pos: 67122540,  ref: "C / T", geno: "CC", gene: "PCDH9" },
  { chr: 4,  pos: 122690387, ref: "G / T", geno: "TT", gene: "near IL21-AS1" },
  { chr: 5,  pos: 132295159, ref: "A / C", geno: "CA", gene: "P4HA2, SLC22A4" },
];

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   SCROLL REVEAL HOOK
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   NAV COMPONENT
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const COMPARISON_SEQUENCE_FRAMES = Array.from(
  { length: 39 },
  (_, index) => `/images/comparison-sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`
);

function drawCoverImageToCanvas(canvas, image) {
  const bounds = canvas.getBoundingClientRect();
  if (!bounds.width || !bounds.height || !image) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const dpr = window.devicePixelRatio || 1;
  const targetWidth = Math.round(bounds.width * dpr);
  const targetHeight = Math.round(bounds.height * dpr);

  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
  }

  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.setTransform(dpr, 0, 0, dpr, 0, 0);

  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  const scale = Math.max(bounds.width / sourceWidth, bounds.height / sourceHeight);
  const drawWidth = sourceWidth * scale;
  const drawHeight = sourceHeight * scale;
  const offsetX = (bounds.width - drawWidth) / 2;
  const offsetY = (bounds.height - drawHeight) / 2;

  context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}
function Nav({ currentPage, showPage }) {
  const [transparent, setTransparent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const video = document.querySelector(".prs-cinema-video");
      if (video) {
        const rect = video.getBoundingClientRect();
        setTransparent(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentPage]);

  const close = () => { setMenuOpen(false); document.body.style.overflow = ""; };
  const open  = () => { setMenuOpen(true);  document.body.style.overflow = "hidden"; };

  const nav = (page) => { close(); showPage(page); };

  const backLabel = {
    categories:   { label: "Categories",    page: "categories" },
    allergies:    { label: "â† Dashboard",   page: "dashboard" },
    "trait-detail": { label: "â† Allergies", page: "allergies" },
    comparison:   { label: "â† Dashboard",   page: "dashboard" },
  };
  const back = backLabel[currentPage] || { label: "Categories", page: "categories" };

  return (
    <>
      <nav className={`gs-nav${transparent ? " nav-transparent" : ""}`}>
        <span className="nav-logo" onClick={() => nav("dashboard")}>Polygenic <span>RiskScore</span></span>
        <ul className="nav-links">
          <li>
            <a onClick={() => { nav("dashboard"); setTimeout(() => document.getElementById("contact-anchor")?.scrollIntoView({ behavior: "smooth" }), 300); }}>
              Contact
            </a>
          </li>
          <li>
            <a onClick={() => nav(back.page)}>{back.label}</a>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button className="btn-outline sm" onClick={() => window.location.href = "/login"}>Login</button>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => menuOpen ? close() : open()}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a onClick={() => nav("dashboard")}>Dashboard</a>
        <a onClick={() => nav("allergies")}>Allergies</a>
        <a onClick={() => nav("categories")}>Categories</a>
        <a onClick={() => nav("comparison")}>Risk Analysis</a>
        <a onClick={() => { nav("dashboard"); setTimeout(() => document.getElementById("contact-anchor")?.scrollIntoView({ behavior: "smooth" }), 300); }}>Contact</a>
        <div className="mobile-menu-cta">
          <button className="nav-cta" style={{ width: "100%", padding: "1rem" }} onClick={() => nav("comparison")}>View Report</button>
          <button className="btn-outline" style={{ width: "100%", padding: "1rem", color: "var(--dark)", borderColor: "var(--dark)" }} onClick={() => window.location.href = "/login"}>Login</button>
        </div>
      </div>
    </>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   FOOTER COMPONENT
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function Footer({ showPage, id = "contact-anchor" }) {
  return (
    <footer className="gs-footer" id={id}>
      <div className="foot-brand">
        <span className="nav-logo" onClick={() => showPage("dashboard")}>Gene<span>Skin</span></span>
        <p>Personalised genetic skin health reports powered by validated GWAS science. Understanding your DNA to help you care for your skin.</p>
      </div>
      <div className="foot-col">
        <h4>Report Categories</h4>
        <ul>
          <li><a onClick={() => showPage("allergies")}>Allergies</a></li>
          <li><a onClick={() => showPage("comparison")}>Dermatological Diseases</a></li>
          <li><a onClick={() => showPage("comparison")}>Skin Aesthetics</a></li>
          <li><a onClick={() => showPage("comparison")}>Skin Health Markers</a></li>
          <li><a onClick={() => showPage("comparison")}>Risk Comparison</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>About</h4>
        <ul>
          <li><a href="#">About GeneSkin</a></li>
          <li><a href="#">Our Science</a></li>
          <li><a href="#">Meet the Team</a></li>
          <li><a href="#">Patient Portal</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="foot-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#">1420 Wellness Blvd, Suite 3</a></li>
          <li><a href="#">San Francisco, CA 94103</a></li>
          <li><a href="#">info@geneskin.com</a></li>
          <li><a href="#">Monâ€“Fri: 8am â€“ 6pm</a></li>
        </ul>
      </div>
      <div className="foot-bottom">
        <p>Â© 2026 GeneSkin &nbsp;Â·&nbsp; ID: P00007901EC &nbsp;Â·&nbsp; For informational purposes only. Not a substitute for professional medical advice.</p>
        <div className="foot-socials">
          <div className="foot-social">in</div>
          <div className="foot-social">f</div>
          <div className="foot-social">ig</div>
          <div className="foot-social">âœ‰</div>
        </div>
      </div>
    </footer>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CINEMA SCROLL SECTION
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function CinemaSection() {
  const wrapperRef = useRef(null);
  const cinemaMessages = [
    "Receiving your report may feel overwhelming. That's normal.",
    "Your results show predispositions, not certainties.",
    "Start with your High and Very High traits and follow the simple recommendations provided.",
    "When ready, speak with a genetic counsellor or dermatologist for more personal guidance.",
    "Your genes are not your destiny. Lifestyle and early care can still make a real difference.",
    "Take it one step at a time.",
  ];
  const textStart = 12;
  const textStep = 14;
  const moveStart = textStart + textStep * cinemaMessages.length;
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [sceneOffset, setSceneOffset] = useState(0);
  const [delayedMessageIndex, setDelayedMessageIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = Math.max(wrapperRef.current.offsetHeight - window.innerHeight, 1);
      const scrolledIn = Math.min(Math.max(-rect.top, 0), totalScrollable);
      const pct = Math.min(100, (scrolledIn / totalScrollable) * 100);
      const moveProgress = pct <= moveStart ? 0 : (pct - moveStart) / Math.max(100 - moveStart, 1);
      setProgress(pct);
      setRevealed(scrolledIn > 24);
      setSceneOffset(Math.min(moveProgress * 180, 180));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [moveStart]);

  const activeMessageIndex = progress < textStart
    ? -1
    : Math.min(cinemaMessages.length - 1, Math.floor((progress - textStart) / textStep));

  useEffect(() => {
    if (activeMessageIndex < 0) {
      setDelayedMessageIndex(-1);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setDelayedMessageIndex(activeMessageIndex);
    }, 140);

    return () => window.clearTimeout(timeoutId);
  }, [activeMessageIndex]);

  const activeMessage = delayedMessageIndex >= 0 ? cinemaMessages[delayedMessageIndex] : null;
  const activeClass = delayedMessageIndex === cinemaMessages.length - 1
    ? "prs-cinema-line--final"
    : "prs-cinema-line--step";

  return (
    <div className="prs-cinema-scroll-wrapper" ref={wrapperRef}>
      <section className="prs-cinema">
        <video
          className="prs-cinema-video"
          autoPlay
          muted
          loop
          playsInline
          style={{ transform: `translateY(${sceneOffset * 0.65}px) scale(1.04)` }}
        >
          <source src="/images/prsreport.mp4" type="video/mp4" />
        </video>
        <div className="prs-cinema-overlay" />

        <div className="prs-cinema-scroll-hint" style={{ opacity: progress > 8 ? 0 : 1 }}>
          <div className="prs-cinema-progress-track">
            <div className="prs-cinema-progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div
          className="prs-cinema-content"
          style={{ transform: `translate(-50%, calc(-50% + ${sceneOffset}px))` }}
        >
          <div className={`prs-cinema-line${revealed ? " in-view" : ""}`} style={{ transitionDelay: "0ms" }}>
            You Have Your Results. Now What?
          </div>
          <div className="prs-cinema-message-stage">
            {activeMessage ? (
              <div className="prs-cinema-message-shell" key={delayedMessageIndex}>
                <div className={`prs-cinema-line prs-cinema-line--sub ${activeClass} in-view`}>
                  {activeMessage}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   DASHBOARD PAGE
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function DashboardPage({ showPage }) {
  useReveal();

  // Hero slideshow
  const [slide, setSlide] = useState(0);
  const heroRef = useRef(null);
  const timerRef = useRef(null);

  const goSlide = useCallback((n) => {
    setSlide(((n % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => goSlide(slide + 1), 5000);
    return () => clearInterval(timerRef.current);
  }, [slide, goSlide]);

  // Booking form
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* â”€â”€ HERO â”€â”€ */}
      <section className="hero" style={{ padding: 0 }} ref={heroRef}
        onMouseEnter={() => clearInterval(timerRef.current)}
        onMouseLeave={() => { timerRef.current = setInterval(() => goSlide(slide + 1), 5000); }}
      >
        <div className="hero-slideshow">
          {HERO_SLIDES.map((s, i) => (
            <div key={i} className={`hero-slide${i === slide ? " active" : ""}`} style={{ backgroundImage: s.bg }}>
              {s.main ? (
                <div className="hero-content">
                  <div className="hero-tag">Genetic Analysis Report</div>
                  <h1>Your Genetic<br /><em>Skin Profile</em></h1>
                  <p className="hero-desc">Comprehensive analysis of 37 traits and conditions across skin health, dermatological diseases, aesthetics, and allergies. Personalised insights from your DNA.</p>
                </div>
              ) : (
                <div className="slide-overlay-text">
                  <span className="slide-tag">{s.tag}</span>
                  <p className="slide-headline">{s.headline}</p>
                  <p className="slide-body">{s.body}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hero-overlay" />
        <div className="hero-dots">
          {HERO_SLIDES.map((_, i) => (
            <span key={i} className={`hero-dot${i === slide ? " active" : ""}`} onClick={() => goSlide(i)} />
          ))}
        </div>
      </section>

      {/* â”€â”€ STATS STRIP â”€â”€ */}
      <div className="stats-strip">
        <div className="stat-item stat-tagline">
          <div className="stat-num">Excellence</div>
          <div className="stat-label">Built Over Time</div>
        </div>
        <div className="stat-item stat-tagline">
          <div className="stat-num">Where Customers Come First</div>
        </div>
        <div className="stat-item stat-tagline">
          <div className="stat-num">7+</div>
          <div className="stat-label">years of experience</div>
        </div>
      </div>

      {/* â”€â”€ ABOUT â”€â”€ */}
      <section className="about" id="about-anchor">
        <div className="about-inner reveal">
          <div className="about-img-wrap">
            <img src="/images/hosiptalin.jpg" className="hosiptalin" alt="Hospital" />
          </div>
          <div className="about-content">
            <span className="section-tag">About Your Report</span>
            <h2>Science of <em>Skin & Genetics</em></h2>
            <p>Your skin is shaped by thousands of small DNA variations influencing how it looks, reacts, ages, and heals. No two people's genetic blueprint is the same.</p>
            <p>GeneSkin uses PRS methodology to capture the combined effect of many variants at once, calculated from validated GWAS data and compared against 4 global population panels.</p>
            <div className="credentials">
              <div className="credential">Conditions like eczema and psoriasis have strong genetic components PRS can identify early</div>
              <div className="credential">Genetics explains why identical routines produce different results in different people</div>
              <div className="credential">For informational purposes only â€” consult a clinician</div>
            </div>
          </div>
        </div>
      </section>

      {/* â”€â”€ BOOKING â”€â”€ */}
      <div className="booking" id="booking-anchor">
        <div className="booking-left reveal">
          <span className="section-tag">Consultation</span>
          <h2>Ready to Understand<em>,</em> Your Results?</h2>
          <p>Book a consultation with a genetic counsellor or dermatologist to discuss your personalised skin report. Same-day appointments often available.</p>
          <button className="btn-light">Call Us: 000 000</button>
        </div>
        <div className="booking-form reveal">
          <h3>Book Your Consultation</h3>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@email.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 000 000 0000" />
            </div>
            <div className="form-group full">
              <label>Area of Interest</label>
              <select>
                <option>Select a category...</option>
                <option>Allergies</option>
                <option>Dermatological Diseases</option>
                <option>Skin Aesthetics</option>
                <option>Skin Health Markers</option>
                <option>Full Report Review</option>
              </select>
            </div>
            <div className="form-group full">
              <label>Additional Notes</label>
              <input type="text" placeholder="Any specific concerns from your report..." />
            </div>
            <button
              className="submit-btn"
              type="button"
              onClick={handleSubmit}
              style={submitted ? { background: "var(--accent)" } : {}}
            >
              {submitted ? "âœ“ Request Sent!" : "Request Consultation â†’"}
            </button>
          </div>
        </div>
      </div>

      {/* â”€â”€ CINEMA â”€â”€ */}
      <CinemaSection />

      {/* â”€â”€ TESTIMONIALS â”€â”€ */}
      <section className="testimonials">
        <div className="test-head reveal">
          <span className="section-tag">Patient Stories</span>
          <h2>Trusted by <em>Thousands</em></h2>
        </div>
        <div className="testimonials-marquee reveal">
          <div className="testimonials-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="test-card" aria-hidden={i >= TESTIMONIALS.length ? true : undefined}>
                <div>
                  <div className="test-stars">{t.stars}</div>
                  <p className="test-text">"{t.text}"</p>
                </div>
                <div className="test-author">
                  <div className="test-avatar">{t.avatar}</div>
                  <div>
                    <div className="test-name">{t.author}</div>
                    <div className="test-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* â”€â”€ TEAM â”€â”€ */}
      <section className="team" id="team-anchor">
        <div className="team-head reveal">
          <div>
            <span className="section-tag">Our Specialists</span>
            <h2>Meet the <em>Team</em></h2>
          </div>
          <button className="btn-outline" style={{ color: "var(--dark)", borderColor: "var(--dark)" }}>View All Staff</button>
        </div>
        <div className="team-grid reveal">
          {[
            { name: "Dr. ", specialty: "Genetic Dermatology", bg: "linear-gradient(150deg,#a8c5bd 0%,#2e5245 100%)" },
            { name: "Dr.", specialty: "Immunology", bg: "linear-gradient(150deg,#c5b8a8 0%,#6b5a3e 100%)" },
            { name: "Dr. ", specialty: "Genetic Counselling", bg: "linear-gradient(150deg,#b8c5c0 0%,#3e5a52 100%)" },
            { name: "Dr. ", specialty: "Allergology", bg: "linear-gradient(150deg,#c5c0b8 0%,#5a523e 100%)" },
          ].map((m, i) => (
            <div key={i} className="team-card">
              <div className="team-photo" style={{ background: m.bg }}>
                <svg viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" width="60%">
                  <circle cx="50" cy="38" r="28" fill="rgba(255,255,255,0.18)" />
                  <ellipse cx="50" cy="110" rx="38" ry="42" fill="rgba(255,255,255,0.12)" />
                </svg>
              </div>
              <div className="team-overlay">
                <div className="team-social">in</div>
                <div className="team-social">âœ‰</div>
                <div className="team-social">ðŸ”—</div>
              </div>
              <div className="team-info">
                <div className="team-name">{m.name}</div>
                <div className="team-specialty">{m.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* â”€â”€ FOOTER â”€â”€ */}
      <Footer showPage={showPage} id="contact-anchor" />
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   CATEGORIES PAGE
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function CategoriesPage({ showPage, setComparisonCategory }) {
  useReveal();
  const cards = [
    { key: "health", name: "Health", tag: "Genetic Risk", img: "/images/healthcard.jpg", illus: "illus-health", target: "comparison" },
    { key: "physical", name: "Physical Traits", tag: "Phenotype Analysis", img: "/images/fitness.jpg", illus: "illus-physical", target: "comparison" },
    { key: "nutrition", name: "Nutrition", tag: "Nutrition Profile", img: "/images/nutritioncard.jpg", illus: "illus-other", target: "comparison" },
    { key: "sports", name: "Sports", tag: "Performance Profile", img: "/images/basket.jpg", illus: "illus-nutrition", target: "comparison" },
  ];

  return (
    <div className="categories-page">
      <div className="categories-page-header reveal">
        <div className="section-tag">Report Coverage</div>
        <h1>Explore <em>Categories</em></h1>
        <p>Four areas of genetic analysis - each delivering personalised insights based on your DNA profile and polygenic risk scores.</p>
      </div>

      <div className="portfolio-grid">
        {cards.map((c, i) => (
          <div key={i} className="portfolio-card reveal" onClick={() => { setComparisonCategory(c.key); showPage(c.target); }}>
            <div className={`portfolio-card-img-wrap ${c.illus}`}>
              <img src={c.img} alt={c.name} className="portfolio-card-img" />
            </div>
            <div className="portfolio-card-footer">
              <div className="portfolio-card-meta">
                <div className="portfolio-card-name">{c.name}</div>
                <div className="portfolio-card-tag">{c.tag}</div>
              </div>
              <div className="portfolio-card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="7" y1="17" x2="17" y2="7" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="7 7 17 7 17 17" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   ALLERGIES PAGE
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function AllergiesPage({ showPage }) {
  useReveal();
  const [activeJump, setActiveJump] = useState(0);

  const jumpItems = [
    { label: "Overview", href: "overview" },
    { label: "Eczema", href: "eczema" },
    { label: "Environmental Trigger Responses", href: "hives" },
    { label: "General Allergic Sensitivity", href: "contact-dermatitis" },
    { label: "FAQs", href: "faqs" },
  ];

  const traits = [
    { risk: "vh", badge: "b-vh", label: "Very High", id: "hives", name: "Itch intensity from mosquito bite", desc: "The intensity of mosquito bite itching refers to the body's reaction to the mosquito's saliva, which can range from mild to intense. This indicates how the immune system responds to allergens.", clickable: true },
    { risk: "md", badge: "b-md", label: "Medium", id: "contact-dermatitis", name: "Allergic diseases (asthma, allergic rhinitis, or eczema)", desc: "Reactions of the body to substances that are normally harmless, causing symptoms such as difficulty breathing, sneezing, or skin irritation." },
    { risk: "md", badge: "b-md", label: "Medium", name: "Allergic sensitivity", desc: "The body's reaction to substances that are normally harmless, such as pollen or food, causing symptoms like itching, swelling, and difficulty breathing." },
    { risk: "md", badge: "b-md", label: "Medium", id: "eczema", name: "Eczema and allergies", desc: "Skin reactions that occur due to sensitivities to substances, causing itching, redness, and inflammation." },
  ];

  return (
    <div>
      <section className="allergies-section" id="overview">
        <div className="allergy-head reveal">
          <div>
            <span className="section-tag" />
            <h2><em>Allergies</em></h2>
            <p style={{ fontSize: "0.95rem", fontWeight: 300, color: "var(--cream)", marginTop: "1rem", maxWidth: 580, lineHeight: 1.75 }}>
              Analysis of immune responses, sensitivities, and allergic reactions based on your genetic variants.
            </p>
          </div>
        </div>

        <div className="traits-layout reveal">
          <div className="jump-menu-container">
            <div className="jump-menu-header">On this page</div>
            <ul className="jump-menu-list">
              {jumpItems.map((item, i) => (
                <li key={i} className={activeJump === i ? "active" : ""}>
                  <a onClick={() => { setActiveJump(i); document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" }); }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="traits-list">
            {traits.map((t, i) => (
              <div
                key={i}
                id={t.id}
                className={`trait-row ${t.risk}`}
                onClick={() => t.clickable && showPage("trait-detail")}
              >
                <div className={`rbadge ${t.badge}`}>{t.label}</div>
                <div>
                  <div className="tname">{t.name}</div>
                  <div className="tdesc">{t.desc}</div>
                </div>
                <div className="tarrow">â†’</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="faqs" />
      <footer className="gs-footer" id="contact-anchor-allergies">
        <div className="foot-brand">
          <span className="nav-logo" onClick={() => showPage("dashboard")}>Gene<span>Skin</span></span>
          <p>Personalised genetic skin health reports. ID: P00007901EC Â· July 24, 2026</p>
        </div>
        <div className="foot-col">
          <h4>Report Sections</h4>
          <ul>
            <li><a onClick={() => showPage("dashboard")}>Dashboard</a></li>
            <li><a onClick={() => showPage("comparison")}>Risk Analysis</a></li>
          </ul>
        </div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-bottom">
          <p>Â© 2026 GeneSkin &nbsp;Â·&nbsp; For informational purposes only.</p>
          <div className="foot-socials">
            <div className="foot-social">in</div>
            <div className="foot-social">âœ‰</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   TRAIT DETAIL PAGE
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function TraitDetailPage({ showPage }) {
  useReveal();
  return (
    <div>
      <section className="detail-section" style={{ paddingTop: "7rem" }}>
        <div className="reveal">
          <span className="section-tag">Trait Detail</span>
          <h2 className="detail-title">Itch intensity from mosquito bite</h2>
          <p className="detail-sub">
            The intensity of mosquito bite itching refers to the body's reaction to the mosquito's saliva, which can range from mild to intense. This characteristic is important because it indicates how the immune system responds to allergens.
          </p>
          <div className="risk-pill">âš  Very High Risk</div>
        </div>

        <div className="detail-inner">
          <div className="reveal">
            <div className="card">
              <div className="card-title"><span>ðŸ’¡</span> Clinical Recommendations</div>
              <div className="recs">
                <div className="rec">The phenotype of 'mosquito bite itch intensity' with a risk level of 'Very High' indicates that you experience a significantly stronger reaction to mosquito bites compared to most people. This heightened sensitivity can lead to more intense itching and discomfort when bitten, which may be bothersome and could affect your quality of life.</div>
                <div className="rec">To manage this condition, consider using topical anti-itch creams or antihistamines to alleviate symptoms when you do get bitten. Additionally, taking preventive measures such as using insect repellent, wearing protective clothing, and avoiding areas with high mosquito activity can help reduce the likelihood of bites. If the itching becomes severe or persistent, consulting a healthcare professional for further advice may be beneficial.</div>
              </div>
            </div>

            <div className="card">
              <div className="card-title"><span>ðŸ§¬</span> Genetic Variants</div>
              <p style={{ color: "var(--light)", fontSize: "0.85rem", fontWeight: 300, marginBottom: "1.2rem" }}>
                The following genetic variants are associated with this phenotype, listed in descending order of their impact on your Polygenic Risk Score:
              </p>
              <div style={{ overflowX: "auto" }}>
                <table className="gtable">
                  <thead>
                    <tr><th>Chromosome</th><th>Position</th><th>Ref / Effect Alleles</th><th>Your Genotype</th><th>Gene</th></tr>
                  </thead>
                  <tbody>
                    {GENE_VARIANTS.map((v, i) => (
                      <tr key={i}>
                        <td>{v.chr}</td><td>{v.pos}</td><td>{v.ref}</td><td>{v.geno}</td>
                        <td><span className="gbadge">{v.gene}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="card-title"><span>ðŸ“š</span> Research Reference</div>
              <div className="res-block">
                <div className="res-ttl">GWAS of self-reported mosquito bite size, itch intensity and attractiveness to mosquitoes implicates immune-related predisposition loci</div>
                <div className="res-doi">DOI: 10.1093/hmg/ddx036</div>
                <p className="res-body">This study investigates how people react to mosquito bites, focusing on the intensity of itching, the size of the reaction, and attractiveness to mosquitoes. Information from over 84,000 individuals was analyzed, resulting in the identification of 15 significant genetic associations.</p>
                <a href="https://www.ebi.ac.uk/gwas/studies/GCST004861" className="res-link" target="_blank" rel="noreferrer">View full study â†’</a>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="pop-card">
              <div className="pop-title">Population Comparison</div>
              <p className="pop-sub">Your genetic risk compared to different populations:</p>
              <div className="pop-bars">
                {[
                  { label: "You", pct: 92, you: true },
                  { label: "European", pct: 68 },
                  { label: "East Asian", pct: 72 },
                  { label: "African", pct: 65 },
                  { label: "South Asian", pct: 70 },
                ].map((r, i) => (
                  <div key={i} className="pop-row">
                    <div className="pop-lbl">{r.label}</div>
                    <div className="pop-track">
                      <div className={`pop-fill${r.you ? " you" : ""}`} style={{ width: `${r.pct}%` }}>{r.pct}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="insight">
              <strong>ðŸ’¡ Key Insight</strong><br /><br />
              Your genetic profile shows very high susceptibility to mosquito bite reactions. The genes involved (particularly RAC2) are associated with immune system function, explaining the heightened inflammatory response to mosquito saliva.
            </div>
          </div>
        </div>
      </section>

      <footer className="gs-footer">
        <div className="foot-brand">
          <span className="nav-logo" onClick={() => showPage("dashboard")}>Gene<span>Skin</span></span>
          <p>ID: P00007901EC Â· July 24, 2026</p>
        </div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-bottom">
          <p>Â© 2026 GeneSkin &nbsp;Â·&nbsp; For informational purposes only.</p>
          <div className="foot-socials"><div className="foot-social">in</div><div className="foot-social">âœ‰</div></div>
        </div>
      </footer>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   COMPARISON PAGE
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function ComparisonPage({ showPage, comparisonCategory = "health" }) {
  useReveal();

  const tabs = useMemo(() => [
    {
      key: "covers",
      label: "What It Covers",
      title: "What It Covers",
      body: [
        comparisonCategory === "physical" ? "Physical traits cover inherited patterns related to pigmentation, body composition, muscle profile, and other phenotype-linked features that shape how your body may naturally present." : comparisonCategory === "nutrition" ? "Nutrition traits focus on how your body may process fats, carbohydrates, caffeine, vitamins, minerals, and appetite-related signals." : comparisonCategory === "sports" ? "Sports traits cover inherited patterns related to endurance capacity, strength response, muscle efficiency, recovery behavior, and tolerance for repeated training stress." : "Health traits focus on inherited tendencies related to eczema, psoriasis, rosacea, acne, skin cancer risk, and barrier instability markers that may influence flare frequency and severity.",
        comparisonCategory === "physical" ? "This section helps connect those visible or structural traits so they feel less isolated and more useful in everyday routines." : comparisonCategory === "nutrition" ? "This section helps you read those markers as a connected system instead of isolated food facts." : comparisonCategory === "sports" ? "Instead of promising fixed outcomes, this section shows where your genetics may support stronger adaptation in some areas and greater support needs in others." : "Instead of treating every result as isolated, this section helps you understand how inflammatory response, pigmentation pathways, and repair biology can work together to shape your skin-health baseline.",
      ],
      meta: comparisonCategory === "physical" ? ["Body composition", "Pigmentation", "Phenotype markers"] : comparisonCategory === "nutrition" ? ["Metabolic response", "Micronutrients", "Appetite signals"] : comparisonCategory === "sports" ? ["Recovery profile", "Endurance response", "Strength adaptation"] : ["Inflammation markers", "Barrier resilience", "Dermatology risk"],
      image: "/tabimages/sofasit.png",
      asideTitle: "Section Focus",
      asideBody: comparisonCategory === "physical" ? "This tab frames the broader physical-traits category and shows which inherited tendencies are being summarized." : comparisonCategory === "nutrition" ? "This tab gives the broad context for how nutrition-related markers may work together." : comparisonCategory === "sports" ? "This tab outlines the broader sports category and the performance markers it includes." : "This tab gives the broadest overview of the health category and sets the context for the more specific tabs that follow.",
    },
    {
      key: "use",
      label: "Best Use Case",
      title: "Best Use Case",
      body: [
        comparisonCategory === "physical" ? "Use this section to shape training expectations, UV-protection habits, and appearance-related planning around your natural baseline." : comparisonCategory === "nutrition" ? "Use this section to guide meal planning, identify areas where supplementation may deserve attention, and understand which nutrition habits may feel more sustainable for you." : comparisonCategory === "sports" ? "Use this section to shape training blocks, pace recovery expectations, and decide which performance habits deserve more consistent attention." : "Use this section to prioritize screenings, simplify skincare decisions, and understand which findings deserve regular monitoring over time.",
        comparisonCategory === "physical" ? "It is especially helpful when you want to set realistic goals instead of relying on generic standards that may not fit your phenotype." : comparisonCategory === "nutrition" ? "It is particularly useful when general diet advice feels inconsistent or too generic." : comparisonCategory === "sports" ? "It is especially helpful for avoiding random programming and building around patterns your body is more likely to repeat well." : "It is especially valuable when you want to reduce trial and error. Instead of trying random products or routines, you can focus on what supports long-term protection, calmer skin behavior, and earlier professional follow-up when needed.",
      ],
      meta: comparisonCategory === "physical" ? ["Training context", "UV awareness", "Appearance planning"] : comparisonCategory === "nutrition" ? ["Meal planning", "Supplement review", "Energy support"] : comparisonCategory === "sports" ? ["Training design", "Recovery planning", "Performance consistency"] : ["Screening priority", "Routine planning", "Long-term monitoring"],
      image: "/images/dnasnitch.jpg",
      asideTitle: "Practical Value",
      asideBody: comparisonCategory === "physical" ? "This tab is best for turning phenotype signals into useful routine decisions." : comparisonCategory === "nutrition" ? "This tab helps turn nutrition genetics into clearer everyday food decisions." : comparisonCategory === "sports" ? "This tab is best for translating genetics into training structure and recovery balance." : "This is the tab most directly tied to decision-making around routine, prevention, and follow-up planning.",
    },
    {
      key: "tips",
      label: "Typical Recommendations",
      title: "Typical Recommendations",
      list: [
        comparisonCategory === "physical" ? "Adjust routines to recovery and body-response patterns" : comparisonCategory === "nutrition" ? "Match meal structure to energy and satiety patterns" : comparisonCategory === "sports" ? "Match workout intensity to recovery patterns rather than guesswork" : "Daily photoprotection and early dermatology review",
        comparisonCategory === "physical" ? "Use consistent photoprotection if UV sensitivity trends higher" : comparisonCategory === "nutrition" ? "Review micronutrient gaps when relevant traits trend elevated" : comparisonCategory === "sports" ? "Track how strength and endurance blocks affect fatigue and adaptation" : "Barrier-first skincare with fewer triggers",
        comparisonCategory === "physical" ? "Track how body-composition changes respond to routine shifts" : comparisonCategory === "nutrition" ? "Favor consistent food habits over extreme diet swings" : comparisonCategory === "sports" ? "Build consistency around sleep, hydration, and recovery-support habits" : "Tracking flare-ups to spot repeat patterns",
      ],
      body: [
        comparisonCategory === "physical" ? "The strongest value usually comes from calibration. Small, repeatable adjustments often matter more than extreme interventions." : comparisonCategory === "nutrition" ? "Nutrition traits are most useful when they support steady routines. A sustainable plan usually outperforms a perfect plan you cannot keep." : comparisonCategory === "sports" ? "Athletic genetics become more useful when they shape repeatable systems. The goal is not to limit training, but to help it fit how your body best adapts." : "These actions are intentionally simple because consistency usually matters more than intensity. A steady barrier-supportive routine often outperforms aggressive switching between products.",
      ],
      meta: comparisonCategory === "physical" ? ["Routine calibration", "Recovery-aware", "Photoprotection"] : comparisonCategory === "nutrition" ? ["Consistency first", "Micronutrient awareness", "Sustainable eating"] : comparisonCategory === "sports" ? ["Recovery systems", "Adaptation tracking", "Smarter programming"] : ["Sun protection", "Barrier-first care", "Pattern tracking"],
      image: "/tabimages/discuss.png",
      asideTitle: "Action Layer",
      asideBody: comparisonCategory === "physical" ? "These recommendations help convert phenotype insights into low-friction actions." : comparisonCategory === "nutrition" ? "These recommendations focus on habits that are easy to apply and maintain." : comparisonCategory === "sports" ? "These are practical adjustments most likely to improve training quality without changing your structure dramatically." : "These are the high-signal habits most likely to help when health-related skin traits trend elevated.",
    },
    {
      key: "value",
      label: "Why It Matters",
      title: "Why It Matters",
      body: [
        comparisonCategory === "physical" ? "Physical-traits findings help explain why some routines or environments feel easier or harder for you than for someone else." : comparisonCategory === "nutrition" ? "Nutrition findings can make food choices feel less generic by explaining why hunger, energy stability, or nutrient support may need a more tailored approach." : comparisonCategory === "sports" ? "Sports findings can shorten the distance between effort and insight by explaining why some training styles feel productive while others feel draining." : "Health findings often offer the highest practical value because they can guide early action. Even moderate-risk traits can become useful when they point to avoidable triggers or support earlier checkups.",
        comparisonCategory === "physical" ? "That context can improve planning, reduce frustration, and support routines that fit your natural baseline." : comparisonCategory === "nutrition" ? "That makes this category one of the most practical bridges between genetics and everyday lifestyle decisions." : comparisonCategory === "sports" ? "That makes this category valuable not because it predicts destiny, but because it helps you build a more informed and sustainable path to performance." : "That makes this category one of the strongest bridges between DNA insight and day-to-day decisions, because it can shape how you prevent issues rather than only reacting after they appear.",
      ],
      meta: comparisonCategory === "physical" ? ["Realistic goals", "Body awareness", "Better routine fit"] : comparisonCategory === "nutrition" ? ["Daily relevance", "Better energy fit", "Personalised eating"] : comparisonCategory === "sports" ? ["Informed training", "Sustainable progress", "Better recovery fit"] : ["Earlier action", "Fewer avoidable triggers", "Clearer prevention path"],
      image: "/tabimages/fatherson.png",
      asideTitle: "Big Picture",
      asideBody: comparisonCategory === "physical" ? "This category adds context to how your body presents, adapts, and responds." : comparisonCategory === "nutrition" ? "This category turns repeated daily food choices into a more informed strategy." : comparisonCategory === "sports" ? "This category helps turn performance genetics into a clearer long-term training strategy." : "This category matters most because it connects DNA insight with tangible decisions you can make before problems intensify.",
    },
  ], [comparisonCategory]);

  const categoryDetailRef = useRef(null);
  const sequenceCanvasRef = useRef(null);
  const sequenceImagesRef = useRef([]);
  const sequenceScrollRef = useRef(0);
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sequenceFrame, setSequenceFrame] = useState(0);
  const [sequenceReady, setSequenceReady] = useState(false);
  const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
  const active = tabs[activeIndex] || tabs[0];
  const sequenceTitle = comparisonCategory === "physical"
    ? "Physical Traits Sequence"
    : comparisonCategory === "nutrition"
      ? "Nutrition Sequence"
      : comparisonCategory === "sports"
        ? "Sports Sequence"
        : "Health Sequence";
  const sequenceFrameTotal = sequenceImagesRef.current.length || COMPARISON_SEQUENCE_FRAMES.length;

  const drawSequenceFrame = useCallback(() => {
    const canvas = sequenceCanvasRef.current;
    const image = sequenceImagesRef.current[sequenceFrame];
    if (!canvas || !image) return;
    drawCoverImageToCanvas(canvas, image);
  }, [sequenceFrame]);

  useEffect(() => {
    let isCancelled = false;

    Promise.all(
      COMPARISON_SEQUENCE_FRAMES.map(
        (src) => new Promise((resolve) => {
          const image = new Image();
          image.decoding = "async";
          image.onload = () => resolve(image);
          image.onerror = () => resolve(null);
          image.src = src;
        })
      )
    ).then((images) => {
      if (isCancelled) return;
      const loadedImages = images.filter(Boolean);
      sequenceImagesRef.current = loadedImages;
      setSequenceReady(loadedImages.length > 0);
      setSequenceFrame(0);
    });

    return () => {
      isCancelled = true;
      if (sequenceScrollRef.current) {
        window.cancelAnimationFrame(sequenceScrollRef.current);
        sequenceScrollRef.current = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!sequenceReady) return;
    drawSequenceFrame();
  }, [drawSequenceFrame, sequenceReady]);

  useEffect(() => {
    if (!sequenceReady) return;

    const handleResize = () => {
      drawSequenceFrame();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawSequenceFrame, sequenceReady]);

  useEffect(() => {
    if (!sequenceReady) return;

    const syncFrameToScroll = () => {
      if (sequenceScrollRef.current) return;

      sequenceScrollRef.current = window.requestAnimationFrame(() => {
        sequenceScrollRef.current = 0;

        const section = categoryDetailRef.current;
        const frameTotal = sequenceImagesRef.current.length;
        if (!section || !frameTotal) return;

        const stickyOffset = window.innerWidth <= 768 ? 80 : 92;
        const scrollRange = Math.max(section.offsetHeight - window.innerHeight + stickyOffset, 1);
        const sectionTop = section.getBoundingClientRect().top;
        const scrolled = Math.min(Math.max(stickyOffset - sectionTop, 0), scrollRange);
        const progress = Math.min(Math.max(scrolled / scrollRange, 0), 1);
        const easedProgress = 1 - Math.pow(1 - progress, 1.12);
        const nextFrame = Math.min(
          frameTotal - 1,
          Math.round(easedProgress * (frameTotal - 1))
        );

        setSequenceFrame((current) => (current === nextFrame ? current : nextFrame));
      });
    };

    syncFrameToScroll();
    window.addEventListener("scroll", syncFrameToScroll, { passive: true });
    window.addEventListener("resize", syncFrameToScroll);

    return () => {
      window.removeEventListener("scroll", syncFrameToScroll);
      window.removeEventListener("resize", syncFrameToScroll);
      if (sequenceScrollRef.current) {
        window.cancelAnimationFrame(sequenceScrollRef.current);
        sequenceScrollRef.current = 0;
      }
    };
  }, [sequenceReady]);

  useEffect(() => {
    if (isPaused) return;

    const duration = 6000;
    const tick = 100;
    setProgress(0);

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => {
        const next = prev + tick / duration;
        return next >= 1 ? 1 : next;
      });
    }, tick);

    const rotateTimer = window.setTimeout(() => {
      setActiveTab(tabs[(activeIndex + 1) % tabs.length].key);
    }, duration);

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(rotateTimer);
    };
  }, [activeIndex, isPaused, tabs]);

  const circumference = 2 * Math.PI * 25;
  const dashOffset = circumference * (1 - progress);

  return (
    <div>
      <section className="comparison-section">
        <section className="category-detail" ref={categoryDetailRef}>
          <div className="category-hero reveal">
            <div className="category-copy">
              <div className="section-tag">Category Detail</div>
              <h1>{comparisonCategory === "physical" ? <>Physical Traits <em>Insights</em></> : comparisonCategory === "nutrition" ? <>Nutrition <em>Insights</em></> : comparisonCategory === "sports" ? <>Sports <em>Insights</em></> : <>Health <em>Insights</em></>}</h1>
              <p>{comparisonCategory === "physical" ? "This category explains how your genetics may influence visible features, body composition tendencies, muscle response, and environmental sensitivity such as UV exposure. It helps translate phenotype-related markers into practical expectations." : comparisonCategory === "nutrition" ? "This category brings together genetic signals linked to metabolism, appetite regulation, nutrient handling, and how your body may respond to fats, carbohydrates, and key micronutrients. It is designed to support more personalised food decisions." : comparisonCategory === "sports" ? "This category highlights genetics linked to performance style, recovery rate, endurance, strength response, and how your body may adapt to different training demands. It helps position athletic potential as a planning tool rather than a fixed label." : "This category brings together your genetics for inflammatory skin disease, long-term dermatological risk, and protective barrier markers. It is designed to help you understand where your highest clinical attention may be needed and which findings are better suited for prevention rather than concern."}</p>
              <div className="category-copy-note">Static garden view</div>
            </div>
            <div className="category-panel">
              <div className="category-sequence-shell">
                <img src="/images/garden.jpg" alt="Garden" className="category-sequence-image" />
              </div>
            </div>
          </div>
        </section>

        <div className="happyhealth reveal">
          <img src="/images/happypatient.png" alt="Happy patient" />
          <div className="happyhealth-copy">
            <strong>{comparisonCategory === "physical" ? "Physical Traits Focus" : comparisonCategory === "nutrition" ? "Nutrition Focus" : comparisonCategory === "sports" ? "Sports Focus" : "Health Focus"}</strong>
            <h2>{comparisonCategory === "physical" ? "Phenotype markers help explain how your body presents and responds." : comparisonCategory === "nutrition" ? "Better nutrition choices start with better biological context." : comparisonCategory === "sports" ? "Performance genetics are most useful when they guide how you train and recover." : "Early understanding supports better skin decisions."}</h2>
            <p>{comparisonCategory === "physical" ? "These findings are useful when you want more realistic expectations around body composition, recovery style, pigmentation response, and appearance-related planning." : comparisonCategory === "nutrition" ? "Your nutrition profile can help explain why energy balance, satiety, and nutrient response may differ from generic advice, making your eating strategy easier to personalize." : comparisonCategory === "sports" ? "Your sports profile can help reveal where training response may feel more natural, where recovery may need more attention, and which habits support more stable progress over time." : "Your health profile can help highlight where prevention, regular checkups, and barrier-first care may have the biggest long-term value."}</p>
          </div>
        </div>

        <section className="category-section">
          <div className="auto-tabs-page-wrapper reveal">
            <div className="auto-tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={`auto-tab-btn${tab.key === activeTab ? " is-active" : ""}`}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setProgress(0);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="auto-tabs-body">
              <article className="auto-tab-panel">
                <div className="auto-tab-copy">
                  <h3>{active.title}</h3>
                  {active.body?.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  {active.list ? (
                    <ul>
                      {active.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="auto-tab-copy-meta">
                    {active.meta.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className="auto-tab-aside">
                  <img src={active.image} alt={active.title} />
                  <strong>{active.asideTitle}</strong>
                  <p>{active.asideBody}</p>
                </div>
              </article>
            </div>

            <div className="auto-tabs-controls">
              <div className={`auto-tabs-progress${isPaused ? " is-paused" : ""}`}>
                <svg viewBox="0 0 62 62" aria-hidden="true">
                  <circle className="auto-tabs-progress-track" cx="31" cy="31" r="25"></circle>
                  <circle
                    className="auto-tabs-progress-ring"
                    cx="31"
                    cy="31"
                    r="25"
                    style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }}
                  ></circle>
                </svg>
                <button
                  className="auto-tabs-pause"
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  aria-label={isPaused ? "Resume auto tabs" : "Pause auto tabs"}
                >
                  {isPaused ? ">" : "||"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>

      <footer className="gs-footer">
        <div className="foot-brand">
          <span className="nav-logo" onClick={() => showPage("dashboard")}>Polygenic<span>RiskScore</span></span>
        </div>
        <div className="foot-col">
          <h4>Navigate</h4>
          <ul>
            <li><a onClick={() => showPage("dashboard")}>Dashboard</a></li>
            <li><a onClick={() => showPage("allergies")}>Allergies</a></li>
          </ul>
        </div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-col"><h4 /><ul /></div>
        <div className="foot-bottom">
          <p>Â© 2026 GeneSkin &nbsp;Â·&nbsp; Not a substitute for professional medical advice.</p>
          <div className="foot-socials"><div className="foot-social">in</div><div className="foot-social">âœ‰</div></div>
        </div>
      </footer>
    </div>
  );
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   ROOT APP
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
export default function GeneSkinApp() {
  const [page, setPage] = useState("dashboard");
  const [comparisonCategory, setComparisonCategory] = useState("health");

  // Inject CSS once
  useEffect(() => {
    if (document.getElementById("geneskin-styles")) return;
    const style = document.createElement("style");
    style.id = "geneskin-styles";
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.getElementById("geneskin-styles")?.remove();
  }, []);

  const showPage = useCallback((id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={{ background: "var(--cream)", color: "var(--dark)" }}>
      <Nav currentPage={page} showPage={showPage} />

      <div style={{ display: page === "dashboard"    ? "block" : "none" }}><DashboardPage   showPage={showPage} /></div>
      <div style={{ display: page === "categories"   ? "block" : "none" }}><CategoriesPage  showPage={showPage} setComparisonCategory={setComparisonCategory} /></div>
      <div style={{ display: page === "allergies"    ? "block" : "none" }}><AllergiesPage   showPage={showPage} /></div>
      <div style={{ display: page === "trait-detail" ? "block" : "none" }}><TraitDetailPage showPage={showPage} /></div>
      <div style={{ display: page === "comparison"   ? "block" : "none" }}><ComparisonPage  showPage={showPage} comparisonCategory={comparisonCategory} /></div>
    </div>
  );
}





































