import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
    const [lineHeight, setLineHeight] = useState(0);
    const lineTrackRef = useRef(null);
    const rowRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !rowRefs.current.includes(el)) {
            rowRefs.current.push(el);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // 1. Fill Line Logic
            if (lineTrackRef.current) {
                const trackRect = lineTrackRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const startPoint = windowHeight / 2;
                const scrolledPastStart = startPoint - trackRect.top;

                let percentage = (scrolledPastStart / trackRect.height) * 100;
                if (percentage < 0) percentage = 0;
                if (percentage > 100) percentage = 100;

                setLineHeight(percentage);
            }

            // 2. Row Activation Logic
            rowRefs.current.forEach((row) => {
                if (!row) return;
                const rowRect = row.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const showPoint = windowHeight * 0.85;
                const hidePoint = windowHeight * 0.25;

                if (rowRect.top < showPoint && rowRect.bottom > hidePoint) {
                    row.classList.add('active');
                } else {
                    row.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTimeline = () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full font-['Plus_Jakarta_Sans',sans-serif] text-[#0B1221] min-h-screen relative selection:bg-[#2563EB] selection:text-white flex flex-col items-center">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;500;700;800&display=swap');
        
        html, body {
          overflow-x: hidden;
          width: 100%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(50px) scale(1.1); }
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceCustom { 
          0%, 20%, 50%, 80%, 100% {transform:translateY(0);} 
          40% {transform:translateY(-10px);} 
          60% {transform:translateY(-5px);} 
        }

        .animate-float { animation: float 15s infinite ease-in-out; }
        .animate-fadeUp { animation: fadeUp 1s forwards 0.5s; }
        .animate-fadeUp-delay { animation: fadeUp 1s forwards 0.8s; }
        .animate-bounce-custom { animation: bounceCustom 2s infinite; }

        /* Row Transitions */
        .timeline-row .content-box, 
        .timeline-row .image-box {
          opacity: 0;
          transform: scale(0.95) translateY(30px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          will-change: opacity, transform;
        }
        .timeline-row.active .content-box, 
        .timeline-row.active .image-box {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        
        /* Image Scale Effect */
        .timeline-row .image-box img { transition: transform 0.6s ease; }
        .timeline-row.active .image-box img { transform: scale(1.05); }
        
        /* Dot Active State */
        .timeline-row.active .timeline-dot {
  background-color: #02B0F4;
  border-color: #2563EB;
  box-shadow: 0 0 0 6px rgba(2, 176, 244, 0.2);
  scale: 1.1;
}

      `}</style>

            {/* --- Background Layer --- */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none bg-[#EDE9E9]">
                <div className="absolute rounded-full filter blur-[80px] opacity-40 animate-float w-[600px] h-[600px] bg-[rgba(2,176,244,0.59)] -top-[200px] -left-[100px]"></div>
                <div className="absolute rounded-full filter blur-[80px] opacity-40 animate-float w-[500px] h-[500px] bg-[rgba(76,29,149,0.3)] -bottom-[100px] -right-[100px] [animation-delay:-5s]"></div>
                <div className="absolute rounded-full filter blur-[80px] animate-float w-[300px] h-[300px] bg-[#2563EB] top-[40%] left-[30%] opacity-20 [animation-duration:25s]"></div>
            </div>

            {/* --- Hero Header --- */}
            <header className="w-full relative z-10 h-screen flex flex-col justify-center items-center text-center px-[20px]">
                <h1 className="text-[clamp(3rem,6vw,5rem)] font-[800] leading-[1.3] pb-[10px] mb-[10px] bg-gradient-to-br from-[#0B1221] to-[#2563EB] bg-clip-text text-transparent opacity-0 translate-y-[30px] animate-fadeUp">
                    About <br /> <span className="text-[#2563EB]">Sri & Co.</span>
                </h1>
                <p className="text-[1.25rem] text-[#555] max-w-[600px] opacity-0 translate-y-[30px] animate-fadeUp-delay">
                    Delivering high-quality RF, Microwave, and electronic component solutions.
                </p>
                <div
                    onClick={scrollToTimeline}
                    className="mt-[50px] text-[2rem] text-[#4C1D95] cursor-pointer animate-bounce-custom"
                >
                    ↓
                </div>
            </header>

            {/* --- Timeline Section --- */}
            <section className="w-full relative z-10 max-w-[1200px] pt-[100px] px-[20px] pb-[200px] max-[900px]:pt-[50px]" id="timeline">

                {/* Vertical Lines */}
                <div ref={lineTrackRef} id="lineTrack" className="max-[900px]:hidden absolute left-1/2 top-0 bottom-[50px] w-[4px] bg-[#0B1221]/10 -translate-x-1/2 rounded-[2px] z-[1]"></div>
                <div
                    className="max-[900px]:hidden absolute left-1/2 top-0 w-[4px] bg-[#2563EB] -translate-x-1/2 z-[2] rounded-[2px] shadow-[0_0_15px_#02B0F4]"
                    style={{ height: `${lineHeight}%` }}
                ></div>

                {/* --- ROW 1 --- */}
                <div ref={addToRefs} className="timeline-row w-full flex justify-between items-center mb-[200px] relative z-[10] max-[900px]:flex-col max-[900px]:gap-[40px] max-[900px]:mb-[120px]">

                    <div className="content-box w-[42%] flex-none max-[900px]:w-full bg-[rgba(255,255,255,0.95)] p-[40px] rounded-[24px] border border-white/80 shadow-[0_20px_40px_rgba(11,18,33,0.05)]">
                        <h2 className="text-[2.2rem] font-bold text-[#4C1D95] mb-[15px] leading-[1.2]">Who We Are</h2>
                        <p className="text-[1.05rem] leading-[1.7] text-[#444]">
                            We are a team of experienced electronics and RF technology professionals dedicated to delivering high-quality component solutions. We support industrial, commercial, and research-driven applications by working closely with engineers and system integrators to ensure reliable performance and technical precision.
                        </p>
                    </div>

                    {/* Dot */}
                    <div className="timeline-dot max-[900px]:hidden absolute top-1/2 left-1/2 w-[24px] h-[24px] bg-[#EDE9E9] border-[4px] border-[#aaa] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-400 z-[20]"></div>

                    <div className="image-box w-[42%] flex-none max-[900px]:w-full h-[400px] max-[900px]:h-[300px] rounded-[24px] overflow-hidden bg-white relative shadow-[20px_20px_0_rgba(2,176,244,0.2)] max-[900px]:shadow-none">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* --- ROW 2 --- */}
                <div ref={addToRefs} className="timeline-row w-full flex justify-between items-center mb-[200px] relative z-[10] flex-row-reverse max-[900px]:flex-col max-[900px]:gap-[40px] max-[900px]:mb-[120px]">

                    <div className="image-box w-[42%] flex-none max-[900px]:w-full h-[400px] max-[900px]:h-[300px] rounded-[24px] overflow-hidden bg-white relative shadow-[-20px_20px_0_rgba(2,176,244,0.2)] max-[900px]:shadow-none">
                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Circuit Board" className="w-full h-full object-cover" />
                    </div>

                    {/* Dot */}
                    <div className="timeline-dot max-[900px]:hidden absolute top-1/2 left-1/2 w-[24px] h-[24px] bg-[#EDE9E9] border-[4px] border-[#aaa] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-400 z-[20]"></div>

                    <div className="content-box w-[42%] flex-none max-[900px]:w-full bg-[rgba(255,255,255,0.95)] p-[40px] rounded-[24px] border border-white/80 shadow-[0_20px_40px_rgba(11,18,33,0.05)]">
                        <h2 className="text-[2.2rem] font-bold text-[#2563EB] mb-[15px] leading-[1.2]">Our Mission</h2>
                        <p className="text-[1.05rem] leading-[1.7] text-[#444]">
                            Dedicated to delivering cutting-edge electronic components and specialized RF solutions, we commit to exceptional quality and expert support. Our tailored solutions meet the diverse needs of clients across various industries, ensuring efficiency and reliability for tomorrow's technology.
                        </p>
                    </div>
                </div>

                {/* --- ROW 3 --- */}
                <div ref={addToRefs} className="timeline-row w-full flex justify-between items-center mb-[200px] relative z-[10] max-[900px]:flex-col max-[900px]:gap-[40px] max-[900px]:mb-[120px]">

                    <div className="content-box w-[42%] flex-none max-[900px]:w-full bg-[rgba(255,255,255,0.95)] p-[40px] rounded-[24px] border border-white/80 shadow-[0_20px_40px_rgba(11,18,33,0.05)]">
                        <h2 className="text-[2.2rem] font-bold text-[#02B0F4] mb-[15px] leading-[1.2]">Our Vision</h2>
                        <p className="text-[1.05rem] leading-[1.7] text-[#444]">
                            To become a trusted global leader in advanced electronic and RF-Microwave solutions by driving innovation, reliability, and excellence. We envision empowering industries with future-ready technologies and contributing to a smarter, more connected world through sustainable engineering.
                        </p>
                    </div>

                    {/* Dot */}
                    <div className="timeline-dot max-[900px]:hidden absolute top-1/2 left-1/2 w-[24px] h-[24px] bg-[#EDE9E9] border-[4px] border-[#aaa] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-400 z-[20]"></div>

                    <div className="image-box w-[42%] flex-none max-[900px]:w-full h-[400px] max-[900px]:h-[300px] rounded-[24px] overflow-hidden bg-white relative shadow-[20px_20px_0_rgba(2,176,244,0.2)] max-[900px]:shadow-none">
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Global Vision" className="w-full h-full object-cover" />
                    </div>
                </div>

            </section>

        </div>
    );
};

export default AboutUs;