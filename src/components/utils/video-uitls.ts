import { getDiffBetweenDates } from './date-utils';

export function getTextTimeSincePublished(date: Date) {
  const difference = getDiffBetweenDates(date, new Date());
  let sinceText = 'Hace';

  if (difference.years() > 0) {
    sinceText +=
      difference.years() > 1
        ? ` ${difference.years()} años`
        : ` ${difference.years()} año`;
    return sinceText;
  } else if (difference.months() > 0) {
    sinceText +=
      difference.months() > 1
        ? ` ${difference.months()} meses`
        : ` ${difference.months()} mes`;
    return sinceText;
  } else if (difference.days() > 0) {
    sinceText +=
      difference.days() > 1
        ? ` ${difference.days()} días`
        : ` ${difference.days()} día`;
    return sinceText;
  } else if (difference.hours() > 0) {
    sinceText +=
      difference.hours() > 1
        ? ` ${difference.hours()} horas`
        : ` ${difference.hours()} hora`;
    return sinceText;
  } else if (difference.minutes() > 0) {
    sinceText +=
      difference.minutes() > 1
        ? ` ${difference.minutes()} minutos`
        : ` ${difference.minutes()} minuto`;
    return sinceText;
  }

  return sinceText + ' un momento';
}
