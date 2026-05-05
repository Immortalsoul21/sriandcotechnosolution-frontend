import React, { useEffect } from 'react';

const Careers = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const internshipOpenings = [
    {
      id: 1,
      title: 'Marketing Internship',
      intro:
        'Help us tell the story of technology that keeps our nation safe and innovation moving. You\'ll turn complex electronic components into compelling campaigns that power the Indian defence sector.',
      bullets: [
        'Freshers are welcome',
        'Diploma in Electronics & Communication Engineering (ECE) or Electrical & Electronics Engineering (EEE)',
        'Ability to work effectively in a team environment.',
        'Basic understanding of RF or electronic components is a plus.',
        'Strong communication and willingness to learn in a fast-paced environment.',
        'Translate high-tech jargon into creative social stories.',
        'Help launch campaigns for parts protecting India\'s future.',
        'Brainstorm with a team where your ideas (and jokes) matter.',
      ],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop',
      hoverStyles: 'hover:border-[#4C1D95] hover:shadow-[0_20px_50px_rgba(76,29,149,0.3)]',
      bulletColor: 'text-[#4C1D95]',
      type: 'Internship',
    },
    {
      id: 2,
      title: 'Sales Internship',
      intro:
        'Step into the front lines of innovation by helping us deliver critical parts. You\'ll learn to build powerful partnerships—without the boring corporate-speak.',
      bullets: [
        'Freshers are welcome',
        'Diploma in Electronics & Communication Engineering (ECE) or Electrical & Electronics Engineering (EEE)',
        'Ability to work effectively in a team environment.',
        'Basic understanding of RF or electronic components is a plus.',
        'Strong communication and willingness to learn in a fast-paced environment.',
        'Handle inquiries for high-tech national security components.',
        'Get a front-row seat to learning complex tech specs easily.',
        'Support systems to ensure mission-ready orders are on time.',
      ],
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop',
      hoverStyles: 'hover:border-[#2563EB] hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)]',
      bulletColor: 'text-[#2563EB]',
      type: 'Internship',
    },
  ];

  return (
    <div className="w-full font-['Plus_Jakarta_Sans',sans-serif] text-[#0B1221] relative overflow-hidden">

      {/* Background Layer */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#EDE9E9]">
        <div className="absolute rounded-full filter blur-[80px] opacity-30 animate-pulse w-[500px] h-[500px] bg-[rgba(2,176,244,0.4)] -top-[100px] -right-[100px]" />
        <div className="absolute rounded-full filter blur-[80px] opacity-20 w-[400px] h-[400px] bg-[rgba(76,29,149,0.3)] bottom-0 left-0" />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center">
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 bg-gradient-to-br from-[#0B1221] to-[#2563EB] bg-clip-text text-transparent">
          Build Your Future <br /> with <span className="text-[#2563EB]">Sri & Co.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are looking for passionate individuals to join our programs and grow alongside industry experts.
        </p>
      </section>

      {/*{ Video Placeholder }
      <section className="max-w-5xl mx-auto px-6 mb-24 transition-all duration-700 animate-on-scroll opacity-0 translate-y-10">
        <div className="aspect-video w-full bg-white/50 backdrop-blur-sm rounded-[32px] border border-white/80 shadow-2xl flex items-center justify-center overflow-hidden group">
          <div className="text-gray-400 group-hover:scale-110 transition-transform duration-500">
            <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </section>*/}

      {/* ── INTERNSHIP OPENINGS ── */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <h2 className="text-3xl font-bold text-center mb-4">Internship Opportunities</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
          Kickstart your career with hands-on experience in the RF and electronics industry.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {internshipOpenings.map((job) => (
            <div
              key={job.id}
              className={`bg-white/80 backdrop-blur-md p-8 rounded-[32px] flex flex-col items-center border-b-0 border-transparent transition-all duration-500 ease-in-out animate-on-scroll opacity-0 translate-y-10 ${job.hoverStyles} hover:border-b-8 hover:-translate-y-2`}
            >
              <div className="rounded-2xl overflow-hidden mb-8 h-48 w-full shadow-sm">
                <img src={job.image} alt={job.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">{job.title}</h3>
              <p className="text-sm text-gray-700 mb-6 text-center leading-relaxed italic px-2">
                "{job.intro}"
              </p>
              <ul className="text-left w-full space-y-3 mb-8 px-2">
                {job.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className={`mr-2 font-bold ${job.bulletColor}`}>→</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/kAUCokaEEmsyynXh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#0B1221] text-white py-4 rounded-xl font-bold hover:bg-[#2563EB] transition-colors duration-300 shadow-lg shadow-blue-900/10"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Careers;