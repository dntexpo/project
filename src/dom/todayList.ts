export function getTodayList(): HTMLDivElement {
  const el = document.getElementById("todayList");
  if (!el) throw new Error("todayList not found");
  return el as HTMLDivElement;
}

export function getEventInput(): HTMLInputElement {
  const el = document.getElementById("eventInput");
  if (!el) throw new Error("eventInput not found");
  return el as HTMLInputElement;
}
