import { useState, useEffect } from "react";
import Frontend from "./charts/Frontend";
import Backend from "./charts/Backend";
import Commu from "./charts/Commu";

type CardContent = React.ReactNode;

interface Card {
    id: string;
    content: CardContent;
}

interface CardStackProps {
    registerDispatcher?: (chartType: 'frontend' | 'backend' | 'commu', dispatcher: (action: any) => void) => void;
    onActiveCardChange?: (cardId: string) => void;
}

const createInitialCards = (
    registerDispatcher?: (chartType: 'frontend' | 'backend' | 'commu', dispatcher: (action: any) => void) => void
): Card[] => [
    { id: "a", content: <Frontend chartType="frontend" registerDispatcher={registerDispatcher} />},
    { id: "b", content: <Backend chartType="backend" registerDispatcher={registerDispatcher} /> },
    { id: "c", content: <Commu chartType="commu" registerDispatcher={registerDispatcher} />},
];

const stackStyles = [
    { opacity: 1, transform: "translateY(0)", zIndex: 3, pointerEvents: "auto" as const },
    { opacity: 1, transform: "translateY(.1rem) translateX(.17rem)", zIndex: 2, pointerEvents: "none" as const},
    { opacity: 1, transform: "translateY(.2rem) translateX(.35rem)", zIndex: 1, pointerEvents: "none" as const},
];

const dismissStyle = {
    transform: "translateY(-.24rem) scale(0.97)",
    opacity: 0,
    zIndex: 4,
    pointerEvents: "none" as const,
};

export default function CardStack({ registerDispatcher, onActiveCardChange }: CardStackProps) {
    const [cards, setCards] = useState(() => createInitialCards(registerDispatcher));
    const [dismissing, setDismissing] = useState(false);

    const handleClick = () => {
        if (dismissing) return;
        setDismissing(true);
    };

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (!dismissing) return;
        if (e.propertyName !== "transform") return;

        setCards((prev) => {
            const newCards = [...prev.slice(1), prev[0]];
            return newCards;
        });
        setDismissing(false);
    };

    // Notify parent when active card changes
    useEffect(() => {
        if (onActiveCardChange && cards.length > 0) {
            onActiveCardChange(cards[0].id);
        }
    }, [cards, onActiveCardChange]);

    const getCardStyle = (i: number) => {
        if (!dismissing) return stackStyles[i];

        if (i === 0) return dismissStyle;
        if (i === 1) return { ...stackStyles[0] };
        if (i === 2) return { ...stackStyles[1]};

        return stackStyles[i];
    };

    return (
        <div className="cards-stack">
            {cards.map((card, i) => (
                <div
                    key={card.id}
                    className="card"
                    onClick={i === 0 ? handleClick : undefined}
                    onTransitionEnd={i === 0 ? handleTransitionEnd : undefined}
                    style={{
                        cursor: i === 0 ? "pointer" : "default",
                        ...getCardStyle(i),
                    }}
                >
                    {card.content}
                </div>
            ))}
        </div>
    );
}
