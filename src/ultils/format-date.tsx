import { format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(Date.parse(date), 'MM/dd/yyyy');
};

export const formatDateDayAndYear = (date: string) => {
  return format(Date.parse(date), 'dd, yyyy');
};

export const formatDateTime = (date: string) => {
  return format(Date.parse(date), 'HH:mm');
};
