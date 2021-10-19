import { ClickCounterButton } from '@/components/ClickCounterButton';
import React, { useState } from 'react';

type PropsType = {
  start?: number;
};

const ClickCounter: React.FC<PropsType> = (props) => {
  const [count, setCount] = useState(props.start || 0);

  const increment = () => {
    setCount(count + 1);
  };

  return <ClickCounterButton increment={increment}>{count}</ClickCounterButton>;
};

export default ClickCounter;
