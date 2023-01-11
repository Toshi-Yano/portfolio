import { useState } from 'react';

export const useDisplayArray = <T>(targetArray: T[], unit: number): [T[], () => void] => {
  const [displayArray, setDisplayArray] = useState(targetArray.slice(0, unit));

  const addDisplayArray = () => {
    const newUnit = displayArray.length + unit;
    setDisplayArray(targetArray.slice(0, newUnit));
  };

  return [displayArray, addDisplayArray];
};
