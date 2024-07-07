import { Calendar as TCalendar } from "../api/calendar/Calendar";

export const CALENDAR_TITLE_FIELD = "id";

export const CalendarTitle = (record: TCalendar): string => {
  return record.id?.toString() || String(record.id);
};
