import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="mfe2-flex mfe2-w-full">
      <div className="mfe2-flex-auto mfe2-container mfe2-overflow-auto mfe2-mx-auto mfe2-px-4 mfe2-pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
