import { useEffect, useRef } from "react";

type EventTargetElement = Window | Document | HTMLElement | null;

export default function useEventListener<K extends keyof WindowEventMap>(
	eventType: K,
	callback: (event: WindowEventMap[K]) => void,
	element: EventTargetElement = window
): void {
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		if (!element) return;
		const handler = (event: any) => callbackRef.current(event);
		element.addEventListener(eventType, handler);

		return () => element.removeEventListener(eventType, handler);
	}, [eventType, element]);
}
