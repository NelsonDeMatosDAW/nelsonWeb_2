'use client';
import { useEffect, useRef } from 'react';
// import styles from './Cursor.module.css'; // Optional, for custom styling

export default function CustomCursor() {
    // Create a ref for the cursor element
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        // Mousemove event to follow cursor position
        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.top = `${e.pageY - 70}px`;
                cursor.style.left = `${e.pageX - 70}px`;
            }
        };

        // Click event to add expand animation
        const handleClick = () => {
            if (cursor) {
                cursor.classList.add("expand");
                setTimeout(() => {
                    cursor.classList.remove("expand");
                }, 500);
            }
        };

        // Attach event listeners
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("click", handleClick);

        // Clean up event listeners on component unmount
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={cursorRef} className="cursor"></div>
    );
}