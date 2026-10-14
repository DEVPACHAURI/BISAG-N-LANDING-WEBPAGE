import { useCallback, useEffect, useState } from 'react';

const DEFAULT_SIZE = 16;
const MIN_SIZE = 13;
const MAX_SIZE = 20;
const STEP = 2;

/** Scales the root font size, which also scales every rem-based Tailwind value. */
export default function useFontScale() {
  const [size, setSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    document.documentElement.style.fontSize = `${size}px`;
  }, [size]);

  const larger = useCallback(() => setSize((s) => Math.min(MAX_SIZE, s + STEP)), []);
  const smaller = useCallback(() => setSize((s) => Math.max(MIN_SIZE, s - STEP)), []);
  const reset = useCallback(() => setSize(DEFAULT_SIZE), []);

  return { size, larger, smaller, reset };
}
