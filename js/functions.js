const isStringShorter20 = (string, length20) => string.length <= length20;
const isStringLength18 = (string, length18) => string.length === length18;
const isStringLonger10 = (string, length10) => string.length >= length10;

const isPalindrom = (string) => {
  const initialString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = initialString.split('').reverse().join('');

  return initialString === reversedString;
};

void (isStringShorter20, isStringLength18, isStringLonger10, isPalindrom);
