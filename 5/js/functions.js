function convertToMinutes(time) {
  const [hour, minutes] = time.split(':');
  const minutesInOneHour = 60;

  return hour * minutesInOneHour + parseInt(minutes, 10);
}

function checkMeeting (dayStart, dayEnd, meetingStart, meetingDuration) {
  const dayStartInMinutes = convertToMinutes(dayStart);
  const dayEndInMinutes = convertToMinutes(dayEnd);
  const meetingStartInMinutes = convertToMinutes(meetingStart);

  return meetingStartInMinutes >= dayStartInMinutes && meetingStartInMinutes + meetingDuration <= dayEndInMinutes;
}

/*
  '8:00' - начало рабочего дня / dayStart
  '17:30' - конец рабочего дня / dayEnd
  '14:00' - начало встречи / meetingStart
  90 - продолжительность встречи в минутах / meetingDuration
  */

console.log(checkMeeting('08:00', '17:30', '14:00', 90)); // true
console.log(checkMeeting('8:0', '10:0', '8:0', 120)); // true
console.log(checkMeeting('08:00', '14:30', '14:00', 90)); // false
console.log(checkMeeting('14:00', '17:30', '08:0', 90)); // false
console.log(checkMeeting('8:00', '17:30', '08:00', 900)); // false


/*const isStringShorter20 = (string, length20) => string.length <= length20;
const isStringLength18 = (string, length18) => string.length === length18;
const isStringLonger10 = (string, length10) => string.length >= length10;

const isPalindrom = (string) => {
  const initialString = string.toLowerCase().replaceAll(' ', '');
  const reversedString = initialString.split('').reverse().join('');

  return initialString === reversedString;
};

void (isStringShorter20, isStringLength18, isStringLonger10, isPalindrom); */
