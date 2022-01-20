import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCards = createGalleryCards(galleryItems);
const divBasicLightbox = document.querySelector('.basicLightbox'); 

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
    window.addEventListener('keydown', onEscPress);
    const classGalleryLink = event.target.classList.contains('gallery__image');
    if (!classGalleryLink) {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    
    instance.show();


    function onCloseModal() {
        window.removeEventListener('keydown', onEscPress);
        instance.close();
    }

    function onEscPress(event) {
        console.log(event.code)
        if (event.code === 'Escape') {
            return onCloseModal();
        }
    }
}