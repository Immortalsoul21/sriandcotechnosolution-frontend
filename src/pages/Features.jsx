import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Bell, Calendar, ChevronRight, Clock, ExternalLink,
  Rss, Tag, TrendingUp, Users, Zap, BookOpen, Radio,
  ArrowRight, Play, Filter, Mail,
  Globe, ShieldCheck, Headphones, BarChart3, Wrench, Package,
} from 'lucide-react';

// ─── NEWS DATA ────────────────────────────────────────────────────────────────

const FEATURED_WEBINAR = {
  title: 'ROHACELL® Lightweight Engineering',
  subtitle: 'Material intelligence for engineers building the future of defense and aerospace systems.',
  date: 'Wednesday, May 6, 2026',
  time: '11:00 AM IST',
  duration: '120 min',
  presenter: 'Dr. Alexander Roth',
  seats: 142,
  target: new Date('2026-05-06T11:00:00+05:30'),
  registerLink: 'https://lnkd.in/dimzu7fY',
  learnMoreLink: 'https://www.linkedin.com/feed/update/urn:li:share:7456178826050478081/',
};

const WEBINARS = [
  { id: 1, day: '24', month: 'APR', title: 'Smart Automation for Modern Industries', time: '11:00 AM IST', duration: '90 min', tag: 'Live Webinar', tagCls: 'bg-sky-100 text-sky-800' },
  { id: 2, day: '08', month: 'MAY', title: 'PLC Programming: Basics to Advanced', time: '3:00 PM IST', duration: '60 min', tag: 'Workshop', tagCls: 'bg-violet-100 text-violet-800' },
  { id: 3, day: '22', month: 'MAY', title: 'SCADA Systems & IIoT Integration', time: '11:00 AM IST', duration: '75 min', tag: 'Webinar', tagCls: 'bg-emerald-100 text-emerald-800' },
  { id: 4, day: '10', month: 'JUN', title: 'Energy Savings with Modern VFDs', time: '2:00 PM IST', duration: '60 min', tag: 'Webinar', tagCls: 'bg-amber-100 text-amber-800' },
];

const NEWS = [
  {
    id: 1, cat: 'product', catLabel: 'Product Launch', date: 'Apr 10, 2026', hot: true,
    title: 'New High-Efficiency VFD Series Now Available',
    excerpt: 'Our latest variable frequency drive range delivers up to 40% energy savings with built-in IoT connectivity and remote diagnostics.'
  },
  {
    id: 2, cat: 'company', catLabel: 'Partnership', date: 'Apr 5, 2026', hot: false,
    title: 'Sri and Co Extends Siemens India Partnership for 2026–28',
    excerpt: 'Renewed and expanded strategic partnership covering new product lines and service territories across South India.'
  },
  {
    id: 3, cat: 'industry', catLabel: 'Industry', date: 'Mar 28, 2026', hot: false,
    title: 'Industry 4.0 Reshaping Manufacturing in South India',
    excerpt: 'Smart factory technologies, predictive maintenance, and digital twins are transforming the production floor in Bangalore, Chennai, and Hyderabad.'
  },
  {
    id: 4, cat: 'company', catLabel: 'Certification', date: 'Mar 20, 2026', hot: false,
    title: 'ISO 9001:2015 Recertification Successfully Completed',
    excerpt: 'After a rigorous third-party audit, Sri and Co Techno Solutions retains its ISO 9001:2015 certification.'
  },
  {
    id: 5, cat: 'tips', catLabel: 'Tech Tip', date: 'Mar 15, 2026', hot: false,
    title: '5 Ways to Extend the Life of Your Industrial Drives',
    excerpt: 'Practical maintenance tips covering thermal management, cable routing, parameter tuning, and scheduled servicing.'
  },
  {
    id: 6, cat: 'company', catLabel: 'Expansion', date: 'Mar 8, 2026', hot: false,
    title: 'New Branch Opening in Hyderabad — May 2026',
    excerpt: "Better serving Telangana and Andhra Pradesh with a fully operational branch in Hyderabad's industrial corridor."
  },
];

