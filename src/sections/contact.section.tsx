import { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formEndpoint = "https://formspree.io/f/xeokzrkn"; // formspree.io api url
        setSubmitting(true);

        const form = new FormData();
        Object.entries(formData).forEach(([key, value]) => form.append(key, value));

        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                body: form,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full max-w-4xl mx-auto py-16 px-6">
            <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
            <p className="text-center mb-10">
                Have a question, idea, or opportunity? Let's get in touch!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={submitting}
                        className="p-3 border rounded-md dark:bg-gray-800 dark:text-white"
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    rows={6}
                    className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white"
                />

                <button
                    type="submit"
                    disabled={submitting}
                    className="hover:cursor-pointer
                    bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition disabled:opacity-50"
                >
                    {submitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
