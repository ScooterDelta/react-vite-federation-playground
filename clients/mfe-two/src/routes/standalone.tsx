import { Link } from 'react-router-dom';

export const Standalone = () => {
  return (
    <>
      This is the landing page of the standalone application, the app is
      available on{' '}
      <Link className="mfe2-link mfe2-link-primary" to="/mfe-two">
        /mfe-two
      </Link>
    </>
  );
};
