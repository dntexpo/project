import { getTodayList, getEventInput } from "../dom/todayList";

export function setupEventInput() {
  const todayList = getTodayList();
  const eventInput = getEventInput();

  const LOCAL_STORAGE_KEY = "events";

  const getStoredEvents = (): string[] => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveEvent = (value: string) => {
    const events = getStoredEvents();
    events.push(value);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  };

  const renderEvent = (text: string) => {
    const event = document.createElement("span");
    event.textContent = text;
    todayList.insertBefore(event, eventInput);
  };

  const renderAllEvents = () => {
    const fragment = document.createDocumentFragment();
    const events = getStoredEvents();

    for (const text of events) {
      const event = document.createElement("span");
      event.textContent = text;
      fragment.appendChild(event);
    }

    todayList.insertBefore(fragment, eventInput);
  };

  const addEvent = () => {
    const value = eventInput.value.trim();
    if (!value) return;

    renderEvent(value);
    saveEvent(value);
    eventInput.value = "";
  };

  eventInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addEvent();
  });

  renderAllEvents();
}