const NEWS_STATS = [
  { value: '24+', label: 'Webinars hosted', Icon: Radio },
  { value: '6k+', label: 'Newsletter subscribers', Icon: Users },
  { value: '38', label: 'Articles published', Icon: BookOpen },
  { value: '12', label: 'Product launches', Icon: Zap },
];

const TOPICS = ['VFD', 'PLC', 'SCADA', 'IIoT', 'Automation', 'Energy Savings', 'Industry 4.0', 'Drives', 'HMI', 'Panel Boards', 'RF Components', 'Microwave'];
const FILTERS = ['All', 'Product', 'Company', 'Industry', 'Tips'];

const CAT_CLS = {
  product: 'bg-emerald-100 text-emerald-800',
  company: 'bg-sky-100 text-sky-800',
  industry: 'bg-violet-100 text-violet-800',
  tips: 'bg-amber-100 text-amber-800',
};

const TICKER = [
  'New VFD range now available',
  'Siemens India partnership extended through 2028',
  'Webinar: Smart Automation — April 24 at 11 AM IST',
  'ISO 9001:2015 recertification complete',
  'New branch opening in Hyderabad — May 2026',
  'Case study: 40% energy savings with our drives',
  'PLC workshop seats filling fast — register now',
];

// ─── FEATURES DATA ────────────────────────────────────────────────────────────

const FEATURES_LIST = [
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: 'Precision Engineering',
    description: 'Every component is selected and tested against stringent quality benchmarks to ensure performance reliability in demanding industrial applications.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Global Distribution',
    description: 'Our extensive logistics network spans 50+ countries, ensuring fast, secure, and cost-effective delivery wherever your project demands.',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: 'Same-Day Shipping',
    description: 'In-stock items are dispatched the same business day. Our warehouse management system guarantees accuracy and speed at every step.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <Headphones className="w-6 h-6 text-white" />,
    title: 'Dedicated Support',
    description: 'Our expert technical team is available to help with component selection, datasheet interpretation, and system integration advice.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: <Wrench className="w-6 h-6 text-white" />,
    title: 'Custom Sourcing',
    description: "Can't find what you need? Our dedicated sourcing team will track down hard-to-find or obsolete components on your behalf.",
    gradient: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: <Package className="w-6 h-6 text-white" />,
    title: 'Flexible MOQ',
    description: 'Whether you need a single prototype unit or bulk production quantities, our flexible minimum order quantities adapt to your needs.',
    gradient: 'from-amber-500 to-amber-700',
  },
];

const FEATURES_STATS = [
  { value: '50,000+', label: 'SKUs Available' },
  { value: '20+', label: 'Years Experience' },
  { value: '98%', label: 'On-Time Delivery' },
  { value: '150+', label: 'Countries Served' },
];

// ─── COUNTDOWN HOOK ───────────────────────────────────────────────────────────

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    };
  };
  const [cd, setCd] = useState(calc);
  useEffect(() => {
    const t = setInterval(() => setCd(calc()), 1000);
    return () => clearInterval(t);
  });
  return cd;
}

// ─── NEWS TICKER ─────────────────────────────────────────────────────────────

