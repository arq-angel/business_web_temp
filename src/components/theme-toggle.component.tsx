import {Sun, Moon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTheme} from "@/components/theme-provider.tsx";

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400"/>
            ) : (
                <Moon className="h-5 w-5 text-gray-300"/>
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
};

export default ThemeToggle;