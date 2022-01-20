import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

function createGalleryCards(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
        </a>
        `;
        }).join('');
       
}

galleryContainer.addEventListener('click', onClickPreviewCard);


function onClickPreviewCard(event) {
    event.preventDefault();
    window.addEventListener('keydown', onEscPress);
    const classGalleryLink = event.target.classList.contains('gallery__image');
    if (!classGalleryLink) {
        return;
    }

    function onCloseModal() {
        window.removeEventListener('keydown', onEscPress);
        
    }

    function onEscPress(event) {
        console.log(event.code)
        if (event.code === 'Escape') {
            return onCloseModal();
        }
    }
  }

const lightbox = new SimpleLightbox('.gallery a', {});
    
  