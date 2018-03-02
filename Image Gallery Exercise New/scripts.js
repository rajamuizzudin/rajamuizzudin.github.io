const closeButton = document.querySelector(".lightbox-close");

const lightbox = document.querySelector(".lightbox");

closeButton.onclick = function(event) {
    event.preventDefault();
    lightbox.classList.add("hidden");
}

const galleryItems = document.querySelectorAll(".gallery-items");

for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    item.onclick = function() {
        lightbox.classList.remove("hidden");

        const elementClickedOn = event.target;
        const galleryItemParent = elementClickedOn.parentElement;
        const lightboxImage = document.querySelector(".lightbox-image");
        lightboxImage.innerHTML = galleryItemParent.innerHTML;
    }
}