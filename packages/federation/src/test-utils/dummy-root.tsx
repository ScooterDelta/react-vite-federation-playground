import { Outlet } from 'react-router-dom';

export const DummyRoot = () => {
  return (
    <div>
      <h1>Dummy Title</h1>
      <Outlet />
    </div>
  );
};
