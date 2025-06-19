import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll.ts";

const About = () => {
    const { ref, isVisible } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="about"
            className="bg-white dark:bg-gray-900 py-16 px-6 text-center transition-colors duration-300"
        >
            <div
                className={`max-w-3xl mx-auto transition-opacity duration-700 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                }`}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 dark:text-white mb-4">
                    About Us
                </h2>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    We’re a local cleaning business committed to providing top-quality service with a
                    personal touch. Whether it’s your home, office, or a one-time job, we treat every
                    space with care and attention to detail.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
                    With years of experience and a team of trusted professionals, we’re here to help
                    you enjoy a cleaner, healthier environment—stress-free.
                </p>
            </div>
        </section>
    );
};

export default About;
