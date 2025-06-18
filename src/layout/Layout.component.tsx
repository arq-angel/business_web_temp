import * as React from "react";
import Navbar from "./Navbar.component.tsx";
import Footer from "./Footer.component.tsx";

interface RootLayoutProps {
    children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;