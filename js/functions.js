const findStringLength = (str, maxLength) => str.length <= maxLength;

// Строка короче 20 символов
console.log(findStringLength('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(findStringLength('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(findStringLength('проверяемая строка', 10)); // false
