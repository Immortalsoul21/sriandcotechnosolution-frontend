import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell, Calendar, ChevronRight, Clock, ExternalLink,
  Rss, Tag, Play, Filter, Mail,
  Globe, ShieldCheck, Headphones, BarChart3, Wrench, Package,
  Zap, ArrowRight, Phone, MapPin, CheckCircle2, XCircle,
} from 'lucide-react';

// ─── WEBINAR DATA ─────────────────────────────────────────────────────────────

const FEATURED_WEBINAR = {
  title: 'ROHACELL® for Aerospace, Defense & High-Performance Structures',
  subtitle:
    'Material intelligence for engineers building mission-critical systems — live deep-dive with Dr. Alexander Roth, Head of Aerospace Performance Foams, Evonik, Germany.',
  date: 'Tuesday, 6th May 2026',
  time: '11:00 AM – 1:00 PM IST',
  duration: '120 min',
  presenter: 'Dr. Alexander Roth',
  presenterTitle: 'Head of Aerospace Performance Foams, Evonik, Germany',
  registerUrl: 'https://lnkd.in/dimzu7fY',
  target: new Date('2025-05-06T11:00:00+05:30'),
};

const LEARN_POINTS = [
  '50+ years of lightweight engineering dominance',
  'Design strategies for high-performance structures',
  'Processing, thermoforming & fabrication under real conditions',
  'Application-driven insights across aerospace, defense & beyond',
  'Proven methods for effective, real-world implementation',
];

const APPLICATIONS = [
  { label: 'Aerospace',             desc: 'Interior components, radomes, fairings & structural parts for weight savings.' },
  { label: 'Defense & UAV',         desc: 'Radomes, payload enclosures & structural components for mission-critical applications.' },
  { label: 'Wind Energy',           desc: 'Lightweight cores for blades and nacelles for improved efficiency.' },
  { label: 'Rail & Transportation', desc: 'Lightweight panels, interior fittings and energy absorption components.' },
  { label: 'Marine',                desc: 'Antenna supports and lightweight structures for harsh environments.' },
];

const FEATURES_LIST = [
  {
    Icon: Zap,
    title: 'Ultra-Lightweight',
    description: 'High strength with minimal weight — ROHACELL® closes the gap between structural integrity and mass efficiency.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    Icon: Globe,
    title: 'High Performance',
    description: 'Excellent mechanical and thermal properties engineered to perform in the most demanding real-world conditions.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    Icon: ShieldCheck,
    title: 'Design Freedom',
    description: 'Easy to process and customize — enabling complex geometries without sacrificing structural reliability.',
    gradient: 'from-green-500 to-green-700',
  },
  {
    Icon: Package,
    title: 'Sustainable',
    description: "Recyclable and environment-friendly — advanced materials built to meet tomorrow's engineering and sustainability standards.",
    gradient: 'from-amber-500 to-amber-700',
  },
];

// ─── TICKER DATA ──────────────────────────────────────────────────────────────

const TICKER = [
  'ROHACELL\u00AE Webinar \u2014 6th May | 11 AM IST \u2014 Register Now',
  'In high-performance systems, weight is a liability',
  'Speaker: Dr. Alexander Roth, Evonik Germany',
  'Aerospace \u00B7 Defense \u00B7 UAV \u00B7 Wind Energy \u00B7 Marine',
  "IF YOUR DESIGN CAN'T FAIL \u2014 YOUR MATERIAL CHOICE CAN'T EITHER",
  '+91 9353961627 \u00B7 sales@sriandcotechno.com',
];

if (!document.head.querySelector('[data-ticker-style]')) {
  const s = document.createElement('style');
  s.setAttribute('data-ticker-style', '');
  s.textContent = '@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}';
  document.head.appendChild(s);
}

// ─── COUNTDOWN HOOK ───────────────────────────────────────────────────────────

