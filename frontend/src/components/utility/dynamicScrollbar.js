import { useEffect, useRef, useState } from 'react';

// Custom hook for handling scrollbar visibility
/**
 * Custom hook for handling scrollbar visibility based on content overflow.
 * @function useDynamicScrollbar
 * @param {any} content - The content for which scrollbar visibility is checked.
 * @param {React.RefObject} scrollRef - Reference to the scrolling container element.
 * @returns {boolean} - Boolean indicating whether the content has overflow and scrollbar is visible.
 */
const useDynamicScrollbar = (content, scrollRef) => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    if (scrollRef && scrollRef.current && content) {
      // console.log(content);
      const container = scrollRef.current;
  
      /**
       * Checks if the content overflows the container and sets the scrollbar visibility.
       * @function checkOverflow
       * @private
       */
      const checkOverflow = () => {
        if (container.scrollHeight > container.clientHeight) {
          // console.log("has overflow");
          setHasOverflow(true);
      } else {
            // console.log("doesnt has overflow");
          setHasOverflow(false);
        }
      };
  
      checkOverflow();
  
      const observer = new ResizeObserver(checkOverflow);
      observer.observe(container);
  
      return () => {
        observer.disconnect();
      };
    }
  }, [content]);

  return hasOverflow;
};

export default useDynamicScrollbar;
