// packages
import { useEffect, useState } from 'react';
import { animate, useMotionValue } from 'framer-motion';

export default function useAnimatedText(text: string) {
    // states
    const animatedCursor = useMotionValue(0);
    const [cursor, setCursor] = useState(0);
    const [prevText, setPrevText] = useState(text);
    const [isSameText, setIsSameText] = useState(true);

    if (prevText !== text) {
        setPrevText(text);

        const isContinueAnimate = text.startsWith(prevText);
        setIsSameText(isContinueAnimate === true);

        if (!isContinueAnimate) {
            setCursor(0);
        }
    }

    // side effects
    useEffect(() => {
        if (!isSameText) {
            animatedCursor.jump(0);
        }

        const controls = animate(animatedCursor, text.length, {
            duration: 1,
            ease: 'linear',
            onUpdate(latest) {
                setCursor(Math.floor(latest));
            }
        });

        return () => controls.stop();
    }, [animatedCursor, isSameText, text]);

    return text.slice(0, cursor);
}
