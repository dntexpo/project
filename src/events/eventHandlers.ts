import { getTodayList, getEventInput } from "../dom/todayList";

type Event = {
  id: number;
  text: string;
};

export function setupEventInput() {
  const todayList = getTodayList();
  const eventInput = getEventInput();

  const LOCAL_STORAGE_KEY = "events";

  const getStoredEvents = (): Event[] => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const saveEventsToStorage = (events: Event[]) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events));
  };

  const deleteEvent = (id: number, el: HTMLElement) => {
    if (!confirm("Are you sure?")) return;

    const events = getStoredEvents().filter((event) => event.id !== id);

    saveEventsToStorage(events);

    el.remove();
  };

  const renderEvent = ({ id, text }: Event) => {
    const event = document.createElement("span");

    event.textContent = text;

    event.title = "Click to delete";

    event.addEventListener("click", () => {
      deleteEvent(id, event);
    });

    todayList.insertBefore(event, eventInput);
  };

  const renderAllEvents = () => {
    const fragment = document.createDocumentFragment();
    const events = getStoredEvents();

    for (const { id, text } of events) {
      const event = document.createElement("span");

      event.textContent = text;

      event.title = "Click to delete";

      event.addEventListener("click", () => {
        deleteEvent(id, event);
      });

      fragment.appendChild(event);
    }

    todayList.insertBefore(fragment, eventInput);
  };

  const addEvent = () => {
    const text = eventInput.value.trim();

    if (!text) return;

    const id = Math.max(...getStoredEvents().map((event) => event.id)) + 1;

    const newEvent = { id, text };

    renderEvent(newEvent);

    const events = getStoredEvents();

    events.push(newEvent);

    saveEventsToStorage(events);

    eventInput.value = "";
  };

  eventInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addEvent();
  });

  renderAllEvents();
}
