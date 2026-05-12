import { useEffect } from "react";

const BASE = "Bark & Brawl";

export function usePageTitle(segment) {
    useEffect(() => {
        const prev = document.title;
        document.title = segment ? `${segment} · ${BASE}` : BASE;
        return () => {
            document.title = prev;
        };
    }, [segment]);
}
