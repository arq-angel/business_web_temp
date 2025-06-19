import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {useState, useEffect} from "react";
import {useAnimateOnScroll} from "@/hooks/useAnimateOnScroll.ts";

const testimonials = [
    {
        id: 1,
        name: "Sarah L.",
        feedback:
            "Incredible service! My house has never looked better. They’re punctual, polite, and thorough.",
    },
    {
        id: 2,
        name: "James R.",
        feedback:
            "Very professional team. They cleaned our office space perfectly—highly recommend!",
    },
    {
        id: 3,
        name: "Emily T.",
        feedback:
            "I’m so glad I found this cleaning service. Always on time and the results are amazing!",
    },
    {
        id: 4,
        name: "Michael B.",
        feedback:
            "Outstanding attention to detail and friendly staff. My home feels spotless every time!",
    },
    {
        id: 5,
        name: "Linda S.",
        feedback:
            "Reliable and efficient service. I appreciate their eco-friendly cleaning products and professionalism.",
    },

];

const Testimonials = () => {
    const { ref, isVisible } = useAnimateOnScroll();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        slides: {perView: 1, spacing: 15},
    });

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 3000); // change every 3 seconds
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section
            ref={ref}
            id="testimonials"
            className="py-16 px-6 text-center bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300"
        >
            <div
                className={`max-w-3xl mx-auto transition-opacity duration-700 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                }`}
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">What Our Clients Say</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10">
                    Real feedback from clients we’ve worked with.
                </p>

                <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial?.id}
                            className="keen-slider__slide bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 text-left transition-colors duration-300"
                        >
                            <p className="text-lg mb-4 italic text-gray-700 dark:text-gray-300 leading-relaxed">
                                “{testimonial?.feedback}”
                            </p>
                            <h4 className="font-semibold text-gray-900 dark:text-white">— {testimonial?.name}</h4>
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === idx
                                    ? 'bg-blue-600 dark:bg-blue-400'
                                    : 'bg-blue-300 dark:bg-blue-600/40'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                            type="button"
                        />
                    ))}
                </div>

            </div>
        </section>


    );
};

export default Testimonials;
