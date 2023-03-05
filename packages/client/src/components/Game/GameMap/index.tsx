import { useEffect, useRef } from 'react';

export const GameMap = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;

    // if (canvas) {

    // }
  }, []);

  return <canvas ref={ref} />;
};
