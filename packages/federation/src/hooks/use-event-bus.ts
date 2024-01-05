import { useEffect } from 'react';

type EventDetails<T = string> = Event & {
  detail?: T;
};

export const useEventBus = <T = string>(
  eventType: string,
  callback?: (details: T) => void
) => {
  useEffect(() => {
    const eventCallback = (ev: EventDetails<T>) => callback?.(ev.detail!);

    if (callback) {
      document.addEventListener(eventType, eventCallback);
    }

    return () => {
      if (callback) {
        document.removeEventListener(eventType, eventCallback);
      }
    };
    // Ignoring the Callback function, as we don't want to register new events on re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventType]);

  return (data: T) => {
    const event = new CustomEvent(eventType, { detail: data });
    document.dispatchEvent(event);
  };
};