function useCountdown(target) {
  const calc = useCallback(() => {
    const diff = Math.max(0, target - Date.now());
    return {
      d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      expired: diff === 0,
    };
  }, [target]);

  const [cd, setCd] = useState(calc);

  useEffect(() => {
    const t = setInterval(() => setCd(calc()), 1000);
    return () => clearInterval(t);
  }, [calc]);

  return cd;
}

// ─── NEWS TICKER ──────────────────────────────────────────────────────────────

function NewsTicker() {
  const text    = TICKER.join('  \u00B7  ');
  const doubled = `${text}      ${text}`;
  return (
    <div className="bg-gray-900 flex items-center overflow-hidden h-9">
      <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-gray-700 h-full">
        <Rss size={11} className="text-sky-400" />
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest whitespace-nowrap">
          Latest
        </span>
      </div>
      <div className="overflow-hidden flex-1 px-4">
        <span
          className="inline-block text-[11px] text-gray-400 whitespace-nowrap"
          style={{ animation: 'ticker 40s linear infinite' }}
        >
          {doubled}
        </span>
      </div>
    </div>
  );
}

// ─── HERO BANNER ─────────────────────────────────────────────────────────────

function HeroBanner() {
  const cd = useCountdown(FEATURED_WEBINAR.target);
  const isExpired = cd.expired;

  return (
    <div
      className="relative overflow-hidden rounded-2xl mb-8"
      style={{ background: 'linear-gradient(135deg,#080f1e 0%,#0c2340 50%,#0f3d6e 100%)' }}
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute -top-8  -right-8  w-48 h-48 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute bottom-5 left-[55%] w-64 h-64 rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {isExpired ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-600/80 text-white text-[10px] font-bold uppercase tracking-wider">
              <XCircle size={11} className="text-gray-300" />
              Webinar Ended
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              Live Webinar
            </span>
          )}
          <span className="text-xs text-sky-300/80 font-medium">
            <Calendar size={11} className="inline mr-1 align-middle" />
            {FEATURED_WEBINAR.date}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            <Clock size={11} className="inline mr-1 align-middle" />
            {FEATURED_WEBINAR.time}
          </span>
        </div>

        <p className="text-[11px] font-bold text-sky-400 uppercase tracking-widest mb-2">
          ROHACELL® by Evonik
        </p>

        <div className="flex flex-col xl:flex-row gap-8 xl:items-end">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 tracking-tight">
              {FEATURED_WEBINAR.title}
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-2 max-w-xl">
              {FEATURED_WEBINAR.subtitle}
            </p>
            <p className="text-xs text-gray-500 mb-5">
              Presented by{' '}
              <span className="text-gray-300 font-medium">{FEATURED_WEBINAR.presenter}</span>
              <span className="mx-1 text-gray-700">·</span>
              <span className="text-gray-500">{FEATURED_WEBINAR.presenterTitle}</span>
            </p>

            <ul className="mb-7 space-y-1.5">
              {LEARN_POINTS.map((pt, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-400">
                  <CheckCircle2 size={13} className="text-sky-400 mt-0.5 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>

            {isExpired ? (
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-white/[0.07] border border-sky-500/30 rounded-xl px-4 py-3.5">
                  <Bell size={16} className="text-sky-400 flex-shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <p className="text-sm font-bold text-white leading-snug">
                      Stay Tuned for Our Upcoming Seminar!
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                      This session has concluded. Our next expert seminar is on the way —
                      reach out to be the first to know when it&apos;s announced.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:sales@sriandcotechno.com?subject=Notify me about upcoming seminars"
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors shadow-lg"
                  >
                    <Mail size={14} /> Notify Me
                  </a>
                  <a
                    href="tel:+919353961627"
                    className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <Phone size={13} /> +91 93539 61627
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                <a
                  href={FEATURED_WEBINAR.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-sky-50 transition-colors shadow-lg"
                >
                  <Play size={14} className="fill-gray-900" /> Register Free
                </a>
                <a
                  href="tel:+919353961627"
                  className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <Phone size={13} /> +91 93539 61627
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            {isExpired ? (
              <div className="flex flex-col items-center justify-center bg-white/[0.06] border border-sky-500/25 rounded-2xl px-6 py-6 min-w-[200px] text-center">
                <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center mb-3">
                  <Bell size={18} className="text-sky-400 animate-pulse" />
                </div>
                <span className="text-sm font-bold text-white leading-snug">Stay Tuned!</span>
                <span className="text-[11px] text-sky-400 font-medium mt-1">Next seminar coming soon</span>
                <span className="text-[10px] text-gray-600 mt-2 leading-snug">
                  Follow us or drop us a message to get notified first.
                </span>
              </div>
            ) : (
              <>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Starts in</p>
                <div className="flex gap-2">
                  {[['d','Days'],['h','Hrs'],['m','Min'],['s','Sec']].map(([k, lbl]) => (
                    <div
                      key={k}
                      className="flex flex-col items-center bg-white/[0.08] border border-white/10 rounded-xl px-3 py-2.5 min-w-[52px]"
                    >
                      <span className="text-2xl font-bold text-white tabular-nums leading-none">{cd[k]}</span>
                      <span className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">{lbl}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── APPLICATIONS SIDEBAR CARD ────────────────────────────────────────────────

function ApplicationsCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5">
      <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
        <Zap size={13} className="text-sky-500" /> Applications of ROHACELL®
      </h2>
      <div className="flex flex-col divide-y divide-gray-50">
        {APPLICATIONS.map((app, i) => (
          <div key={i} className="py-3 first:pt-0 last:pb-0">
            <p className="text-xs font-bold text-gray-800 mb-0.5">{app.label}</p>
            <p className="text-[11px] text-gray-500 leading-snug">{app.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION DIVIDER ─────────────────────────────────────────────────────────

function SectionDivider({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-14 sm:py-20 px-4 sm:px-6 mt-0">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-600/30 border border-blue-500/40
                         rounded-full text-blue-300 text-xs sm:text-sm font-semibold mb-6 tracking-widest uppercase">
          Why Choose ROHACELL®
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">{title}</h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">

      <NewsTicker />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">

        <HeroBanner />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="text-base font-bold text-gray-900 mb-3">
                In High-Performance Systems, Weight is a Liability. Weak Materials Are a Risk.
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                If your structures operate in mission-critical environments, you don&apos;t choose materials
                based on convenience—you choose them based on survivability, performance, and precision.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                <strong className="text-gray-900">ROHACELL®</strong> is engineered for exactly that. From
                aerospace structures and UAVs to radomes, defense platforms, and high-frequency applications,
                ROHACELL® delivers ultra-lightweight strength without compromising structural integrity.
              </p>
              <p className="text-sm font-semibold text-gray-800 italic">
                This is not a basic session. This is material intelligence for engineers building the future
                of defense and aerospace systems.
              </p>
              <div className="mt-5 pt-4 border-t border-gray-50">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
                  If your design can&apos;t fail — your material choice can&apos;t either.
                </p>
                <a
                  href={FEATURED_WEBINAR.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-bold px-6 py-2.5 rounded-xl transition-colors"
                >
                  Register. Attend. Execute. <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar — QuickLinks removed */}
          <div className="flex flex-col gap-4">
            <ApplicationsCard />
          </div>
        </div>
      </div>

      <SectionDivider
        title={
          <>
            Built for Engineers Who <br />
            <span className="text-blue-400">Can&apos;t Afford to Fail</span>
          </>
        }
        subtitle="ROHACELL® combines ultra-lightweight design with extraordinary mechanical performance — purpose-built for aerospace, defense, UAV, and mission-critical applications."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {FEATURES_LIST.map((feature, i) => {
            const Icon = feature.Icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient}
                                flex items-center justify-center mb-4 shadow-md flex-shrink-0`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
            Explore our full product catalogue or reach out to our team to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Browse Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              Learn About Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Features;