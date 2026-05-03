import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const SERVICE_ID  = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const WA_NUMBER   = '919353961627';

const CARDS = [
  { icon: Phone,  title: 'Call Us',          text: '+91 9353961627',           href: 'tel:+919353961627',                label: 'Call now',    grad: 'from-sky-400 to-cyan-500',     stripe: 'from-sky-400 to-cyan-400' },
  { icon: Mail,   title: 'Email Us',          text: 'sales@sriandcotechno.com', href: 'mailto:sales@sriandcotechno.com', label: 'Send email',  grad: 'from-violet-500 to-purple-600', stripe: 'from-violet-400 to-purple-500' },
  { icon: MapPin, title: 'Visit Us',          text: 'No 35, 16th Cross, Oil Mill Rd, Mangala Layout, Kammanahalli, Bengaluru – 560084', href: null, label: null, grad: 'from-emerald-400 to-teal-500', stripe: 'from-emerald-400 to-teal-400' },
  { icon: Clock,  title: 'Business Hours',    text: 'Mon–Sat: 9 AM – 6 PM\nSunday: Closed', href: null, label: null, grad: 'from-amber-400 to-orange-500', stripe: 'from-amber-400 to-orange-400' },
];

const SOCIALS = [
  { name: 'LinkedIn',   href: 'https://linkedin.com/company/sriandcotechno', color: '#0A66C2', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: 'Instagram',  href: 'https://instagram.com/sriandcotechno',        color: '#E1306C', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { name: 'YouTube',    href: 'https://youtube.com/@sriandcotechno',          color: '#FF0000', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: 'Facebook',   href: 'https://facebook.com/sriandcotechno',          color: '#1877F2', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
];

const inp = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/15 transition-all';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '', message: '', note: '' });
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  const set = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...form, to_email: 'sales@sriandcotechno.com' }, PUBLIC_KEY);
    } catch {
      const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInquiry: ${form.inquiry}\n\n${form.message}\n\nNote: ${form.note}`);
      window.location.href = `mailto:sales@sriandcotechno.com?subject=Enquiry from ${form.name}&body=${b}`;
    }
    const wa = encodeURIComponent(`📩 *New Enquiry*\n👤 ${form.name}\n📧 ${form.email}\n📱 ${form.phone || 'N/A'}\n📋 ${form.inquiry}\n\n${form.message}\n\nNote: ${form.note || 'N/A'}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${wa}`, '_blank', 'noopener');
    setBusy(false);
    setDone(true);
  };

  return (
    <main className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <section className="bg-gray-900 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle,#38bdf8 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="pointer-events-none absolute -top-40 right-0 w-96 h-96 rounded-full bg-sky-500/10 blur-[100px]" />
        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          <span className="text-xs font-semibold text-sky-400 bg-sky-400/10 border border-sky-400/20 rounded-full px-3 py-1 uppercase tracking-widest">Contact Us</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-2">Let's Talk About<br /><span className="text-sky-400">Your Requirements</span></h1>
          <p className="text-sm text-gray-400 max-w-md mb-5">Sourcing RF components, custom solutions, or partnerships — we're ready to help.</p>
          <div className="flex gap-3 flex-wrap">
            {SOCIALS.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" title={s.name}
                 className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/10 text-white hover:scale-110 transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map(({ icon: Icon, title, text, href, label, grad, stripe }) => (
            <div key={title} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`h-[3px] bg-gradient-to-r ${stripe}`} />
              <div className="p-5 flex flex-col gap-3">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-sm font-bold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">{text}</p>
                {href && (
                  <a href={href} className="self-start text-xs font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-sky-600 hover:to-sky-500 px-3.5 py-1.5 rounded-lg transition-all">
                    {label} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Social Panel */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Form */}
        <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl shadow-sm p-7">
          {done ? (
            <div className="flex flex-col items-center text-center gap-4 py-16">
              <div className="w-14 h-14 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center">
                <CheckCircle size={26} className="text-sky-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Message Sent!</h2>
              <p className="text-sm text-gray-500 max-w-xs">Our team will get back to you within 1–2 business days.</p>
              <button onClick={() => { setDone(false); setForm({ name:'', email:'', phone:'', inquiry:'', message:'', note:'' }); }}
                className="text-xs font-semibold text-sky-600 border border-sky-200 rounded-lg px-5 py-2 hover:bg-sky-50 transition-colors">
                Send another
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Send us a Message</h2>
              <p className="text-xs text-gray-400 mb-6">Fields marked <span className="text-sky-500">*</span> are required.</p>
              <form onSubmit={submit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Name <span className="text-sky-500">*</span></label><input name="name" value={form.name} onChange={set} required placeholder="John Doe" className={inp} /></div>
                  <div><label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Email <span className="text-sky-500">*</span></label><input type="email" name="email" value={form.email} onChange={set} required placeholder="john@company.com" className={inp} /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Phone</label><input name="phone" value={form.phone} onChange={set} placeholder="+91 XXXXX XXXXX" className={inp} /></div>
                  <div><label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Inquiry <span className="text-sky-500">*</span></label>
                    <select name="inquiry" value={form.inquiry} onChange={set} required className={`${inp} bg-white cursor-pointer`}>
                      <option value="" disabled>Select…</option>
                      {['Product Enquiry','Request a Quote','Technical Support','Partnership / Distribution','General Question'].map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div><label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1.5">Message <span className="text-sky-500">*</span></label><textarea name="message" value={form.message} onChange={set} required rows={4} placeholder="Describe your requirement…" className={`${inp} resize-none`} /></div>

                {/* Custom note */}
                <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={15} className="text-sky-600" />
                    <p className="text-sm font-bold text-gray-900">Custom Message</p>
                  </div>
                  <p className="text-xs text-gray-500">Preferred callback time, urgency, or anything extra.</p>
                  <textarea name="note" value={form.note} onChange={set} rows={2} placeholder='e.g. "Call after 3 PM IST"' className={`${inp} resize-none bg-white border-sky-200`} />
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <button type="submit" disabled={busy}
                    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 text-white text-sm font-semibold rounded-xl px-7 py-3 transition-colors shadow-md">
                    {busy ? <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> : <Send size={14} />}
                    {busy ? 'Sending…' : 'Submit'}
                  </button>
                  <p className="text-[11px] text-gray-400">Emails <span className="text-gray-600 font-medium">sales@sriandcotechno.com</span> + WhatsApp alert</p>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Social panel */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-sky-500/10 blur-[50px]" />
            <p className="text-base font-bold text-white">Connect With Us</p>
            <p className="text-xs text-gray-400">Stay updated with our latest products and news.</p>
            {SOCIALS.map(s => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                 className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30 rounded-xl px-4 py-3 transition-all">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: s.color + '22', color: s.color, border: `1px solid ${s.color}33` }}>{s.icon}</div>
                <span className="text-sm font-semibold text-white">{s.name}</span>
                <span className="ml-auto text-gray-600 group-hover:text-sky-400 text-xs">↗</span>
              </a>
            ))}
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-xl px-4 py-3 transition-all group">
              <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <span className="text-sm font-semibold text-[#25D366]">WhatsApp</span>
              <span className="ml-auto text-[#25D366]/50 group-hover:text-[#25D366] text-xs">↗</span>
            </a>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5">
            <p className="text-sm font-bold text-gray-900 mb-3">Reach out directly</p>
            <a href="tel:+919353961627" className="flex items-center gap-2 text-xs font-semibold text-gray-800 bg-gray-50 hover:bg-sky-50 border border-gray-200 hover:border-sky-200 rounded-xl px-4 py-2.5 mb-2 transition-all">
              <Phone size={13} className="text-sky-600" /> +91 9353961627
            </a>
            <a href="mailto:sales@sriandcotechno.com" className="flex items-center gap-2 text-xs font-semibold text-gray-800 bg-gray-50 hover:bg-sky-50 border border-gray-200 hover:border-sky-200 rounded-xl px-4 py-2.5 transition-all">
              <Mail size={13} className="text-sky-600" /> sales@sriandcotechno.com
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}