import { useState } from 'react';

export type CounterButtonProps = {
  title: string;
  className?: string | undefined;
};

export const CounterButton = ({
  title,
  className = 'mfe2-btn mfe2-btn-primary',
}: CounterButtonProps) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className={className}
        onClick={() => setState(s => s + 1)}>
        {title}: {state}
      </button>
    </div>
  );
};

export default CounterButton;
