import {useState} from "react";
import {useAnimateOnScroll} from "@/hooks/useAnimateOnScroll.ts";

const faqs = [
    {
        id: "1",
        question: "Do you bring your own cleaning supplies?",
        answer:
            "Yes, we bring all the necessary equipment and eco-friendly cleaning products. If you have a preference, just let us know.",
    },
    {
        id: "2",
        question: "How do I book a cleaning service?",
        answer:
            "You can contact us via the form below, call us directly, or send us an email. We'll confirm your booking quickly.",
    },
    {
        id: "3",
        question: "Are your cleaners insured?",
        answer:
            "Absolutely. All our team members are fully insured and professionally trained for your peace of mind.",
    },
    {
        id: "4",
        question: "What areas do you serve?",
        answer:
            "We provide cleaning services throughout the greater metropolitan area. Contact us to check availability in your location.",
    },
    {
        id: "5",
        question: "Can I reschedule or cancel my appointment?",
        answer:
            "Yes, you can reschedule or cancel up to 24 hours before your scheduled cleaning without any charges.",
    },
    {
        id: "6",
        question: "Do you offer deep cleaning services?",
        answer:
            "Yes, we offer specialized deep cleaning services for homes and offices. Please contact us for pricing and availability.",
    },
    {
        id: "7",
        question: "How do you ensure quality control?",
        answer:
            "We perform regular training for our staff and conduct quality checks after each service to ensure you’re satisfied.",
    },
    {
        id: "8",
        question: "What payment methods do you accept?",
        answer:
            "We accept cash, credit/debit cards, and digital payments like PayPal and Apple Pay for your convenience.",
    },
    {
        id: "9",
        question: "Do you offer eco-friendly cleaning options?",
        answer:
            "Yes, we use eco-friendly and non-toxic cleaning products upon request to protect your health and the environment.",
    },

];

const Faq = () => {
    const {ref, isVisible} = useAnimateOnScroll();

    const [activeId, setActiveId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setActiveId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            ref={ref}
            id="faq"
            className="py-16 px-6 bg-blue-50 dark:bg-gray-900 transition-colors duration-300"
        >
            <div
                className={`max-w-3xl mx-auto transition-opacity duration-700 ${
                    isVisible ? "animate-fade-in" : "invisible"
                }`}
                style={{willChange: "opacity, transform"}}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 dark:text-white mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <button
                            key={faq.id}
                            onClick={() => toggle(faq.id)}
                            className="w-full text-left bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer focus:outline-none"
                            type="button"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-blue-800 dark:text-white">
                                    {faq.question}
                                </h3>
                                <span className="text-blue-600 dark:text-blue-400 text-xl">
                                    {activeId === faq.id ? "−" : "+"}
                                </span>
                            </div>
                            {activeId === faq.id && (
                                <p className="text-gray-700 dark:text-gray-300 mt-3 transition-all duration-300">
                                    {faq.answer}
                                </p>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
