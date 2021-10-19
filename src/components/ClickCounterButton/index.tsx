import React from 'react';

type PropsType = {
  increment: () => void;
  children?: number;
};

export const ClickCounterButton: React.FC<PropsType> = ({ increment, children = 0 }) => (
  <button onClick={increment}>Clicked {children} times!</button>
);
