import moment from 'moment';

function dateToISO(data) {
  if (data) {
    return moment(data).locale('pt-br').format('DD/MM/YYYY');
  }

  return undefined;
}

function dateToISOEUA(data) {
  if (data) {
    let americanData = moment(data).locale('pt-br').format('YYYY-MM-DD');

    return americanData + "T00:00:00";
  }

  return undefined;
}

function euaDatePatternToISO(data) {
  if (data) {
    return moment(data).locale('pt-br').format('YYYY-MM-DD');
  }
  return undefined;
}

export default {
  dateToISO,
  dateToISOEUA,
  euaDatePatternToISO
}