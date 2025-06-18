import "./app.css";
import RootLayout from "@/layout/Layout.component.tsx";
import {Toaster} from "react-hot-toast";
import About from "@/sections/about.section.tsx";
import Testimonials from "@/sections/testimonials.section.tsx";
import Hero from "@/sections/hero.section.tsx";
import Services from "@/sections/services.section.tsx";
import Contact from "@/sections/contact.section.tsx";
import Faq from "@/sections/faq.section.tsx";

function App() {

    return (
        <>
            <Toaster position="top-right"/>
            <RootLayout>
                <Hero/>
                <About/>
                <Services/>
                <Testimonials/>
                <Faq/>
                <Contact/>
            </RootLayout>
        </>
    )
}

export default App
