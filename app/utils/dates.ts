export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function getMonday(date: Date) {
  // getDay() returns 0 for sunday, we want 0 for monday
  const dayIndex = (date.getDay() + 6) % 7;
  const monday = addDays(date, -dayIndex);
  monday.setHours(0, 0, 0, 0);
  return monday;
}

export function toApiDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

export function formatDayMonth(date: Date) {
  return date
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" })
    .replace("/", ".");
}

export function formatShortDate(date: Date) {
  return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long" });
}