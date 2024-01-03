import { useState } from 'react';

export const Button = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button
        id="click-btn"
        className="btn btn-secondary"
        onClick={() => setState(s => s + 1)}>
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
