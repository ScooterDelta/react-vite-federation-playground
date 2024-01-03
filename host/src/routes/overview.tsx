import Button from '../components/Button';

export const Overview = () => {
  return (
    <div>
      <h2>Host Application Root</h2>
      <p>
        Content on the host is rendered by the host container, and will not be
        visible on the MFE Client Applications unless loaded by the host
      </p>
      <h3>This is what a `primary` button looks like on Host!</h3>
      <Button></Button>
    </div>
  );
};
