import { RouteInitializer } from '@react-playground/federation';
import {
  __federation_method_getRemote,
  __federation_method_setRemote,
} from '__federation__';

export const routeInitializerModuleFederation =
  (remoteEntryUrl: string): RouteInitializer =>
  (importPath, microApplicationPrefix) =>
  async () => {
    __federation_method_setRemote(microApplicationPrefix!, {
      url: remoteEntryUrl,
      format: 'esm',
      from: 'vite',
    });
    const module = await __federation_method_getRemote(
      microApplicationPrefix!,
      `./${importPath}`
    );
    return { Component: module.default };
  };
