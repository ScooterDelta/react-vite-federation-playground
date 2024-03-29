import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import path from 'path';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { DummyRoot } from '../test-utils/dummy-root';
import { buildApplicationRoutes } from './build-application-routes';

describe('use-application-route maps to react router lazy initializers', () => {
  test('should lazy initialize component', async () => {
    const router = createMemoryRouter(
      buildApplicationRoutes(
        [
          {
            path: '/',
            element: <DummyRoot />,
            children: [{ path: 'dummy', lazyMfe: 'dummy-component' }],
          },
        ],
        path.join(__dirname, '../test-utils')
      ),
      { initialEntries: ['/dummy'] }
    );

    render(<RouterProvider router={router} />);

    await waitFor(() =>
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        'Hello World'
      )
    );
  });
});
