import * as React from "react";
import {useState} from "react";
import {Menu, X} from "lucide-react";
import {useScrollSpy} from "../hooks/useScrollSpy.ts";
import type {ISection} from "../types/navigation.types.ts";
import {ModeToggle} from "@/components/mode-toggle.tsx";

const sections: ISection[] = [
    {id: "hero", label: "Home"},
    {id: "about", label: "About"},
    {id: "services", label: "Services"},
    {id: "testimonials", label: "Testimonials"},
    {id: "faq", label: "FAQ"},
    {id: "contact", label: "Contact"},
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const activeId = useScrollSpy(sections.map((s) => s.id));

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Brand */}
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    My Business
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6 items-center">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className={`transition font-medium ${
                                    activeId === section.id
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <ModeToggle/>
                    </li>
                </ul>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ModeToggle/>
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? (
                            <X className="h-6 w-6 text-gray-700 dark:text-gray-300"/>
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300"/>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <ul className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 space-y-3 shadow-sm">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                onClick={() => setMenuOpen(false)}
                                className={`block font-medium transition ${
                                    activeId === section.id
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                }`}
                            >
                                {section.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;