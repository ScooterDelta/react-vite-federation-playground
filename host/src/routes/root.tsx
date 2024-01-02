export const Root = () => {
  return (
    <div>
      <h2>Host Application Root</h2>
      <p>
        Content on the host is rendered by the host container, and will not be
        visible on the MFE Client Applications unless loaded by the host
      </p>
      <br />
      <ul>
        <li>
          <a href="/mfe-one">MFE One</a>
        </li>
        <li>
          <a href="/mfe-two">MFE Two</a>
        </li>
      </ul>
    </div>
  );
};
