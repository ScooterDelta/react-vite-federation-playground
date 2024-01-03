import { useState } from 'react';

export type ButtonProps = {
  accent?: 'primary' | 'neutral' | 'secondary' | 'accent' | 'ghost' | 'link';
};

export const Button = ({ accent = 'primary' }: ButtonProps) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className={`btn btn-${accent}`}
        onClick={() => setState(s => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
