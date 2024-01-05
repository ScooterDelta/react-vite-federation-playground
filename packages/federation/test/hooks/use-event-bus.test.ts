import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useEventBus } from '../../src/hooks/use-event-bus';

describe('Testing event bus communication', () => {
  test('Should fire event as expected', () => {
    let event: string | undefined;
    const callback = (callbackEvent: string) => (event = callbackEvent);

    const { result } = renderHook(() => useEventBus('customEvent', callback));

    expect(event).toBeUndefined();
    act(() => {
      result.current('my event');
    });
    expect(event).toEqual('my event');
  });
});
