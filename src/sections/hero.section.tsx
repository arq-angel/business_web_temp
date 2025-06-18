import {useAnimateOnScroll} from "@/hooks/useAnimateOnScroll.ts";

const Hero = () => {
    const { ref, isVisible } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center bg-blue-50 dark:bg-gray-900 text-center px-6 transition-colors duration-300"
        >
            <div
                className={`relative max-w-2xl transition-opacity duration-700 ${
                    isVisible ? "animate-fade-in opacity-100" : "opacity-0"
                }`}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">
                    Spotless Cleaning, Every Time
                </h1>

                <p className="text-lg md:text-xl text-blue-700 dark:text-gray-300 mb-6 max-w-xl">
                    Professional and reliable cleaning services for homes and businesses.
                </p>

                <button className="hover:cursor-pointer bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-md transition">
                    Get a Free Quote
                </button>
            </div>
        </section>
    );
};


export default Hero;