import React, { useEffect, useState } from 'react';

interface TypewriterProps {
  words: string[];
  period: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, period }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  const tick = () => {
    const i = loopNum % words.length;
    const fullTxt = words[i];

    setText(isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1));

    if (!isDeleting && text === fullTxt) {
      setDelta(period);
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    } else {
      setDelta(isDeleting ? delta / 2 : delta);
    }
  };

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta]);

  return (
    <div className="text-center text-black mt-40 h-10"> 
      <span className="wrap border-r-4 border-black">{text}</span> 
    </div>
  );
};

export default Typewriter;
