import { RouteInitializer } from '@react-playground/federation';

export const routeInitializerModuleFederation =
  (remoteEntryUrl: string): RouteInitializer =>
  (importPath, microApplicationPrefix) =>
  async () => {
    const federation = await import('__federation__');
    federation.__federation_method_setRemote(microApplicationPrefix!, {
      url: remoteEntryUrl,
      format: 'esm',
      from: 'vite',
    });
    const module = await federation.__federation_method_getRemote(
      microApplicationPrefix!,
      `./${importPath}`
    );
    return { Component: module.default };
  };
