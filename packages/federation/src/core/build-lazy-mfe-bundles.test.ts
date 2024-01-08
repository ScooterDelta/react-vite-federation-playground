import { ApplicationRoutes } from '../types';
import { buildLazyMfeBundles } from './build-lazy-mfe-bundles';

describe('build-lazy-mfe-bundles maps to vite config exports list', () => {
  test('should build list of initialized components', async () => {
    const routes: ApplicationRoutes[] = [
      {
        path: '/mfe-one',
        children: [
          {
            path: '',
            lazyMfe: 'routes/landing-page',
          },
          {
            path: 'buttons',
            lazyMfe: 'routes/buttons',
          },
          {
            path: 'chat',
            lazyMfe: 'routes/chat',
          },
          {
            path: 'forms',
            children: [
              { path: '', lazyMfe: 'routes/forms/first' },
              { path: 'first', lazyMfe: 'routes/forms/first' },
              { path: 'second', lazyMfe: 'routes/forms/second' },
            ],
          },
        ],
      },
    ];
    const mappedRoutes = buildLazyMfeBundles('src', routes);

    expect(mappedRoutes).toEqual({
      './routes/landing-page': './src/routes/landing-page',
      './routes/buttons': './src/routes/buttons',
      './routes/chat': './src/routes/chat',
      './routes/forms/first': './src/routes/forms/first',
      './routes/forms/second': './src/routes/forms/second',
    });
  });
});
