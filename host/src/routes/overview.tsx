import Button from '../components/Button';

export const Overview = () => {
  return (
    <article className="prose max-w-none">
      <h1>Host Application Root</h1>
      <p>
        Content on the host is rendered by the host container, and will not be
        visible on the MFE Client Applications unless loaded by the host
      </p>
      <h2>This is what a primary button looks like on Host!</h2>
      <p>
        Playing around with code snippets, for example adding a new Microapp:
      </p>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>
            npm create vite@latest @react-playground/app -- --template react-ts
          </code>
        </pre>
      </div>
      <Button></Button>
    </article>
  );
};
