import moment from 'moment';

function dateToISO(data) {
  if(data) {
    return moment(data).locale('pt-br').format('DD/MM/YYY');
  }

  return undefined;
}

function dateHourToISO(data) {
  if(data) {
    return moment(data).locale('pt-br').format('DD/MM/YYY HH:mm:ss');
  }

  return undefined;
}

export default {
  dateToISO,
  dateHourToISO
}