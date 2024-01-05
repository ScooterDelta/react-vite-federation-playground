import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { useApplicationRoutes } from './use-application-routes';

jest.mock('@remix-run/router', () => ({
  ...jest.requireActual('@remix-run/router'),
  createClientSideRequest: jest.fn(),
}));

describe('use-application-route maps to react router lazy initializers', () => {
  test.skip('should lazy initialize component', () => {
    const router = createMemoryRouter(
      useApplicationRoutes('../test-utils', [
        { path: '/', lazyMfe: 'dummy-component' },
      ]),
      { initialEntries: ['/'] }
    );

    const tree = render(<RouterProvider router={router} />);

    expect(tree.findAllByDisplayValue('Hello World')).toBeInTheDocument();
  });
});
