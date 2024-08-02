import { renderThumbnails } from './thumbnails.js';
import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const pictures = [];

const onContainerClick = (evt) => {
  const thumbnail = evt.target.closest('[data-thumbnail-id]');
  if (!thumbnail) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +thumbnail.dataset.thumbnailId
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderThumbnails(pictures, container);
  container.addEventListener('click', onContainerClick);
};

export { renderGallery };
