import moment from 'moment';

export function getDiffBetweenDates(start: Date, end: Date) {
  const startMoment = moment(start);
  const endMoment = moment(end);

  const difference = endMoment.diff(startMoment);

  return moment.duration(difference);
}
