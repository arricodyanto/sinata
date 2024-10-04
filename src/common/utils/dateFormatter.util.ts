import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import id from 'dayjs/locale/id';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale(id);
dayjs.extend(localizedFormat);

export function dateFormatter(inputDate: any) {
  const date = dayjs(inputDate);
  const formattedDate = date.format('DD/MM/YYYY');
  return formattedDate;
}

export function dateTimeFormatter(inputDate: Date) {
  const date = dayjs(inputDate);
  const formattedDate = date.format('DD/MM/YYYY HH:mm');
  return formattedDate;
}

export function dateOnlyFormatter(inputDate: Date) {
  const date = dayjs(inputDate);
  const formattedDate = date.format('DD/MM/YYYY');
  return formattedDate;
}

export function oneDigitdateFormatter(inputDate: Date) {
  const date = dayjs(inputDate);
  const formattedDate = date.format('D/M/YYYY');
  return formattedDate;
}

export function timeOnlyFormatter(timeString: string): string {
  const time = dayjs(timeString, 'HH:mm:ss');
  const formattedTime = time.format('HH:mm');
  return formattedTime;
}

export function timeFormatter(inputDate: Date) {
  const timeString = dayjs(inputDate);
  const hours = timeString.format('HH');
  const minutes = timeString.format('mm');
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}

export function timeStrictFormatter(inputTime: any) {
  //only time
  const timeString = dayjs(inputTime, 'HH:mm');
  const formattedTime = timeString.format('HH:mm');
  return formattedTime;
}

export function dateStringFormatter(inputDate: Date) {
  const date = dayjs(inputDate);
  const formattedDate = date.format('dddd, D MMMM YYYY');
  return formattedDate;
}

export function dateISOFormatter(inputDate: Date) {
  const convertedDate = inputDate.toISOString();
  const zonedDate = dayjs(convertedDate).format('YYYY/MM/DD HH:mm:ss');
  return zonedDate;
}
export function timeISOFormatter(inputDate: Date) {
  const convertedDate = inputDate.toISOString();
  const zonedTime = dayjs(convertedDate).format('HH:mm');
  return zonedTime;
}
