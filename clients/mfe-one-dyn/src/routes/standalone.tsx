import { Link } from 'react-router-dom';

export const Standalone = () => {
  return (
    <>
      This is the landing page of the standalone application, the app is
      available on{' '}
      <Link className="mfe1d-link mfe1d-link-primary" to="/mfe-one-dyn">
        /mfe-one-dyn
      </Link>
    </>
  );
};

export default Standalone;
