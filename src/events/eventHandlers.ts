import { getTodayList, getEventInput } from "../dom/todayList";

export function setupEventInput() {
  const todayList = getTodayList();
  const eventInput = getEventInput();

  const addEvent = () => {
    const newEvent = document.createElement("span");
    newEvent.textContent = eventInput.value;
    todayList.insertBefore(newEvent, eventInput);
  };

  eventInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addEvent();
  });
}
