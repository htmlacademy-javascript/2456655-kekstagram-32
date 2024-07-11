import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

const ARRAY_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const ARRAY_DESCRIPTIONS = [
  'Наконец-то получилось заснять эту красоту.',
  'Удачный кадр, супер!',
  'Повезло с моделью.',
  'Как красиво!',
  'Дайте координаты локации',
  'Здравствуй, море! Я скучала!',
  'Поделитесь рецептом.',
  'Что-то новенькое, интересно!',
  'Крутое party, отлично провели время.',
  'Самый лучший отдых.'
];

const ARRAY_NAMES = [
  'Маша',
  'Света',
  'Саша',
  'Женя',
  'Лена',
  'Петя',
  'Миша',
  'Сергей',
  'Катя',
  'Лиза',
  'Коля',
  'Даша',
  'Игорь'
];


const getRandomId = createIdGenerator();

const createMessage = () => Array.from(
  {length: getRandomInteger(1, 2)},
  (_, index) => getRandomArrayElement(ARRAY_MESSAGES),
);

const createComment = () => ({
  id: getRandomId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(ARRAY_NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(ARRAY_DESCRIPTIONS),
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: Array.from(
    {length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX)},
    createComment
  ),
});

const getPictures = () => Array.from(
  {length: PICTURE_COUNT},
  (_, index) => createPicture(index + 1),
);


export {getPictures};
