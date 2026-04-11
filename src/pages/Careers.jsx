import React, { useEffect } from 'react';

const Careers = () => {
    // Re-using the animation logic for consistency
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
        handleScroll(); // Run once on load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const internshipOpenings = [
        {
            id: 1,
            title: "Marketing Internship",
            intro: "Help us tell the story of technology that keeps our nation safe and innovation moving. You’ll turn complex electronic components into compelling campaigns that power the Indian defence sector.",
            bullets: [
                "Translate high-tech jargon into creative social stories.",
                "Help launch campaigns for parts protecting India's future.",
                "Brainstorm with a team where your ideas (and jokes) matter."
            ],
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
            hoverStyles: "hover:border-[#4C1D95] hover:shadow-[0_20px_50px_rgba(76,29,149,0.3)]",
            bulletColor: "text-[#4C1D95]"
        },
        {
            id: 2,
            title: "Sales Internship",
            intro: "Step into the front lines of innovation by helping us deliver critical parts. You’ll learn to build powerful partnerships—without the boring corporate-speak.",
            bullets: [
                "Handle inquiries for high-tech national security components.",
                "Get a front-row seat to learning complex tech specs easily.",
                "Support systems to ensure mission-ready orders are on time."
            ],
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop",
            hoverStyles: "hover:border-[#2563EB] hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)]",
            bulletColor: "text-[#2563EB]"
        },
    ];

    return (
        <div className="w-full font-['Plus_Jakarta_Sans',sans-serif] text-[#0B1221] relative overflow-hidden">

            {/* --- Background Layer (Matches About Us) --- */}
            <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#EDE9E9]">
                <div className="absolute rounded-full filter blur-[80px] opacity-30 animate-pulse w-[500px] h-[500px] bg-[rgba(2,176,244,0.4)] -top-[100px] -right-[100px]"></div>
                <div className="absolute rounded-full filter blur-[80px] opacity-20 w-[400px] h-[400px] bg-[rgba(76,29,149,0.3)] bottom-0 left-0"></div>
            </div>

            {/* --- Hero Section --- */}
            <section className="pt-32 pb-20 px-6 text-center">
                <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold mb-6 bg-gradient-to-br from-[#0B1221] to-[#2563EB] bg-clip-text text-transparent">
                    Build Your Future <br /> with <span className="text-[#2563EB]">Sri & Co.</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We are looking for passionate individuals to join our internship programs and grow alongside industry experts.
                </p>
            </section>

            {/* --- Video Section --- */}
            <section className="max-w-5xl mx-auto px-6 mb-24 transition-all duration-700 animate-on-scroll opacity-0 translate-y-10">
                <div className="aspect-video w-full bg-white/50 backdrop-blur-sm rounded-[32px] border border-white/80 shadow-2xl flex items-center justify-center overflow-hidden group">
                    <div className="text-gray-400 group-hover:scale-110 transition-transform duration-500">
                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                    {/* Replace div content with <video> tag when ready */}
                </div>
            </section>

            {/* --- Internships Section --- */}
            <section className="max-w-6xl mx-auto px-6 pb-32">
                <h2 className="text-3xl font-bold text-center mb-16">Open Opportunities</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    {internshipOpenings.map((job) => (
                        <div
                            key={job.id}
                            className={`bg-white/80 backdrop-blur-md p-8 rounded-[32px] 
                                        flex flex-col items-center 
                                        border-b-0 border-transparent /* Start with no border */
                                        transition-all duration-500 ease-in-out /* Smooth transition for everything */
                                        animate-on-scroll opacity-0 translate-y-10 
                                        ${job.hoverStyles} /* Apply the hover styles from the data */
                                        hover:border-b-8 /* Make the border appear on hover */
                                        hover:-translate-y-2 /* Optional: card lifts up slightly when hovered */
                                       `}
                        >
                            {/* Image Section */}
                            <div className="rounded-2xl overflow-hidden mb-8 h-48 w-full shadow-sm">
                                <img
                                    src={job.image}
                                    alt={job.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            {/* Job Title */}
                            <h3 className="text-2xl font-bold mb-3 text-center">{job.title}</h3>
                            {/* The Intro Text */}
                            <p className="text-sm text-gray-700 mb-6 text-center leading-relaxed italic px-2">
                                "{job.intro}"
                            </p>

                            {/* The Bullet Points */}
                            <ul className="text-left w-full space-y-3 mb-8 px-2">
                                {job.bullets.map((bullet, index) => (
                                    <li key={index} className="flex items-start text-sm text-gray-600">
                                        {/* Custom Arrow Icon based on brand color */}
                                        <span className={`mr-2 font-bold ${job.bulletColor}`}>→</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* Apply Button */}
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

            {/* --- Partners Section --- */}
            {/* <section className="bg-white/40 py-20 backdrop-blur-sm border-t border-white/50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">Trusted By Industry Leaders</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <img className="h-8 md:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1280px-Bosch-logo.svg.png" alt="Bosch" />
                        <img className="h-8 md:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Qualcomm_logo.svg/1200px-Qualcomm_logo.svg.png" alt="Qualcomm" />
                        <img className="h-8 md:h-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Honeywell_logo.svg/2560px-Honeywell_logo.svg.png" alt="Honeywell" />
                    </div>
                </div>
            </section>*/}
        </div>
    );
};

export default Careers;