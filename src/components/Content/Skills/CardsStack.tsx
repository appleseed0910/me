import { useState } from "react";

const initialCards = [
    { id: "a", content: <div><ul><li>A</li><li>A</li><li>A</li><li>A</li><li>A</li><li>A</li><li>A</li></ul></div> },
    { id: "b", content: <div><ul><li>B</li><li>B</li><li>A</li><li>A</li><li>A</li><li>A</li><li>A</li></ul></div> },
    { id: "c", content: <div><ul><li>C</li><li>C</li><li>A</li><li>A</li><li>A</li><li>A</li><li>A</li></ul></div> },
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

export default function CardStack() {
    const [cards, setCards] = useState(initialCards);
    const [dismissing, setDismissing] = useState(false);

    const handleClick = () => {
        if (dismissing) return;
        setDismissing(true);
    };

    const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
        if (!dismissing) return;
        if (e.propertyName !== "transform") return;

        setCards((prev) => [...prev.slice(1), prev[0]]);
        setDismissing(false);
    };

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
