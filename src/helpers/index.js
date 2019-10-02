import moment from 'moment';

export const handleDate = date => {
  const current_date = moment();
  const post_date = moment(date, "YYYY-MM-DD HH:mm:ss");
  const days = current_date.diff(post_date, "days");
  const hours = current_date.diff(post_date, "hours");
  const minutes = current_date.diff(post_date, "minutes");
  const seconds = current_date.diff(post_date, "seconds");
  let date_string = "Hace ";
  date_string += days
    ? `${days} días`
    : hours
    ? `${hours} horas`
    : minutes
    ? `${minutes} minutos`
    : `${seconds} segundos`;
  return date_string;
};
