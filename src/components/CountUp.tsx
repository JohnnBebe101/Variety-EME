
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: number;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => { 
    if (isInView) { 
      let s = 0; 
      const end = value; 
      const timer = setInterval(() => { 
        s++; 
        if (s >= 60) { 
          setCount(end); 
          clearInterval(timer); 
        } else { 
          setCount(v => v + (end/60)); 
        } 
      }, 1000/30); 
      return () => clearInterval(timer); 
    } 
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};
