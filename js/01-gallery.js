import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

function createGalleryCards(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
            />
            </a>
        </div>
        `;
        }).join('');
       
}


