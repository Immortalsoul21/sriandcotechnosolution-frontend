import { useEffect, useState } from "react";

// Images
import MOQ from "../assets/MOQ.png";
import Pricing from "../assets/Pricing.png";
import Quick from "../assets/Quick.png";
import Import from "../assets/Import .png";
import Independent from "../assets/Independent Distribution.png";
import Aracion from "../assets/aracion.png";
import Entuple from "../assets/entuple.png";
import Evonik from "../assets/evonik.png";
import Fairview from "../assets/fairview-microwave.png";
import Pasternack from "../assets/pasternack.png";
import TE from "../assets/te.png";
import USMicrowave from "../assets/us-microwave.png";
import Vistan from "../assets/vistan-nextgen.png";
import YIC from "../assets/yic.png";

const images = [Quick, Import, MOQ, Pricing, Independent];

const oems = [
    Aracion,
    Entuple,
    Evonik,
    Fairview,
    Pasternack,
    TE,
    USMicrowave,
    Vistan,
    YIC,
];

export default function Service() {
    const [current, setCurrent] = useState(0);

    /* ---------- Controls ---------- */
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    /* ---------- Auto Rotate ---------- */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const getImage = (offset) => {
        return images[(current + offset + images.length) % images.length];
    };

    return (
        <section className="bg-gray-100 pb-[250px]">

            {/* Spacer */}
            <div className="w-full flex justify-center bg-white">
                <div className="w-[1728px] h-[20px]" />
            </div>

            {/* Hero */}
            <div
                className="flex justify-center"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(56,60,148,0.3), rgba(123,134,140,0.1))",
                }}
            >
                <div className="w-[1728px] h-[1150px] flex flex-col items-center relative">

                    <div className="h-[80px]" />

                    {/* Title */}
                    <div className="text-center max-w-4xl px-6 relative z-50">
                        <h1 className="font-inter font-bold text-[77px] leading-[48px] tracking-[-1.2px] text-black mb-8">
                            <span className="text-[#3036AE]">O</span>ur{" "}
                            <span className="text-[#3036AE]">S</span>pecialized{" "}
                            <span className="text-[#3036AE]">S</span>ervices
                        </h1>

                        <p className="text-[18px] text-[#3E0D7D]">
                            Looking to source electronic components with confidence?
                        </p>
                        <p className="text-[18px] text-[#3E0D7D] leading-[15px]">
                            Explore our services designed to support every scale of business.
                        </p>
                    </div>

                    <div className="h-[20px]" />

                    {/* Carousel */}
                    <div className="relative w-[1200px] h-[460px] mt-12">

                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-[-100px] top-1/2 -translate-y-1/2 z-50
              w-12 h-12 rounded-full bg-white/70 backdrop-blur-md
              flex items-center justify-center text-2xl shadow-md hover:bg-white"
                        >
                            ‹
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-[-100px] top-1/2 -translate-y-1/2 z-50
              w-12 h-12 rounded-full bg-white/70 backdrop-blur-md
              flex items-center justify-center text-2xl shadow-md hover:bg-white"
                        >
                            ›
                        </button>

                        {/* Slides */}
                        <div className="relative w-full h-full overflow-hidden">

                            <CarouselFrame
                                img={getImage(-2)}
                                className="-translate-x-[160%] opacity-40 z-10 w-[400px] h-[250px]"
                            />

                            <CarouselFrame
                                img={getImage(-1)}
                                className="-translate-x-[550px] opacity-70 z-40 w-[500px] h-[350px]"
                            />

                            <CarouselFrame
                                img={getImage(0)}
                                className="-translate-x-1/2 z-50 w-[600px] h-[400px]"
                            />

                            <CarouselFrame
                                img={getImage(1)}
                                className="translate-x-[50px] opacity-70 z-40 w-[500px] h-[350px]"
                            />

                            <CarouselFrame
                                img={getImage(2)}
                                className="translate-x-[60%] opacity-40 z-10 w-[400px] h-[250px]"
                            />

                        </div>
                    </div>

                    <p className="mt-[35px] text-[24px] italic text-[#3E0D7D] text-center">
                        Experience the future of component sourcing today.
                    </p>

                </div>
            </div>

            {/* OEM PARTNERS MARQUEE */}
            <div className="bg-white mt-[120px] py-16 overflow-hidden">

                <h2 className="text-center text-[42px] font-bold mb-12">
                    <span className="text-[#3036AE]">O</span>EM Partners
                </h2>

                <div className="relative w-full overflow-hidden">

                    <div className="flex gap-24 animate-oem-scroll w-max hover:[animation-play-state:paused]">

                        {[...oems, ...oems].map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[220px] h-[90px]"
                            >
                                <img
                                    src={logo}
                                    alt="OEM logo"
                                    className="max-h-[70px] max-w-[160px] object-contain scale-125 grayscale hover:grayscale-0 hover:scale-[1.35] transition duration-300"
                                    draggable="false"
                                />
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}

/* ---------- Frame Component ---------- */

function CarouselFrame({ img, className }) {
    return (
        <div
            className={`
        absolute top-1/2 left-1/2
        -translate-y-1/2
        rounded-2xl
        overflow-hidden
        backdrop-blur-md
        bg-[#3E0D7D]/20
        transition-all duration-700 ease-in-out
        ${className}
      `}
        >
            <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
            />
        </div>
    );
}