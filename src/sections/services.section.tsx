import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

const services = [
    {
        title: "Residential Cleaning",
        description: "Thorough cleaning for houses, apartments, and living spaces.",
    },
    {
        title: "Commercial Cleaning",
        description: "Reliable office and commercial space cleaning services.",
    },
    {
        title: "Move In / Move Out",
        description: "Deep cleaning to make moving stress-free and spotless.",
    },
    {
        title: "Carpet & Upholstery",
        description: "Special care for carpets, rugs, and furniture fabric.",
    },
];

const Services = () => {
    const { ref, isVisible } = useAnimateOnScroll();

    return (
        <section
            ref={ref}
            id="services"
            className="bg-blue-50 dark:bg-gray-900 py-16 px-6 transition-colors duration-300"
        >
            <div
                className={`max-w-5xl mx-auto text-center transition-opacity duration-700 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                }`}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 dark:text-white mb-10">
                    Our Services
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-700 transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Services;