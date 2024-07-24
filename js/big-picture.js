const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#body').textContent.querySelector('.social__comment');

const createComment = ({ avatar, name, message }) => {
    const comment = commentElement.cloneNode(true);

    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__picture').textContent = message;

    return comment;
};

const renderComments = (comments) => {
    commentListElement.innerHTML = '';

    const fragment = document.createDocumentFragment ();
    comments.forEach((item) => {
        const comment = createComment(item);
        fragment.append(comment);
    });

    commentListElement.append(fragment);
};

const hideBigPicture = () => {
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentKeydown);
};


