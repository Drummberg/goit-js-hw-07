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
            src= "${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
        </div>
        `;
        }).join('');
       
}

galleryContainer.addEventListener('click', onClickPreviewCard);

function onClickPreviewCard(event) {
    event.preventDefault();
    const classGalleryLink = event.target.classList.contains('gallery__image');
    if (!classGalleryLink) {
        return;
    }
   console.log(event.target.dataset.source);
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show();
}
 
