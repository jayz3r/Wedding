import React, { useState, useEffect, useRef } from "react";

const RevealText = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(textRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const handleTouchStart = () => {
    console.log('Touch event detected!');
  };

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <span ref={textRef} className={`reveal-text ${isVisible ? 'visible' : ''}`}>
      {children}
    </span>
  );
};

const Text = ({ text, minitext, names }) => {
  return (
    <div className="text-center p-8 flex flex-col items-center mb-8 text">
      <RevealText>
        <h2 className="text-3xl font-bold mb-4 width">{text}</h2>
      </RevealText>
      <div>
        <RevealText>
          <h4 className="text-base mb-2">{minitext}</h4>
        </RevealText>
        <RevealText>
          <h2 className="text-yellow-600 text-lg font-semibold">{names}</h2>
        </RevealText>
      </div>
    </div>
  );
};

export default Text;
