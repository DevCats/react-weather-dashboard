import { useRef } from 'react'

// TODO:
    // - Test touch events on a mobile device - Chrome dev tools isn't enough
    // - Something to demonstrate to use that this is a scrollable element

const HorizontalScrollWrapper = ({ children, className='' }) => {
    const scrollRef = useRef();

    // Handle mouse events for desktop browsers
    const handleMouseDown = (_event) => {
        // X position at the beginning of mouse movement
        const oldX = _event.pageX;
        let scrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (_event) => {
            // X position at the end of mouse movement
            const newX = _event.pageX;
            // Calculate difference in X position
            const offset = newX - oldX;

            // Calculate the new X position for the element
            scrollRef.current.scrollLeft = scrollLeft - offset;
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    // Handle touch events for mobile devices
    const handleTouchStart = (_event) => {
        const touch = _event.touches[0];
        const oldX = touch.pageX;
        let scrollLeft = scrollRef.current.scrollLeft;

        const handleTouchMove = (_event) => {
            const touch = _event.touches[0];
            const newX = touch.pageX;
            const offset = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft = offset;
        };

        const handleTouchEnd = () => {
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };

        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
    }



    return (
        <>
            <div 
                className={ className } 
                ref={ scrollRef } 
                onMouseDown={ handleMouseDown }
                onTouchStart={ handleTouchStart }
            >
                { children }
            </div>
        </>
    )
}

export default HorizontalScrollWrapper