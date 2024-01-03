import { useState } from 'react';

export type CounterButtonProps = {
  accent?: 'primary' | 'secondary';
};

export const CounterButton = ({ accent = 'primary' }: CounterButtonProps) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className={`btn btn-${accent}`}
        onClick={() => setState(s => s + 1)}>
        Click me ({accent}): {state}
      </button>
    </div>
  );
};

export default CounterButton;
