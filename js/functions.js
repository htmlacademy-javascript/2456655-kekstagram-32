const str = 'Первая строка в коде';
console.log(str.length);

const findStringLength = function(str, 20) {
  if (str.length <= 20) {
    return true;
  }
}

const str = 'Первая строка в коде';
const findStringLength = (str, 20) => {
  return str <= 20;
}

const str = 'Первая строка в коде';
const findStringLength = function(str, 18) {
  if (str.length === 18) {
    return true;
  }
}

const str = 'Первая строка в коде';
const findStringLength = function(str, 10) {
  if (str.length >= 10) {
    return false;
  }
}
