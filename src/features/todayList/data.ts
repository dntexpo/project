export type Event = {
	id: number;
  text: string;
};

const LOCAL_STORAGE_KEY = "events";

export const getStoredEvents = (): Event[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveEventsToStorage = (events: Event[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
};
