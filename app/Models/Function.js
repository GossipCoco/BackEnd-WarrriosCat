let toDateTime = (date) => {
    let dt = new Date(date);
    var day = dt.getDate(),
        month = dt.getMonth() + 1,
        year = dt.getFullYear(),
        hours = dt.getHours(),
        minutes = dt.getMinutes(),
        seconds = dt.getSeconds();
    return (year + '-' + String(month).padStart(2, '0') + '-' + String(day).padStart(2, '0') + ' ' + String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + '.000');
  }

const fonctions = {
    toDateTime
}

module.exports = fonctions