function NewsTicker() {
  const text = TICKER.join('  ·  ');
  const doubled = `${text}      ${text}`;
  return (
    <div className="bg-gray-900 flex items-center overflow-hidden h-9">
      <div className="flex-shrink-0 flex items-center gap-2 px-4 border-r border-gray-700 h-full">
        <Rss size={11} className="text-sky-400" />
        <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest whitespace-nowrap">Latest</span>
      </div>
      <div className="overflow-hidden flex-1 px-4">
        <span
          className="inline-block text-[11px] text-gray-400 whitespace-nowrap"
          style={{ animation: 'ticker 36s linear infinite' }}
        >
          {doubled}
        </span>
      </div>
      <style>{`@keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ─── HERO BANNER ─────────────────────────────────────────────────────────────

function HeroBanner() {
  const cd = useCountdown(FEATURED_WEBINAR.target);
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
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/90 text-white text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            Live Webinar
          </span>
          <span className="text-xs text-sky-300/80 font-medium">
            <Calendar size={11} className="inline mr-1 align-middle" />
            {FEATURED_WEBINAR.date}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            <Clock size={11} className="inline mr-1 align-middle" />
            {FEATURED_WEBINAR.time} · {FEATURED_WEBINAR.duration}
          </span>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 xl:items-end">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3 tracking-tight">
              {FEATURED_WEBINAR.title}
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-2 max-w-xl">{FEATURED_WEBINAR.subtitle}</p>
            <p className="text-xs text-gray-500 mb-7">
              Presented by <span className="text-gray-300 font-medium">{FEATURED_WEBINAR.presenter}</span>
              <span className="mx-2 text-gray-700">·</span>
              <Users size={11} className="inline mr-1 align-middle text-gray-500" />
              {FEATURED_WEBINAR.seats} registered
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={FEATURED_WEBINAR.registerLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-sky-50 transition-colors shadow-lg">
                <Play size={14} className="fill-gray-900" /> Register Now
              </a>
              <a href={FEATURED_WEBINAR.learnMoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors">
                Learn more <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold">Starts in</p>
            <div className="flex gap-2">
              {[['d', 'Days'], ['h', 'Hrs'], ['m', 'Min'], ['s', 'Sec']].map(([k, lbl]) => (
                <div key={k} className="flex flex-col items-center bg-white/[0.08] border border-white/10 rounded-xl px-3 py-2.5 min-w-[52px]">
                  <span className="text-2xl font-bold text-white tabular-nums leading-none">{cd[k]}</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── NEWS STATS ROW ───────────────────────────────────────────────────────────

function NewsStatsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {NEWS_STATS.map(({ value, label, Icon }) => (
        <div key={label} className="bg-white border border-gray-100 rounded-xl px-4 py-3.5 flex items-center gap-3 hover:border-sky-200 transition-colors">
          <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0">
            <Icon size={16} className="text-sky-600" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 leading-none">{value}</p>
            <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── NEWS CARD ────────────────────────────────────────────────────────────────

function NewsCard({ item }) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-sky-200 hover:shadow-sm transition-all duration-200 cursor-pointer group">
      <div className="flex items-center justify-between gap-2">
        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${CAT_CLS[item.cat]}`}>
          {item.catLabel}
        </span>
        {item.hot && (
          <span className="flex items-center gap-1 text-[10px] font-semibold text-red-500">
            <TrendingUp size={11} /> Hot
          </span>
        )}
      </div>
      <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-sky-700 transition-colors flex-1">
        {item.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed">{item.excerpt}</p>
      <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-auto">
        <span className="text-[11px] text-gray-400 flex items-center gap-1">
          <Calendar size={10} />{item.date}
        </span>
        <span className="text-[11px] text-sky-500 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Read more <ChevronRight size={11} />
        </span>
      </div>
    </article>
  );
}

// ─── UPCOMING WEBINARS ────────────────────────────────────────────────────────

function UpcomingWebinars() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Calendar size={14} className="text-sky-500" /> Upcoming Events
        </h2>
        <button className="text-[11px] text-sky-600 font-semibold flex items-center gap-0.5 hover:underline">
          View all <ChevronRight size={11} />
        </button>
      </div>
      <div className="flex flex-col divide-y divide-gray-50">
        {WEBINARS.map(w => (
          <div key={w.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 group cursor-pointer">
            <div className="flex-shrink-0 w-10 text-center bg-gray-50 group-hover:bg-sky-50 rounded-xl py-1.5 transition-colors">
              <p className="text-base font-bold text-gray-900 leading-none">{w.day}</p>
              <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wide mt-0.5">{w.month}</p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 truncate group-hover:text-sky-700 transition-colors">{w.title}</p>
              <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
                <Clock size={9} />{w.time} · {w.duration}
              </p>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${w.tagCls}`}>
              {w.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────

function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mt-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Bell size={14} className="text-sky-400" />
            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest">Stay Updated</span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-white mb-1">Get news straight to your inbox</h2>
          <p className="text-xs text-gray-500 leading-relaxed">Product launches, webinar alerts &amp; industry insights — no spam, ever.</p>
        </div>
        {!submitted ? (
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && email && setSubmitted(true)}
              className="flex-1 sm:w-52 px-4 py-2.5 rounded-xl text-sm bg-gray-800 border border-gray-700
                         text-white placeholder-gray-600 outline-none focus:border-sky-500 transition-colors"
            />
            <button
              onClick={() => email && setSubmitted(true)}
              className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl
                         transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Mail size={13} /> Subscribe
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400">
            <div className="w-6 h-6 rounded-full bg-emerald-900/60 flex items-center justify-center text-xs">✓</div>
            You're subscribed!
          </div>
        )}
      </div>
    </div>
  );
}

// ─── DIVIDER ─────────────────────────────────────────────────────────────────

function SectionDivider({ title, subtitle }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-14 sm:py-20 px-4 sm:px-6 mt-0">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 bg-blue-600/30 border border-blue-500/40
                         rounded-full text-blue-300 text-xs sm:text-sm font-semibold mb-6 tracking-widest uppercase">
          Why Choose Us
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">{title}</h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

// ─── MAIN COMBINED PAGE ───────────────────────────────────────────────────────

const Features = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? NEWS
    : NEWS.filter(n => n.cat === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ══════════════ NEWS & UPDATES SECTION ══════════════ */}
      {/*
      <NewsTicker />
      */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8">

        {/*
        <div className="mb-7">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
            <Link to="/home" className="hover:text-sky-500 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-gray-600 font-medium">Features &amp; News</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2.5">
            <Rss size={22} className="text-sky-500" />
            News &amp; Updates
          </h1>
          <p className="text-sm text-gray-500 mt-1.5">
            Latest from Sri and Co Techno Solutions — webinars, product news &amp; industry insights.
          </p>
        </div>
        */}

        <HeroBanner />

        {/*
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              <Filter size={13} className="text-gray-400 flex-shrink-0" />
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-150
                    ${activeFilter === f
                      ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'}`}
                >
                  {f}
                </button>
              ))}
              <span className="text-xs text-gray-400 ml-1">
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filtered.map(item => <NewsCard key={item.id} item={item} />)}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <UpcomingWebinars />

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
                <ExternalLink size={13} className="text-sky-500" /> Quick Links
              </h2>
              {[
                { label: 'Browse All Products', path: '/products' },
                { label: 'About Us', path: '/about' },
                { label: 'Features Overview', path: '/features' },
                { label: 'Contact & Support', path: '/about' },
              ].map(link => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-b-0
                             text-xs text-gray-600 hover:text-sky-600 transition-colors group"
                >
                  {link.label}
                  <ChevronRight size={12} className="text-gray-300 group-hover:text-sky-400 transition-colors" />
                </Link>
              ))}
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
                <Tag size={13} className="text-sky-500" /> Topics
              </h2>
              <div className="flex flex-wrap gap-2">
                {TOPICS.map(t => (
                  <span
                    key={t}
                    className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-600
                               hover:bg-sky-100 hover:text-sky-700 cursor-pointer transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
        */}
      </div>

      {/* ══════════════ FEATURES SECTION ══════════════ */}

      <SectionDivider
        title={<>From Manufacturing to <br /><span className="text-blue-400">Precision Sourcing</span></>}
        subtitle="From manufacturing to precision sourcing and global delivery, every feature of our platform is designed to keep your projects moving without compromise."
      />

      {/* Features stats bar */}
      {/* <div className="bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {FEATURES_STATS.map((s) => (
            <div key={s.label}>
              <p className="text-2xl sm:text-3xl font-bold">{s.value}</p>
              <p className="text-blue-200 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Feature cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURES_LIST.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${feature.gradient}
                              flex items-center justify-center mb-4 shadow-md flex-shrink-0`}>
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
            Explore our full product catalogue or reach out to our team to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Browse Products
            </button>
            <button
              onClick={() => navigate('/about')}
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold
                         hover:bg-gray-50 transition-colors text-sm sm:text-base"
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