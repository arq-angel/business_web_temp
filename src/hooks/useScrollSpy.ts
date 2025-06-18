import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((entry) => entry.isIntersecting);
                if (visible.length > 0) {
                    // sort top-most visible first
                    const topSection = visible.sort(
                        (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
                    )[0];
                    setActiveId(topSection.target.id);
                }
            },
            {
                rootMargin: `-${offset}px 0px -60% 0px`,
                threshold: 0.1,
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [sectionIds, offset]);

    return activeId;
}
