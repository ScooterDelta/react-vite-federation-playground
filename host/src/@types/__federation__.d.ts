declare module '__federation__' {
  const __federation_method_getRemote: (
    remoteName: string,
    componentName: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => any;
  const __federation_method_setRemote: (
    remoteName: string,
    remoteConfig: {
      url: string;
      format: 'esm' | 'systemjs' | 'var';
      from?: 'vite' | 'webpack';
    }
  ) => void;
}
