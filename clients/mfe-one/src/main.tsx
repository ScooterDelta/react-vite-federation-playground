import { initFederation } from '@softarc/native-federation';

(async () => {
  await initFederation({
    'external/mfe-one': 'http://localhost:5401/remoteEntry.json',
    'external/mfe-two': 'http://localhost:5402/remoteEntry.json',
  });

  await import('./bootstrap');
})();
