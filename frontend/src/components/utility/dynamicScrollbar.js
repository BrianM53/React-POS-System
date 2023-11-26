import { useEffect, useRef, useState } from 'react';

// Custom hook for handling scrollbar visibility
const useDynamicScrollbar = (content, scrollRef) => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    if (scrollRef && scrollRef.current && content) {
      // console.log(content);
      const container = scrollRef.current;
  
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
